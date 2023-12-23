"use client";
import React, { useState } from "react";

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    email: "",
    message: "",
  });
  const [isButtonAnimated, setIsButtonAnimated] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const sendMail = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (
      formData.Fname === "" ||
      formData.Lname === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      alert("Please fill in all fields!");
      setIsButtonAnimated(true);
      return;
    }
    sendMail(e);
    // Perform submission logic here (e.g., send data to the server)

    setIsSubmitting(true);

    // Simulate API call (you would replace this with your actual submission logic)
    setTimeout(() => {
      alert("Form submitted successfully!");
      setFormData({
        Fname: "",
        Lname: "",
        email: "",
        message: "",
      });
      setIsSubmitting(false);
      setIsButtonAnimated(false);
    }, 1000);
  };
  return (
    <form
      onSubmit={handleSubmit}
      onMouseMove={handleMouseMove}
      // className="flex flex-col items-center"
    >
      <div className="gap-8">
        <div className="flex flex-col md:flex-row justify-start gap-4 md:gap-16">
          <div className="flex flex-col">
            <label className="mb-1">First Name</label>
            <input
              type="text"
              className="border-2 border-solid border-blue-500 p-2 rounded-lg"
              placeholder="First Name"
              name="Fname"
              value={formData.Fname}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Last Name</label>
            <input
              type="text"
              className="border-2 border-solid border-blue-500 p-2 rounded-lg"
              placeholder="Last Name"
              name="Lname"
              value={formData.Lname}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Email-id</label>
          <input
            type="email"
            className="border-2 border-solid border-blue-500 p-2 rounded-lg"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Message</label>
          <textarea
            className="border-2 border-solid border-blue-500 p-2 rounded-lg"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="flex my-8 w-full">
          <button
            type="submit"
            className={`bg-blue-500 text-white px-4 py-2 transition-transform duration-300 ${
              isSubmitting
                ? "transform translate-x-20"
                : isButtonAnimated
                ? `transform translate-x-${cursorPosition.x / 10}`
                : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
