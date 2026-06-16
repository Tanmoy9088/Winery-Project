// import React from 'react'

import { HighlighArray } from "../services/HighlightArray.json";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Location from "../assets/homePage/Location.jpg";
type ContactForm = {
  name: string;
  email: string;
  message: string;
};
const EndSection = () => {
  const contactSchema = yup.object({
    name: yup
      .string()
      .required("name is required")
      .min(3, "name must be at least 3 character"),
    email: yup
      .string()
      .required("email is required")
      .email("Please enter a valid email"),
    message: yup
      .string()
      .min(15, "sentence must be at least 15 character long"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = (data: ContactForm) => {
    console.log("FormData", data);
    alert("Thank you for contacting us");
    reset();
  };
  return (
    <>
      <div className="px-4 py-10 border border-[#33271F]">
        <div className="flex flex-col w-full">
          <h1 className="uppercase text-[#C9D1D9] px-10 font-light">
            The best recipes and <br /> old tradition
          </h1>
          <div className="h-full flex flex-wrap justify-between gap-4 text-[#C9D1D9] mt-6 px-10 text-center">
            {HighlighArray.map((highlight) => (
              <div
                key={highlight.id}
                className="flex flex-wrap flex-col items-center border-t-4 border-x-4 border-[#33271F] border-spacing-12 rounded-t-full rounded-b-full"
              >
                <img
                  src={highlight.image}
                  alt=""
                  className="h-64 w-full rounded-t-full rounded-b-lg"
                />
                <div className="pb-20 px-4">
                  {" "}
                  <h4 className="uppercase bg-gradient-to-l from-white to-[#FFAB5E] bg-clip-text text-transparent px-2 py-1">
                    {highlight.name}
                  </h4>
                  <p className="text-sm">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex items-center justify-between flex-wrap px-10 py-10">
          <div className="flex flex-col justify-center border border-[#2A2F36] rounded-xl p-2">
            <h3 className="text-[#C9D1D9] mt-2 p-4">
              GET IN TOUCH & MEET <br />
              GREAT IN PERSON
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" flex flex-col justify-center items-center gap-6 text-[#C9D1D9] py-5"
            >
              <div className="flex flex-col  w-80">
                <label>Name</label>
                <input
                  className="p-2 rounded-lg bg-[#0D1117] text-[#C9D1D9] border border-[#2A2F36] focus:outline-none focus:border-[#58A6FF]"
                  type="text"
                  {...register("name")}
                  placeholder="Enter name"
                />
                <p className="text-red-500 pt-1">{errors.name?.message}</p>
              </div>
              <div className="flex flex-col  w-80">
                <label>Email</label>
                <input
                  className="p-2 rounded-lg bg-[#0D1117] text-[#C9D1D9] border border-[#2A2F36] focus:outline-none focus:border-[#58A6FF]"
                  type="text"
                  {...register("email")}
                  placeholder="Enter email"
                />
                <p className="text-red-500 pt-1">{errors.email?.message}</p>
              </div>
              <div className="flex flex-col w-80">
                <label>Message</label>
                <input
                  className="p-2 rounded-lg bg-[#0D1117] text-[#C9D1D9] border border-[#2A2F36] focus:outline-none focus:border-[#58A6FF]"
                  type="text"
                  {...register("message")}
                  placeholder="Enter yourMessage"
                />
                <p className="text-red-500 pt-1">{errors.message?.message}</p>
              </div>
              <button
                type="submit"
                className="w-80 bg-[#58A6FF] text-[#04284A] border border-[#2A2F36] rounded-xl px-2 py-1 font-medium hover:bg-[#79B9FF] transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="text-[#C9D1D9] p-2">
            <img src={Location} alt="" className="rounded-md" />
            <p className="uppercase">Locate us </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EndSection;
