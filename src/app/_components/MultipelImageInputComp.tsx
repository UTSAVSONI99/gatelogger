"use client";

import { useState } from "react";

interface MultipelImageInputCompProps {
  name: string;
  label: string;
  description?: string;
  accept?: string;
  maxFiles?: number;
}

export default function MultipelImageInputComp({
  name,
  label,
  description,
  accept = "image/*",
  maxFiles = 5,
}: MultipelImageInputCompProps) {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    if (selectedFiles.length + files.length > maxFiles) {
      alert(`You can upload a maximum of ${maxFiles} files.`);
      return;
    }
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const removeFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <p className="text-sm text-gray-500">{description}</p>
      <input
        id={name}
        type="file"
        accept={accept}
        multiple
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
      />
      <div className="flex flex-wrap gap-4 mt-4">
        {files.map((file, index) => (
          <div key={index} className="relative">
            <img
              src={URL.createObjectURL(file)}
              alt={file.name}
              className="w-28 h-28 rounded-md border object-cover"
            />
            <button
              type="button"
              onClick={() => removeFile(index)}
              className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full px-2 py-1"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
