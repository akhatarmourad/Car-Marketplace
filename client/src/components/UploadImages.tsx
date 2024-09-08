import React, { useState } from 'react';
import { Input } from "./ui/input";
import { IoClose } from "react-icons/io5";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage, auth } from '../../configs/firebaseConfig';
import { Button } from './ui/button';

const UploadImages = () => {

    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const onFilesSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if(files !== null) {
            for(let i = 0; i < files.length; i++) {
                const file = files[i];
                setSelectedFiles((previousFiles) => [...previousFiles, file]);
            }
            console.log(selectedFiles);
        }
    }

    const removeFile = (index: number) => {
        const result = selectedFiles.filter((_, position) => position != index );
        setSelectedFiles(result);
    }

    const uploadPhotos = async () => {
        for (const file of selectedFiles) {
            const filename = Date.now().toString() + '.jpeg';
            const storageRef = ref(storage, `Car Marketplace/${filename}`);
            const metadata = {
                contentType: 'image/jpeg',
            };

            try {
                // Upload the file to firebase
                const snapshot = await uploadBytes(storageRef, file, metadata);
                // Get the download URL of the file
                const downloadUrl = await getDownloadURL(storageRef);

                console.log(snapshot, downloadUrl);
            }
            catch(error) {
                console.log("Error uploading : ", error);
            }
        }
    }

    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
                <div className='h-36'>
                    <label htmlFor="upload-images">
                        <div className="w-full h-full flex items-center justify-center border border-indigo-200 border-dashed rounded-xl p-5 bg-indigo-50 cursor-pointer hover:shadow-md transition-all">
                            <span className="text-indigo-400 text-lg">Upload Images</span>
                        </div>
                    </label>
                </div>

                <Input onChange={onFilesSelected} type='file' multiple={true} id='upload-images' className="hidden" />

                {/* Display selected files */}
                {
                    selectedFiles.map((image, index) => {
                        return (
                            <div key={index} className='h-36 relative border border-indigo-100 rounded-lg p-5 flex items-center justify-center overflow-hidden'>
                                <img src={URL.createObjectURL(image)} alt="Car"/>
                                <IoClose onClick={() => removeFile(index)} className="absolute top-2 left-2 text-lg cursor-pointer hover:scale-105 transition-all text-indigo-300" />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default UploadImages;