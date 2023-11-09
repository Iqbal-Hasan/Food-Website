const Npm = () => {
  return (
    <section className="lg:w-[700px] lg:mx-auto lg:block mx-5 ">
      <div className="mb-10">
        <h1 className="text-xl font-medium text-center my-10">
          What is NPM in node.js?
        </h1>
        <div className="">
          <img
            className="w-full h-[400px] border-2 border-gray-600 rounded-lg mb-5 object-cover object-center"
            src="https://i.ibb.co/6XxHYJd/What-is-NPM-in-Node-Js-jpg.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5">
          <p>
            NPM stands for Node Package Manager. It is a package manager for
            JavaScript that comes bundled with Node.js, a popular JavaScript
            runtime environment. NPM is used to manage and distribute
            open-source JavaScript libraries and tools.
          </p>
          <p>
            Package Management: NPM allows developers to easily install, manage,
            and update external libraries and tools (often referred to as
            &quot;packages&quot; or &quot;modules&quot;) for use in their JavaScript projects.
          </p>
          <p>
            Command-Line Interface (CLI): NPM provides a command-line interface
            that allows developers to interact with the package manager from
            their terminal or command prompt.
          </p>
          <p>
            Package.json: NPM uses a file called package.json to define the
            configuration and dependencies of a JavaScript project. This file
            includes metadata about the project, such as its name, version,
            description, entry points, and a list of required packages and their
            versions.
          </p>
          <p>
            Dependency Resolution: When you specify dependencies in the
            package.json file, NPM will automatically download and install the
            required packages along with their dependencies. It manages version
            conflicts and ensures that the correct versions are used.
          </p>
          <p>
            Global vs. Local Installation: NPM allows you to install packages
            either globally (accessible by any project) or locally (specific to
            a single project). Global packages are often used for command-line
            utilities and tools that you want to be available system-wide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Npm;
