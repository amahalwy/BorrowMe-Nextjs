import React from "react";
import { ImageUploadProps } from "../typescript/components";
import { AiFillCamera } from "react-icons/ai";
import { Box, IconButton, Input } from "@chakra-ui/react";

const ImageUpload: React.FC<ImageUploadProps> = ({
  setImageSrc,
  setImageFile,
}) => {
  const _handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImageFile(file);
      setImageSrc(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const inputRef = React.useRef<any>();

  return (
    <Box pos="absolute" top="4px" right="4px">
      <IconButton
        aria-label="Upload Picture"
        onClick={() => inputRef.current.click()}
        icon={<AiFillCamera />}
      />
      <Input
        d="none"
        ref={inputRef}
        type="file"
        onChange={_handleImageChange}
      />
    </Box>
  );
};

export default ImageUpload;
