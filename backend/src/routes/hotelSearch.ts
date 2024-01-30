import express, {Request, Response} from 'express';
import { constructSearchQuery } from "../utils/constructSearchQuery";
import { HotelSearchResponse } from "../entities/HotelSearchResponse";
import Hotel from '../models/hotel';

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    try {
      const query = constructSearchQuery(req.query);
  
      let sortOptions = {};
      switch (req.query.sortOption) {
        case "starRating":
          sortOptions = { starRating: -1 };
          break;
        case "pricePerNightAsc":
          sortOptions = { pricePerNight: 1 };
          break;
        case "pricePerNightDesc":
          sortOptions = { pricePerNight: -1 };
          break;
      }
  
      const pageSize = 5;
      const pageNumber = parseInt( req.query.page ? req.query.page.toString() : "1");
      const skip = (pageNumber - 1) * pageSize;
  
      const hotels = await Hotel.find(query)
        .sort(sortOptions)
        .skip(skip)
        .limit(pageSize);
  
      const total = await Hotel.countDocuments(query);
  
      const response: HotelSearchResponse = {
        data: hotels,
        pagination: {
          total,
          page: pageNumber,
          pages: Math.ceil(total / pageSize),
        },
      };
  
      res.json(response);
  
    } catch (error) {
  
      console.log("error", error);
      res.status(500).json({ message: "Something went wrong" });
    }
  });

export default router;