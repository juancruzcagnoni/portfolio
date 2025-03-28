import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/mongodb';
import Project from '@/app/models/Project';

export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find({}).sort({ createdAt: -1 });
    console.log('Projects found:', projects); // Para debugging
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error in GET /api/projects:', error); // Para debugging
    return NextResponse.json({ error: error.message }, { status: 500 });
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