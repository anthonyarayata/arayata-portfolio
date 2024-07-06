import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useWeb3Forms from '@web3forms/react';

const Contact = () => {
  const { register, reset, handleSubmit } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const accessKey = '8d7392d2-67ec-46fb-9ed6-19dba81bba42';

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: 'Possible Employer',
      subject: 'New Contact Message from your Portfolio Website',
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  const validateEmail = async (email) => {
    try {
      const response = await axios.get(`https://emailverificationapi.com/api/v1?email=${email}&apiKey=YOUR_API_KEY`);
      return response.data.is_valid;
    } catch (error) {
      console.error('Error verifying email', error);
      return false;
    }
  };

  const handleFormSubmit = async (data) => {
    setIsSubmitting(true);
    setResult(null);

    const isEmailValid = await validateEmail(data.email);
    if (!isEmailValid) {
      setIsSuccess(false);
      setResult('Invalid email address. Please provide a valid email.');
      setIsSubmitting(false);
      return;
    }

    // Proceed with Web3Forms submission
    onSubmit(data);
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="w-screen min-h-screen p-4 mt-4 flex items-center justify-center bg-gray-100">
      <div className="w-screen max-w-6xl">
        <h1 className="text-center text-2xl lg:text-4xl font-bold mb-8">Contact Me</h1>
        <div className="grid grid-cols-8 gap-4">
          <div className="col-span-8 md:col-span-7 bg-white p-4 shadow-lg rounded-lg">
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit(handleFormSubmit)}>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4"
                {...register('name', { required: true })}
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4"
                {...register('email', { required: true })}
              />
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900 rounded-md outline-none h-36 focus:ring-4"
                {...register('message', { required: true })}
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 font-semibold text-white transition-colors bg-darkBlue rounded-md hover:bg-mediumBlue focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Form'}
              </button>
            </form>

            <div className="mt-4 text-center">
              {result && (
                <p className={`${isSuccess ? 'text-green-500' : 'text-red-500'}`}>
                  {result}
                </p>
              )}
            </div>
          </div>
          <div className="col-span-8 md:col-span-1 flex flex-col justify-start items-center space-y-4">
            <a
              href="https://www.linkedin.com/in/anthony-ross-arayata-4195a4195/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-darkBlue hover:text-mediumBlue transition duration-300"
            >
              <FaLinkedin size={48} />
            </a>
            <a
              href="https://github.com/anthonyarayata"
              target="_blank"
              rel="noopener noreferrer"
              className="text-darkBlue hover:text-mediumBlue transition duration-300"
            >
              <FaGithub size={48} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
