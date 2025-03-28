import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/mongodb';
import Project from '@/app/models/Project';

export const revalidate = 3600; // revalidar cada hora

export async function GET() {
  try {
    console.log('Connecting to MongoDB...');
    await connectDB();
    console.log('Connected successfully');

    console.log('Fetching projects...');
    const projects = await Project.find({}).sort({ createdAt: -1 }).lean();
    console.log('Projects found:', projects.length);

    return NextResponse.json(projects);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    return NextResponse.json(
      { 
        error: 'Internal Server Error', 
        details: error.message,
        stack: error.stack 
      }, 
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    const project = await Project.create(data);
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 