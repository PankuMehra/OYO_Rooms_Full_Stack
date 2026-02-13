import { URL } from "../../URL";

export const filterHotelRooms = async (
  city,
  page,
  facility,
  facility1,
  facility2,
  dispatch
) => {
  try {
    let url = `${URL.hotel}?city=${city}&page=${page}&facility=${facility}&facility1=${facility1}&facility2=${facility2}`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Failed to filter hotels");
    }
    const data = await res.json();
    dispatch({
      type: "GET_HOTELDATA_SUCCESS",
      payload: data[0],
    });
  } catch (error) {
    console.error("Error filtering hotels:", error);
    dispatch({
      type: "GET_HOTELDATA_FAILURE",
      payload: error.message,
    });
  }
};
