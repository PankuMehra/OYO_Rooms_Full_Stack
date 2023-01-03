import React from "react";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  Skeleton,
  Stack,
  Card,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";

import { SelectChangeEvent } from "@mui/material/Select";
import { IoLocationSharp } from "react-icons/io5";
import { BiWifi } from "react-icons/bi";
import {
  GiCarBattery,
  GiCctvCamera,
  GiElevator,
  GiSecurityGate,
} from "react-icons/gi";
import { BsCheck2Circle } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import { WiSnowflakeCold } from "react-icons/wi";
import { RiTempColdLine } from "react-icons/ri";
import { SlScreenDesktop } from "react-icons/sl";
import { GrStakeholder } from "react-icons/gr";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import styles from "./style.css";
import { Link } from "react-router-dom";
import WifiIcon from "@mui/icons-material/Wifi";
import CameraswitchIcon from "@mui/icons-material/Cameraswitch";
import ElevatorIcon from "@mui/icons-material/Elevator";
import Carousel from "react-material-ui-carousel";
import Footer from "../HomePage/Footer/Footer";
import { getHotelRooms } from "./api";
import { filterHotelRooms } from "./filter";
import Navbar1 from "../HomePage/Navbar1";
import { margin } from "@mui/system";
function HotelItem({
  hotelName,
  address,
  mainImage,
  image1,
  image2,
  image3,
  image4,
  city,
  distance,
  info,
  rating,
  ratingCount,
  ratingStatus,
  facility1,
  facility2,
  facility3,
  facilityX,
  price,
  discount,
  strikedPrice,
  id,
  _id,
}) {
  const items = [mainImage, image1, image2, image3, image4];
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
    {
      icon: <GrStakeholder />,
      facility: "Caretaker",
    },
  ];
  return (
    <>
      <Box display="flex" borderBottom="1px solid #e1e2e3" paddingBottom="45px">
        <Box width="40%">
          <Carousel>
            {items.map((item, i) => (
              <img
                key={i}
                style={{ height: "270px" }}
                src={item}
                className="main-image"
              />
            ))}
          </Carousel>
        </Box>
        <Box
          width="8.2%"
          height="270px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <img
            style={{ height: "52px" }}
            src={mainImage}
            alt="img"
            className="short-image"
          />
          <img
            style={{ height: "52px" }}
            src={image1}
            alt="img"
            className="short-image"
          />
          <img
            style={{ height: "52px" }}
            src={image2}
            alt="img"
            className="short-image"
          />
          <img
            style={{ height: "52px" }}
            src={image3}
            alt="img"
            className="short-image"
          />
          <img
            style={{ height: "52px" }}
            src={image4}
            alt="img"
            className="short-image"
          />
        </Box>
        <Box
          width="52%"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          paddingLeft="12px"
        >
          <Box display="flex">
            <Box width="75%" display="grid">
              <h3 className="hotelName">{hotelName}</h3>
              <Box display="flex">
                <Box width="80%">
                  <p className="all-p-tags">{address}</p>
                </Box>
                <Box
                  width="20%"
                  display="flex"
                  justifyContent="space-evenly"
                  alignItems="center"
                  color="#222"
                >
                  <IoLocationSharp color="#ef4023" />
                  <p className="all-p-tags">{distance}</p>
                </Box>
              </Box>
            </Box>
            <Box
              width="25%"
              color="#ef4023"
              fontSize="14px"
              fontWeight="600"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <p style={{ width: "85%" }}>{info}</p>
            </Box>
          </Box>
          <Box>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  marginBottom: "10px",
                  marginTop: "10px",
                  display: "flex",
                  // alignItems:"flex-end",
                }}
              >
                <button
                  style={{
                    background: "rgb(82,181,32)",
                    color: "white",
                    border: "none",
                    borderRadius: "3px",
                    padding: "1px 7px",
                    marginRight: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "15px",
                  }}
                >
                  &nbsp; {rating}★
                </button>
                <p style={{ color: "#898989", fontSize: "14px" }}>
                  {ratingCount} .{ratingStatus}
                </p>
              </div>
            </div>
          </Box>
          <Box>
            <Box display="flex" gap="2rem" marginBottom="10px" marginTop="10px">
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
                  if (elem.facility == facility1) {
                    return elem.icon;
                  }
                })}{" "}
                <p> {facility1} &nbsp;</p>{" "}
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
                  if (elem.facility == facility2) {
                    return elem.icon;
                  }
                })}{" "}
                <p> {facility2} &nbsp;</p>{" "}
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
                  if (elem.facility == facility3) {
                    return elem.icon;
                  }
                })}{" "}
                <p> {facility3} &nbsp;</p>{" "}
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
                <p> {facilityX} &nbsp;</p>{" "}
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Box>
                  <p style={{ lineHeight: "5px" }}>
                    <span
                      style={{
                        fontSize: "22px",
                        fontWeight: "700",
                        lineHeight: "24px",
                        color: "rgb(238,42,35)",
                      }}
                    >
                      ₹{price} &nbsp;
                    </span>
                    <span
                      style={{
                        textDecoration: "line-through",
                        fontSize: "15px",
                        lineHeight: "25px",
                        color: "rgb(180,186,188)",
                      }}
                    >
                      ₹{strikedPrice} &nbsp;
                    </span>
                    <span
                      style={{
                        color: "rgb(244,165,34)",
                        paddingBottom: "10px",
                        fontSize: "15px",
                      }}
                    >
                      &nbsp;
                      {discount}
                    </span>
                  </p>
                </Box>
                <Box>
                  <p
                    style={{
                      color: "rgb(163,169,172)",
                      fontSize: "13px",
                      paddingBottom: "10px",
                      paddingTop: "10px",
                    }}
                  >
                    per room per night
                  </p>
                </Box>
              </Box>
              <Box style={{ marginLeft: "20px" }}>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="out"
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "black",
                      border: "1px solid black",
                      padding: "4px 15px",
                      borderRadius: "3px",
                    }}
                  >
                    <Link
                      to={`/hotels/${_id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      View Details
                    </Link>
                  </Button>
                  <Button
                    variant="out"
                    style={{
                      fontSize: "15px",
                      border: "1px solid black",
                      color: "white",
                      backgroundColor: "#1ab64f",
                      padding: "4px 15px",
                      borderRadius: "3px",
                    }}
                  >
                    <Link
                      to={`/hotels/${_id}`}
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      Book Now
                    </Link>
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

function valuetext(value) {
  return value * 100;
}

function DisplayHotel() {
  let [start, setStart] = React.useState([0]);
  let [end, setEnd] = React.useState([10000]);
  let [filterArray, setFilterArray] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [value, setValue] = React.useState([0, 1000]);
  const [sortBy, setSortBy] = React.useState("popularity");
  let page = React.useRef(1);
  const hoteldata = useSelector((state) => {
    return state.Reducer.hotelDataArray;
  });

  const [age, setAge] = React.useState("");

  const handleFilter = (event) => {
    setAge(event.target.name);
    let facility = event.target.name;
    console.log("facility:", facility);
    console.log("gtfdrftyui");
    filterHotelRooms(currentCity, page.current, facility, dispatch);
  };

  useEffect(() => {
    setLoading(true);
    if (filterArray.length == 0) {
      getHotelRooms(currentCity, page.current, dispatch);
    }
    setFilterArray(hoteldata);
    setLoading(false);
  }, [hoteldata]);

  let currentCity = localStorage.getItem("currentCity") || "Mumbai";

  const prevPage = () => {
    page.current--;
    getHotelRooms(currentCity, page.current, dispatch);
  };

  const nextPage = () => {
    page.current++;
    getHotelRooms(currentCity, page.current, dispatch);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // let x = newValue[0] * 1000;
    start = newValue[0] * 100;
    end = newValue[1] * 100;
    setStart(start);
    setEnd(end);
    console.log("start:", start);
    console.log("end:", end);

    let filterHotelData = hoteldata.filter((elem) => {
      if (elem.price >= start && elem.price <= end) {
        return elem;
      }
    });
    setFilterArray(filterHotelData);
    console.log("filterHotelData:", filterHotelData);
  };
  //   let { hotelDataArray, isLoading, isError } = useSelector(
  //     (state) => state.app,
  //     shallowEqual
  //   );
  const dispatch = useDispatch();

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  switch (sortBy) {
    case "rating": {
      filterArray.sort((a, b) => b.rating - a.rating);
      break;
    }
    case "lowtohigh": {
      filterArray.sort((a, b) => a.price - b.price);
      break;
    }
    case "hightolow": {
      filterArray.sort((a, b) => b.price - a.price);
      break;
    }
    case "popularity": {
      filterArray.sort((a, b) => a.popularity - b.popularity);
      break;
    }
    default:
      return filterArray;
  }

  return (
    <div>
      <Navbar1 />
      <div
        style={{
          background: "rgb(222,150,64)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ marginTop: "-5px" }}>
          <span style={{ fontSize: "30px" }}>⚠</span>
        </div>
        <div style={{ padding: "5px" }}>
          <span
            style={{
              fontSize: "14px",
              lineHeight: "13px",
              color: "rgb(32,32,32)",
            }}
          >
            Please check the travel advisory issued by the concerned state
            government/local authorities before booking, as some places may have
            COVID-19 related travel/lodging restrictions.
          </span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          padding: "0px 25px",
          textAlign: "left",
        }}
      >
        <div
          style={{
            width: "18%",
            borderRight: ".05px solid lightgrey",
            paddingRight: "20px",
          }}
        >
          <div>
            <h2 style={{ fontSize: "30px" }}>Filters</h2>
          </div>

          <hr
            style={{ border: ".2px solid rgb(224,224,224)", marginTop: "15px" }}
          />
          <div>
            <h4 style={{ marginTop: "15px" }}>Price </h4>
            <Box>
              <Slider
                style={{ color: "rgb(239,42,36)" }}
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                getAriaValueText={valuetext}
              />
            </Box>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "15px",
                fontWeight: "900",
              }}
            >
              <span
                style={{
                  backgroundColor: "#f3f5f7",
                  padding: "7px",
                  borderRadius: "15px",
                }}
              >
                ₹{start}
              </span>
              <span
                style={{
                  backgroundColor: "#f3f5f7",
                  padding: "7px",
                  borderRadius: "15px",
                }}
              >
                {" "}
                ₹{end}
              </span>
            </div>
          </div>
          <hr
            style={{ border: ".2px solid rgb(224,224,224)", marginTop: "10px" }}
          />

          <div>
            <h4>Hotel Facilities</h4>
            {/* <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Filter Hotels</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Filter Hotels"
                onChange={handleFilter}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Free Wi-Fi"}>Free Wi-Fi</MenuItem>
                <MenuItem value={"Reception"}>Reception</MenuItem>
                <MenuItem value={"Geyser"}>Geyser</MenuItem>
                <MenuItem value={"CCTV cameras"}>CCTV cameras</MenuItem>
                <MenuItem value={"Parking facility"}>Parking facility</MenuItem>
                <MenuItem value={"AC"}>AC</MenuItem>
                <MenuItem value={"TV"}>TV</MenuItem>
                <MenuItem value={"Security"}>Security</MenuItem>
                <MenuItem value={"Elevator"}>Elevator</MenuItem>
                <MenuItem value={"Power backup"}>Power backup</MenuItem>
                <MenuItem value={"Security"}>Security</MenuItem>
                <MenuItem value={"Caretaker"}>Caretaker</MenuItem>
              </Select>
            </FormControl> */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <div>
                <input
                  style={{
                    marginRight: "10px",
                    height: "15px",
                    width: "18px",
                    cursor: "pointer",
                  }}
                
                  onChange={handleFilter}
                  type="checkbox"
                  name="Free Wi-Fi"
                  label="Oyo"
                />{" "}
                Free Wi-Fi
              </div>
              <div>
                <input
                  style={{
                    marginRight: "10px",
                    height: "15px",
                    width: "18px",
                    cursor: "pointer",
                  }}
                  onChange={handleFilter}
                  type="checkbox"
                  name="Reception"
                  label="Oyo"
                />{" "}
                Reception
              </div>
              <div>
                <input
                  style={{
                    marginRight: "10px",
                    height: "15px",
                    width: "18px",
                    cursor: "pointer",
                  }}
                  onChange={handleFilter}
                  type="checkbox"
                  name="Parking facility"
                  label="Oyo"
                />
                Parking facility
              </div>
              <div>
                <input
                  style={{
                    marginRight: "10px",
                    height: "15px",
                    width: "18px",
                    cursor: "pointer",
                  }}
                  onChange={handleFilter}
                  type="checkbox"
                  name="CCTV cameras"
                  label="Oyo"
                />
                CCTV cameras
              </div>
              <div>
                {" "}
                <input
                  style={{
                    marginRight: "10px",
                    height: "15px",
                    width: "18px",
                    cursor: "pointer",
                  }}
                  onChange={handleFilter}
                  type="checkbox"
                  name="Power backup"
                  label="Oyo"
                />
                Power backup
              </div>
              <div>
                {" "}
                <input
                  style={{
                    marginRight: "10px",
                    height: "15px",
                    width: "18px",
                    cursor: "pointer",
                  }}
                  onChange={handleFilter}
                  type="checkbox"
                  name="Elevator"
                  label="Oyo"
                />
                Elevator
              </div>
              <div>
                {" "}
                <input
                  style={{
                    marginRight: "10px",
                    height: "15px",
                    width: "18px",
                    cursor: "pointer",
                  }}
                  onChange={handleFilter}
                  type="checkbox"
                  name="AC"
                  label="Oyo"
                />
                AC
              </div>
              <div>
                {" "}
                <input
                  style={{
                    marginRight: "10px",
                    height: "15px",
                    width: "18px",
                    cursor: "pointer",
                  }}
                  onChange={handleFilter}
                  type="checkbox"
                  name="Geyser"
                  label="Oyo"
                />
                Geyser
              </div>
              <div>
                {" "}
                <input
                  style={{
                    marginRight: "10px",
                    height: "15px",
                    width: "18px",
                    cursor: "pointer",
                  }}
                  onChange={handleFilter}
                  type="checkbox"
                  name="TV"
                  label="Oyo"
                />
                TV
              </div>
              <div>
                {" "}
                <input
                  style={{
                    marginRight: "10px",
                    height: "15px",
                    width: "18px",
                    cursor: "pointer",
                  }}
                  onChange={handleFilter}
                  type="checkbox"
                  name="Security"
                  label="Oyo"
                />
                Security
              </div>
            </div>
            {/* <div>
              <Button
                variant="outlined"
                style={{
                  background: "none",
                  color: "rgb(239,42,36)",
                  border: "none",
                  fontSize: "15px",
                  textTransform: "Capitalize",
                  fontWeight: "600",
                  marginLeft: "-10px",
                  marginTop: "10px",
                }}
              >
                + View More
              </Button>
            </div> */}
            <hr
              style={{
                border: ".2px solid rgb(224,224,224)",
                marginTop: "10px",
              }}
            />
            <h4>Check-in features</h4>
            <div>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label={
                    <Box
                      component="div"
                      fontSize={15}
                      fontWeight={500}
                      marginTop={0.5}
                    >
                      Pay at Hotel
                    </Box>
                  }
                />
              </FormGroup>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "80%",
            margin: "auto",
            paddingLeft: "20px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              marginBottom: "30px",
              //   justifyContent: "left"
            }}
          >
            <Box
              display="flex"
              alignItems="flex-end"
              width="100%"
              borderBottom="1px solid #e1e2e3"
            >
              <span style={{ fontSize: "21px", fontWeight: "700" }}>
                Hotels in {currentCity}
              </span>
              <span style={{ marginLeft: "350px" }}> Map View </span>
              <span style={{ marginLeft: "8px" }}>
                <label className={styles.switch}>
                  <input type="checkbox" />
                  <span className={`${styles.slider} ${styles.round}`}></span>
                </label>
              </span>
              {/* <span style={{ marginLeft: "100px" }}>Sort By </span> */}
              {/* <span> */}
              <FormControl
                variant="standard"
                sx={{ minWidth: 120, marginLeft: "200px" }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Sort By
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  // value={rating}
                  name="sort"
                  onChange={handleSortBy}
                  label="Sort By"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="rating">Guest Ratings</MenuItem>
                  <MenuItem value="lowtohigh">Price Low To High</MenuItem>
                  <MenuItem value="hightolow">Price High To Low</MenuItem>
                </Select>
              </FormControl>
              {/* <select
                  onChange={handleSortBy}
                  name="sort"
                  id="sort"
                  style={{
                    padding: "10px",
                    width: "200px",
                    border: "1px solid gray",
                  }}
                >
                  <option value="rating">Guest Ratings</option>
                  <option value="lowtohigh">Price Low To High</option>
                  <option value="hightolow">Price High To Low</option>
                </select> */}
              {/* </span> */}
            </Box>
          </div>
          <hr
            style={{ border: ".2px solid rgb(224,224,224)", marginTop: "15px" }}
          />

          <div style={{ width: "100%", display: "grid", gap: "45px" }}>
            {filterArray.length == 0 ? (
              <h2>Loading Hotels...</h2>
            ) : (
              filterArray.map((item) => <HotelItem key={item.id} {...item} />)
            )}
          </div>
          {/* <hr style={{ border: ".2px solid rgb(224,224,224)" }} /> */}

          <div style={{ display: "flex", width: "215px", margin: "auto" }}>
            <div style={{ margin: "20px" }}>
              <Button
                variant="outlined"
                onClick={prevPage}
                disabled={page.current == 1 ? true : false}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  fontWeight: "900",
                  marginBottom: "20px",
                }}
              >
                Prev
              </Button>
            </div>
            <div style={{ margin: "20px" }}>
              <Button
                variant="outlined"
                onClick={nextPage}
                disabled={page.current == 2 ? true : false}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  fontWeight: "900",
                  marginBottom: "20px",
                }}
              >
                Next
              </Button>
            </div>
          </div>
          {/* {isLoading && <Skeleton
              animation="wave"
              height="800px"
              width="80%"
              style={{ marginBottom: 6 }}
            />} 
        
          <div
            style={{
              border: "1px solid rgb(224,224,224)",
              borderRadius: "10px",
              padding: "50px",
              marginTop: "20px"
            }}
          >
            <div style={{ display: "flex" }}>
              <div>
                <img src="./images/fireLogo.png" alt="img" height="60px" />
              </div>
              <div>
                <div>
                  <span style={{ fontSize: "20px", fontWeight: "700" }}>
                    Get access to exclusive deals
                  </span>
                </div>
                <div>
                  <span style={{ color: "rgb(127,127,127)" }}>
                    Only the best deals reach your inbox
                  </span>
                </div>
              </div>
              <div>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" }
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    label="Your email"
                    value={mail}
                    onChange={handleMailChange}
                  />
                </Box>
              </div>
              <div style={{ padding: "10px" }}>
                <Button
                  variant="outlined"
                  style={{
                    background: "red",
                    color: "white",
                    border: "1px solid red",
                    padding: "13px",
                    width: "150px"
                  }}
                >
                  Notify me
                </Button>
              </div>
            </div>
          </div>
 */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DisplayHotel;
