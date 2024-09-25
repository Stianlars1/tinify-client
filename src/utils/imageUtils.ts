export interface ImageFileInfo {
  originalName: string;
  originalSize: string;
  originalFormat: string;
  originalImage: string;
}
export const getOriginalFileInfo = (file: File): ImageFileInfo => {
  const originalName = file.name;
  const originalSize = formatFileSize(file.size); // format the size
  const originalFormat = file.type.split("/")[1].toUpperCase();
  const originalImage = URL.createObjectURL(file);
  return { originalName, originalSize, originalFormat, originalImage };
};
export const getResizeImagesInfo = (files: File[]): ImageFileInfo[] => {
  return files.slice(0, 3).map((file) => {
    return { ...getOriginalFileInfo(file) };
  });
};

export const formatFileSize = (sizeInBytes: number): string => {
  if (sizeInBytes >= 1024 * 1024) {
    return (sizeInBytes / (1024 * 1024)).toFixed(1) + " MB";
  } else if (sizeInBytes >= 1024) {
    return (sizeInBytes / 1024).toFixed(1) + " KB";
  } else {
    return sizeInBytes + " bytes";
  }
};

export const IMAGE_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z' stroke='black' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M9 11C10.1046 11 11 10.1046 11 9C11 7.89543 10.1046 7 9 7C7.89543 7 7 7.89543 7 9C7 10.1046 7.89543 11 9 11Z' stroke='black' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M21 15.0002L17.914 11.9142C17.5389 11.5392 17.0303 11.3286 16.5 11.3286C15.9697 11.3286 15.4611 11.5392 15.086 11.9142L6 21.0002' stroke='black' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A";
