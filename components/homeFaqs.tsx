"use client";
import React, { useRef } from "react";

import { FaqResponse } from "@utils/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@components/radix/ui/accordion";
import { cn } from "@utils/index";
import Heading from "@components/common/heading";
import Button from "@components/common/Button";
import Container from "./container";
import Paragraph from "./common/paragraph";
import IconXShape from "@shapes/iconXShape";
import useElementVisibility from "@hooks/useInView";

const HomeFaqs = ({ faqs }: { faqs: FaqResponse[] }) => {
    const ref = useRef(null);
  const isVisible = useElementVisibility(ref);
  return (
    <section className="bg-[#f3f3f3] py-24" ref={ref}>
      <Container className="flex flex-col lg:flex-row   gap-16 ">
        <div className={`relative lg:w-[45%] w-full ${isVisible? 'fade-in-left': ''}`}>
          <Heading className="leading-tight  mb-6">
            Frequently Asked Questions
          </Heading>
          <Paragraph className="text-secondary mb-10">
            Don’t find the answer? We can help you.
          </Paragraph>
          <Button
            href="/faqs"
            className=" text-white border-0 px-6 py-3 mt-4 "
          >
            ASK QUESTIONS
          </Button>
        </div>

        <div className="relative lg:w-[55%] w-full bg-[url('/template/shape/shape_28.svg')] bg-no-repeat bg-center bg-cover py-[40px] px-[45px] max-md:p-[12px]  ">
          <div className="absolute hidden lg:block left-[-23%] bottom-0 ">
            <IconXShape className="animate-[spin-slow_80s_linear_infinite] w-42 h-42  max-xl:h-32 max-xl:w-32 max-md:w-24 max-md:h-24" />
          </div>

          <div className="px-5 bg-white ">
            <Accordion type="single" collapsible>
              {faqs.slice(0, 4).map((faq, index, arr) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className={cn(index === arr.length - 1 && "border-none")}
                >
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeFaqs;
