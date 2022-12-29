import Hotels from "../database/model/hotel.js";

export const addHotel=async (req,res)=>{
    try {
        
        const newHotel = await Hotels.create({
  
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
            facility: req.body.facility,
            mainImage: req.body.mainImage,
            image: req.body.image,
            
         })
     
         await newHotel.save();
         res.status(200).json(newHotel)

    } catch (error) {
        res.status(500).json(error)
    }
}


export const getHotel=async (req,res)=>{
    try {
        
        const hotels = await Hotels.find({})
        res.status(200).json(hotels);

    } catch (error) {
        res.status(500).json(error)
    }
}