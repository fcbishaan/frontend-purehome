import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const limitParam = searchParams.get("limit");
    const limit = Math.min(Math.max(parseInt(limitParam || "10", 10) || 10, 1), 25);

    const token = process.env.INSTAGRAM_ACCESS_TOKEN;
    if (!token) {
      return NextResponse.json({ data: [] }, { status: 200 });
    }

    const fields = [
      "id",
      "caption",
      "media_url",
      "permalink",
      "thumbnail_url",
      "media_type",
      "timestamp",
    ].join(",");

    const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}&limit=${limit}`;

    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) {
      return NextResponse.json({ data: [] }, { status: 200 });
    }
    const json = await res.json();

    return NextResponse.json(json, { status: 200 });
  } catch (e) {
    return NextResponse.json({ data: [] }, { status: 200 });
  }
}
