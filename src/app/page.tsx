import { db } from "~/server/db";
export const dynamic ="force-dynamic";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";

export default async function HomePage() {
  const images= await db.query.image.findMany({
    orderBy: (model, {desc}) => desc(model.id),
  });

return (
    <main className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
    
        {[...images, ...images, ...images].map((image, index) => (
          <div key={image.id +"-"+ index} className="flex w-48 flex-col p-4">
            <img src={image.url} alt="image" className="w-full h-auto rounded-lg shadow-md"/>
            <div> {image.name} </div>
          </div>
        ))}
      </div>
    </main>

  );
};
