"use client";

import React, { ReactNode } from "react";
import Paragraph from "@components/common/paragraph"; 
import { cn } from "@utils/index"; 
import { ContactInfoProps } from "data/contactData";



const ContactInfo = ({
  icon,
  title,
  links,
  className,
}: ContactInfoProps) => {
  return (
    <div className={cn("flex items-center space-x-4 max-sm:w-full", className)}>
      <div className="lg:w-16 lg:h-16 h-14 w-14 rounded-full flex items-center justify-center bg-secondary">
        {icon}
      </div>
      <div>
        <Paragraph className="text-lg font-medium">{title}</Paragraph>
         {links && (
          <div className="flex space-x-1 flex-wrap">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:underline hover:text-primary transition-all duration-300 ease-in-out"
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
