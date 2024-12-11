import { NextResponse } from "next/server";
import prisma from "../../../lib/prismadb";

export const GET = async (request, { params }) => {
  try {
    // Ensure `params` is awaited before accessing `id`
    const { id } = await params; 

    if (!id) {
      return NextResponse.json(
        { message: "Invalid request, no ID provided" },
        { status: 400 }
      );
    }

    const cats = id.split(",");

    const posts = await prisma.post.findMany({
      where: {
        id: {
          in: cats, // Assuming `id` should handle multiple values
        },
      },
    });

    if (!posts || posts.length === 0) {
      return NextResponse.json(
        { message: "Post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "GET Error", error: err.message },
      { status: 500 }
    );
  }
};
