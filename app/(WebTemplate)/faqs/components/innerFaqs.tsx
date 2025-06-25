"use client";
import React from "react";
import faqData from "../../../../data/faqData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/radix/ui/accordion";
import { cn } from "@utils/index";
import Container from "@components/container";
import Link from "next/link";
import Heading from "@components/heading";
import Paragraph from "@components/paragraph";
import Button from "@components/Button";

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
                      onClick={() => {
                        const el = document.getElementById(link.id_name);
                        if (el) {
                          const offset = 100;
                          const y =
                            el.getBoundingClientRect().top +
                            window.scrollY -
                            offset;

                          window.scrollTo({
                            top: y,
                            behavior: "smooth",
                          });
                        }
                      }}
                      className="flex items-center mb-5 space-x-2 text-2xl max-sm:text-lg text-text-primary hover:text-primary transition-all "
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
            <div key={category.id} className={`mb-12 pt-2`}>
              <Paragraph
                id={category.id_name}
                className="font-semibold text-primary uppercase mb-6 scroll-mt-36 "
              >
                {category.title}
              </Paragraph>
              <div className=" border-t border-b border-t-text-primary/10 border-b-text-primary/10">
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
      <Container className="hidden">
        <div className=" bg-white lg:px-10 px-4">
          {faqData.map((category) => (
            <div
              key={category.id}
              id={category.id_name}
              className={`mb-12 grid lg:grid-cols-3 grid-cols-1`}
            >
              <div className="lg:col-span-1 lg:py-8">
                <Paragraph className="text-xl max-sm:text-lg font-semibold text-primary uppercase mb-6">
                  {category.title}
                </Paragraph>
              </div>
              <div className="lg:col-span-2  max-lg:border-t border-b border-t-text-primary/10 border-b-text-primary/10">
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
