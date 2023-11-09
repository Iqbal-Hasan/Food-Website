import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const Order = () => {
  const [username, setUsername] = useState([]);

  useEffect(() => {
    setUsername(JSON.parse(localStorage.getItem("Username")));
  }, []);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [inputquantity, setInputQuantity] = useState(1);
  const [inputPrice, setInputPrice] = useState(null);
  const [inputDate, setInputDate] = useState(null);

  const [error, setError] = useState(false);
  const [ownProduct, setOwnProduct] = useState(false);

  const foodData = useLoaderData();
  const {
    _id,
    name,
    image,
    category,
    price,
    quantity: foodQuantity,
    rating,
    email,
    orderCount,
  } = foodData;

  useEffect(() => {
    setInputPrice(price * inputquantity);
    setInputDate(new Date().toDateString());

    if (foodQuantity === 0) {
      setError(true);
    }
    if (user.email === email) {
      setOwnProduct(true);
    }
  }, [price, inputquantity, foodQuantity, user.email, email]);

  const handleOrder = (e) => {
    e.preventDefault();
    const foodName = e.target.foodName.value;
    const userName = e.target.userName.value;
    const userEmail = e.target.userEmail.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const category = e.target.category.value;
    const date = e.target.date.value;
    const quantity = e.target.quantity.value;
    const count = Number(orderCount) + Number(quantity);
    const remainingQuantity = Number(foodQuantity) - Number(quantity);

    const orderData = {
      foodName,
      userName,
      userEmail,
      price,
      rating,
      category,
      date,
      quantity,
      image,
      count,
      remainingQuantity,
    };

    // update data to mongodb
    fetch(`https://slice-restaurant-server.vercel.app/allFoodData/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then(async (data) => {
        if (data.modifiedCount) {
          await Swal.fire({
            title: "Great",
            text: "Product Purchase Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/");
        }
      });

    // send date to mongodb
    fetch("https://slice-restaurant-server.vercel.app/orderData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      // eslint-disable-next-line no-unused-vars
      .then((data) => {});
  };

  return (
    <section className="xl:max-w-screen-xl xl:mx-auto mx-3 my-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Slice - Order Checkout</title>
        <link rel="" href="" />
      </Helmet>
      <div>
        <div className="relative flex justify-center h-[250px]">
          <img
            className="h-[250px] w-full object-cover object-center rounded-xl"
            src="https://i.ibb.co/5K3wChy/checkout-519489799-1000.jpg"
            alt=""
          />
          <h1 className="absolute text-center top-[100px] z-10 text-white text-4xl font-bold uppercase">
            Checkout
          </h1>
          <div className="absolute top-0 opacity-50 rounded-xl bg-black w-full h-[250px]"></div>
        </div>
      </div>

      <div className="mt-10">
        <img
          className="h-[400px] w-full max-w-[600px] object-cover object-center mx-auto rounded-lg"
          src={image}
          alt={name}
        />
      </div>

      {error && (
        <div className="justify-center mt-10 text-red-600 text-xl font-bold uppercase flex items-center gap-2">
          <FontAwesomeIcon icon={faCircleInfo} />
          <p>This Product is out of stock</p>
        </div>
      )}
      {ownProduct && (
        <div className="justify-center mt-10 text-red-600 text-xl font-bold uppercase flex items-center gap-2">
          <FontAwesomeIcon icon={faCircleInfo} />
          <p>Your Can&apos;t Buy Your Own Product</p>
        </div>
      )}

      <form
        onSubmit={handleOrder}
        className="mx-auto mb-0 mt-8 max-w-xl space-y-4"
      >
        <div className="flex gap-2 font-medium flex-col">
          <label className="text-xl">Food Name :</label>

          <div className="relative">
            <input
              required
              type="text"
              name="foodName"
              defaultValue={name}
              readOnly
              className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
              placeholder="Enter Product Name"
            />
          </div>
        </div>

        <div className="flex gap-2 font-medium flex-col">
          <label className="text-xl">Your Name :</label>

          <div className="relative">
            <input
              required
              type="text"
              name="userName"
              readOnly
              defaultValue={user?.displayName ? user.displayName : username[0]}
              className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
              placeholder="Enter Brand Name"
            />
          </div>
        </div>

        <div className="flex gap-2 font-medium flex-col">
          <label className="text-xl">Your Email :</label>

          <div className="relative">
            <input
              required
              type="text"
              name="userEmail"
              readOnly
              defaultValue={user?.email ? user.email : "Hello"}
              className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
              placeholder="Enter Brand Name"
            />
          </div>
        </div>

        <div className="flex gap-2 font-medium flex-col">
          <label className="text-xl">Category :</label>

          <div className="relative">
            <input
              required
              type="text"
              name="category"
              readOnly
              defaultValue={category}
              className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
              placeholder="Enter Product Type"
            />
          </div>
        </div>

        <div className="flex gap-2 font-medium flex-col">
          <label className="text-xl">Quantity :</label>

          <div className="relative">
            <input
              required
              name="quantity"
              type="number"
              min="1"
              max={foodQuantity}
              defaultValue={error ? 0 : 1}
              onChange={(e) => setInputQuantity(e.target.value)}
              className={`w-full rounded-lg text-lg border-2 focus:outline-blue-500 ${
                error ? "border-red-500" : "border-gray-500"
              }  p-4 pe-12 shadow-sm`}
              placeholder="Enter Your Quantity"
            />
            {error ? (
              <div className="text-red-600 flex items-center gap-2 m-1">
                <FontAwesomeIcon icon={faCircleInfo} />

                <small>Food Quantity {foodQuantity}</small>
              </div>
            ) : (
              <div className="text-gray-600 flex items-center gap-2 m-1">
                <FontAwesomeIcon icon={faCircleInfo} />

                <small>Quantity Between 1 to {foodQuantity}</small>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-2 font-medium flex-col">
          <label className="text-xl">Price :</label>

          <div className="relative">
            <input
              required
              name="price"
              type="number"
              readOnly
              defaultValue={inputPrice}
              className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
              placeholder="Enter Price"
            />
            <div className="text-gray-600 flex items-center gap-2 m-1">
              <FontAwesomeIcon icon={faCircleInfo} />

              <small>Price in BDT</small>
            </div>
          </div>
        </div>

        <div className="flex gap-2 font-medium flex-col">
          <label className="text-xl">Rating :</label>

          <div className="relative">
            <input
              required
              name="rating"
              type="number"
              readOnly
              defaultValue={rating}
              className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
              placeholder="Enter Rating"
            />
          </div>
        </div>

        <div className="flex gap-2 font-medium flex-col">
          <label className="text-xl">Date :</label>

          <div className="relative">
            <input
              name="date"
              required
              placeholder="Enter Product Description"
              className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
              id="date"
              readOnly
              defaultValue={inputDate}
            />
            <div className="text-gray-600 flex items-center gap-2 m-1">
              <FontAwesomeIcon icon={faCircleInfo} />

              <small>Today&apos;s Data</small>
            </div>
          </div>
        </div>

        <div className="h-[60px]">
          <input
            disabled={error || ownProduct ? true : false}
            className={`w-full rounded-lg text-lg ${
              ownProduct && "bg-gray-500 hover:cursor-not-allowed"
            } ${
              error
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-600 cursor-pointer"
            }  text-white font-medium  p-4 pe-12 shadow-sm select-none mx-auto transition-all duration-150 block border-2 border-gray-800 py-4 px-8 rounded-xl text-xl border-b-[7px] -translate-y-2 active:translate-y-0 active:border-b-2`}
            type="submit"
            value="Place Order"
          />
        </div>
      </form>
    </section>
  );
};

export default Order;
