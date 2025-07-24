import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { Person, GMail, Chat, Submit } from "./Icons";
import { validateForm } from "../utils/formValidation";
import AnimatedWrapper from "./ui/AnimatedWrapper";

const Contact = () => {
  const initialFormData = { name: "", email: "", message: "" };
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const initialErrData = { nameError: "", emailError: "", messageError: "" };
  const [errData, setErrData] = useState(initialErrData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear specific error when user starts typing
    if (errData[`${name}Error`]) {
      setErrData({ ...errData, [`${name}Error`]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const isValid = validateForm(formData, setErrData);
    if (!isValid) {
      setIsSubmitting(false);
      return;
    }

    try {
      const form = new FormData();
      form.append("name", formData.name.trim());
      form.append("email", formData.email.trim());
      form.append("message", formData.message.trim());

      const response = await fetch(import.meta.env.VITE_GETFORM_URL, {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData(initialFormData);
        setErrData(initialErrData);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      name="Contact"
      className="pt-10 h-full min-h-screen w-full flex items-center bg-gradient-to-b from-white to-white dark:from-gray-800 dark:to-black"
      aria-labelledby="contact-heading"
    >
      <div className="section">
        <AnimatedWrapper>
          <SectionHeading
            heading="Contact"
            secondHeading="Fill the form to get in touch with me"
          />
        </AnimatedWrapper>
        
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 text-green-700 dark:text-green-300 rounded-lg" role="alert">
            Thank you! Your message has been sent successfully. I'll get back to you soon.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-300 rounded-lg" role="alert">
            Sorry, there was an error sending your message. Please try again or contact me directly.
          </div>
        )}
        
        <AnimatedWrapper>
          <div className="flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="flex gap-4 flex-col w-full md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
              aria-label="Contact form"
              noValidate
            >
              <AnimatedWrapper>
                <div className="w-full">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      className={`peer form-input ${
                        errData.nameError !== "" ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                      } rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent`}
                      value={formData.name}
                      onChange={handleChange}
                      aria-label="Your name"
                      aria-required="true"
                      aria-invalid={errData.nameError !== ""}
                      aria-describedby={errData.nameError ? "name-error" : undefined}
                      disabled={isSubmitting}
                    />
                    <FormIcon name="person" />
                  </div>
                  <ErrorBox message={errData.nameError} id="name-error" />
                </div>
              </AnimatedWrapper>
              
              <AnimatedWrapper>
                <div className="w-full">
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      className={`peer form-input ${
                        errData.emailError !== "" ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                      } rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent`}
                      value={formData.email}
                      onChange={handleChange}
                      aria-label="Your email"
                      aria-required="true"
                      aria-invalid={errData.emailError !== ""}
                      aria-describedby={errData.emailError ? "email-error" : undefined}
                      disabled={isSubmitting}
                    />
                    <FormIcon name="gmail" />
                  </div>
                  <ErrorBox message={errData.emailError} id="email-error" />
                </div>
              </AnimatedWrapper>

              <AnimatedWrapper>
                <div className="w-full">
                  <div className="relative">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows="8"
                      cols="30"
                      className={`peer form-input ${
                        errData.messageError !== "" ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                      } rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent`}
                      value={formData.message}
                      onChange={handleChange}
                      aria-label="Your message"
                      aria-required="true"
                      aria-invalid={errData.messageError !== ""}
                      aria-describedby={errData.messageError ? "message-error" : undefined}
                      disabled={isSubmitting}
                    />
                    <FormIcon name="chat" />
                  </div>
                  <ErrorBox message={errData.messageError} id="message-error" />
                </div>
              </AnimatedWrapper>

              <AnimatedWrapper>
                <button 
                  type="submit"
                  className={`btn-primary flex items-center justify-center mr-auto group ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  aria-label="Submit contact form"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Let's Connect
                      <span className="scale-0 -translate-x-10 origin-left group-hover:scale-100 group-hover:translate-x-3 duration-300 transition-all delay-200 ease-in-out">
                        <Submit />
                      </span>
                    </>
                  )}
                </button>
              </AnimatedWrapper>
            </form>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default Contact;

const FormIcon = ({ name }) => {
  return (
    <span
      className={`peer-placeholder-shown:grayscale peer-focus:grayscale-0 peer-active:grayscale-0 absolute left-3 ${
        name === "chat" ? "top-[0.8rem]" : "top-1/2 -translate-y-1/2"
      }`}
      aria-hidden="true"
    >
      {name === "person" && <Person />}
      {name === "gmail" && <GMail />}
      {name === "chat" && <Chat />}
    </span>
  );
};

const ErrorBox = ({ message, id }) => {
  return message ? (
    <div className="text-sm min-h-[1.3rem] text-red-500 px-3 mt-1" role="alert" id={id}>
      {message}
    </div>
  ) : (
    <div className="text-sm min-h-[1.3rem] px-3"></div>
  );
};