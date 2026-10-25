"use client"; 

export function ImageDefault({ src, fallbackSrc, alt, ...props }) {
  return (
    <img
      {...props}
      src={src}
      alt={alt}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = fallbackSrc;
      }}
    />
  );
}

