import React, { Component } from "react";
import styles from "./SearchBanner.module.css";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import AutocompleteForm from "../SearchBox/SearchBox";
import { hotelListingDataRequest } from "../../../Action/hotelListingDataRequest";
import { connect } from "react-redux";
import { border, flexbox } from "@mui/system";
// import { loadData } from "../../../redux/authentication/localStorage";

class SearchBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputStart: "Check-in",
      inputFinish: "Check-out",
      checked: true,
      showrooms: false,
      roomCount: 1,
      guestCount: 1,
      roomContainer: [{ guestCount: 1 }],
    };
  }

  loadData = (key) => {
    try {
      let data = localStorage.getItem(key);
      data = JSON.parse(data);
      return data;
    } catch (err) {
      return undefined;
    }
  };

  handleSearchHotel = () => {
    const { hotelListingDataRequest, history } = this.props;
    let location = this.loadData("location");
    if (location) {
      let lat = location.lat.toString();
      let lon = location.lng.toString();
      hotelListingDataRequest({ location: { lat, lon }, path: "" });
      history.push("/listing");
    } else {
      // Handle case when location is not available
      console.error("Location data not found");
      // Optionally, show a toast or alert to user
    }
  };

  handleEvent = (event, picker) => {
    const startDate = picker.startDate.format("DD/MM/YYYY");
    const endDate = picker.endDate.format("DD/MM/YYYY");
    if (picker.startDate.isAfter(picker.endDate)) {
      alert("Start date cannot be after end date");
      return;
    }
    this.setState({
      inputStart: startDate,
      inputFinish: endDate,
    });
    localStorage.setItem("start", startDate);
    localStorage.setItem("finish", endDate);
  };

  showRoomsHandler = () => {
    this.setState({
      showrooms: !this.state.showrooms,
    });
  };

  handleRoomAndGuest = () => {
    const { roomContainer } = this.state;

    return roomContainer.map((room, index) => (
      <div key={index} id={styles.dropDownHead} style={{ display: "flex" }}>
        <div>Room {index + 1}</div>
        <div>
          <span
            id={styles.operator}
            onClick={() => this.updateGuestCount(index, room.guestCount - 1)}
          >
            –
          </span>
          <span>{room.guestCount}</span>
          <span
            id={styles.operator}
            onClick={() => this.updateGuestCount(index, room.guestCount + 1)}
          >
            +
          </span>
        </div>
      </div>
    ));
  };

  updateGuestCount = (roomIndex, newCount) => {
    if (newCount < 1) return;
    const { roomContainer } = this.state;
    const updatedRooms = [...roomContainer];
    updatedRooms[roomIndex].guestCount = newCount;
    this.setState({ roomContainer: updatedRooms });
    localStorage.setItem("roomContainer", JSON.stringify(updatedRooms));
  };
  handleAddRoom = () => {
    const { roomContainer } = this.state;
    const newRoom = { guestCount: 1 };
    this.setState({
      roomContainer: [...roomContainer, newRoom],
      roomCount: roomContainer.length + 1,
    });
    localStorage.setItem(
      "roomContainer",
      JSON.stringify([...roomContainer, newRoom]),
    );
  };
  handleDeleteRoom = () => {
    const { roomContainer } = this.state;
    if (roomContainer.length <= 1) return; // Keep at least one room
    const updatedRooms = roomContainer.slice(0, -1);
    this.setState({
      roomContainer: updatedRooms,
      roomCount: updatedRooms.length,
    });
    localStorage.setItem("roomContainer", JSON.stringify(updatedRooms));
  };
  render() {
    let { showrooms, roomCount, guestCount, inputStart, inputFinish } =
      this.state;
    let {
      handleRoomAndGuest,
      handleAddRoom,
      handleDeleteRoom,
      handleSearchHotel,
    } = this;
    let showRoomsDrop = showrooms ? "" : "d-none";
    return (
      <div
        className="container-fluid"
        style={{ position: "relative", zIndex: "1" }}
      >
        <div className="row p-0">
          <div className="d-flex justify-content-center" id={styles.container}>
            <div
              id={styles.wrapper}
              className="d-flex flex-column align-items-center"
            >
              <div
                className="w-100 justify-content-center "
                id={styles.headingForm}
              >
                <h1 style={{ fontWeight: "bold" }} id={styles.title}>
                  Over 157,000 hotels and homes across 35 countries
                </h1>
              </div>
              <div id={styles.searchForm}>
                <div>
                  <AutocompleteForm />
                </div>

                <div id={styles.homeCalender}>
                  <DateRangePicker
                    autoUpdateInput={false}
                    startDate={this.state.inputStart}
                    endDate={this.state.inputFinish}
                    locale={{ format: "DD/MM/YYYY" }}
                    onApply={this.handleEvent}
                    autoApply={true}
                  >
                    <p
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <span>{inputStart}</span>
                      <span> - </span>
                      <span>{inputFinish}</span>
                    </p>
                  </DateRangePicker>
                </div>
                <div id={styles.homeRoom}>
                  <span
                    type="button"
                    id="dropdownMenuButton"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={this.showRoomsHandler}
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {roomCount} Rooms, {guestCount} Guests
                  </span>
                  <div
                    className={showRoomsDrop}
                    aria-labelledby="dropdownMenuButton"
                    id={styles.dropDownContainer}
                  >
                    <div id={styles.dropDownHead} style={{ display: "flex" }}>
                      <div>Rooms</div>
                      <div>Guests</div>
                    </div>
                    {handleRoomAndGuest()}
                    <div id={styles.dropDownHead}>
                      <div onClick={() => handleAddRoom()}>Add Room</div>
                      <div onClick={() => handleDeleteRoom()}>Delete Room</div>
                    </div>
                  </div>
                </div>

                <div id={styles.homebutton} style={{ height: "64px" }}>
                  <button id={styles.homebutton} onClick={handleSearchHotel}>
                    Search
                  </button>
                </div>
              </div>
              <div id={styles.items}>
                <div id={styles.searched}>
                  <span>Continue your search</span>
                </div>
                <div id={styles.searchedPlaceContainer}>
                  <div id={styles.searchedPlace}>
                    <p className={styles.searchedPlaceText}>
                      Hyderabad India Transport
                    </p>
                    <p className={styles.searchedPlaceText}>
                      17 Sep - 20 Sep | 1 Guests
                    </p>
                  </div>
                  <div id={styles.searchedPlace}>
                    <p className={styles.searchedPlaceText}>
                      Delhi Connaught Place
                    </p>
                    <p className={styles.searchedPlaceText}>
                      01 Oct - 03 Oct | 3 Guests
                    </p>
                  </div>
                </div>
                {/* <div id={styles.searchedPlace}>
                  <span>
                    Hyderabad Central India Transport 17 Sep - 20 Sep | 3 Guests
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   token: state.auth.token,
//   user: state.auth.user,
// });

const mapDispatchToProps = (dispatch) => ({
  hotelListingDataRequest: (payload) =>
    dispatch(hotelListingDataRequest(payload)),
});

export default connect(null, mapDispatchToProps)(SearchBanner);
