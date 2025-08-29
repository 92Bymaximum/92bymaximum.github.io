
import React from 'react';

const GalleryItem: React.FC<{ imageUrl: string; index: number }> = ({ imageUrl, index }) => (
  <div className="group relative aspect-square overflow-hidden rounded-lg border-2 border-slate-700/50 shadow-lg">
    <img
      src={imageUrl}
      alt={`Gallery item ${index + 1}`}
      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-300"></div>
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="w-16 h-16 border-2 border-cyan-400 rounded-full flex items-center justify-center bg-black/50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
  </div>
);

const Gallery: React.FC = () => {
  const galleryImages = [
    "https://picsum.photos/id/10/800/800",
    "https://picsum.photos/id/1002/800/800",
    "https://picsum.photos/id/1015/800/800",
    "https://picsum.photos/id/1025/800/800",
    "https://picsum.photos/id/1043/800/800",
    "https://picsum.photos/id/1062/800/800",
    "https://picsum.photos/id/21/800/800",
    "https://picsum.photos/id/30/800/800",
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Creation Gallery</h2>
          <p className="text-gray-400 mt-4">Explore what's possible with Vadanite VaaS.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((url, index) => (
            <GalleryItem key={index} imageUrl={url} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
