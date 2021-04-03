import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { DateRange } from "react-date-range";
import { CalendarState } from "../typescript/components";

const Cal = () => {
  const addDays = (date: Date, days: number) => {
    let newDate: Date = new Date(date.valueOf());
    newDate.setDate(newDate.getDate() + days);
    return newDate;
  };

  const handleSubmit = () => {
    const dates = getDates();
    console.log(dates);
  };

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
    <Box w="100%">
      <Box
        d="flex"
        justifyContent="center"
        bg="white"
        p={4}
        shadow="md"
        borderWidth="1px"
        flex="1"
        borderRadius="md"
      >
        <DateRange
          minDate={new Date()}
          // editableDateInputs={true}
          onChange={(item: any) => {
            setState([item.selection]);
          }}
          moveRangeOnFirstSelection={false}
          ranges={state}
          scroll={{ enabled: true }}
          showPreview={false}
          // disabledDates={}
          // showDateDisplay={false}
        />
      </Box>
      <Button onClick={() => handleSubmit()}>Get Dates</Button>
    </Box>
  );
};

export default Cal;
