import React, { useState } from "react";
import Footer from "../Footer/Footer";

const Inquire = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    apt: "",
    city: "",
    state: "",
    zipCode: "",
    moveInDate: "",
    additionalNotes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <>
      <div className="mt-12 px-6 md:px-12 lg:px-[130px] bg-customGrey flex flex-wrap lg:flex-nowrap gap-8 lg:gap-[100px] h-auto">
        {/* Form Section */}
        <div className="w-full lg:w-2/3">
          <div className="flex flex-col lg:flex-row items-start lg:items-end gap-4 mt-12">
            <h1 className="text-4xl md:text-5xl lg:text-[70px] leading-[1.1] font-thin text-customVision font-CanelaTrial">
              INQUIRE
            </h1>
            <p className="text-base lg:text-lg text-customVision font-AdobeGaramondPro">
              Kindly fill out the form below, and a member of our team will reach out to you shortly.
            </p>
          </div>

          <hr className="mt-6 border text-customGray" />

          <form onSubmit={handleSubmit} className="space-y-6 mt-8">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-customGray font-medium">
                  FIRST NAME <span className="text-customGray">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full py-2 bg-customGrey border-b border-gray-300 focus:border-customVision outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 text-customGray font-medium">
                  LAST NAME <span className="text-customGray">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full py-2 bg-customGrey border-b border-gray-300 focus:border-customVision outline-none"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block mb-2 text-customGray font-medium">
                EMAIL ADDRESS <span className="text-customGray">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full py-2 bg-customGrey border-b border-gray-300 focus:border-customVision outline-none"
              />
            </div>

            {/* Address Fields */}
            <div>
              <label className="block mb-2 text-customGray font-medium">APT#</label>
              <input
                type="text"
                name="apt"
                value={formData.apt}
                onChange={handleChange}
                className="w-full py-2 bg-customGrey border-b border-gray-300 focus:border-customVision outline-none"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block mb-2 text-customGray font-medium">
                  CITY <span className="text-customGray">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full py-2 bg-customGrey border-b border-gray-300 focus:border-customVision outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 text-customGray font-medium">
                  STATE <span className="text-customGray">*</span>
                </label>
                <select
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full py-2 bg-customGrey border-b border-gray-300 focus:border-customVision outline-none text-customGray"
                >
                  <option value="" disabled>
                    Select a State
                  </option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  {/* Add remaining states */}
                </select>
              </div>
              <div>
                <label className="block mb-2 text-customGray font-medium">
                  ZIP CODE <span className="text-customGray">*</span>
                </label>
                <input
                  type="text"
                  name="zipCode"
                  required
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full py-2 bg-customGrey border-b border-gray-300 focus:border-customVision outline-none"
                />
              </div>
            </div>

            {/* Date Field */}
            <div>
              <label className="block mb-2 text-customGray font-medium">
                DESIRED MOVE-IN DATE <span className="text-customGray">*</span>
              </label>
              <input
                type="date"
                name="moveInDate"
                required
                value={formData.moveInDate}
                onChange={handleChange}
                className="w-full py-2 bg-customGrey border-b border-gray-300 focus:border-customVision outline-none text-customGray"
              />
            </div>

            {/* Notes Field */}
            <div>
              <label className="block mb-2 text-customGray font-medium">ADDITIONAL NOTES</label>
              <textarea
                name="additionalNotes"
                rows="4"
                value={formData.additionalNotes}
                onChange={handleChange}
                className="w-full py-2 bg-customGrey border-b border-gray-300 focus:border-customVision outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-between items-center pb-[100px]">
              <button
                type="submit"
                className="py-2 font-GTAmericaTrial bg-customGrey text-customGray border border-solid border-customGray text-lg rounded-md hover:bg-opacity-90"
                style={{ width: "116px" }}
              >
                Submit
              </button>
              <p className="text-customGray font-AdobeGaramondPro text-sm text-right leading-5">
                *Required Field
              </p>
            </div>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6 mt-12 lg:mt-[200px]">
          <h2 className="text-customGray font-GTAmericaTrial font-medium leading-[14px]">CONTACT</h2>
          <p className="text-sm text-customGray font-AdobeGaramondPro">
            The Modern Marvel <br />
            139 Arrandale Avenue <br />
            Great Neck, NY 11024
          </p>
          <p className="text-customGray">
            <strong className="text-sm font-GTAmericaTrial font-medium leading-[14px]">
              CONTACT EMAIL
            </strong>{" "}
            <br />
            <span className="font-AdobeGaramondPro">Natanel@reavis.com</span>
          </p>
          <p className="text-customGray">
            <strong className="text-sm font-GTAmericaTrial font-medium leading-[14px]">
              CONTACT PHONE
            </strong>{" "}
            <br />
            <span className="font-AdobeGaramondPro">646-361-3276</span>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Inquire;
