import Image from 'next/image';

const images = [
  {
    src: "https://images.unsplash.com/photo-1519419166318-4f5c601b8e96?q=80&w=2670&auto=format&fit=crop",
    alt: "Studio Setup",
    span: "col-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=2670&auto=format&fit=crop",
    alt: "Coding Setup",
    span: "row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1551817958-d9d86fb29431?q=80&w=2670&auto=format&fit=crop",
    alt: "Performance",
    span: ""
  },
  {
    src: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2672&auto=format&fit=crop",
    alt: "Music Production",
    span: "col-span-2"
  },
];

export default function Gallery() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative aspect-square overflow-hidden rounded-lg ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}