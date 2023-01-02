// import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "react-alice-carousel/lib/alice-carousel.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import WifiIcon from "@mui/icons-material/Wifi";
import CameraswitchIcon from "@mui/icons-material/Cameraswitch";
import ElevatorIcon from "@mui/icons-material/Elevator";
import { Link } from "react-router-dom";
// import Footer from "../Components/footer/Footer";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { Skeleton, Box } from "@mui/material";
import { URL } from "../../URL";
import "./HotelDesc.css";
import Navbar1 from "../HomePage/Navbar1";
import Carousel from "react-material-ui-carousel";
import { IoLocationSharp } from "react-icons/io5";
import { BiWifi } from "react-icons/bi";
import {
  GiCarBattery,
  GiCctvCamera,
  GiElevator,
  GiSecurityGate,
} from "react-icons/gi";
import { BsCheck2Circle, BsFillPatchCheckFill } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import { WiSnowflakeCold } from "react-icons/wi";
import { RiTempColdLine } from "react-icons/ri";
import { SlScreenDesktop } from "react-icons/sl";
import { FaRegMoneyBillAlt } from "react-icons/fa";
function HotelDesc() {
  const [data, setData] = useState([]);
  const [roomDetails, setRoomDetails] = useState();
  const { _id } = useParams();
  let [isLoading, setIsLoading] = useState(true);
  let [isError, setIsError] = useState(false);
  let x = React.useRef(0);

  // const {city} = useSelector(state => state.Search);

  console.log("_id:", _id);
  const getDetails = () => {
    return fetch(`${URL.hotel}/${_id}`)
      .then((res) => res.json())
      .then((res) => {
        setRoomDetails(res);
        // setRoomDetails(
        //   res?.filter((rooms) => rooms._id === parseInt(_id))
        // );
        setIsLoading(false);
        console.log(roomDetails);
        // slideImages = [
        //   {
        //     url: roomDetails.mainImage,
        //   },
        //   {
        //     url: roomDetails.image1,
        //   },
        //   {
        //     url: roomDetails.images2,
        //   },
        //   {
        //     url: roomDetails.images3,
        //   },
        //   {
        //     url: roomDetails.images4,
        //   },
        //   {
        //     url: roomDetails.images5,
        //   }
        // ];
      })
      .catch((res) => {
        setIsError(true);
      });
  };

  useEffect(() => {
    getDetails();
  }, []);

  console.log(roomDetails);

  //   let { isLoading, isError } = useSelector((state) => state.app, shallowEqual);
  if (isLoading)
    return (
      <Skeleton
        animation="wave"
        height={10}
        width="80%"
        style={{ marginBottom: 6 }}
      />
    );

  let clickLeftButton = () => {
    x++;
    // if (x > 0) {
    //   x = -3;
    // }
    document.getElementById(
      "all-Items-slidebar-mover"
    ).style.transform = `translateX(${x * 50}%)`;
  };

  let clickRightButton = () => {
    x--;
    // if (x < -3) {
    //   x = 0;
    // }
    document.getElementById(
      "all-Items-slidebar-mover"
    ).style.transform = `translateX(${x * 50}%)`;
  };

  const items = [
    roomDetails.mainImage,
    roomDetails.image1,
    roomDetails.image2,
    roomDetails.image3,
    roomDetails.image4,
  ];
  const facilityIcons = [
    {
      icon: <BiWifi />,
      facility: "Free Wi-Fi",
    },
    {
      icon: <BsCheck2Circle />,
      facility: "Reception",
    },
    {
      icon: <AiFillCar />,
      facility: "Parking facility",
    },
    {
      icon: <GiCctvCamera />,
      facility: "CCTV cameras",
    },
    {
      icon: <GiCarBattery />,
      facility: "Power backup",
    },
    {
      icon: <GiElevator />,
      facility: "Elevator",
    },
    {
      icon: <WiSnowflakeCold />,
      facility: "AC",
    },
    {
      icon: <RiTempColdLine />,
      facility: "Geyser",
    },
    {
      icon: <SlScreenDesktop />,
      facility: "TV",
    },
    {
      icon: <GiSecurityGate />,
      facility: "Security",
    },
  ];
  return (
    <>
      <Navbar1 />
      <Box display="flex" justifyContent="space-around">
        <Box width="49%" height="90%">
          <Carousel>
            {items.map((item, i) => (
              <img key={i} src={item} className="main-image" />
            ))}
          </Carousel>
        </Box>
        <Box width="49%" height="90%">
          <Carousel>
            {items.map((item, i) => (
              <img key={i} src={item} className="main-image" />
            ))}
          </Carousel>
        </Box>
      </Box>
      <div>
        {/* {roomDetails.map((i) => ( */}
        <div>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              margin: "5%",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                paddingLeft: "20px",

                width: "50%",
              }}
            >
              <div style={{ display: "flex" }}>
                <div>
                  <h2>{roomDetails.hotelName}</h2>
                  <p style={{ color: "#c4c4c4" }}>{roomDetails.address}</p>
                </div>
                <div style={{ marginLeft: "25px", paddingTop: "5px" }}>
                  {/* <h3
                    style={{
                      border: "1px solid red",
                      padding: "5px",
                      color: "red",
                    }}
                  >
                    {roomDetails.rating}
                    <span style={{ color: "rgb(243,146,66)" }}>★</span>
                  </h3> */}
                  <button
                    style={{
                      background: "rgb(82,181,32)",
                      color: "white",
                      border: "none",
                      borderRadius: "3px",
                      padding: "5px 12px",
                      // marginRight: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "18px",
                      fontWeight: "bolder",
                    }}
                  >
                    &nbsp; {roomDetails.rating} ★
                  </button>
                  <p
                    style={{
                      backgroundColor: "rgb(239 239 239)",
                      fontSize: "12px",
                      textAlign: "center",
                    }}
                  >
                    {roomDetails.ratingCount}
                  </p>
                </div>
              </div>
              <div style={{ textAlign: "left" }}>
                <h5>Description</h5>
                <p
                  style={{
                    color: "rgba(0,0,0,0.7)",
                    fontWeight: "100",
                    wordSpacing: "2px",
                  }}
                >
                  {roomDetails.info}
                </p>
                <div>
                  <h6 style={{ color: "#ee2e24" }}>Read more</h6>
                </div>
              </div>
              <div>
                <h5>Amenities</h5>
              </div>
              <Box>
                <Box
                  display="flex"
                  gap="2rem"
                  marginBottom="10px"
                  marginTop="10px"
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    gap="5px"
                    height="35px"
                    alignItems="center"
                    color="#222"
                    fontSize="15px"
                  >
                    {facilityIcons.map((elem) => {
                      if (elem.facility == roomDetails.facility1) {
                        return elem.icon;
                      }
                    })}{" "}
                    <p> {roomDetails.facility1} &nbsp;</p>{" "}
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    gap="5px"
                    height="35px"
                    alignItems="center"
                    color="#222"
                    fontSize="15px"
                  >
                    {facilityIcons.map((elem) => {
                      if (elem.facility == roomDetails.facility2) {
                        return elem.icon;
                      }
                    })}{" "}
                    <p> {roomDetails.facility2} &nbsp;</p>{" "}
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    gap="5px"
                    height="35px"
                    alignItems="center"
                    color="#222"
                    fontSize="15px"
                  >
                    {facilityIcons.map((elem) => {
                      if (elem.facility == roomDetails.facility3) {
                        return elem.icon;
                      }
                    })}{" "}
                    <p> {roomDetails.facility3} &nbsp;</p>{" "}
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    gap="5px"
                    height="35px"
                    alignItems="center"
                    color="#222"
                    fontSize="15px"
                  >
                    {" "}
                    <p> {roomDetails.facilityX} &nbsp;</p>{" "}
                  </Box>
                </Box>
              </Box>
              {/* <div style={{ display: "flex", gap: "2rem" }}>
                <div>
                  <p>🛏 AC</p>
                </div>
                <div>
                  <p>🚘 Parking Facility</p>{" "}
                </div>
                <div>
                  {" "}
                  <p>🙏 Reception</p>{" "}
                </div>
              </div> 
              <div style={{ display: "flex", gap: "2rem" }}>
                <div>
                  <p>
                    <WifiIcon /> Free Wifi
                  </p>
                </div>
                <div>
                  <p>📺 TV</p>
                </div>
                <div>
                  <p>
                    <CameraswitchIcon /> CCTV Camera
                  </p>
                </div>
                <div>
                  <p>
                    <ElevatorIcon /> Elevator
                  </p>
                </div>
              </div> */}
              {/* <div style={{ color: "red" }}>
                <h3>Show More</h3>
              </div> */}
              <div>
                <div>
                  <h2>Choose your room</h2>
                </div>
                <div
                  style={{
                    border: "1px solid rgb(215,215,215)",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                >
                  <div
                    style={{
                      background: "#7c809b",
                      paddingLeft: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    <p>
                      <span style={{ color: "yellow" }}>★</span>{" "}
                      <span
                        style={{
                          color: "white",
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                      >
                        SELECTED CATEGORY
                      </span>
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingTop: "14px",
                      borderBottom: "1px solid #74747428",
                    }}
                  >
                    <Box>
                      <Box>
                        <h5>
                          Classic (2X) <BsFillPatchCheckFill color="#2ed56b" />
                        </h5>
                        <p style={{ fontSize: "15px" }}>Room size: 156 sqft</p>
                      </Box>
                      <Box
                        display="flex"
                        gap="2rem"
                        marginBottom="10px"
                        marginTop="10px"
                      >
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          gap="5px"
                          height="35px"
                          alignItems="center"
                          color="#222"
                          fontSize="15px"
                        >
                          {facilityIcons.map((elem) => {
                            if (elem.facility == roomDetails.facility2) {
                              return elem.icon;
                            }
                          })}{" "}
                          <p> {roomDetails.facility2} &nbsp;</p>{" "}
                        </Box>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                          gap="5px"
                          height="35px"
                          color="#222"
                          fontSize="15px"
                          width="130px"
                        >
                          {facilityIcons.map((elem) => {
                            if (elem.facility == roomDetails.facility3) {
                              return elem.icon;
                            }
                          })}{" "}
                          <p> {roomDetails.facility3} &nbsp;</p>{" "}
                        </Box>
                      </Box>
                    </Box>
                    <div style={{ padding: "5px" }}>
                      <img
                        src={roomDetails.image1}
                        alt="img"
                        height="120px"
                        style={{ borderRadius: "10px", marginLeft: "50px" }}
                      />
                    </div>
                  </div>

                  <Box
                    padding="12px"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box
                      display="flex"
                      justifyContent="space-between"
                    >
                      <h5>₹ {roomDetails.price}</h5>
                      <p
                        style={{
                          textDecoration: "line-through",
                          color:"gray",
                          marginLeft: "8px"
                        }}
                      >
                        ₹ {roomDetails.strikedPrice}
                      </p>
                    </Box>
                    <Box>
                      <button
                        style={{
                          cursor: "pointer",
                          border: "1px solid rgb(215,215,215)",
                          backgroundColor: "white",
                          fontSize: "12px",
                          fontWeight: "700",
                          width: "150px",
                          padding: "10px",
                          borderRadius: "5px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <BsFillPatchCheckFill color="#2ed56b" /> SELECTED
                      </button>
                    </Box>
                  </Box>
                </div>
              </div>
            </div>
            {/* Checkout section */}
            <div style={{ border: "1px solid rgb(240,240,240)" }}>
              <div
                style={{
                  background: "rgb(241,85,63)",
                  padding: "10px",
                  color: "white",
                }}
              >
                <span>LOG IN NOW TO GET EXCLUSIVE DEALS</span>
                <span style={{ marginLeft: "60px" }}>
                  <button
                    style={{
                      borderRadius: "4px",
                      padding: "3px",
                      color: "white",
                      background: "rgb(247,139,123)",
                      border: "1px solid rgb(247,139,123)",
                    }}
                  >
                    LOGIN
                  </button>
                </span>
              </div>
              <div style={{ margin: "20px" }}>
                <div>
                  <p style={{ lineHeight: "5px", textAlign: "left" }}>
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        lineHeight: "24px",
                        color: "rgb(238,42,35)",
                      }}
                    >
                      ₹{roomDetails.price}
                    </span>
                    <span
                      style={{
                        textDecoration: "line-through",
                        fontSize: "10px",
                        lineHeight: "25px",
                        color: "rgb(180,186,188)",
                        marginLeft: "1rem",
                      }}
                    >
                      ₹
                      {(
                        (roomDetails.price * 100) /
                        (100 - roomDetails.discount)
                      ).toFixed(2)}
                    </span>
                    <span
                      style={{ color: "rgb(246,178,75)", marginLeft: "1rem" }}
                    >
                      {roomDetails.discount}% off
                    </span>
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      color: "rgb(163,169,172)",
                      fontSize: "14px",
                      textAlign: "left",
                    }}
                  >
                    Inclusive of all taxes
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    border: "2px solid rgb(240,240,240)",
                    boxShadow: "1px 1px 3px gray",
                  }}
                >
                  <div
                    style={{
                      borderRight: "1px solid rgb(240,240,240)",
                      padding: "10px",
                    }}
                  >
                    Sun, 16 Jan - Mon, 17 Jan
                  </div>
                  <div
                    style={{
                      borderRight: "1px solid white",
                      padding: "10px",
                    }}
                  >
                    1 Room, 2 Guests
                  </div>
                </div>
                <div
                  style={{
                    border: "2px solid rgb(240,240,240)",
                    boxShadow: "1px 1px 3px gray",
                    marginTop: "15px",
                    padding: "10px",
                  }}
                >
                  Dluxe (3X)
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "16rem",
                    margin: "20px",
                    color: "rgb(34,34,34)",
                  }}
                >
                  <div>OyoRoom Coupon applied</div>
                  <div>₹{89}✅</div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "12rem",
                    margin: "20px",
                    color: "rgb(34,34,34)",
                  }}
                >
                  <div>Savae 5% with Wizard membership</div>
                  <div>-₹52</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    textAlign: "left",
                    marginLeft: "20px",
                    background: "rgb(247,247,247)",
                    gap: "10rem",
                  }}
                >
                  <div style={{ padding: "10px" }}>
                    <p>Wizard Blue at s special price</p>
                    <p>Get additional benefits upto ₹1000</p>
                  </div>
                  <div style={{ display: "flex", padding: "10px" }}>
                    <div
                      style={{
                        padding: "10px",
                        width: "80px",
                        paddingTop: "0px",
                      }}
                    >
                      <p>₹99</p>
                      <p style={{ textDecoration: "line-through" }}>₹199</p>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    textAlign: "left",
                    gap: "17.5rem",
                  }}
                >
                  <div>
                    <div style={{ margin: "20px" }}>Your savings</div>
                    <div style={{ margin: "20px" }}>Total price</div>
                    <div style={{ margin: "20px" }}>
                      <span>(Incl. of all taxes)</span>
                    </div>
                  </div>
                  <div>
                    <div style={{ margin: "20px" }}>
                      ₹{roomDetails.strikedPrice - roomDetails.price}
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                      ₹{roomDetails.price}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    margin: "20px",
                    background: "green",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <Link
                    to={`/checkout/${_id}`}
                    style={{
                      padding: "20px",
                      background: "green",
                      textDecoration: "none",
                      color: "white",
                      cursor: "pointer",
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    Continue to Book
                  </Link>
                </div>
                <div
                  style={{ margin: "20px", color: "red", textAlign: "left" }}
                >
                  Cancellation Policy ©️
                </div>
                <div
                  style={{ margin: "20px", color: "red", textAlign: "left" }}
                >
                  Follow safety measures advised at the hotel
                </div>
                <div
                  style={{ margin: "20px", color: "red", textAlign: "left" }}
                >
                  <span style={{ color: "rgb(158,158,158)" }}>
                    {" "}
                    By proceeding, you agree to our
                  </span>{" "}
                  Guest Policies.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* )) */}
        {/* } */}
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default HotelDesc;
