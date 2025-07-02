"use client";

import React, { ReactNode } from "react";
import Paragraph from "@components/common/paragraph";
import { cn } from "@utils/index";
import { ContactInfoProps } from "data/contactData";

const ContactInfo = ({ icon, title, links, className }: ContactInfoProps) => {
  return (
    <div
      className={cn(
        "flex items-center space-x-4 w-full sm:w-1/2 lg:w-1/3",
        className
      )}
    >
      <div className="lg:w-16 lg:h-16 h-14 w-14 rounded-full flex items-center justify-center bg-secondary shrink-0">
        <div className="text-white text-2xl">{icon}</div>
      </div>
      <div className="w-full overflow-hidden">
        <Paragraph className="text-lg font-medium">{title}</Paragraph>
        {links && (
           <div className="flex space-x-1 flex-wrap max-w-[90%]">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className=" sm:text-base text-sm  hover:text-primary transition-all duration-300 ease-in-out"
              >
                {link.label}
                {index < links.length - 1 && ","}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactInfo;
