import {
  Box,
  Heading,
  HStack,
  Image,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import CustomerDetails from "./CustomerDetails";
import HotelBookingDetails from "./HotelBookingDetails";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { URL } from "../../URL";
import "./Checkout.css";
import { Link, useParams } from "react-router-dom";

const Checkout = () => {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  let { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`${URL.hotel}/${id}`)
      .then((res) => res.json())
      .then((res2) => setData(res2))
      .catch((error) => setError(true))
      .finally(() => setLoading(false));
  }, []);
  // console.log(data)

  if (loading) {
    return (
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );
  }

  if (error) {
    return (
      <Box mt="50px">
        <Heading color={"red"}>Something went wrong please refresh</Heading>
      </Box>
    );
  }

  return (
    <Box m="0%">
      <Box
        p={"14px"}
        boxShadow="base"
        bgColor="white"
        position="sticky"
        top="0px"
      >
        <Link to="/">
          <Image
            w="95px"
            ml="12px"
            src="https://qph.cf2.quoracdn.net/main-qimg-b8bf0fbc22cdb8223cbb298ea1c0ca67"
          />
        </Link>
      </Box>

      <Box ml="200px" mt="30px" textAlign="left" color="red.500" mb="80px">
        <Link to={`/hotels/${id}`}>
          <Text style={{ color: "red.500", fontWeight: "600" }}>
            {" "}
            <ChevronLeftIcon /> Modify your booking{" "}
          </Text>
        </Link>
      </Box>

      <HStack
        display="flex"
        justifyContent="space-between"
        w="80%"
        m="auto"
        mt="30px"
      >
        <Box w="64%">
          <CustomerDetails data={data} />
        </Box>

        <Box w="34%">
          <HotelBookingDetails data={data} />
        </Box>
      </HStack>
    </Box>
  );
};

export default Checkout;
