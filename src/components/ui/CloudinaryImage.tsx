"use client";

import { CldImage, CldImageProps } from "next-cloudinary";

interface CloudinaryImageProps extends Omit<CldImageProps, "src"> {
  src: string;
}

/**
 * A reusable wrapper around next-cloudinary's CldImage.
 * Automatically requests optimized formats (WebP/AVIF) and responsive sizing from Cloudinary.
 */
export default function CloudinaryImage({ src, alt, ...props }: CloudinaryImageProps) {
  return (
    <CldImage
      src={src}
      alt={alt || "Image"}
      format="auto"    // Force auto format (WebP by default)
      quality="auto"   // Force auto quality for best optimization
      {...props}
    />
  );
}
