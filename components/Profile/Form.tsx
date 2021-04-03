import { Box, Button } from "@chakra-ui/react";
import React from "react";
import RenderEditProfileInputs from "../RenderEditProfileInputs";
import { Form } from "react-final-form";
import { ProfileFormSectionProps } from "../../typescript/components";

const FormSection: React.FC<ProfileFormSectionProps> = ({
  onSubmit,
  initialVals,
}) => {
  return (
    <Box m="0">
      <Form
        onSubmit={onSubmit}
        initialValues={initialVals}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <RenderEditProfileInputs />
            <Button variant="edit-profile" type="submit">
              Submit
            </Button>
          </form>
        )}
      />
    </Box>
  );
};

export default FormSection;
