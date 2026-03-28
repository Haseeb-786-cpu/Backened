import { v2 as cloudinary } from 'cloudinary';
import fs from fs;

cloudinary.config({ 
  cloud_name: 'Haseeb', 
  api_key: '226116653583369', 
  api_secret: 'ruWP4ytu7Fg6xwdYJeFU1SjpTPk'
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}



export {uploadOnCloudinary}