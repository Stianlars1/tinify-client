export interface ImageResponse {
  url: string;
  originalFilename: string;
  originalFileSize: string;
  originalFormat: string;
  compressedSize: string;
  compressionPercentage: string;
  isError: boolean;
  error: string;
}
export interface ResizedImages extends ImageResponse {
  width: number | string;
  height: number | string;
  scale: number | string;
  keepAspectRatio: boolean;
}
