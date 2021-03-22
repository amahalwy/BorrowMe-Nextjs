import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { ProfileImageSectionProps } from "../../typescript/components";
import ImageUpload from "../ImageUpload";

const ProfileImageSection: React.FC<ProfileImageSectionProps> = ({
  state,
  imageSrc,
  isEditingForm,
  setImageSrc,
  setImageFile,
}) => {
  return (
    <>
      {state.loading ? null : (
        <Box m="0 auto" borderRadius="md" shadow="md" pos="relative">
          <Image
            opacity={!isEditingForm ? "1" : "0.4"}
            src={imageSrc}
            shadow="md"
            borderRadius="md"
            border={isEditingForm ? "1px solid black" : null}
          />

          {isEditingForm ? (
            <ImageUpload
              setImageSrc={setImageSrc}
              setImageFile={setImageFile}
            />
          ) : null}
        </Box>
      )}
    </>
  );
};

export default ProfileImageSection;
