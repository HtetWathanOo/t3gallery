import Link from "next/link";
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
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          mockImages.map((image)=>(
            <div key={image.id} className="w-1/2 p-4">
              <img src={image.url} alt="image"/>
            </div>
          ))
        }
      </div>
        
      Hello (gallery in progress)
    </main>
      
  );
} 
