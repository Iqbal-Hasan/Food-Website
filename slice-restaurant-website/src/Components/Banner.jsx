import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="bg-red-100">
      <div className="xl:max-w-screen-xl xl:mx-auto mx-3 py-10 md:py-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:items-center">
          <div className=" space-y-4 md:space-y-5">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl text-center md:text-left font-bold text-gray-800">
              Enjoy Our <br /> Delicious Meal
            </h1>
            <p className="text-center md:text-left text-gray-600">
              Explore a world of culinary delights crafted with love and
              expertise. From mouthwatering recipes to culinary tips and tricks,
              we&apos;re here to inspire your inner chef.
            </p>
            <div>
              <Link to={"/allfooditems"}>
                <button className="py-4 border border-gray-800 px-6 mx-auto md:mx-0 block rounded-md bg-yellow-400">
                  Browse Food
                </button>
              </Link>
            </div>
          </div>
          <div className="">
            <img
              className="h-[400px] lg:h-[500px] object-cover rounded-lg object-center"
              src="https://i.ibb.co/F0CmQqy/pizza-1200-1669380911.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
