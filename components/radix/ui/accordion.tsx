"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { cn } from "@utils/index";



const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-text-primary/10 ", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  iconWrapperClassName?: string;
  iconClassName?: string;
}

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(
  (
    { className, children, iconWrapperClassName, iconClassName, ...props },
    ref
  ) => (
    <AccordionPrimitive.Header className="flex w-full items-center justify-between">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "group flex w-full items-center justify-between py-6 text-xl  max-md:text-lg transition-all text-left text-text-primary font-medium ",
          className
        )}
        {...props}
      >
        <span>{children}</span>
        <span
          className={cn(
            " p-3 max-md:p-1  ",
            iconWrapperClassName
          )}
        >
          <FaPlus
            className={cn(
              "h-4 w-4 shrink-0  group-data-[state=open]:hidden",
              iconClassName
            )}
          />
          <FaMinus
            className={cn(
              "h-4 w-4 shrink-0  group-data-[state=closed]:hidden",
              iconClassName
            )}
          />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-xl max-md:text-base    text-text-primary data-[state=open]:animate-[slideDown_300ms_ease-out] data-[state=closed]:animate-[slideUp_300ms_ease-out]  ",
      className
    )}
    {...props}
  >
    <div className="mb-4">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
