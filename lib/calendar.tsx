import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { useDispatch, connect } from "react-redux";
import { clearModal } from "../redux/actions/postingActions";
import { CalendarProps, CalendarState } from "../typescript/components";

const Calendar: React.FC<CalendarProps> = ({
  setShowSelection,
  modalPosting,
  currentUser,
}) => {
  const dispatch = useDispatch();

  const addDays = (date: Date, days: number) => {
    let newDate: Date = new Date(date.valueOf());
    newDate.setDate(newDate.getDate() + days);
    return newDate;
  };

  const handleSelect = () => {
    const dates: Date[] | any = getDates();

    const formData = new FormData();
    formData.append("postingId", modalPosting._id);
    formData.append("requestorId", currentUser.id);
    formData.append("requestorName", currentUser.firstName);
    formData.append("receiverId", modalPosting.ownerId);
    formData.append("requestDates", dates);
    formData.append("postingImage", modalPosting.image);
    formData.append("postingTitle", modalPosting.title);
    formData.append("amount", modalPosting.price);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   dispatch(createRequest(formData));
  //   setTimeout(() => {
  //     props.hideModal();
  //   }, 1);
  // };

  const [state, setState] = React.useState<CalendarState[]>([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const getDates = () => {
    const dateArray: Date[] = [];
    let currentDate: Date = state[0].startDate;

    while (currentDate <= state[0].endDate) {
      dateArray.push(new Date(currentDate));
      currentDate = addDays(currentDate, 1);
    }

    return dateArray;
  };

  return (
    <Box>
      <Box border="1px solid #ccc">
        <DateRange
          minDate={new Date()}
          editableDateInputs={true}
          onChange={(item: any) => {
            setState([item.selection]);
          }}
          moveRangeOnFirstSelection={false}
          ranges={state}
          scroll={{ enabled: true }}
        />
      </Box>
      <Box m="10px 0" d="flex" justifyContent="flex-end">
        {modalPosting.ownerId !== currentUser.id ? (
          <Button onClick={handleSelect}>Create Request</Button>
        ) : null}
        <Button
          colorScheme="blue"
          ml={3}
          onClick={() => {
            setShowSelection("calendar");
            dispatch(clearModal());
          }}
        >
          Close
        </Button>
      </Box>
    </Box>
  );
};

const mSTP = (state) => ({
  currentUser: state.session.user,
  modalPosting: state.entities.modal,
});

export default connect(mSTP)(Calendar);
