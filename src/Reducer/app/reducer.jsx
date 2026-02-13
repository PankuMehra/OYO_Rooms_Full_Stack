import { saveData } from "../../utils/localStorage";
import { appConstants } from "./actionTypes";

const initState = {
  hotelDataArray: [],
  totalPage: 0,
  currentPage: 1,
  isLoading: true,
  isError: false,
};

function Reducer(state = initState, action) {
  switch (action.type) {
    case appConstants.LOGIN_SUCCESS: {
      saveData("token", action.payload.token);
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
      };
    }
    case appConstants.GET_HOTELDATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "GET_HOTELDATA_SUCCESS": {
      console.log("Reducer action payload:", action.payload);
      return {
        ...state,
        hotelDataArray: action.payload.hotels,
        totalPage: Math.ceil(action.payload.totalDocs / 5),
        currentPage: action.payload.page / 5,
        isLoading: false,
      };
    }
    case appConstants.GET_HOTELDATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default:
      return state;
  }
}

export default Reducer;
