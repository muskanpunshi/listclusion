import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { BsFillChatQuoteFill } from "react-icons/bs";
import React, { ReactNode } from "react";

export type ContactInfoLink = {
  href?: string;
  label: string;
};

export type ContactInfoProps = {
  icon: ReactNode;
  title: string;
  links?: ContactInfoLink[];
  className?: string;
};

const contactData = [
  {
    icon: <FaEnvelope className="text-white lg:text-3xl text-2xl" />,
    title: "We’re always happy to help.",
    links: [
      {
        href: "mailto:info@listclusion.com",
        label: "info@listclusion.com",
      },
    ],
  },
  {
    icon: <IoCall className="text-white lg:text-3xl text-2xl" />,
    title: "Our hotline number",
    links: [
      { href: "tel:+923364027555", label: "+92 336 4027555" },
      // { href: "tel:+9913779731", label: "+991 377 9731" },
    ],
  },
  {
    icon: <FaLocationDot className="text-white lg:text-3xl text-2xl" />,
    title: "Address",
    links: [
      {
        label:
          "25 B1 31 Street Off Khayaban e Shamsheer DHA Phase V Ext karachi Pakistan, 75500",
        target: "_blank",
      },
    ],
  },
];

export default contactData;
