// // mock
// const mockUpload = async () => {
//   // mock upload, then download, then response
//   // setUploadProgress() number
//   // setDownloadProgress() number
//   // response:
//   // url: string;
//   // originalFilename: string;
//   // originalFileSize: string;
//   // originalFormat: string;
//   // compressedSize: string;
//   // compressionPercentage: string;
//   // isError: boolean;
//   // error: string;

//   // code below to mock this functionality

//   // mock upload
//   setIsProcessingFiles(true);
//   setUploadProgress(50);
//   await new Promise((resolve) => setTimeout(resolve, 50000));
//   setUploadProgress(100);
//   // mock download
//   setDownloadProgress(50);
//   await new Promise((resolve) => setTimeout(resolve, 200000));
//   setDownloadProgress(100);
//   // mock response
//   const responseMock = {
//     url: "https://tinify.dev/api/download/box_black_v3.926e0b1a-5d62-46df-9a5c-42524c13d90a.png",
//     originalFilename: "box_black_v3.png",
//     originalFileSize: "86829",
//     originalFormat: "png",
//     compressedSize: "27613",
//     compressionPercentage: "68.19841297262435",
//     isError: false,
//     error: "",
//   };

//   setCompressedData(responseMock);
//   setCompressedFileInContext(responseMock as CompressResponse);
//   setIsCompressed(true);
//   hasCompressed.current = true; // Prevent future re-execution
//   setIsProcessingFiles(false);
// };

//mockUpload();
