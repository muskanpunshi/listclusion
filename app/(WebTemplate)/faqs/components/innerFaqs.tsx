import React from "react";
import faqData from "../../../../data/faqData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@components/radix/ui/accordion";
import { cn } from "@utils/index";
import Container from "@components/container";

const links = [
  { id: "Selling", label: "Selling" },
  { id: "Renting", label: "Renting" },
  { id: "Buying", label: "Buying" },
  { id: "Payments", label: "Payments" },
  { id: "Terms", label: "Terms & Conditions" },
  { id: "Account", label: "Account" }
];

const InnerFaqs = () => {
  return (
    <div className=" mx-auto px-4 py-12">
      <Container className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <aside className="col-span-1">
          <div className="space-y-10">
           
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="flex items-center space-x-2 text-gray-700 hover:text-black transition"
                    >
                      <span className="font-medium">{index + 1}.</span>
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

           
            <div className="bg-gray-50 rounded-lg p-6 text-center shadow-sm">
              <h4 className="text-lg font-semibold mb-6 leading-snug">
                Don’t Find Your <br /> Answer?
              </h4>
              <a
                href="/contact"
                className="inline-block bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition"
              >
                Contact us
              </a>
            </div>
          </div>
        </aside>

    
        <div className="lg:col-span-2">
          {faqData.map((category) => (
            <div
              key={category.id}
              id={category.id_name}
              className={`mb-12 ${category.md_pt ? "md:pt-12" : ""}`}
            >
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-6">
                {category.title}
              </h3>
              <div className="divide-y divide-gray-200 border-t border-b">
                <Accordion key={category.id} type="single" collapsible>
                  {category.faq.map((item, index, arr) => (
                    <AccordionItem
                      key={index}
                      value={`item-${item.id}`}
                      className={cn(index === arr.length - 1 && "border-none")}
                    >
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default InnerFaqs;
