import { Movie } from "@mui/icons-material";
import Hotels from "../database/model/hotel.js";

export const addHotel = async (req, res) => {
  try {
    const newHotel = await Hotels.create({
      id: req.body.id,
      hotelName: req.body.hotelName,
      address: req.body.address,
      distance: req.body.distance,
      city: req.body.city,
      info: req.body.info,
      rating: req.body.rating,
      ratingCount: req.body.ratingCount,
      ratingStatus: req.body.ratingStatus,
      price: req.body.price,
      strikedPrice: req.body.strikedPrice,
      discount: req.body.discount,
      facility1: req.body.facility1,
      facility2: req.body.facility2,
      facility3: req.body.facility3,
      facilityX: req.body.facilityX,
      mainImage: req.body.mainImage,
      image1: req.body.image1,
      image2: req.body.image2,
      image3: req.body.image3,
      image4: req.body.image4,
      image5: req.body.image5,
    });

    await newHotel.save();
    res.status(200).json(newHotel);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getHotel = async (req, res) => {
  try {
    console.log("inside gethotel");

    // const page = parseInt(req.query.page) - 1 || 0;
    // const limit = parseInt(req.query.limit) || 10;
    // const search = (req.query.search) || "";
    // console.log(search)
    // const sortbyprice = parseInt(req.query.sortbyprice) || "price";
    // const sortbyrating = parseInt(req.query.sortbyrating) || "rating";
    // const facility = (req.query.facility1) || "All";

    // const facilitys = [
    //   "Reception",
    //   "Free Wi-Fi",
    //   "Washing Machine",
    //   "Balcony",
    //   "Living Room",
    //   "CCTV cameras",
    //   "Parking facility",
    //   "Elevator",
    //   "Power backup",
    //   "Private entrance",
    //   "AC",
    //   "TV",
    //   "Hair Dryer",
    //   "Doctor on call",
    //   "Security",
    //   "Geyser",
    //   "Ticket tour assistance",
    // ];

    // facility === "All"
    //   ? (facility = [...facilitys])
    //   : (facility = req.query.facility.split(","));
    // req.body.sortbyprice
    //   ? (sortbyprice = req.query.sortbyprice.split(","))
    //   : (sortbyprice = [sortbyprice]);

    // let sortBy = {};
    // if (sortbyprice[1]) {
    //   sortBy[sortbyprice[0]] = sort[1];
    // } else sortBy[sortbyprice[0]] = "asc";
    const city = req.query.city || "";
    const totalData = await Hotels.countDocuments();

    const { limit = 10, page = 1 } = req.query;
    const hotels = await Hotels.find({
      $or: [
        { city: { $regex: ".*" + city + ".*", $options: "i" } },
        {
          hotelName: {
            $regex: ".*" + req.query.hotelName + ".*",
            $options: "i",
          },
        },
        { address: { $regex: ".*" + req.query.address + ".*", $options: "i" } },
        { rating: { $regex: ".*" + req.query.rating + ".*", $options: "i" } },
      ],
    })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    let nextPage;
    let prevPage;
    if (page < totalData / limit - 1) {
      nextPage = Number(page) + 1;
    }
    if (page != 1) {
      prevPage = Number(page) - 1;
    }
    res.status(200).json({
      totalPage: Math.round(totalData / limit),
      currentPage: Number(page),
      nextPage: nextPage,
      prevPage: prevPage,
      hotels,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getHotelById = async (req, res) => {
  try {
    //    console.log(req.params.id)
    const HotelById = await Hotels.findById(req.params.id);
    res.status(200).json(HotelById);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getHotelByQuery = async (req, res) => {
  try {
    console.log(req.params.query);
    const HotelByCity = await Hotels.find({
      $or: [
        { city: { $regex: req.params.query } },
        { hotelName: { $regex: req.params.query } },
        { address: { $regex: req.params.query } },
        { rating: { $regex: req.params.query } },
      ],
    });

    res.status(200).json(HotelByCity);
  } catch (error) {
    res.status(500).json(error);
  }
};
