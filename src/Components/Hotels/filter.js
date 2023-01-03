import { URL } from "../../URL"

export const filterHotelRooms = (city, page, facility, facility1, facility2, dispatch) => {
  // console.log(city)
  // console.log(page)
  let url = `${URL.hotel}?city=${city}&page=${page}&facility=${facility}&facility1=${facility1}&facility2=${facility2}`;
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      // console.log("OK", res[0].hotels);
      dispatch({
        type: "GET_HOTELDATA_SUCCESS",
        payload: res[0].hotels,
      });
    });
};