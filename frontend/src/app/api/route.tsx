import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "test");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
