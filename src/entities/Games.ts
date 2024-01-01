import Genre  from "./Genre";
import Platform  from "./Platform";
import Publisher  from "./Publisher";

export default interface Games {
  id: number;
  slug: string;
  name: string;
  platforms: {platform: Platform}[];
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  background_image_additional: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  released: string;
  rating: number;
}

