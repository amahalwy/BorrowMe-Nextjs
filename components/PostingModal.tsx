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
import { useDispatch, connect } from "react-redux";
import { clearModal } from "../redux/actions/postingActions";
import { ModalPosting, PostingCalendarProps } from "../typescript/interfaces";
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
    <Tabs>
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
}) => {
  const dispatch = useDispatch();
  const [showSelection, setShowSelection] = React.useState<string>("calendar");

  React.useEffect(() => {
    dispatch(clearModal());
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => dispatch(clearModal())}>
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader fontSize={28}>{modalPosting.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody p="0 5%">
            <AddressSection modalPosting={modalPosting} />
            <Selection
              showSelection={showSelection}
              setShowSelection={setShowSelection}
            />
            <Box>{showSelection === "calendar" ? <Calendar /> : <Map />}</Box>
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

export default connect(mSTP)(PostingCalendar);
