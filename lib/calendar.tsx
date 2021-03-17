import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { useDispatch, connect } from "react-redux";
import { clearModal } from "../redux/actions/postingActions";

// Date.prototype.addDays = function (days: number) {
//   let date: Date = new Date(this.valueOf());
//   date.setDate(date.getDate() + days);
//   return date;
// };

const Calendar = ({ modalPosting, currentUser }) => {
  return null; //Needs further testing for Date.addDays function => TypeError when building
  // const dispatch = useDispatch();

  // const handleSelect = () => {
  //   const dates = getDates();
  //   console.log(dates);
  // };

  // const selectionRange = {
  //   startDate: new Date(),
  //   endDate: null,
  //   key: "selection",
  // };

  // const [state, setState] = React.useState([
  //   {
  //     startDate: new Date(),
  //     endDate: null,
  //     key: "selection",
  //   },
  // ]);

  // const getDates = () => {
  //   const dateArray = [];
  //   let currentDate = state[0].startDate;

  //   while (currentDate <= state[0].endDate) {
  //     dateArray.push(new Date(currentDate));
  //     currentDate = currentDate.addDays(1);
  //   }

  //   return dateArray;
  // };

  // return (
  //   <Box>
  //     <Box border="1px solid #ccc">
  //       <DateRange
  //         minDate={new Date()}
  //         editableDateInputs={true}
  //         onChange={(item: any) => {
  //           setState([item.selection]);
  //         }}
  //         moveRangeOnFirstSelection={false}
  //         ranges={state}
  //         scroll={{ enabled: true }}
  //       />
  //     </Box>
  //     <Box>
  //       {modalPosting.ownerId !== currentUser.id ? (
  //         <Button onClick={handleSelect}>Create Request</Button>
  //       ) : null}
  //       <Button
  //         colorScheme="blue"
  //         mr={3}
  //         onClick={() => dispatch(clearModal())}
  //       >
  //         Close
  //       </Button>
  //     </Box>
  //   </Box>
  // );
};

const mSTP = (state) => ({
  currentUser: state.session.user,
  modalPosting: state.entities.modal,
});

export default connect(mSTP)(Calendar);
