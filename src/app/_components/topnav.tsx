"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/dist/client/components/navigation";
import { UploadButton } from "~/utils/uploadthing";
export function TopNav() {
    const router = useRouter();
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>

      <div className="flex flex-row items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton endpoint="imageUploader"
          onClientUploadComplete={() => {router.refresh();}}
          onUploadBegin={() => console.log("Upload started")}
  onUploadProgress={(progress) => console.log("Progress:", progress)}
  onUploadError={(error) => console.error("Upload failed", error)} />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
