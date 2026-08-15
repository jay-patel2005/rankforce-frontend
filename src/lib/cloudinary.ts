import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary using environment variables
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

/**
 * Uploads an image to Cloudinary server-side.
 * By default, requests transformation to WebP and Auto Quality.
 * 
 * @param file - the image file or base64 string
 * @param folder - optional folder in Cloudinary
 * @returns The optimized secure URL from Cloudinary
 */
export const uploadImage = async (file: string, folder: string = "rankwithjd") => {
  try {
    const result = await cloudinary.uploader.upload(file, {
      folder,
      fetch_format: "auto", // Automatically convert to best format (WebP/AVIF)
      quality: "auto",      // Optimize compression
    });

    return result.secure_url;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw error;
  }
};

export default cloudinary;
