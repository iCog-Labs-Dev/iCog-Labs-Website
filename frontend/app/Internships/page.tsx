"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { AiOutlineUpload, AiOutlineCheck } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ArrowRightIcon } from "../components/icons/arrow-right";
import { SectionHeader } from "../components/sectionHeader";
import { GearIcon } from "../components/icons/gear-icon";
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
  ApplicantFullName: string;
  ApplicantEmail: string;
  ApplicantPhone: string;
  DateOfBirth: string;
  Gender: string;
  CurrentLocation: string;
  EducationLevel: string;
  GitHubAccount: string;
  MindplaxAccount: string;
  HasTakenOnlineCourses: string;
  PromisedHours: string;
  OpportunityReason: string;
  CV: File;
}

export default function InternshipsPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setValue,
    trigger,
  } = useForm<FormData>();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({} as FormData);
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
      if (!combinedData.ApplicantFullName || !combinedData.ApplicantEmail) {
        alert("Please fill in all required fields (Full Name and Email).");
        return;
      }

      if (!(combinedData.CV instanceof File)) {
        alert("Please upload a valid CV file (PDF, DOC, or DOCX).");
        return;
      }

      const formDataForFile = new FormData();
      formDataForFile.append("files", combinedData.CV, combinedData.CV.name);

      const fileResponse = await axios.post(`${strapiApiUrl}/api/upload`, formDataForFile, {
        headers: { Authorization: `Bearer ${strapiToken}` },
      });

      if (fileResponse.status !== 200 && fileResponse.status !== 201) {
        throw new Error(fileResponse.data.message || "Failed to upload CV");
      }

      const fileId = fileResponse.data[0].id;

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
          CV: fileId,
        },
      };

      const dataResponse = await axios.post(`${strapiApiUrl}/api/internship-applications`, strapiPayload, {
        headers: {
          Authorization: `Bearer ${strapiToken}`,
          "Content-Type": "application/json",
        },
      });

      if (dataResponse.status !== 200 && dataResponse.status !== 201) {
        throw new Error(dataResponse.data.message || "Failed to submit application data");
      }

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
      <div className="bg-gray-950 min-h-screen flex items-center justify-center py-28">
        <motion.div
          className="bg-gray-900 rounded-2xl p-12 max-w-2xl w-full text-center border border-gray-800 relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-20 h-20 rounded-full bg-orange-500/20 flex items-center justify-center text-white mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
          >
            <AiOutlineCheck size={40} />
          </motion.div>

          <motion.h2
            className="text-3xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Application Submitted Successfully!
          </motion.h2>

          <motion.p
            className="text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Thank you for applying to our internship program. We've received your application and will review it shortly.
          </motion.p>

          <a
            href="/careers"
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors"
          >
            Back to Careers
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-orange-500/10 filter blur-[120px]"></div>
          <div className="absolute bottom-1/3 -right-40 w-96 h-96 rounded-full bg-orange-500/10 filter blur-[150px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <SectionHeader title="2025 Batch -1 Internship Program" center mb="6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-orange-500">iCog Labs</span> AI Internship
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Premier program designed to train and develop exceptional talent through extensive hands-on experience in cutting-edge technologies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Focus Areas */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Focus Areas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Artificial Intelligence / AGI",
                "Machine Learning",
                "Advanced Computer Science",
                "Computational Linguistics / LLM",
                "Computational Biology",
                "Robotics & Embodiment",
                "Blockchain",
                "DevOps / SysAdmin",
                "Web & Mobile Development",
                "Emerging Technologies",
              ].map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 rounded-lg p-4 border border-gray-800 hover:border-orange-500/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                    <h3 className="font-medium text-white">{area}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Eligibility & Commitment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <GearIcon className="text-orange-500" size={20} />
                Eligibility
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
                  Open to undergraduates, graduates, and self-taught individuals
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
                  Passion for AI and related technologies required
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
                  Highly qualified candidates may receive full-time offers
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
                  Highlight all relevant skills and experiences
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Commitment
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
                  Minimum 10 hours per week in-person commitment
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
                  Ethiopian citizens must be residing in Ethiopia
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
                  Open to applicants across Africa and Asia
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
                  International talent encouraged to apply
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-800"
          >
            <h2 className="text-3xl font-bold text-white mb-2">Application Form</h2>
            <p className="text-gray-400 mb-8">Complete all required fields to apply for the internship program</p>

            <div className="px-6 md:px-8 pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-400">Step {currentStep} of {totalSteps}</span>
                <span className="text-sm font-medium text-gray-400">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2.5">
                <motion.div
                  className="bg-orange-500 h-2.5 rounded-full"
                  initial={{ width: `${((currentStep - 1) / totalSteps) * 100}%` }}
                  animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6 md:p-8">
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
                          className={`w-full bg-gray-800 border ${
                            errors.ApplicantFullName ? "border-red-500" : "border-gray-700"
                          } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
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
                          className={`w-full bg-gray-800 border ${
                            errors.ApplicantEmail ? "border-red-500" : "border-gray-700"
                          } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
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
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Enter your phone number"
                          {...register("ApplicantPhone")}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Date of Birth</label>
                        <input
                          type="date"
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          {...register("DateOfBirth")}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Gender</label>
                        <div className="flex gap-6 mt-2">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              className="w-4 h-4 text-orange-500 bg-gray-800 border-gray-700"
                              value="Male"
                              {...register("Gender")}
                            />
                            <span className="ml-2 text-gray-300">Male</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              className="w-4 h-4 text-orange-500 bg-gray-800 border-gray-700"
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
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Your GitHub username"
                          {...register("GitHubAccount")}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Mindplax Account</label>
                        <input
                          type="text"
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Your Mindplax username"
                          {...register("MindplaxAccount")}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-mediumplaces text-gray-300 mb-1">
                          Have you taken any online courses in AI, ML, or related fields?
                        </label>
                        <div className="flex gap-6 mt-2">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              className="w-4 h-4 text-orange-500 bg-gray-800 border-gray-700"
                              value="yes"
                              {...register("HasTakenOnlineCourses")}
                            />
                            <span className="ml-2 text-gray-300">Yes</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              className="w-4 h-4 text-orange-500 bg-gray-800 border-gray-700"
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
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Hours per week"
                          {...register("PromisedHours")}
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Why should you get this opportunity?
                        </label>
                        <textarea
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                              <label className="relative cursor-pointer bg-transparent rounded-md font-medium text-orange-500 hover:text-orange-600">
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
                    whileHover={{ scale: 1.05 }}
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
                  className="px-6 py-4 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
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
                    <>
                      <span>Submit Application</span>
                      <ArrowRightIcon className="h-5 w-5" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <GearIcon className="mx-auto text-orange-500 mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About the Internship Program?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Contact our HR team at <span className="text-orange-400">internships@icoglabs.com</span>
            </p>
            <a
              href="mailto:internships@icoglabs.com"
              className="inline-flex items-center justify-center px-8 py-4 border border-orange-600 text-orange-400 hover:bg-orange-900/30 font-medium rounded-lg transition-colors duration-300"
            >
              Email Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}