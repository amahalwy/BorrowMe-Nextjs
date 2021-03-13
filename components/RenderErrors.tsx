import { ListIcon, ListItem, UnorderedList } from "@chakra-ui/layout";
import { IoMdCloseCircle } from "react-icons/io";

export const RenderErrors = ({ errors }) => {
  return (
    <UnorderedList styleType="none" ml="none">
      {Object.keys(errors).map((error, i) => {
        return (
          <ListItem key={`error-${i}`} color="red">
            <ListIcon as={IoMdCloseCircle} />
            {errors[error]}
          </ListItem>
        );
      })}
    </UnorderedList>
  );
};
