export interface CompressResponse {
  url: string;
  originalFilename: string;
  originalFileSize: string;
  originalFormat: string;
  compressedSize: string;
  compressionPercentage: string;
  isError: boolean;
  error: string;
}
