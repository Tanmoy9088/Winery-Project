// import React from "react";
import Location from "../assets/homePage/Location.jpg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// type ContactForm = {
//   name: string;
//   email: string;
//   message: string  undefined ;
// };
const ContactUs = () => {
  const contactSchema = yup.object({
    name: yup
      .string()
      .required("name is required")
      .min(3, "name must be at least 3 character"),
    email: yup
      .string()
      .required("email is required")
      .email("Please enter a valid email"),
    message: yup.string().required("Messeage something"),
  });

  type ContactForm = yup.InferType<typeof contactSchema>;

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
      <div className="flex items-center justify-evenly flex-wrap gap-20 px-10 py-5">
        <div className="">
          <h2 className="text-white mt-10 p-4">
            GET IN TOUCH & MEET <br />
            GREAT IN PERSON
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[28rem] flex flex-col justify-center items-center gap-6 text-white"
          >
            <div className="flex flex-col  w-80">
              <label>Name</label>
              <input
                className="p-2 rounded-lg "
                type="text"
                {...register("name")}
                placeholder="Enter name"
              />
              <p className="text-red-500 pt-1">{errors.name?.message}</p>
            </div>
            <div className="flex flex-col  w-80">
              <label>email</label>
              <input
                className="p-2 rounded-lg"
                type="text"
                {...register("email")}
                placeholder="Enter name"
              />
              <p className="text-red-500 pt-1">{errors.email?.message}</p>
            </div>
            <div className="flex flex-col w-80">
              <label>Message</label>
              <input
                className="p-2 rounded-lg"
                type="text"
                {...register("message")}
                placeholder="Enter yourMessage"
              />
              <p className="text-red-500 pt-1">{errors.message?.message}</p>
            </div>
            <button type="submit" className="text-white">
              Submit
            </button>
          </form>
        </div>
        <div className="w-96 text-white mt-10">
          <img src={Location} alt="" />
          <p className="uppercase">Locate us </p>
        </div>
        <div className="grid grid-cols-4 text-white justify-between w-full justify-items-center mt-10">
          <div className="flex flex-col">
            <p className="uppercase text-[#ffab5e]">Offcie</p>
            <p>Address</p>
            <p>Location</p>
            <p>Contact Us</p>
          </div>
          <div className="flex flex-col">
            <p className="uppercase text-[#ffab5e]">Offcie</p>
            <p>Address</p>
            <p>Location</p>
            <p>Contact Us</p>
          </div>
          <div className="flex flex-col">
            <p className="uppercase text-[#ffab5e]">Offcie</p>
            <p>Address</p>
            <p>Location</p>
            <p>Contact Us</p>
          </div>
          <div className="flex flex-col">
            <p className="uppercase text-[#ffab5e]">Offcie</p>
            <p>Address</p>
            <p>Location</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
