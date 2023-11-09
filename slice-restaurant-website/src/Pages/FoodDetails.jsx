import { Helmet } from "react-helmet";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const FoodDetails = () => {
  const singleData = useLoaderData();
  const {
    _id,
    name,
    image,
    category,
    price,
    email,
    quantity,
    foodOrigin,
    ingredients,
    procedure,
    orderCount,
    rating,
  } = singleData;

  // console.log(Array.isArray(procedure));

  return (
    <section className="xl:max-w-screen-xl xl:mx-auto mx-3 my-10 ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Slice - Food Details</title>
        <link rel="" href="" />
      </Helmet>

      <div>
        <div className="relative flex justify-center h-[250px]">
          <img
            className="h-[250px] w-full object-cover object-center rounded-xl"
            src="https://i.ibb.co/9ZMtCqM/grilled-chicken-breast-lunch-bowl-with-fresh-tomato-royalty-free-image-1684934244.jpg"
            alt=""
          />
          <h1 className="absolute text-center top-[100px] z-10 text-white text-4xl font-bold uppercase">
            Food Details
          </h1>
          <div className="absolute top-0 opacity-50 rounded-xl bg-black w-full h-[250px]"></div>
        </div>
      </div>

      <div>
        {/* title */}
        <div>
          <h1 className="text-center font-bold  my-10 text-4xl uppercase text-gray-800">
            {name}
          </h1>
        </div>
        {/* image */}
        <div>
          <img
            className="h-[400px] w-full max-w-[600px] object-cover object-center mx-auto rounded-lg"
            src={image}
            alt={name}
          />
        </div>
        {/* rating */}
        <div className="mx-auto block  w-fit mt-4 mb-10">
          {rating} {"  "}
          <Rating
            initialRating={rating}
            readonly
            emptySymbol={
              <FontAwesomeIcon className="text-gray-600" icon={faStar} />
            }
            fullSymbol={
              <FontAwesomeIcon
                className="text-orange-400 text-lg"
                icon={faStar}
              />
            }
          />
          {"  "}({orderCount})
        </div>
        {/* deatils */}
        <div className="overflow-x-scroll overflow-hidden mx-3 tableParent">
          <table>
            <tr>
              <td>Category</td>
              <td>{category}</td>
            </tr>
            <tr>
              <td>Quantity</td>
              <td>{quantity}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{price} BDT</td>
            </tr>
            <tr>
              <td>Made by</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>Food Origin</td>
              <td>{foodOrigin}</td>
            </tr>
          </table>
        </div>
        {/* ingredients */}
        <div className="mb-10">
          <h1 className="text-center text-xl mt-10 mb-5 font-semibold">
            Ingredients ( {ingredients.split(",").length} )
          </h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 items-start">
            {ingredients.split(",").map((item, idx) => (
              <p
                className="text-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 hover:cursor-pointer py-4 px-6 border-2 border-gray-600 rounded-xl"
                key={idx}
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* procedure */}
        <div>
          <h1 className="text-center text-xl mt-10 mb-5 font-semibold">
            Procedure ({" "}
            {Array.isArray(procedure)
              ? procedure.length
              : procedure.split("*").length}{" "}
            )
          </h1>
          <div>
            {Array.isArray(procedure)
              ? procedure.map((item) => (
                  <p className="m-2" key={item.step}>
                    {item.step}
                    {". "}
                    {item.instruction}
                  </p>
                ))
              : procedure.split("*").map((item, idx) => (
                  <p key={idx}>
                    {idx + 1}. {item}
                  </p>
                ))}
          </div>
        </div>
      </div>

      <div>
        <Link to={`/order/${_id}`}>
          <Button className="py-4 border border-gray-800 text-gray-800 px-6 mx-auto my-5 block rounded-md bg-yellow-400">
            Order Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FoodDetails;
