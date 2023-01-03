import { StarIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack, Text, Image } from "@chakra-ui/react";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiReceiptTax } from "react-icons/hi";

const HotelBookingDetails = ({ data }) => {
  const roomCount = localStorage.getItem("roomCount") || 1;
  const guestCount = localStorage.getItem("guestCount") || 1;

  const bookingStartDate = localStorage.getItem("start") || new Date();
  const bookingEndDate = localStorage.getItem("finish") || new Date();

  return (
    <Box p="20px" w="100%" h="480px" border="1px solid gray">
      <HStack display="flex" justifyContent="space-between">
        <Box textAlign="left">
          <Heading as="h4" size="sm">{`${data.hotelName}`}</Heading>
          <Text pb="2px" mt="5px" as="p" display="flex" alignItems="center">
            <StarIcon color="#1ab64f" fontSize="15px" /> &nbsp;{" "}
            {`${data.rating} rating`}
          </Text>
          <Text mt="5px" as="b">
            {" "}
            Night
          </Text>
        </Box>
        <Box>
          <Image
            h="60px"
            ml={"10px"}
            borderRadius="5px"
            w="80px"
            src={`${data.image1}`}
          />
        </Box>
      </HStack>

      <Box mt="10px" textAlign="left" display="flex">
        <Box
          pt="10px"
          pb="10px"
          pr="10px"
          display="flex"
          borderBottom="0.1px solid gray"
          borderRight="0.1px solid gray"
        >
          <Box p={"5px"}>
            <FaRegCalendarAlt />
          </Box>
          <Box>{`${bookingStartDate}  -  ${bookingEndDate}`}</Box>
        </Box>
        <Box p="10px" borderBottom="0.1px solid gray">
          {`${roomCount} Room, ${guestCount} Guests`}
        </Box>
      </Box>

      <Box pt="10px" pb="10px" pr="10px" display="flex">
        <Box p={"5px"}>
          <FaRegCalendarAlt />
        </Box>
        <Box> Classic (2X)</Box>
      </Box>

      <Box mt="30px" display="flex" justifyContent="space-between">
        <Box>Room price for 1 Night X {guestCount} Guests</Box>
        <Box as="b">₹{`${data.strikedPrice}`}</Box>
      </Box>

      <Box mb="30px" mt="30px" display="flex" justifyContent="space-between">
        <Box>{`${data.discount}`} Coupon Discount</Box>
        <Box as="b">-{`${data.discount}`}</Box>
      </Box>

      <hr />

      <Box mt="30px" mb="30px" display="flex" justifyContent="space-between">
        <Box>
          <Text as={"p"}>Payable Amount</Text>
          <Box display="flex" alignItems="center">
            <HiReceiptTax color="#1ab64f" fontSize="15px" />{" "}
            <Text as={"p"} fontSize="xs">inclusive of all taxes</Text>
          </Box>
        </Box>
        <Box>
          <Text as="b" fontSize="2xl">
            ₹{`${data.price}`}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default HotelBookingDetails;
