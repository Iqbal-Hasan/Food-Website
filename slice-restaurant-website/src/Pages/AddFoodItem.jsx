import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Context/UserContext";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddFoodItem = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const handleOpen = () => setOpen(!open);
  const handleOpenTwo = () => setOpenTwo(!openTwo);
  const { user } = useContext(AuthContext);

  const [procedure, setProcedure] = useState([]);

  const handleNewFood = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const category = e.target.category.value;
    const quantity = e.target.quantity.value;
    let price = e.target.price.value;
    const email = e.target.email.value;
    const foodOrigin = e.target.foodOrigin.value;
    const ingredients = e.target.ingredients.value;
    const rating = e.target.rating.value;
    const orderCount = 0;
    price = Number(price);

    const newFood = {
      name,
      image,
      category,
      quantity,
      price,
      email,
      foodOrigin,
      ingredients,
      rating,
      procedure,
      orderCount,
    };

    fetch("https://slice-restaurant-server.vercel.app/allFoodData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFood),
    })
      .then((res) => res.json())
      .then(async (data) => {
        if (data.insertedId) {
          await Swal.fire({
            title: "Great",
            text: "Food Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/");
        }
      });
  };
  return (
    <section className="xl:max-w-screen-xl xl:mx-auto mx-3 my-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Slice - Add Food Items</title>
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
            Add Food Items
          </h1>
          <div className="absolute top-0 opacity-50 rounded-xl bg-black w-full h-[250px]"></div>
        </div>
      </div>

      <div>
        <form
          onSubmit={handleNewFood}
          className="mx-auto mb-0 mt-8 max-w-xl space-y-4"
        >
          <div className="flex gap-2 font-medium flex-col">
            <label className="text-xl">Email :</label>

            <div className="relative">
              <input
                required
                type="text"
                name="email"
                defaultValue={user?.email}
                readOnly
                className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
                placeholder="Enter Product Name"
              />
            </div>
          </div>

          <div className="flex gap-2 font-medium flex-col">
            <label className="text-xl">Product Name :</label>

            <div className="relative">
              <input
                required
                type="text"
                name="name"
                className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
                placeholder="Enter Product Name"
              />
            </div>
          </div>

          <div className="flex gap-2 font-medium flex-col">
            <label className="text-xl">Category Name :</label>

            <div className="relative">
              <input
                required
                type="text"
                name="category"
                className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
                placeholder="Enter Category Name"
              />
            </div>
          </div>

          <div className="flex gap-2 font-medium flex-col">
            <label className="text-xl">Image URL :</label>

            <div className="relative">
              <input
                required
                type="text"
                name="image"
                className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
                placeholder="Enter Image URL"
              />
            </div>
          </div>

          <div className="flex gap-2 font-medium flex-col">
            <label className="text-xl">Food Quantity :</label>

            <div className="relative">
              <input
                required
                type="number"
                name="quantity"
                className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
                placeholder="Enter Food Quantity"
              />
            </div>
          </div>

          <div className="flex gap-2 font-medium flex-col">
            <label className="text-xl">Price :</label>

            <div className="relative">
              <input
                required
                name="price"
                type="number"
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
            <label className="text-xl">Food Origin :</label>

            <div className="relative">
              <input
                required
                name="foodOrigin"
                type="foodOrigin"
                className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
                placeholder="Enter Food Origin"
              />
              <div className="text-gray-600 flex items-center gap-2 m-1">
                <FontAwesomeIcon icon={faCircleInfo} />

                <small>Food Origin Just The Country Name</small>
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
                className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
                placeholder="Enter Rating"
              />
              <div className="text-gray-600 flex items-center gap-2 m-1">
                <FontAwesomeIcon icon={faCircleInfo} />

                <small>Rating Value ( 1 - 5 ) Star</small>
              </div>
            </div>
          </div>

          <div className="flex gap-2 font-medium flex-col">
            <label className="text-xl">Ingredients :</label>

            <div className="relative">
              <textarea
                name="ingredients"
                required
                placeholder="Ex - Olive oil, Salt, Black pepper"
                className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
                id="shortDescription"
                cols="30"
                rows="2"
              ></textarea>
              <div className="text-amber-800 flex items-center gap-2 m-1">
                <FontAwesomeIcon icon={faCircleInfo} />

                <small>
                  Use Comma ( , ) To Separate Ingredients{" "}
                  <span
                    onClick={handleOpen}
                    className="cursor-pointer text-blue-400"
                  >
                    Example
                  </span>
                </small>
              </div>
            </div>
          </div>

          <Dialog open={open} handler={handleOpen}>
            <DialogHeader>Provide Data Like This</DialogHeader>
            <DialogBody>
              Pizza dough, Tomato sauce, Fresh mozzarella cheese, Fresh basil
              leaves, Olive oil, Salt, Black pepper
            </DialogBody>
            <DialogFooter>
              <Button
                className="mx-auto"
                variant="gradient"
                color="green"
                onClick={handleOpen}
              >
                <span>OK</span>
              </Button>
            </DialogFooter>
          </Dialog>

          <div className="flex gap-2 font-medium flex-col">
            <label className="text-xl">Procedure :</label>

            <div className="relative">
              <textarea
                name="description"
                required
                placeholder="Ex - Add olive oil and chopped vegetables.*Cook for 5-7 minutes until softened."
                className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
                id="shortDescription"
                cols="30"
                rows="5"
                onChange={(e) => setProcedure(e.target.value)}
              ></textarea>
              <div className="text-amber-800 flex items-center gap-2 m-1">
                <FontAwesomeIcon icon={faCircleInfo} />

                <small>
                  Use Star ( * ) To Separate Procedure{" "}
                  <span
                    onClick={handleOpenTwo}
                    className="cursor-pointer text-blue-400"
                  >
                    Example
                  </span>
                </small>
              </div>
            </div>
          </div>

          <Dialog open={openTwo} handler={handleOpenTwo}>
            <DialogHeader>Provide Data Like This</DialogHeader>
            <DialogBody>
              Add olive oil and chopped vegetables.*Cook for 5-7 minutes until
              softened.*Add ground beef, cook until browned.
            </DialogBody>
            <DialogFooter>
              <Button
                className="mx-auto"
                variant="gradient"
                color="green"
                onClick={handleOpenTwo}
              >
                <span>OK</span>
              </Button>
            </DialogFooter>
          </Dialog>

          <input
            className="w-full rounded-lg text-lg bg-blue-600 text-white font-medium cursor-pointer p-4 pe-12 shadow-sm"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </section>
  );
};

export default AddFoodItem;
