import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import formidable from 'formidable';
import fs from 'fs';
import FormData from 'form-data';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Error parsing form data:', err);
      return res.status(500).json({ message: 'Error processing form data' });
    }

    const getFieldValue = (fieldValue: string | string[] | undefined): string | undefined => {
      if (Array.isArray(fieldValue)) {
        return fieldValue[0];
      }
      return fieldValue;
    };

    try {
      const strapiApiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL ;
      const strapiToken = process.env.STRAPI_FORM_API_TOKEN;

      if (!strapiToken) {
        console.error('STRAPI_FORM_API_TOKEN is not set');
        return res.status(500).json({ message: 'Server configuration error: Missing API Token' });
      }

      const strapiPayload: { [key: string]: any } = {
        ApplicantFullName: getFieldValue(fields.fullName),
        ApplicantEmail: getFieldValue(fields.email),
        ApplicantPhone: getFieldValue(fields.phoneNumber),
        DateOfBirth: getFieldValue(fields.dateOfBirth),
        GitHubAccount: getFieldValue(fields.githubAccount),
        MindplaxAccount: getFieldValue(fields.mindplaxAccount),
        PromisedHours: getFieldValue(fields.commitmentHours),
        CurrentLocation: getFieldValue(fields.currentLocation),
        Gender: getFieldValue(fields.gender),
        HasTakenOnlineCourses: getFieldValue(fields.onlineCourses) === 'yes',
        EducationLevel: getFieldValue(fields.educationLevel),
        OpportunityReason: getFieldValue(fields.explanation),
        internship: getFieldValue(fields.internshipId)
          ? parseInt(getFieldValue(fields.internshipId) as string, 10)
          : undefined,
      };

      Object.keys(strapiPayload).forEach(key => {
        if (strapiPayload[key] === undefined) {
          delete strapiPayload[key];
        }
      });

      console.log('Data being sent to Strapi:', strapiPayload);
      const formDataForStrapi = new FormData();
      formDataForStrapi.append('data', JSON.stringify(strapiPayload));

      if (files.cv) {
        const cvFile = Array.isArray(files.cv) ? files.cv[0] : files.cv;
        if (cvFile && cvFile.filepath) {
          formDataForStrapi.append('files.cv', fs.createReadStream(cvFile.filepath), { filename: cvFile.originalFilename || 'cv.pdf' });
        } else {
          console.warn('CV file object is invalid or filepath is missing.');
        }
      } else {
        console.warn('CV file not found in submission.');
      }

      const response = await axios.post(
        `${strapiApiUrl}/api/internship-applications`,
        formDataForStrapi,
        {
          headers: {
            Authorization: `Bearer ${strapiToken}`,
          },
        } 
      );

      if (response.status === 200 || response.status === 201) {
        return res.status(200).json({ message: 'Application submitted successfully!', data: response.data });
      } else {
        console.error('Strapi API Error (Status):', response.status);
        console.error('Strapi API Error (Data):', response.data);
        return res.status(response.status).json({ message: 'Failed to submit application to Strapi', details: response.data });
      }
    } catch (error: any) {
      console.error('Full error submitting to Strapi:', error);
      console.error('Error submitting to Strapi (Response Data):', error.response?.data);
      console.error('Error submitting to Strapi (Error Message):', error.message);
      return res.status(500).json({
        message: 'An internal server error occurred while submitting to Strapi.',
        details: error.response?.data?.error?.message || error.message,
      });
    }
  });
}