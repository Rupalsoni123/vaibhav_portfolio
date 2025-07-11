import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { Person, GMail, Chat, Submit } from "./Icons";
import { validateForm } from "../utils/formValidation";
import AnimatedWrapper from "./ui/AnimatedWrapper";

const Contact = () => {
  const initialFormData = { name: "", email: "", message: "" };
  const [formData, setFormData] = useState(initialFormData);

  const initialErrData = { nameError: "", emailError: "", messageError: "" };
  const [errData, setErrData] = useState(initialErrData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm(formData, setErrData);
    if (!isValid) return;

    const form = new FormData();
    form.append("name", formData.name.trim());
    form.append("email", formData.email.trim());
    form.append("message", formData.message.trim());

    const response = await fetch(import.meta.env.VITE_GETFORM_URL, {
      method: "POST",
      body: form,
    });

    if (response.redirected) {
      window.location.href = import.meta.env.VITE_GETFORM_SUCCESS_URL;
      setFormData(initialFormData);
      setErrData(initialErrData);
    }

  };


 
  return (
    <div
      name="Contact"
      className="pt-10 h-full min-h-screen w-full flex items-center bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="section">
        <AnimatedWrapper>
          <SectionHeading
            heading="Contact"
            secondHeading="Fill the form to get in touch with me"
          />
        </AnimatedWrapper>
        <AnimatedWrapper>
          <div className="flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="flex gap-3 flex-col w-full md:w-1/2 "
            >
              <AnimatedWrapper>
                <div className=" w-full">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      className={`peer form-input ${
                        errData.nameError !== "" && "border-red-500"
                      }`}
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <FormIcon name="person" />
                  </div>
                  <ErrorBox message={errData.nameError} />
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
                        errData.emailError !== "" && "border-red-500"
                      }`}
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <FormIcon name="gmail" />
                  </div>
                  <ErrorBox message={errData.emailError} />
                </div>
              </AnimatedWrapper>

              <AnimatedWrapper>
                <div className=" w-full">
                  <div className="relative">
                    <textarea
                      name="message"
                      placeholder="Your Meaasge"
                      rows="10"
                      cols="30"
                      className={`peer form-input ${
                        errData.messageError !== "" && "border-red-500"
                      }`}
                      value={formData.message}
                      onChange={handleChange}
                    />
                    <FormIcon name="chat" />
                  </div>
                  <ErrorBox message={errData.messageError} />
                </div>
              </AnimatedWrapper>

              <AnimatedWrapper>
                {" "}
                <button className="hover:text-blue-800 flex items-center justify-center mr-auto group text-white bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md font-semibold px-12 py-2 hover:scale-[1.02] duration-500">
                  Let's Connect
                  <span className="scale-0 -translate-x-10 origin-left group-hover:scale-100 group-hover:translate-x-3 duration-300 transition-all delay-200 ease-in-out">
                    {" "}
                    <Submit />
                  </span>
                </button>
              </AnimatedWrapper>
            </form>
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default Contact;

const FormIcon = ({ name }) => {
  return (
    <span
      className={`peer-placeholder-shown:grayscale peer-focus:grayscale-0 peer-active:grayscale-0 absolute left-3 ${
        name === "chat" ? "top-[0.8rem]" : "top-1/2 -translate-y-1/2"
      }`}
    >
      {name === "person" && <Person />}
      {name === "gmail" && <GMail />}
      {name === "chat" && <Chat />}
    </span>
  );
};
const ErrorBox = ({ message }) => {
  return (
    <div className=" text-sm min-h-[1.3rem] text-red-500 px-3">{message}</div>
  );
};