import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBlog,
  faHouse,
  faLocationDot,
  faPaperPlane,
  faPhone,
  faUser,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-gray-500">
        <div className="xl:max-w-screen-xl xl:mx-auto mx-3">
        <div className="pt-40 pb-20 gap-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* logo */}
          <div className="mx-auto block">
            <Link to={"/"}>
              <div className="flex gap-3 items-center justify-start">
                <img
                  className="w-[75px] "
                  src="https://cdn3.iconfinder.com/data/icons/street-food-and-food-trucker-1/64/pizza-fast-food-bake-bread-256.png"
                  alt="logo"
                />
                <h1 className="text-3xl font-bold">Slice</h1>
              </div>
            </Link>
          </div>

          {/* contact */}
          <div className="mx-auto block">
            <h1 className="uppercase text-xl font-bold mb-3">Get in Touch</h1>
            <div className="space-y-5 text-md">
              <div className="flex items-center justify-start gap-2">
                <FontAwesomeIcon icon={faLocationDot} />
                <p>123 Street Dhaka, BD</p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <FontAwesomeIcon icon={faPhone} />
                <p>+0174545445</p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <FontAwesomeIcon icon={faPaperPlane} />
                <p>info@Slice.com</p>
              </div>
            </div>
          </div>

          {/* useful links */}
          <div className="  mx-auto block">
            <h1 className="uppercase text-xl font-bold mb-3">Useful Links</h1>
            <div className="space-y-5 flex flex-col">
              <Link to={"/"}>
                <div className="flex gap-2 items-center justify-start">
                  <FontAwesomeIcon icon={faHouse} />
                  <p>Home</p>
                </div>
              </Link>
              <Link to={"allfooditems"}>
                <div className="flex gap-2 items-center justify-start">
                  <FontAwesomeIcon icon={faUtensils} />
                  <p>All Food Items</p>
                </div>
              </Link>
              <Link to={"blog"}>
                <div className="flex gap-2 items-center justify-start">
                  <FontAwesomeIcon icon={faBlog} />
                  <p>Blog</p>
                </div>
              </Link>
              <Link to={"/"}>
                <div className="flex gap-2 items-center justify-start">
                  <FontAwesomeIcon icon={faUser} />
                  <p>Profile</p>
                </div>
              </Link>
            </div>
          </div>

          {/* follow us */}
          <div className="  mx-auto block">
            <h1 className="uppercase text-xl font-bold mb-3">Follow Us On</h1>
            <div className="space-y-5 text-md">
              <div className="flex justify-start gap-2 items-center">
                <FontAwesomeIcon icon={faFacebook} />
                <p>Facebook</p>
              </div>
              <div className="flex justify-start gap-2 items-center">
                <FontAwesomeIcon icon={faInstagram} />
                <p>Instagram</p>
              </div>
              <div className="flex justify-start gap-2 items-center">
                <FontAwesomeIcon icon={faTwitter} />
                <p>Twitter</p>
              </div>
              <div className="flex justify-start gap-2 items-center">
                <FontAwesomeIcon icon={faYoutube} />
                <p>Youtube</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 py-5">
          <p className="  mx-auto block mt-3">
            &copy; 2022-2023. Slice - Food For Everyone. All rights reserved.
          </p>
        </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
