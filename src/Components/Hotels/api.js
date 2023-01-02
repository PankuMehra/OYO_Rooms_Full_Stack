import { URL } from "../../URL"

export const getHotelRooms = (city, page,dispatch) => {
  console.log(city)
  console.log(page)
  let url = `${URL.hotel}?city=${city}&page=${page}`;
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log("OK", res[0].hotels);
      dispatch({
        type: "GET_HOTELDATA_SUCCESS",
        payload: res[0].hotels,
      });
    });
};
