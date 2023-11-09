import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section className="xl:max-w-screen-xl xl:mx-auto mx-3 my-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Slice - Blog</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <div className="relative flex justify-center h-[250px]">
          <img
            className="h-[250px] w-full object-cover object-center rounded-xl"
            src="https://i.ibb.co/GV26Y4h/image.jpg"
            alt=""
          />
          <h1 className="absolute text-center top-[100px] z-10 text-white text-4xl font-bold uppercase">
            Blog
          </h1>
          <div className="absolute top-0 opacity-50 rounded-xl bg-black w-full h-[250px]"></div>
        </div>
      </div>

      <h1 className="text-center my-10 text-xl font-semibold">Blog ( 3 )</h1>

      <div className="w-full lg:w-[700px] mx-auto block ">
        {/* 1 */}
        <div className="mb-10">
          <h1 className="text-xl font-medium mb-5">
            What is One way data binding?
          </h1>
          <div>
            <img
              className="w-full h-[400px] border-2 border-gray-600 rounded-lg mb-5 object-cover object-center"
              src="https://i.ibb.co/cT30wcg/FN7-Ki-WXv-DIJkn-XH5-KNQv8-Kwn-V3-ABdg-WO2pvc-E-NWD1-LTwt-Fycb0qii-Nd-Wk-UJE-d-tx-OPv-Blxcz-Tde0tu-X.png"
              alt=""
            />
          </div>
          <p>
            One-way data binding in Angular (i.e. unidirectional binding) is a
            way to bind data from the component to the view (DOM) or vice versa
            - from view to the component. It is used to display information to
            the end-user which automatically stays synchronized with each change
            of the underlying data.
          </p>
          <Link to={"/dataBinding"}>
            <button className="bg-blue-500  text-white py-4 px-6 rounded-lg mx-auto block mt-5">
              Read More
            </button>
          </Link>
        </div>
        {/* 2 */}
        <div className="mb-10">
          <h1 className="text-xl font-medium mb-5">What is NPM in node.js?</h1>

          <div>
            <img
              className="w-full h-[400px] border-2 border-gray-600 rounded-lg mb-5 object-cover object-center"
              src="https://i.ibb.co/6XxHYJd/What-is-NPM-in-Node-Js-jpg.jpg"
              alt=""
            />
          </div>
          <p>
            npm is a package manager for the JavaScript programming language
            maintained by npm, Inc. npm is the default package manager for the
            JavaScript runtime environment Node.js and is included as a
            recommended feature in the Node.js installer.
          </p>
          <Link to={"/npm"}>
            <button className="bg-blue-500  text-white py-4 px-6 rounded-lg mx-auto block mt-5">
              Read More
            </button>
          </Link>
        </div>
        MongoDB and MySQL are both popular database management systems, but they
        have several key differences in their architectures, data models, and
        use cases. Here are some of the main distinctions between MongoDB and
        MySQL:
        {/* 3 */}
        <div className="mb-10">
          <h1 className="text-xl font-medium mb-5">
            Different between Mongodb database vs mySQL database.
          </h1>

          <div>
            <img
              className="w-full h-[400px] border-2 border-gray-600 rounded-lg mb-5 object-cover object-center"
              src="https://i.ibb.co/dcsNYyf/mongodb-vs-mysql-database-structure.png"
            />
          </div>
          <p>
            MongoDB and MySQL are both popular database management systems, but
            they have several key differences in their architectures, data
            models, and use cases. Here are some of the main distinctions
            between MongoDB and MySQL
          </p>
          <Link to={"/mongodb"}>
            <button className="bg-blue-500  text-white py-4 px-6 rounded-lg mx-auto block mt-5">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
