import { search } from "@/lib/cloudinary";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

export async function GET(request: Request, res: NextApiResponse) {
  const results = await search();
  return Response.json({ ...results });
}

export async function POST(request: Request) {
  const params = await request.json();
  const results = await search(params);
  return Response.json({ ...results });
}
