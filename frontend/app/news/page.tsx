import React from 'react'
import { ImageCard, Card } from '../Components/Card'

function page() {
    return (
        <>
            <div className='w-full flex flex-col items-center p-20'>

                <div className='flex flex-row justify-center items-center gap-12 lg:gap-20 p-6 md:p-12 bg-cover bg-center w-full pl-4 pt-4'>
                    <div className='flex-1'>
                        <ImageCard img='/images/two.png' date='01/12/12' primary={true} title='iCog Labs Partners with Huawei to Advance AI Research in Africa' />
                    </div>
                    <div className='flex-1 flex flex-col justify-center items-start gap-12 lg:gap-20 p-6 md:p-12 bg-cover bg-center w-full pl-4 pt-4'>
                        <Card text='Explore groundbreaking AI developments as iCog Labs hosts its annual conference in Addis Ababa, bringing together global innovators.' title='iCog Labs Hosts Annual AI Conference in Addis Ababa' />
                        <ImageCard img='/images/two.png' date='9 October 2024' primary={false} title='Presents Breakthroughs at Global AI for Good Summit' />
                    </div>
                </div>
                <div className='flex flex-row justify-center items-start gap-12 lg:gap-20 p-6 md:p-12 bg-cover bg-center w-full flex-wrap pl-4 pt-4'>
                    <Card title="NuNet" text={'Distributed Computing Power & Storage for Decentralized Networks'} date='9 October 2024' img='/images/health.png' />
                    <Card text="iCog Labs has introduced an AI 
Ethics Initiative focused on promoting 
responsible, transparent, and fair
AI development. This effort aims
to reduce bias, respect privacy,
and ensure AI serves society
ethically.Collaborating with global
and local partners, iCog Labs is
setting a new standard for ethical AI" title="iCog Labs Launches AI Ethics Initiative for Responsible 
Development" date='9 October 2024' />
                    <Card title="NuNet" text={'Distributed Computing Power & Storage for Decentralized Networks'} date='9 October 2024' img='/images/tech.png' />
                    <Card text="iCog Labs has introduced an AI 
Ethics Initiative focused on promoting 
responsible, transparent, and fair
AI development. This effort aims
to reduce bias, respect privacy,
and ensure AI serves society
ethically.Collaborating with global
and local partners, iCog Labs is
setting a new standard for ethical AI" title="iCog Labs Launches AI Ethics Initiative for Responsible 
Development" date='9 October 2024' />
                    <Card title="NuNet" text={'Distributed Computing Power & Storage for Decentralized Networks'} date='9 October 2024' img='/images/health.png' />
                    <Card text="iCog Labs has introduced an AI 
Ethics Initiative focused on promoting 
responsible, transparent, and fair
AI development. This effort aims
to reduce bias, respect privacy,
and ensure AI serves society
ethically.Collaborating with global
and local partners, iCog Labs is
setting a new standard for ethical AI" title="iCog Labs Launches AI Ethics Initiative for Responsible 
Development" date='9 October 2024' />
                </div>

            </div>
        </>
    )
}

export default page
