import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const time = req.nextUrl.searchParams.get("time")

  // mock logic (replace with DB)
  const data = {
    table010: Math.random() > 0.5 ? "booked" : "available",
    table020: Math.random() > 0.5 ? "booked" : "available",
    table030: Math.random() > 0.5 ? "booked" : "available",
    table040: Math.random() > 0.5 ? "booked" : "available",
    table050: Math.random() > 0.5 ? "booked" : "available",
    table060: Math.random() > 0.5 ? "booked" : "available",
  }

  return NextResponse.json(data)
}