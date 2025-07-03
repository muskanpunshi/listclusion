"use client";
import { redirect } from "next/navigation";
import React from "react";

const Error = () => {
  redirect("/404");
};

export default Error;
