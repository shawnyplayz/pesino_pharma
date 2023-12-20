import ContactForm from "@/components/contactform/ContactForm";
import React from "react";

function Contact() {
  return (
    <div>
      <div
        className="relative bg-cover bg-center flex w-fit"
        style={{ height: "auto" }}
      >
        {/* <!-- Background Image --> */}
        <div className="absolute inset-0 bg-cover bg-center bg-banner-manu"></div>{" "}
        {/* <!-- Gradient Overlay --> */}
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-blue-900"></div>
        {/* <!-- Your content goes here --> */}
        <div className="flex flex-col">
          <div className="relative flex-col flex items-center justify-center h-full text-white px-4 ">
            <div className="flex flex-col w-full h-full justify-start items-center gap-8 my-32">
              <div className="text-white font-medium text-6xl">CONTACT US</div>
              <div className="md:w-2/3 flex justify-center font-light text-3xl text-white">
                <p>
                  Discover high-quality pharmaceutical imports with Pesino
                  Pharma, an esteemed Indian manufacturer and exporter. We
                  specialize in importing premium raw materials and components
                  to ensure the excellence of our pharmaceutical products. Our
                  commitment to strict quality control, adherence to
                  international standards, and rigorous testing procedures sets
                  us apart.
                </p>
              </div>
            </div>
            <div className="bg-white my-32 rounded-2xl">
              <div className="flex flex-row w-full text-black">
                <div className="my-16 p-4 flex flex-col justify-center gap-40 md:flex-row">
                  <div className="left_side flex flex-col md:w-1/2 px-10 ml-8">
                    <div className="themeColor text-xl my-1 flex">
                      Contact Us
                    </div>
                    <div className="text-4xl font-semibold my-4  ">
                      Get In Touch
                    </div>
                    <div className="text-xl">
                      <p>
                        Explore our comprehensive pharmaceutical solutions and
                        experience the commitment to quality that defines Pesino
                        Pharma. Contact us today to discuss how we can meet your
                        specific requirements and contribute to your success in
                        the healthcare industry.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 my-8">
                      <div className="p-4 flex flex-col">
                        <h1 className="text-2xl my-2 font-semibold">
                          Phone Number
                        </h1>
                        <h1 className="text-xl font-normal">+91 9930992024</h1>
                      </div>

                      <div className="p-4">
                        <h1 className="text-2xl my-2 font-semibold">
                          Email address
                        </h1>
                        <h1 className="text-xl font-normal">
                          pesino_pharma@yahoo.co.in
                        </h1>
                      </div>

                      <div className=" p-4">
                        <h1 className="text-2xl my-2 font-semibold">Website</h1>
                        <h1 className="text-xl font-normal">
                          www.pesino-pharma.com
                        </h1>
                      </div>
                      <div className=" p-4">
                        <h1 className="text-2xl my-2 font-semibold">Address</h1>
                        <h1 className="text-xl font-normal">
                          11/B-405, Ashish Complex, Dahisar East, MUMBAI-400068,
                          INDIA.
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="right_side flex flex-col md:w-1/2 mr-8">
                    <div className="border-2 shadow-md rounded-3xl bg-blue-700">
                      <div className="bg-white flex w-full mt-8 p-4">
                        <div className="flex flex-col p-8 justify-around w-full gap-10">
                          <ContactForm />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end flex-col my-32 gap-8">
              <div className="text-white text-center font-medium text-6xl my-4">
                Consult us for the Meds you need now!
              </div>
              <div className="w-full flex justify-center text-center font-light text-3xl text-white">
                <p className="md:w-2/3">
                  Whether you are looking for specific medications,
                  collaborations, or have inquiries, our dedicated team is ready
                  to assist you. Consult Pesino Pharma for the meds you need,
                  and experience excellence in pharmaceutical solutions. Your
                  health is our priority!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
