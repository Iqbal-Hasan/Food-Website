import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const AllFoodItems = () => {
  const [totalData, setTotalData] = useState("");
  const [price, setPrice] = useState("");
  const [dataLoading, setDataLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [page, setpage] = useState(1);

  useEffect(() => {
    fetch("https://slice-restaurant-server.vercel.app/totalData")
      .then((res) => res.json())
      .then((data) => {
        setTotalData(data);
        setPageLoading(false);
      });
  }, []);

  const limit = 9;
  const totalPage = Math.ceil(totalData.total / limit);

  const getData = async () => {
    const res = await axios.get(
      `https://slice-restaurant-server.vercel.app/allFoodData?sortField=price&sortOrder=${price}&category=${category}&page=${page}&limit=${limit}`
    );
    setDataLoading(false);
    return res;
  };


  const next = () => {
    if (page < totalPage) {
      setpage(page + 1);
    }
  };

  const prev = () => {
    if (page > 1) {
      setpage(page - 1);
    }
  };

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["foodData", price, category, page, limit],
    queryFn: getData,
  });

  if (isError) {
    return <p>Something Went Worng {error}</p>;
  }

  if (dataLoading) {
    return (
      <div className="flex justify-center items-center w-[100%] h-[700px]">
        <div role="status" className="">
          <svg
            aria-hidden="true"
            className="w-10 h-10 mr-2 text-gray-400 animate-spin  fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <section className="xl:max-w-screen-xl xl:mx-auto mx-5 my-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Slice - All Food Items</title>
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
            Food Items
          </h1>
          <div className="absolute top-0 opacity-50 rounded-xl bg-black w-full h-[250px]"></div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 my-10">
        <div>
          <div>
            <h1>Category : </h1>
            <select
              className="w-full py-4 px-3 rounded-lg border-2 border-gray-600 focus:outline-none active:outline-none"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option disabled selected>
                Choose One
              </option>
              <option value="">All</option>
              <option value="Italian">Italian</option>
              <option value="Chinese">Chinese</option>
              <option value="Japanese">Japanese</option>
              <option value="Salad">Salad</option>
              <option value="Mexican">Mexican</option>
              <option value="Indian">Indian</option>
              <option value="American">American</option>
              <option value="Thai">Thai</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <h1>Price : </h1>

            <select
              className="w-full py-4 px-3 rounded-lg border-2 border-gray-600 focus:outline-none active:outline-none"
              onChange={(e) => setPrice(e.target.value)}
            >
              <option disabled selected>
                Choose One
              </option>
              <option value="asc">Low To High</option>
              <option value="desc">High To Low</option>
            </select>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center w-[100%] h-[400px]">
          <div role="status" className="">
            <svg
              aria-hidden="true"
              className="w-10 h-10 mr-2 text-gray-400 animate-spin  fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.data.map((item) => (
            <Card key={item._id} className="w-full shadow-lg">
              <CardHeader floated={false} color="blue-gray">
                <img
                  className="h-[300px] w-full object-cover object-center"
                  src={item.image}
                  alt="ui/ux review check"
                />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                <IconButton
                  size="sm"
                  color="red"
                  variant="text"
                  className="!absolute top-4 right-4 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                </IconButton>
              </CardHeader>
              <CardBody>
                <div className="mb-3 flex items-center justify-between">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    color="blue-gray"
                    className="flex items-center gap-1.5 font-normal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="-mt-0.5 h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {Number(item.rating).toFixed(1)} ({item.orderCount})
                  </Typography>
                </div>
                <Typography color="gray">
                  <div>
                    <p>
                      <span className="text-lg font-semibold">Category :</span>{" "}
                      {item.category}
                    </p>
                    <p>
                      <span className="text-lg font-semibold">Price :</span>{" "}
                      {item.price} BDT
                    </p>
                  </div>
                </Typography>
              </CardBody>
              <CardFooter className="pt-2">
                <Link to={`/details/${item._id}`}>
                  <Button size="lg" fullWidth={true}>
                    Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      <div className="mx-auto my-10 block w-fit">
        <div className="flex items-center gap-1 flex-wrap md:gap-4">
          <button onClick={prev}>
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4 cursor-pointer" />
          </button>
          {pageLoading ? (
            <p>Loading ...</p>
          ) : (
            <div className="flex items-center gap-2">
              {Array(totalPage)
                .fill(0)
                .map((item, idx) => (
                  <button
                    onClick={() => setpage(idx + 1)}
                    key={idx}
                    className={`${
                      idx + 1 === page ? " bg-gray-900 text-white" : " "
                    } px-5 border-gray-600 rounded-lg py-2 border `}
                  >
                    {idx + 1}
                  </button>
                ))}
            </div>
          )}
          <button onClick={next}>
            <ArrowRightIcon
              strokeWidth={2}
              className="h-4 w-4 cursor-pointer"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllFoodItems;
