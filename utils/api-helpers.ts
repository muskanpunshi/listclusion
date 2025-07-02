// import toast from "@components/toast";
import { NextResponse } from "next/server";
import Swal from "sweetalert2";
import { ZodError } from "zod";

type EnvVariableKey = "JWT_SECRET_KEY" | "JWT_EXPIRES_IN";

export function getEnvVariable(key: EnvVariableKey): string {
  const value = process.env[key];

  if (!value || value.length === 0) {
    console.error(`The environment variable ${key} is not set.`);
    throw new Error(`The environment variable ${key} is not set.`);
  }

  return value;
}

export function getErrorResponse(
  status: number = 500,
  message: string,
  errors: ZodError | null = null
) {
  return new NextResponse(
    JSON.stringify({
      status: status < 500 ? "fail" : "error",
      message,
      errors: errors ? errors.flatten() : null,
    }),
    {
      status,
      headers: { "Content-Type": "application/json" },
    }
  );
}

export async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get("Content-Type") || "";
  const isJson = contentType.includes("application/json");
  const data = isJson ? await response.json() : await response.text();

  if (!response.ok) {
    if (isJson && data.errors !== null) {
      Swal.fire({
        position: "bottom-end",
        title: `${data.message || response.statusText}`,
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(JSON.stringify(data.errors), "data.errors");
    }

    Swal.fire({
      position: "bottom-end",
      title: `${data.message || response.statusText}`,
      showConfirmButton: false,
      timer: 1500,
    });

    console.log(data.message || response.statusText, "data.message");
  }

  // ✅ Handle Odoo structure
  if (data?.result) {
    return data.result as T;
  }

  return data as T;
}
