import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react";
import { connect } from "react-redux";
import { clearModal } from "../redux/actions/postingActions";
import { PostingCalendarProps } from "../typescript/components";
import { ModalPosting } from "../redux/types";
import Calendar from "../lib/calendar";
import Map from "../lib/map";

const AddressSection: React.FC<{ modalPosting: ModalPosting }> = ({
  modalPosting,
}) => {
  return (
    <Box mb="10px">
      <Text>{`${modalPosting.address}, ${modalPosting.city} (${modalPosting.state})`}</Text>
    </Box>
  );
};

const Selection: React.FC<{
  showSelection: string;
  setShowSelection: (s) => void;
}> = ({ setShowSelection }) => {
  const handleSelect = (value) => {
    setShowSelection(value);
  };
  return (
    <Tabs mb="10px">
      <TabList>
        <Tab onClick={() => handleSelect("calendar")}>Calendar</Tab>
        <Tab onClick={() => handleSelect("map")}>Map</Tab>
      </TabList>
    </Tabs>
  );
};

const PostingCalendar: React.FC<PostingCalendarProps> = ({
  isOpen,
  modalPosting,
  currentUser,
  clearModal,
}) => {
  const [showSelection, setShowSelection] = React.useState<string>("calendar");

  React.useEffect(() => {
    clearModal();
  }, []);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          clearModal();
          setShowSelection("calendar");
        }}
      >
        <ModalOverlay />
        <ModalContent w={{ base: "90%", lg: "100%" }}>
          <ModalHeader fontSize={28}>{modalPosting.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody p="0 5%" h="100px">
            <AddressSection modalPosting={modalPosting} />
            <Selection
              showSelection={showSelection}
              setShowSelection={setShowSelection}
            />
            <Box d="flex" justifyContent="center">
              {showSelection === "calendar" ? (
                <Calendar setShowSelection={setShowSelection} />
              ) : (
                <Map />
              )}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const mSTP = (state) => ({
  currentUser: state.session.user,
  modalPosting: state.entities.modal,
});

const mDTP = {
  clearModal: clearModal,
};

export default connect(mSTP, mDTP)(PostingCalendar);
