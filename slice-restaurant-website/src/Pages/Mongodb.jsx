const Mongodb = () => {
  return (
    <section className="lg:w-[700px] lg:mx-auto lg:block mx-5 ">
      <div className="mb-10">
        <h1 className="text-xl font-medium text-center my-10">
          What is NPM in node.js?
        </h1>
        <div className="">
          <img
            className="w-full h-[400px] border-2 border-gray-600 rounded-lg mb-5 object-cover object-center"
            src="https://i.ibb.co/dcsNYyf/mongodb-vs-mysql-database-structure.png"
          />
        </div>
        <div className="flex flex-col gap-5">
          <p>
            MongoDB and MySQL are both popular database management systems, but
            they have several key differences in their architectures, data
            models, and use cases. Here are some of the main distinctions
            between MongoDB and MySQL:
          </p>
          <p>
            MongoDB: MongoDB is a NoSQL database that uses a document-oriented
            data model. It stores data in flexible, semi-structured BSON (Binary
            JSON) documents, which can contain a wide variety of data types and
            structures. Documents in MongoDB are similar to JSON objects. MySQL:
            MySQL is a relational database management system (RDBMS) that uses a
            tabular, structured data model. It stores data in tables with
            predefined schemas, and relationships between tables can be
            established using foreign keys.
          </p>
          <p>
            MongoDB: MongoDB is schema-less, which means that you can insert
            documents into a collection without defining the structure
            beforehand. This flexibility can be advantageous for rapidly
            changing or evolving data models. MySQL: MySQL requires a predefined
            schema before data can be inserted into a table. Changes to the
            schema often require careful planning and, in some cases, downtime.
          </p>
          <p>
            MongoDB: MongoDB is designed for horizontal scalability, which means
            it can efficiently distribute data across multiple servers or nodes.
            This makes it well-suited for handling large volumes of data and
            high traffic loads. MySQL: While MySQL supports replication for read
            scalability and has features like sharding, it is generally
            considered to be more challenging to scale horizontally compared to
            MongoDB.
          </p>
          <p>
            MongoDB: MongoDB uses a JavaScript-based query language that allows
            for flexible querying using a combination of field-value pairs,
            logical operators, and regular expressions. It also supports a wide
            range of aggregation and map-reduce operations. MySQL: MySQL uses
            Structured Query Language (SQL), which is a powerful language for
            querying and manipulating relational data. It has well-established
            standards and extensive support for complex joins, subqueries, and
            other advanced SQL features.
          </p>
          <p>
            MongoDB: MongoDB has a large and active community, with a growing
            ecosystem of tools and libraries. It is particularly popular in web
            applications, mobile apps, and environments dealing with large
            amounts of unstructured data. MySQL: MySQL has been around for a
            long time and has a massive user base. It is widely used in various
            applications, including web development, enterprise solutions, and
            data warehousing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mongodb;
