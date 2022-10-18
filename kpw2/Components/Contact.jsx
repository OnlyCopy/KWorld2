import React from 'react'
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm } from "react-hook-form";


function ContactMe() {

    const { register, handleSubmit } = useForm();

    const onSubmit = (formData) => {
        window.location.href = `mailto:trippiethegeneral@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.subject}. ${formData.message} (${formData.email})`;
    }

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto justify-evenly items-center text-white'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-white text-2xl'>Contact</h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
               Have a question? {" "} <span className='decoration-red-500/50 underline'>Contact me.</span>
            </h4>

            <div className='space-y-10'>
   
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-red-500 h-7 w-7 animate-pulse' />
                    <p className='text-2xl font-serif'>trippiethegeneral@gmail.com</p>    
                </div> 

            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contact-input' type="text" />
                    <input {...register('email')} placeholder='Email' className='contact-input' type="email" />
                </div>

                    <input {...register('subject')} placeholder='Subject' className="contact-input" type="text" />

                    <textarea {...register('message')} placeholder='Message' className="contact-input" />
                    <button type='submit' className="bg-red-500 py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe