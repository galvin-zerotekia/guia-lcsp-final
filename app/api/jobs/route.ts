import { NextResponse } from 'next/server';
export async function POST(request: Request) { return NextResponse.json({ jobId: "job_123", status: "queued" }); }
