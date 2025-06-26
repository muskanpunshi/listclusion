"use client";
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
import Link from "next/link";
import Paragraph from "@components/common/paragraph";
import Button from "@components/common/Button";

const InnerFaqs = () => {
  return (
    <div className=" sm:py-12">
      <Container className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
        <aside className="col-span-1">
          <div className="relative rounded-t-lg p-6 bg-[url('/template/shape/shape_28.svg')] bg-no-repeat bg-cover">
            <div className="bg-[#fefefe] rounded-lg py-8 px-5">
              <ul className="space-y-3">
                {faqData.map((link, index) => (
                  <li key={link.id_name}>
                    <Link
                      href={`#${link.id_name}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(link.id_name);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="flex items-center mb-5 space-x-2 text-2xl max-sm:text-lg text-secondary hover:text-primary transition-all "
                    >
                      <span>{index + 1}.</span>
                      <span>{link.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative rounded-b-lg p-6 bg-[url('/template/shape/shape_28.svg')] bg-no-repeat bg-cover">
            <div className="bg-[#fefefe] rounded-lg p-8 text-center">
              <Paragraph className="text-[30px]  mb-6 leading-snug">
                Don’t Find Your <br /> Answer?
              </Paragraph>
              <Button href="/contact" className="inline-block py-3 rounded-lg">
                Contact us
              </Button>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-2">
          {faqData.map((category) => (
            <div
              key={category.id}
              id={category.id_name}
              className={`mb-12 pt-2`}
            >
              <Paragraph className="font-semibold text-primary uppercase mb-6 ">
                {category.title}
              </Paragraph>
              <div className=" border-t border-b border-t-secondary/30 border-b-secondary/30">
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
