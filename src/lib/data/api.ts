import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

type Params = {
  slug: string;
};

export const get = async <T extends Params>(request: Request, data: T[]) => {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);
  const slug = params.get("slug");

  if (slug) {
    const match = data.find((p) => p.slug === slug);
    if (match) {
      return NextResponse.json([match]);
    }
    return notFound();
  }

  return NextResponse.json(data);
};
