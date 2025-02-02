import Link from "next/link";

const mockUrls = [
    "https://dpu8td6gf6.ufs.sh/f/1B8ZjCs0ihpWAPGB638yhVN1JXqikDGswYxpbWfI64nlCQE0",
    "https://dpu8td6gf6.ufs.sh/f/1B8ZjCs0ihpWs7vkW3Xo2mqJYtVA9kMeb4gn35dHuPlO0rfR",
    "https://dpu8td6gf6.ufs.sh/f/1B8ZjCs0ihpW9iforYIQKB91msJyaXZR20jdzkLpW4TuxM7C",
    "https://dpu8td6gf6.ufs.sh/f/1B8ZjCs0ihpWyfjpmmVDapXQEg7cIPVG4zr38fb1qeYm5vWw",
    "https://dpu8td6gf6.ufs.sh/f/1B8ZjCs0ihpW1GZ05Ls0ihpWX7jAOJEyVHvPU2D6Q8nxqNGf",
    "https://dpu8td6gf6.ufs.sh/f/1B8ZjCs0ihpW6IgUzqL3z9kbTgx3rMo4dQKvhHW1DwlinVeF",    
];
    const mockImages = mockUrls.map((url, index) => ({
        id: index + 1,
        url
    }))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap">
      {mockImages.map((image) => (
            <div key={image.id} className="w-1/2 p-4">
                <img src={image.url}/>
            </div>
      ))}
      </div>
    </main>
  );
}
