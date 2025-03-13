"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { AiOutlineUpload, AiOutlineCheck } from "react-icons/ai"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import Link from "next/link"

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const InternshipForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setValue,
    trigger,
  } = useForm()

  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const totalSteps = 3

interface FormData {
    fullName?: string;
    email?: string;
    phoneNumber?: string;
    dateOfBirth?: string;
    gender?: string;
    currentLocation?: string;
    educationLevel?: string;
    fieldOfStudy?: string;
    githubAccount?: string;
    mindplaxAccount?: string;
    onlineCourses?: string;
    coursesList?: string;
    areasOfInterest?: string[];
    commitmentHours?: number;
    explanation?: string;
    cv?: File;
}

const onSubmit = async (data: FormData) => {
    if (currentStep < totalSteps) {
        setFormData({ ...formData, ...data });
        setCurrentStep(currentStep + 1);
        window.scrollTo(0, 0);
        return;
    }

    // Final submission
    try {
        console.log("Form submitted:", { ...formData, ...data });
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitted(true);
    } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred while submitting the form.");
    }
};

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <motion.div
          className="bg-white rounded-xl shadow-md p-12 max-w-2xl w-full text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center text-white mx-auto mb-6">
            <AiOutlineCheck size={40} />
          </div>

          <h2 className="text-3xl font-heading font-bold gradient-text mb-6">Application Submitted Successfully!</h2>

          <p className="text-gray-600 mb-8">
            Thank you for applying to our internship program. We've received your application and will review it
            shortly. You'll receive a confirmation email with further details.
          </p>

          <Link href="/careers">
            <motion.button className="button-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Back to Careers
            </motion.button>
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <motion.div className="max-w-4xl mx-auto" initial="hidden" animate="visible" variants={fadeIn}>
          <div className="mb-8">
            <Link
              href="/careers"
              className="text-brand-orange hover:text-brand-red transition-colors inline-flex items-center"
            >
              <FaArrowLeft className="mr-2" />
              <span>Back to Careers</span>
            </Link>
          </div>

          <motion.div className="bg-white rounded-xl shadow-md overflow-hidden" variants={fadeInUp}>
            {/* Header */}
            <div className="gradient-bg p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-heading font-bold text-white">Internship Program Application</h1>
              <p className="text-white/80 mt-2">Join our team and work on cutting-edge AI projects</p>
            </div>

            {/* Progress Bar */}
            <div className="px-6 md:px-8 pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Step {currentStep} of {totalSteps}
                </span>
                <span className="text-sm font-medium text-gray-600">
                  {Math.round((currentStep / totalSteps) * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="gradient-bg h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        className={`w-full px-4 py-3 rounded-lg border ${errors.fullName ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-brand-orange`}
                        placeholder="Enter your full name"
                        {...register("fullName", { required: "Full name is required" })}
                      />
                      {errors.fullName && <p className="mt-1 text-sm text-red-600">{String(errors.fullName.message)}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-brand-orange`}
                        placeholder="Enter your email address"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{String(errors.email.message)}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        className={`w-full px-4 py-3 rounded-lg border ${errors.phoneNumber ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-brand-orange`}
                        placeholder="Enter your phone number"
                        {...register("phoneNumber", { required: "Phone number is required" })}
                      />
                      {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{String(errors.phoneNumber.message)}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
                      <input
                        type="date"
                        className={`w-full px-4 py-3 rounded-lg border ${errors.dateOfBirth ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-brand-orange`}
                        {...register("dateOfBirth", { required: "Date of birth is required" })}
                      />
                      {errors.dateOfBirth && <p className="mt-1 text-sm text-red-600">{String(errors.dateOfBirth.message)}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Gender *</label>
                      <div className="flex gap-6 mt-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            className="w-4 h-4 text-brand-orange"
                            value="male"
                            {...register("gender", { required: "Please select your gender" })}
                          />
                          <span className="ml-2">Male</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            className="w-4 h-4 text-brand-orange"
                            value="female"
                            {...register("gender", { required: "Please select your gender" })}
                          />
                          <span className="ml-2">Female</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            className="w-4 h-4 text-brand-orange"
                            value="other"
                            {...register("gender", { required: "Please select your gender" })}
                          />
                          <span className="ml-2">Other</span>
                        </label>
                      </div>
                      {errors.gender && <p className="mt-1 text-sm text-red-600">{String(errors.gender.message)}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Current Location *</label>
                      <select
                        className={`w-full px-4 py-3 rounded-lg border ${errors.currentLocation ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-brand-orange`}
                        {...register("currentLocation", { required: "Please select your current location" })}
                      >
                        <option value="">Select your location</option>
                        <option value="addis-ababa">Addis Ababa</option>
                        <option value="other-ethiopia">Other (Ethiopia)</option>
                        <option value="international">International</option>
                      </select>
                      {errors.currentLocation && (
                        <p className="mt-1 text-sm text-red-600">{String(errors.currentLocation.message)}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-semibold mb-4">Education & Experience</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Education Level *</label>
                      <select
                        className={`w-full px-4 py-3 rounded-lg border ${errors.educationLevel ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-brand-orange`}
                        {...register("educationLevel", { required: "Education level is required" })}
                      >
                        <option value="">Select education level</option>
                        <option value="highschool">High School</option>
                        <option value="bachelor">Bachelor's Degree</option>
                        <option value="master">Master's Degree</option>
                        <option value="phd">PhD</option>
                        <option value="self-taught">Self-taught</option>
                      </select>
                      {errors.educationLevel && (
                        <p className="mt-1 text-sm text-red-600">{String(errors.educationLevel.message)}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Field of Study</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                        placeholder="E.g., Computer Science, AI"
                        {...register("fieldOfStudy")}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">GitHub Account *</label>
                      <input
                        type="text"
                        className={`w-full px-4 py-3 rounded-lg border ${errors.githubAccount ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-brand-orange`}
                        placeholder="Your GitHub username"
                        {...register("githubAccount", { required: "GitHub account is required" })}
                      />
                      {errors.githubAccount && (
                        <p className="mt-1 text-sm text-red-600">{String(errors.githubAccount.message)}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Mindplax Account</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                        placeholder="Your Mindplax username"
                        {...register("mindplaxAccount")}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Have you taken any online courses in AI, ML, or related fields? *
                      </label>
                      <div className="flex gap-6 mt-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            className="w-4 h-4 text-brand-orange"
                            value="yes"
                            {...register("onlineCourses", { required: "Please answer this question" })}
                          />
                          <span className="ml-2">Yes</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            className="w-4 h-4 text-brand-orange"
                            value="no"
                            {...register("onlineCourses", { required: "Please answer this question" })}
                          />
                          <span className="ml-2">No</span>
                        </label>
                      </div>
                      {errors.onlineCourses && (
                        <p className="mt-1 text-sm text-red-600">{String(errors.onlineCourses.message)}</p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        If yes, please list the courses:
                      </label>
                      <textarea
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                        rows={3}
                        placeholder="List any relevant courses you've taken"
                        {...register("coursesList")}
                      ></textarea>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-semibold mb-4">Additional Information</h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Areas of Interest *</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                        {["AI", "Machine Learning", "Robotics", "Blockchain", "AGI", "AI Ethics"].map((area) => (
                          <label key={area} className="flex items-center">
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-brand-orange rounded"
                              value={area}
                              {...register("areasOfInterest", { required: "Please select at least one area" })}
                            />
                            <span className="ml-2">{area}</span>
                          </label>
                        ))}
                      </div>
                      {errors.areasOfInterest && (
                        <p className="mt-1 text-sm text-red-600">{String(errors.areasOfInterest.message)}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Promised Hours of Commitment per Week *
                      </label>
                      <input
                        type="number"
                        className={`w-full px-4 py-3 rounded-lg border ${errors.commitmentHours ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-brand-orange`}
                        placeholder="Hours per week"
                        min="1"
                        max="40"
                        {...register("commitmentHours", {
                          required: "Commitment hours are required",
                          min: {
                            value: 5,
                            message: "Minimum 5 hours per week required",
                          },
                          max: {
                            value: 40,
                            message: "Maximum 40 hours per week",
                          },
                        })}
                      />
                      {errors.commitmentHours && (
                        <p className="mt-1 text-sm text-red-600">{String(errors.commitmentHours.message)}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Why should you get this opportunity? *
                      </label>
                      <textarea
                        className={`w-full px-4 py-3 rounded-lg border ${errors.explanation ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-brand-orange`}
                        rows={5}
                        placeholder="Briefly explain why you should be selected for this internship"
                        {...register("explanation", {
                          required: "This field is required",
                          minLength: {
                            value: 100,
                            message: "Please provide at least 100 characters",
                          },
                        })}
                      ></textarea>
                      {errors.explanation?.message && <p className="mt-1 text-sm text-red-600">{errors.explanation.message as string}</p>}
                      <p className="mt-1 text-sm text-gray-500">
                        {watch("explanation")?.length || 0} characters (minimum 100)
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Upload CV/Resume *</label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                        <div className="space-y-1 text-center">
                          <AiOutlineUpload className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600">
                            <label className="relative cursor-pointer bg-white rounded-md font-medium text-brand-orange hover:text-brand-red">
                              <span>Upload a file</span>
                              <input
                                type="file"
                                className="sr-only"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) => {
                                  const file = e.target.files?.[0]
                                  if (file) {
                                    setValue("cv", file)
                                    trigger("cv")
                                  }
                                }}
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PDF, DOC, or DOCX up to 5MB</p>
                        </div>
                      </div>
                      {watch("cv") && <p className="mt-2 text-sm text-green-600">File selected: {watch("cv").name}</p>}
                      {errors.cv?.message && <p className="mt-1 text-sm text-red-600">{errors.cv.message as string}</p>}
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="flex justify-between mt-8">
                {currentStep > 1 ? (
                  <motion.button
                    type="button"
                    className="button-secondary flex items-center"
                    onClick={goToPreviousStep}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaArrowLeft className="mr-2" />
                    <span>Previous</span>
                  </motion.button>
                ) : (
                  <div></div>
                )}

                <motion.button
                  type="submit"
                  className="button-primary flex items-center"
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
                    <span>Submit Application</span>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default InternshipForm

