interface ImageFileInfo {
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

export const formatFileSize = (sizeInBytes: number): string => {
  if (sizeInBytes >= 1024 * 1024) {
    return (sizeInBytes / (1024 * 1024)).toFixed(1) + " MB";
  } else if (sizeInBytes >= 1024) {
    return (sizeInBytes / 1024).toFixed(1) + " KB";
  } else {
    return sizeInBytes + " bytes";
  }
};
