import React from "react";

import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import { cn } from "../Utils/cn";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="lg:h-screen bg-slate-600 flex items-centre w-full px-6" id="contact">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl mobile:rounded-xl p-4 md:p-8 shadow-input border-white border bg-black flex flex-col justify-around my-16 mobile:my-20">
        <h2 className="font-bold text-xl text-neutral-200">
          REACH OUT VIA THE FORM BELOW
        </h2>
        <form className="my-8" onSubmit={handleSubmit} method="POST">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" placeholder="Verma" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" placeholder="Creations" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="xyz.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="phone Number" className="text-white">Phone Number</Label>
            <Input id="number" placeholder="+91-9754103802" type="number" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="text" className="text-white">Write your thought</Label>
            <Input placeholder="Why you want to contact" type="text"></Input>
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Submit &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  )
}

export default ContactForm;