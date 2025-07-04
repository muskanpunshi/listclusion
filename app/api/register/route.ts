import { getErrorResponse } from "@utils/api-helpers";
import { verifyCaptchaAction } from "@utils/recaptcha";
import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";
export async function POST(request: NextRequest) {
  const data = await request.json();
  const { payload, gReCaptchaToken, ...rest } = data;
  const verify = await verifyCaptchaAction(gReCaptchaToken);

  if (!verify) {
    return new NextResponse(
      JSON.stringify({
        message: "recaptcha token is not verify",
        status: "error",
      }),
      {
        status: 401,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  try {
    const response = await fetch(
      `https://listclusion.odoo.com/api/create_company`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          params: { ...payload },
        }),
      }
    );
    const result = await response.json();
    return new NextResponse(
      JSON.stringify({
        data: result,
        status: "success",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    return getErrorResponse(500, error.message);
  }
}
