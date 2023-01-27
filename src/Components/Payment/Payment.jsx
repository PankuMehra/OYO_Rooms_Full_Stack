import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import breakfast from "../Images/breakfastcards.png";
import { URL } from "../../URL";

const Payment = () => {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const {id} = useParams();
  useEffect(() => {
    setLoading(true);
    fetch(`${URL.hotel}/${id}`)
      .then((res) => res.json())
      .then((res2) => setData(res2))
      .catch((error) => setError(true))
      .finally(() => setLoading(false));
  }, []);
  console.log(data);

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
    <Box mt="50px">
      <Heading color={"red"}>Something went wrong please refresh</Heading>
    </Box>;
  }

  return (
    <Box>
      <Box p={"14px"} boxShadow="base">
        <Image
          w="95px"
          ml="12px"
          src=""
        />
      </Box>

      <Box textAlign={"left"} w="76%" m="auto">
        <Box m="10px" mt="30px">
          <Heading color="green">Great! Your stay is confirmed.</Heading>
          <Text as="b">
            You will soon recieve an email confirmation debuvats@gmail.com
          </Text>{" "}
          <br />
          <Button
            mt="30px"
            mb="30px"
            w="180px"
            h="40px"
            border="2px solid black"
            bg="white"
            color="black"
          >
            Print
          </Button>
        </Box>

        <Box p="20px" boxShadow="lg">
          <Heading fontSize="25px"> Booking ID</Heading>
          <Text mt="5px" as="p" fontSize="20px">
            abcd1234
          </Text>

          <hr
            style={{
              backgroundColor: "gray",
              height: "2px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          />

          <Box display="flex">
            <Box w="1000px">
              <Heading fontSize="lg">Hotel Grand Shiva</Heading>
              <Text>Gurugram</Text>

              <Heading mt="10px" fontSize="md">{`Hotel Direction`}</Heading>
              <Text>Huda city center</Text>

              <Heading mt="10px" fontSize="md">{`Primery Guest`}</Heading>
              <Text>{`1`}</Text>

              <Heading mt="5px" fontSize="md">{`Email address`}</Heading>
              <Text>{`debuvats@gmail.com`}</Text>

              <Heading mt="5px" fontSize="md">{`Phone Number`}</Heading>
              <Text>{`8979562342`}</Text>
            </Box>

            <Box>
              <Image
                w="300px"
                h="180px"
                src="https://images.oyoroomscdn.com/uploads/hotel_image/110705/medium/8d2715748dcae7f8.jpg"
              />
            </Box>
          </Box>

          <hr
            style={{
              backgroundColor: "gray",
              height: "2px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          />

          <box>
            <Image src="data:image/jpeg;base64,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" />
          </box>

          <hr
            style={{
              backgroundColor: "gray",
              height: "2px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Payment;
