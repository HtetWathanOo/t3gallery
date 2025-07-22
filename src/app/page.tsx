import Link from "next/link";
import { db } from "~/server/db";
const mockUrls= [
  "https://1vusvrntsn.ufs.sh/f/UGqYrZEKlItDBr95Yj0lwuI2VfFEnYgNZ3SsCRxi8Jev40PQ",
  "https://1vusvrntsn.ufs.sh/f/UGqYrZEKlItDcOEpow6uyCeRFlX9I7B35tYmkSHqV60pbEnD",
  "https://1vusvrntsn.ufs.sh/f/UGqYrZEKlItDvpk1s9OKEoCrHFftqu2zkyMIecdNZSUVLsw9",
"https://1vusvrntsn.ufs.sh/f/UGqYrZEKlItDbTqqI5H2BKRaUHSlfkWjc4FqXe1xdv8E9hCz"
]
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default async function HomePage() {
  const posts= await db.query.posts.findMany();

  console.log(posts);
  return (
    <main className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id +"-"+ index} className="w-1/2 p-4">
            <img src={image.url} alt="image" className="w-full h-auto rounded-lg shadow-md"/>
          </div>
        ))}
        
        </div>     
    </main>
      
  );
} 
