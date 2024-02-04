import HotelCard from "./HotelCard";
import useHotels from "../hooks/useHotels";

const HotelDisplayGrid = () => {
  const { data: hotels } = useHotels();

  return (
    <section className="py-[80px]  " id="hotel_display_grid">
      <article className="py-8 px-5 md:px-10 lg:px-20 bg-primary ">
        <h2 className="text-2xl md:text-3xl text-white font-bold ">
          Explore Our Best Listings
        </h2>
        <p className=" mt-2 text-sm md:text-base text-white">
          Explore newly added hotels from all around the world with quality
          facilities.
        </p>
      </article>
      <div className=" py-10 px-5 md:px-10">
        <div className=" max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-5 ">
          {hotels?.map((hotel, index) => (
            <div key={index}>
              <HotelCard hotel={hotel} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelDisplayGrid;
