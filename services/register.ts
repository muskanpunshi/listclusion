import { handleResponse } from "@utils/api-helpers";

const SERVER_ENDPOINT =
  process.env.SERVER_ENDPOINT || process.env.NEXT_PUBLIC_API_URL;

export async function contactPostService(form: any): Promise<{
  message: string;
  partner_id: number;
  status: "success" | "error";
}> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/register`, {
    method: "POST",
    cache: "no-cache",
    headers: {
      Authorization: process.env.NEXT_PUBLIC_BEARER as string,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  return handleResponse(response);
}
