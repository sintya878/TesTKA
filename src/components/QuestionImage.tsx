import React from 'react';

interface QuestionImageProps {
  imageSvg?: string;
  imageUrl?: string;
  caption?: string;
  className?: string;
}

export const QuestionImage: React.FC<QuestionImageProps> = ({
  imageSvg,
  imageUrl,
  caption,
  className = '',
}) => {
  const src =
    imageUrl && imageUrl.trim().length > 0
      ? imageUrl.trim()
      : imageSvg && imageSvg.trim().length > 0
      ? `data:image/svg+xml;utf8,${encodeURIComponent(imageSvg)}`
      : null;

  if (!src) return null;

  return (
    <figure
      className={`my-4 rounded-xl border border-slate-200 bg-slate-50/70 p-3 flex flex-col items-center ${className}`}
    >
      <img
        src={src}
        alt={caption || 'Ilustrasi gambar soal matematika'}
        referrerPolicy="no-referrer"
        className="max-w-full w-auto max-h-64 rounded-lg object-contain select-none pointer-events-none"
      />
      {caption && (
        <figcaption className="mt-2 text-[11px] text-slate-500 font-medium text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
