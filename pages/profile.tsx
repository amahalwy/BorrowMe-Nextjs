import React from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { NextPage } from "next";
import { useAsyncFn } from "react-use";
import { useRouter } from "next/router";
import { ProfileProps } from "../typescript/pages";
import ProfileInformation from "../components/Profile/ProfileInformation";
import { updateUser } from "../redux/actions/userActions";
import ProfileImageSection from "../components/Profile/ProfileImageSection";
import FormSection from "../components/Profile/Form";
import Loading from "../components/Profile/Loading";
import { ReduxState } from "../redux/types";

const Profile: NextPage<ProfileProps> = () => {
  if (typeof window === "undefined") return null;
  const router = useRouter();
  const dispatch = useDispatch();
  const currentUser = useSelector((state: ReduxState) => state.session.user);
  const isAuthenticated = useSelector(
    (state: ReduxState) => state.session.isAuthenticated
  );

  React.useEffect(() => {
    if (!isAuthenticated) router.push("/login");
  }, [isAuthenticated]);

  const [isEditingForm, setIsEditingForm] = React.useState<boolean>(false);
  const [imageSrc, setImageSrc] = React.useState<string | any>(
    currentUser.profilePhoto
  );
  const [imageFile, setImageFile] = React.useState<string | File>(
    currentUser.profilePhoto
  );

  const initialVals = {
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    address: currentUser.address,
    city: currentUser.city,
    state: currentUser.state,
    zipCode: currentUser.zipCode,
    file: imageFile,
  };

  const [state, fetch] = useAsyncFn(async (data) => {
    setIsEditingForm(false);
    return dispatch(updateUser(currentUser.id, data));
  }, []);

  interface Values {
    firstName?: string;
    lastName?: string;
    email?: string;
    address?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    file?: string | File;
  }
  const onSubmit = async (values: Values) => {
    const formData = new FormData();
    for (const key in values) {
      formData.append(key, values[key]);
    }

    fetch(formData);
  };

  return (
    <Box
      p={2}
      flex="1"
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      bg="white"
      w="90%"
      m="5% auto"
    >
      <Box w="90%" m="0 auto">
        <Box d="flex" justifyContent="center">
          <Heading fontSize={34}>Profile</Heading>
        </Box>
        <ProfileImageSection
          state={state}
          imageSrc={imageSrc}
          isEditingForm={isEditingForm}
          setImageFile={setImageFile}
          setImageSrc={setImageSrc}
        />
        {console.log(state)}
        {state.loading ? (
          <Loading />
        ) : isEditingForm ? (
          <FormSection initialVals={initialVals} onSubmit={onSubmit} />
        ) : (
          <ProfileInformation />
        )}
        <Box d="flex" justifyContent="center">
          <Button
            variant="edit-profile"
            onClick={() => setIsEditingForm(!isEditingForm)}
          >
            {!isEditingForm ? "Edit Profile" : "Cancel"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
