import { NextResponse } from 'next/server';
export async function POST(request: Request) { 
  const data = await request.json();
  console.log("Webhook n8n:", data);
  return NextResponse.json({ received: true }); 
}
