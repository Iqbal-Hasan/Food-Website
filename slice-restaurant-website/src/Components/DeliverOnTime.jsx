import { Link } from "react-router-dom";

const DeliverOnTime = () => {
  return (
    <section className="xl:max-w-screen-xl xl:mx-auto mx-3 py-10 md:py-20 ">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:items-center">
          <div className="space-y-4 md:space-y-5 md:order-2">
            <h1 className="text-2xl lg:text-4xl xl:text-5xl text-center md:text-left font-bold text-gray-700">
              A Moment Of Delivered <br />
              On <span className="text-yellow-500">Right Time</span> & Place
            </h1>
            <p className="text-center md:text-left text-gray-600">
              Fast delivery in the restaurant industry has revolutionized the
              way people experience dining, allowing them to enjoy their
              favorite meals from the comfort of their homes or offices.
            </p>
            <div>
              <Link to={"/allfooditems"}>
                <button className="py-4 px-6 mx-auto md:mx-0 block rounded-md bg-yellow-400">Order Now</button>
              </Link>
            </div>
          </div>

          <div className="">
            <img
              src="https://i.ibb.co/n6sQ7Sk/image-processing20210527-25943-116lfme.gif"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverOnTime;
