import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    {
      message: 'Hello from EcoAção API!',
      timestamp: new Date().toISOString(),
      version: '1.0.0'
    },
    { status: 200 }
  );
}