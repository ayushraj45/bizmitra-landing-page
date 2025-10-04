
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., API call)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">Thank You!</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Your message has been sent. We'll get back to you as soon as possible.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">Contact Us</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Have questions? We'd love to hear from you. Fill out the form below and we'll get in touch.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-brand-dark">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                required
                className="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-brand-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-highlight sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-brand-dark">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                required
                className="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-brand-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-highlight sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-brand-dark">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-brand-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-highlight sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-brand-dark">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-brand-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-highlight sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-brand-highlight px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-highlight"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
