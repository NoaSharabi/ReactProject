import { useDropzone } from 'react-dropzone';
import ImageIcon from '@mui/icons-material/Image';
import * as React from 'react';
const ImageUploader = ({ onImageUpload }) => {
    const onDrop = useCallback((acceptedFiles) => {
      const file = acceptedFiles[0];
      onImageUpload(file);
    }, [onImageUpload]);
  
    const { getRootProps, getInputProps } = useDropzone({ onDrop });
  
    return (
      <div>
        <div {...getRootProps()} style={{ cursor: 'pointer', marginTop: '1rem' }}>
          <input {...getInputProps()} />
          <ImageIcon fontSize="large" />
          <p>Click or drag 'n' drop an image here</p>
        </div>
      </div>
    );
  };
  export default ImageUploader