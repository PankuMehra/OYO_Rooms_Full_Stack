import Hotels from "../database/model/hotel.js";

export const addHotel=async (req,res)=>{
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