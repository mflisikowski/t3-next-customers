"use client";

import { UploadButton } from "@/utils/uploadthing";

export function UploadImage() {
  return (
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        console.info("Files: ", res);
      }}
      onUploadError={(error: Error) => {
        console.error(`${error.message}`);
      }}
      onUploadBegin={(file: File | string) => {
        if (typeof file === "string") {
          console.info(`Uploading ${file}`);
        } else {
          console.info(`Uploading ${file.name}`);
        }
      }}
    />
  );
}
