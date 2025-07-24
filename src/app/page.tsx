import { db } from "~/server/db";
export const dynamic ="force-dynamic";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";
import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import Link from "next/link";
async function Images() {
  const images = await getMyImages();
  if (!images || images.length === 0) {
    return <div>No images found.</div>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              style={{ objectFit: "contain" }}
              width={192}
              height={192}
              alt={image.name}
            />
          </Link>
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}
export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text 2x1 text-center">Please sign in to upload images</div>
      </SignedOut>
      <SignedIn>
        <Images/>
      </SignedIn>
    </main>

  );
};
