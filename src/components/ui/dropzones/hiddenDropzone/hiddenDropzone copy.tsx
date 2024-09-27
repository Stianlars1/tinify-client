// "use client";
// import { FileUploadContext } from "@/providers/FileProvider";
// import { memo, useContext, useEffect, useState } from "react";
// import styles from "./css/hiddenDropzone.module.css";

// export const HiddenDropZone = memo(
//   ({
//     allowMultiple = true,
//     onLoaded,
//   }: {
//     allowMultiple?: boolean;
//     onLoaded?: () => void;
//   }) => {
//     const context = useContext(FileUploadContext);
//     const { files, setFiles } = context;
//     const [isOver, setIsOver] = useState(false);
//     const [hasDropped, setHasDropped] = useState(false);

//     useEffect(() => {
//       onLoaded && onLoaded();
//     }, []);
//     const onDrop = () => {
//       setHasDropped(true);
//       setIsOver(false);

//       setTimeout(() => {
//         setHasDropped(false);
//       }, 2500);
//     };
//     const handleDrop = (event: React.DragEvent) => {
//       event.preventDefault();
//       const droppedFiles = Array.from(event.dataTransfer.files); // Convert FileList to Array
//       if (files && setFiles && droppedFiles.length > 0) {
//         setFiles([...files, ...droppedFiles]); // Append new files to existing files
//       }
//       onDrop && onDrop();
//     };

//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//       const selectedFiles = Array.from(event.target.files || []); // Convert FileList to Array

//       if (allowMultiple && files && setFiles && selectedFiles.length > 0) {
//         setFiles([...files, ...selectedFiles]); // Append new files to existing files
//       } else {
//         setFiles(selectedFiles);
//       }
//       onDrop && onDrop();
//     };

//     const handleDragOver = (event: React.DragEvent) => {
//       event.preventDefault();
//       setIsOver(true);
//     };

//     const handleDragLeave = (event: React.DragEvent) => {
//       event.preventDefault();
//       setIsOver(false);
//     };
//     return (
//       <>
//         <label
//           onDragOver={handleDragOver}
//           onDragLeave={handleDragLeave}
//           onDrop={handleDrop}
//           className={`${styles.hiddenDropzone} ${isOver ? styles.isOver : ""}`}
//           htmlFor="dropzone"
//         >
//           {isOver && hasDropped && (
//             <div className={styles.backdropText}>Thank you 🎉</div>
//           )}

//           {isOver && !hasDropped && (
//             <div className={styles.backdropText}>Drop&apos;em 🔥</div>
//           )}
//         </label>
//         <input
//           onClick={(e) => e.preventDefault()}
//           onChange={handleChange}
//           style={{ display: "none" }}
//           type="file"
//           multiple={allowMultiple}
//           id="dropzone"
//         />
//       </>
//     );
//   }
// );
