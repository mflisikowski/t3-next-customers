import { UploadButton } from "@/utils/uploadthing";

export default function AuthUserImageUpload() {
  return (
    <UploadButton
      className="bg-slate-800 ut-label:text-lg ut-allowed-content:ut-uploading:text-red-300"
      endpoint="imageUploader"
      onClientUploadComplete={(res) => console.info("Files: ", res)}
      onUploadError={(error: Error) => console.error(`${error.message}`)}
      content={{
        button({ ready }) {
          if (ready) return <div>Upload</div>;

          return "Getting ready...";
        },
        allowedContent({ ready, fileTypes, isUploading }) {
          if (!ready) return "Checking what you allow";
          if (isUploading) return "Seems like stuff is uploading";

          return `Stuff you can upload: ${fileTypes.join(", ")}`;
        },
      }}
    />
  );
}
