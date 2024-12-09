import { NextResponse } from "next/server";
import prisma from "../../../lib/prismadb"

export const GET = async (request, { params }) => {
  try { 
    const { id } = params; 
    const cats = id.split(','); 

    const posts = await prisma.post.findMany({
      where: {
        id 
      }
    });

    if (!posts) {
      return NextResponse.json(
        { message: "Post not found", err },
        { status: 404 }
      )
    }

    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
};

