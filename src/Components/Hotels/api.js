import { URL } from "../../URL";

export const getHotelRooms = (city, page, dispatch) => {
  let url = `${URL.hotel}?city=${city}&page=${page}`;
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch hotel data");
      }
      return res.json();
    })
    .then((res) => {
      dispatch({
        type: "GET_HOTELDATA_SUCCESS",
        payload: res[0],
      });
    })
    .catch((error) => {
      console.error("Error fetching hotel data:", error);
      dispatch({
        type: "GET_HOTELDATA_FAILURE",
        payload: error.message,
      });
    });
};
