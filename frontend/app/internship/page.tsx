"use client";

import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { AiOutlineUpload } from 'react-icons/ai';
// the file upload 
const InternshipForm = () => {
    const { register, handleSubmit, formState: { errors }, setValue, control } = useForm();
    const height = '56.1px';
    const width = '432px';
    const cvFile = useWatch({ control, name: "cv" });

    const commonStyles: React.CSSProperties = {
        width: width,
        height: height,
        borderRadius: '18px',
        border: '1px solid transparent',
        background: 'linear-gradient(white, white) padding-box, linear-gradient(90deg, rgba(254, 142, 3, 0.67) 0%, rgba(240, 52, 1, 0.67) 100%) border-box', // Gradient for border
        opacity: 1,
        fontFamily: 'Jost',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '23px',
        letterSpacing: '0.15px',
        textAlign: 'left',
        textUnderlinePosition: 'from-font',
        textDecorationSkipInk: 'none',
        paddingLeft: '16px',
        color: 'black',
    };

    const onSubmit = async (data: any) => {
        console.log(data)
        try {
            const formData = new FormData();
            for (const key in data) {
                formData.append(key, data[key]);
            }

            const response = await fetch('/api/internship', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('Form submitted successfully!');
            } else {
                alert('Failed to submit the form.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form.');
        }
    };

    return (
        <>
            <div className="flex justify-center mt-10">
                <div className="flex flex-col items-center space-y-4" style={{ backgroundColor: '#F8F4F4', boxShadow: '0px 4px 4px 0px #00000040', width: 'fit-content', padding: '20px', borderRadius: '16px' }}>
                    <h1 style={{
                        fontFamily: 'Inter',
                        fontSize: '24px',
                        fontWeight: 600,
                        lineHeight: '29.05px',
                        textAlign: 'left',
                        textUnderlinePosition: 'from-font',
                        textDecorationSkipInk: 'none',
                        background: 'linear-gradient(90.71deg, #FE8E03 -2.83%, #F03401 100.62%)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent'
                    }}>
                        Internship Program Applicants
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
                        <div className="flex flex-row" style={{ gap: '70px' }}>
                            <div className="flex flex-col space-y-2" style={{ gap: '35px' }}>
                                <input
                                    className="dev"
                                    style={commonStyles as React.CSSProperties}
                                    type="text"
                                    placeholder="Email Address"
                                    {...register("email", { required: "Email is required" })}
                                />
                                {errors.email && <span>{String(errors.email.message)}</span>}
                                <input
                                    className="dev"
                                    style={commonStyles as React.CSSProperties}
                                    type="text"
                                    placeholder="Full Name"
                                    {...register("fullName", { required: "Full Name is required" })}
                                />
                                {errors.fullName && <span>{String(errors.fullName.message)}</span>}
                                <input
                                    className="dev"
                                    style={commonStyles as React.CSSProperties}
                                    type="text"
                                    placeholder="Phone Number"
                                    {...register("phoneNumber", { required: "Phone Number is required" })}
                                />
                                {errors.phoneNumber && <span>{String(errors.phoneNumber.message)}</span>}
                                <select
                                    className="dev"
                                    style={{
                                        ...commonStyles,
                                        fontFamily: 'Roboto',
                                        fontSize: '16px',
                                        fontWeight: 400,
                                        lineHeight: '23px',
                                        letterSpacing: '0.15px',
                                        textAlign: 'left',
                                        textUnderlinePosition: 'from-font',
                                        textDecorationSkipInk: 'none',
                                        color: '#787777'
                                    }}
                                    {...register("educationLevel", { required: "Education Level is required" })}
                                    defaultValue=""
                                >
                                    <option value="" disabled>Education Level</option>
                                    <option value="highschool">High School</option>
                                    <option value="bachelor">Bachelor's Degree</option>
                                    <option value="master">Master's Degree</option>
                                    <option value="phd">PhD</option>
                                </select>
                                {errors.educationLevel && <span>{String(errors.educationLevel.message)}</span>}
                                <input
                                    className="dev"
                                    style={commonStyles as React.CSSProperties}
                                    type="text"
                                    placeholder="Date of Birth"
                                    {...register("dateOfBirth", { required: "Date of Birth is required" })}
                                    onFocus={(e) => (e.target.type = "date")}
                                    onBlur={(e) => {
                                        if (!e.target.value) e.target.type = "text";
                                    }}
                                />
                                {errors.dateOfBirth && <span>{String(errors.dateOfBirth.message)}</span>}
                                <input
                                    className="dev"
                                    style={commonStyles as React.CSSProperties}
                                    type="text"
                                    placeholder="GitHub Account"
                                    {...register("githubAccount", { required: "GitHub Account is required" })}
                                />
                                {errors.githubAccount && <span>{String(errors.githubAccount.message)}</span>}
                            </div>
                            <div className="flex flex-col space-y-2" style={{ gap: '25px' }}>
                                <input
                                    className="dev"
                                    style={commonStyles as React.CSSProperties}
                                    type="text"
                                    placeholder="Mindplax Account"
                                    {...register("mindplaxAccount", { required: "Mindplax Account is required" })}
                                />
                                {errors.mindplaxAccount && <span>{String(errors.mindplaxAccount.message)}</span>}
                                <input
                                    className="dev"
                                    style={commonStyles as React.CSSProperties}
                                    type="number"
                                    placeholder="Promised Hour of Commitment"
                                    {...register("commitmentHours", { required: "Promised Hour of Commitment is required" })}
                                />
                                {errors.commitmentHours && <span>{String(errors.commitmentHours.message)}</span>}
                                <select
                                    className="dev"
                                    style={{ ...commonStyles, color: '#787777' } as React.CSSProperties}
                                    {...register("currentLocation", { required: "Current Location is required" })}
                                    defaultValue=""
                                >
                                    <option value="" disabled>Where are you currently?</option>
                                    <option value="home">Home</option>
                                    <option value="office">Office</option>
                                    <option value="other">Other</option>
                                </select>
                                {errors.currentLocation && <span>{String(errors.currentLocation.message)}</span>}
                                <div className="flex flex-row justify-between" style={{ width: '420px' }}>
                                    <div className="flex flex-col space-y-2">
                                        <span>Gender</span>
                                        <label className="flex items-center space-x-2">
                                            <input type='radio' value='male' {...register("gender", { required: "Gender is required" })} />
                                            <span>Male</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input type='radio' value='female' {...register("gender", { required: "Gender is required" })} />
                                            <span>Female</span>
                                        </label>
                                    </div>
                                    {errors.gender && <span>{String(errors.gender.message)}</span>}
                                    <div className="flex flex-col space-y-2">
                                        <span>Taken any online courses in these areas?</span>
                                        <label className="flex items-center space-x-2">
                                            <input type='radio' value='yes' {...register("onlineCourses", { required: "This field is required" })} />
                                            <span>Yes</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input type='radio' value='no' {...register("onlineCourses", { required: "This field is required" })} />
                                            <span>No</span>
                                        </label>
                                    </div>
                                    {errors.onlineCourses && <span>{String(errors.onlineCourses.message)}</span>}
                                </div>
                                <textarea
                                    className="dev"
                                    style={{ ...commonStyles, height: '112.2px', padding: '16px', width: '450px' } as React.CSSProperties}
                                    placeholder="Briefly explain why you should get this opportunity"
                                    {...register("explanation", { required: "This field is required" })}
                                />
                                {errors.explanation && <span>{String(errors.explanation.message)}</span>}
                                <div className="flex flex-col space-y-2 w-42 items-end">
                                    <label
                                        className="flex items-center justify-between space-x-2 cursor-pointer px-4 py-2 w-44"
                                        style={{ ...commonStyles, width: '150px', height: '47px', fontFamily: 'intern' }}
                                    >
                                        <span className="flex items-center space-x-2 text-gray-500">
                                            <AiOutlineUpload size={20} className="text-orange-500" />
                                            <span>Upload CV</span>
                                        </span>
                                        <input
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            className="hidden"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (file) {
                                                    setValue("cv", file, { shouldValidate: true });
                                                }
                                            }}
                                        />
                                    </label>
                                    {errors.cv && <span>{String(errors.cv.message)}</span>}
                                </div>

                            </div>
                        </div>
                        <div className="flex justify-center mt-4">
                            <input
                                type="submit"
                                value="Submit"
                                style={{
                                    width: '164.29px',
                                    height: '46.08px',
                                    borderRadius: '10px ',
                                    opacity: 1,
                                    background: 'linear-gradient(272.17deg, #FFA600 4.81%, #FF191C 105.54%)',
                                    color: 'white',
                                    fontFamily: 'Jost',
                                    fontSize: '16px',
                                    fontWeight: 400,
                                    lineHeight: '23px',
                                    letterSpacing: '0.15px',
                                    textAlign: 'center',
                                    cursor: 'pointer'
                                }}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default InternshipForm;
