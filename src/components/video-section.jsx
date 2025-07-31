import React from 'react';

const videoUrls = [
  'https://www.youtube.com/embed/dQw4w9WgXcQ',
  'https://www.youtube.com/embed/9bZkp7q19f0',
  'https://www.youtube.com/embed/kJQP7kiw5Fk',
  'https://www.youtube.com/embed/fJ9rUzIMcZQ',
  'https://www.youtube.com/embed/M7lc1UVf-VE',
  'https://www.youtube.com/embed/ZZ5LpwO-An4',
  'https://www.youtube.com/embed/hFZFjoX2cGg',
  'https://www.youtube.com/embed/y6120QOlsfU',
  'https://www.youtube.com/embed/RgKAFK5djSk',
];

function ScenicGrid() {
  return (
    <div className="p-0 bg-black overflow-hidden">
      <div className="grid grid-cols-12 gap-0 auto-rows-[minmax(200px,_auto)]">
        {videoUrls.map((url, idx) => {
          // Define per-video grid size manually (based on layout in screenshot)
          const layoutClasses = [
            'col-span-12 md:col-span-7 row-span-2',
            'col-span-6 md:col-span-2 row-span-1',
            'col-span-6 md:col-span-3 row-span-',
            'col-span-6 md:col-span-3 row-span-2',
            'col-span-6 md:col-span-4 row-span-1',
            'col-span-6 md:col-span-5 row-span-1',
            'col-span-6 md:col-span-2 row-span-1',
            'col-span-6 md:col-span-2 row-span-1',
            'col-span-12 md:col-span-3 row-span-2',
          ];

          return (
            <div key={idx} className={`${layoutClasses[idx]} relative w-full h-full aspect-video`}>
              <iframe
                src={url}
                title={`YouTube video ${idx + 1}`}
                className="absolute top-0 left-0 w-full h-full rounded-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ScenicGrid;
