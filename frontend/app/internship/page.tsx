"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { AiOutlineUpload, AiOutlineCheck } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import NeuralNetwork from "../Components/NeuralNetwork";
import BrainStructure from "../Components/BrainStructure";
import LogoGears from "../Components/LogoGears";
import axios from "axios";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface FormData {
  ApplicantFullName?: string;
  ApplicantEmail?: string;
  ApplicantPhone?: string;
  DateOfBirth?: string;
  Gender?: string;
  CurrentLocation?: string;
  EducationLevel?: string;
  GitHubAccount?: string;
  MindplaxAccount?: string;
  HasTakenOnlineCourses?: string;
  PromisedHours?: string;
  OpportunityReason?: string;
  CV?: File;
  internship?: string;
}

const InternshipForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setValue,
    trigger,
  } = useForm<FormData>();

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 2;

  const onSubmit = async (data: FormData) => {
    if (currentStep < totalSteps) {
      setFormData({ ...formData, ...data });
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
      return;
    }
  
    const combinedData = { ...formData, ...data };
    const strapiApiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
    const strapiToken = "79ca78b2257cc9a815e991d78771ca639e189941e57bc734df95f262f33f04228e0b272ec1a7c12589ac3bc1ecef5bc25c6e70641c6518747b03a4eaa942c628e7f08fc0184cf104f2cc361f4fa7d50d9483810d42fb6fba63c0015d0cc8ba84eeb4c3d5130705904cdefe1fdabf337b5f8037cf5639335b9562e009e1b4c4ef";
  
    try {
      // Validate required fields
      if (!combinedData.ApplicantFullName || !combinedData.ApplicantEmail) {
        alert("Please fill in all required fields (Full Name and Email).");
        return;
      }
  
      // Validate CV is a File object
      if (!(combinedData.CV instanceof File)) {
        alert("Please upload a valid CV file (PDF, DOC, or DOCX).");
        return;
      }
  
      // Step 1: Upload CV to /api/upload
      const formDataForFile = new FormData();
      formDataForFile.append("files", combinedData.CV, combinedData.CV.name);
  
      // Log FormData for debugging
      console.log("Uploading CV to /api/upload...");
      for (const [key, value] of formDataForFile.entries()) {
        console.log(`FormData Entry - ${key}:`, value);
      }
  
      const fileResponse = await axios.post(`${strapiApiUrl}/api/upload`, formDataForFile, {
        headers: {
          Authorization: `Bearer ${strapiToken}`,
        },
      });
  
      if (fileResponse.status !== 200 && fileResponse.status !== 201) {
        throw new Error(fileResponse.data.message || "Failed to upload CV");
      }
  
      // Extract file ID from response
      const fileId = fileResponse.data[0].id;
      console.log("Uploaded CV File ID:", fileId);
  
      // Step 2: Submit application data with CV file ID
      const strapiPayload = {
        data: {
          ApplicantFullName: combinedData.ApplicantFullName,
          ApplicantEmail: combinedData.ApplicantEmail,
          ApplicantPhone: combinedData.ApplicantPhone || "",
          DateOfBirth: combinedData.DateOfBirth || "",
          GitHubAccount: combinedData.GitHubAccount || "",
          MindplaxAccount: combinedData.MindplaxAccount || "",
          PromisedHours: combinedData.PromisedHours || "",
          CurrentLocation: combinedData.CurrentLocation || "",
          Gender: combinedData.Gender || "",
          HasTakenOnlineCourses: combinedData.HasTakenOnlineCourses === "yes",
          EducationLevel: combinedData.EducationLevel || "",
          OpportunityReason: combinedData.OpportunityReason || "",
          CurrentStatus: "Submitted",
          CV: fileId, // Reference the uploaded file ID
          ...(combinedData.internship &&
            !isNaN(parseInt(combinedData.internship, 10)) && {
              internship: parseInt(combinedData.internship, 10),
            }),
        },
      };
  
      // Log payload for debugging
      console.log("Strapi Payload:", JSON.stringify(strapiPayload, null, 2));
  
      const dataResponse = await axios.post(`${strapiApiUrl}/api/internship-applications`, strapiPayload, {
        headers: {
          Authorization: `Bearer ${strapiToken}`,
          "Content-Type": "application/json",
        },
      });
  
      if (dataResponse.status !== 200 && dataResponse.status !== 201) {
        throw new Error(dataResponse.data.message || "Failed to submit application data");
      }
  
      console.log("Application Created:", dataResponse.data);
      setIsSubmitted(true);
    } catch (error: any) {
      console.error("Error submitting form:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });
      alert(`Error: ${error.response?.data?.error?.message || "An error occurred. Please try again."}`);
    }
  };
  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-black">
        <div className="fixed inset-0 z-0 opacity-30">
          <NeuralNetwork />
        </div>
        <div className="fixed inset-0 z-0">
          <BrainStructure />
        </div>
        <div className="fixed inset-0 z-0">
          <LogoGears />
        </div>

        <motion.div
          className="bg-gray-900 rounded-xl shadow-md p-12 max-w-2xl w-full text-center border border-gray-800 relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center text-white mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
          >
            <AiOutlineCheck size={40} />
          </motion.div>

          <motion.h2
            className="text-3xl font-heading font-bold gradient-text mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Application Submitted Successfully!
          </motion.h2>

          <motion.p
            // className="text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Thank you for applying to ou   r internship program. We've received your application and will review it shortly.
          </motion.p>

          <Link href="/careers">
            <motion.button
              className="button-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(254, 142, 3, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Back to Careers
            </motion.button>
          </Link>

          <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 rounded-full bg-orange-500/5 blur-3xl" />
          <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 rounded-full bg-red-500/5 blur-3xl" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 bg-black min-h-screen">
      <div className="fixed inset-0 z-0 opacity-30">
        <NeuralNetwork />
      </div>
      <div className="fixed inset-0 z-0">
        <BrainStructure />
      </div>
      <div className="fixed inset-0 z-0">
        <LogoGears />
      </div>

      <div className="container-custom">
        <motion.div className="max-w-4xl mx-auto relative z-10" initial="hidden" animate="visible" variants={fadeIn}>
          <div className="mb-8">
            <Link href="/careers" className="text-brand-orange hover:text-brand-red transition-colors inline-flex items-center">
              <FaArrowLeft className="mr-2" />
              <span>Back to Careers</span>
            </Link>
          </div>

          <motion.div className="bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-800" variants={fadeInUp}>
            <div className="gradient-bg p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-heading font-bold text-white">Internship Program Application</h1>
              <p className="text-white/80 mt-2">Join our team and work on cutting-edge AI projects</p>
            </div>

            <div className="px-6 md:px-8 pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-400">
                  Step {currentStep} of {totalSteps}
                </span>
                <span className="text-sm font-medium text-gray-400">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2.5">
                <motion.div
                  className="gradient-bg h-2.5 rounded-full"
                  initial={{ width: `${((currentStep - 1) / totalSteps) * 100}%` }}
                  animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h2 className="text-xl font-semibold mb-4 text-white">Personal Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Full Name *</label>
                        <input
                          type="text"
                          className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${
                            errors.ApplicantFullName ? "border-red-500" : "border-gray-700"
                          } focus:outline-none focus:ring-2 focus:ring-brand-orange text-white`}
                          placeholder="Enter your full name"
                          {...register("ApplicantFullName", { required: "Full name is required" })}
                        />
                        {errors.ApplicantFullName && (
                          <p className="mt-1 text-sm text-red-500">{String(errors.ApplicantFullName.message)}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Email Address *</label>
                        <input
                          type="email"
                          className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${
                            errors.ApplicantEmail ? "border-red-500" : "border-gray-700"
                          } focus:outline-none focus:ring-2 focus:ring-brand-orange text-white`}
                          placeholder="Enter your email address"
                          {...register("ApplicantEmail", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                        />
                        {errors.ApplicantEmail && (
                          <p className="mt-1 text-sm text-red-500">{String(errors.ApplicantEmail.message)}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange text-white"
                          placeholder="Enter your phone number"
                          {...register("ApplicantPhone")}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Date of Birth</label>
                        <input
                          type="date"
                          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange text-white"
                          {...register("DateOfBirth")}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Gender</label>
                        <div className="flex gap-6 mt-2">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              className="w-4 h-4 text-brand-orange bg-gray-800 border-gray-700"
                              value="Male"
                              {...register("Gender")}
                            />
                            <span className="ml-2 text-gray-300">Male</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              className="w-4 h-4 text-brand-orange bg-gray-800 border-gray-700"
                              value="Female"
                              {...register("Gender")}
                            />
                            <span className="ml-2 text-gray-300">Female</span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Current Location</label>
                        <select
                          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange text-white"
                          {...register("CurrentLocation")}
                        >
                          <option value="">Select your location</option>
                          <option value="addis-ababa">Addis Ababa</option>
                          <option value="other-ethiopia">Other (Ethiopia)</option>
                          <option value="international">International</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h2 className="text-xl font-semibold mb-4 text-white">Education & Additional Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Education Level</label>
                        <select
                          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange text-white"
                          {...register("EducationLevel")}
                        >
                          <option value="">Select education level</option>
                          <option value="High School">High School</option>
                          <option value="Some College">Some College</option>
                          <option value="Bachelor's Degree">Bachelor's Degree</option>
                          <option value="Master's Degree">Master's Degree</option>
                          <option value="PhD">PhD</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">GitHub Account</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange text-white"
                          placeholder="Your GitHub username"
                          {...register("GitHubAccount")}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Mindplax Account</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange text-white"
                          placeholder="Your Mindplax username"
                          {...register("MindplaxAccount")}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Have you taken any online courses in AI, ML, or related fields?
                        </label>
                        <div className="flex gap-6 mt-2">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              className="w-4 h-4 text-brand-orange bg-gray-800 border-gray-700"
                              value="yes"
                              {...register("HasTakenOnlineCourses")}
                            />
                            <span className="ml-2 text-gray-300">Yes</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              className="w-4 h-4 text-brand-orange bg-gray-800 border-gray-700"
                              value="no"
                              {...register("HasTakenOnlineCourses")}
                            />
                            <span className="ml-2 text-gray-300">No</span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Promised Hours of Commitment per Week
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange text-white"
                          placeholder="Hours per week"
                          {...register("PromisedHours")}
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Why should you get this opportunity?
                        </label>
                        <textarea
                          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange text-white"
                          rows={5}
                          placeholder="Briefly explain why you should be selected for this internship"
                          {...register("OpportunityReason")}
                        />
                        <p className="mt-1 text-sm text-gray-500">{watch("OpportunityReason")?.length || 0} characters</p>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-300 mb-1">Upload CV/Resume *</label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-700 border-dashed rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors">
                          <div className="space-y-1 text-center">
                            <AiOutlineUpload className="mx-auto h-12 w-12 text-gray-400" />
                            <div className="flex text-sm text-gray-400">
                              <label className="relative cursor-pointer bg-transparent rounded-md font-medium text-brand-orange hover:text-brand-red">
                                <span>Upload a file</span>
                                <input
                                  type="file"
                                  className="sr-only"
                                  accept=".pdf,.doc,.docx"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      setValue("CV", file);
                                      trigger("CV");
                                    }
                                  }}
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PDF, DOC, or DOCX up to 5MB</p>
                          </div>
                        </div>
                        {(() => {
                          const cv = watch("CV");
                          if (cv && typeof cv === "object" && "name" in cv && cv.name) {
                            return <p className="mt-2 text-sm text-green-500">File selected: {cv.name}</p>;
                          }
                          return null;
                        })()}
                        {errors.CV && <p className="mt-1 text-sm text-red-500">{String(errors.CV.message)}</p>}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-between mt-8">
                {currentStep > 1 ? (
                  <motion.button
                    type="button"
                    className="bg-transparent text-white border border-gray-700 font-medium px-6 py-3 rounded-lg transition-all hover:bg-gray-800 flex items-center"
                    onClick={goToPreviousStep}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaArrowLeft className="mr-2" />
                    <span>Previous</span>
                  </motion.button>
                ) : (
                  <div />
                )}

                <motion.button
                  type="submit"
                  className="gradient-bg text-white font-medium px-6 py-3 rounded-lg transition-all flex items-center"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(254, 142, 3, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <span>Processing...</span>
                  ) : currentStep < totalSteps ? (
                    <>
                      <span>Next</span>
                      <FaArrowRight className="ml-2" />
                    </>
                  ) : (
                    <span>Submit Application</span>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default InternshipForm;