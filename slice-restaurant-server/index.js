const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jebfvll.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();

    // all the mongodb collenction
    const userCollection = client.db("SliceDatabase").collection("UserData");
    const allFoodDataCollection = client
      .db("SliceDatabase")
      .collection("AllFoodData");
    const orderDataCollection = client
      .db("SliceDatabase")
      .collection("OrderData");

    // get data from mongodb - those data were inserted in bangla system
    // http://localhost:5000/allFoodData?category=Italian
    // http://localhost:5000/allFoodData?sortField=price&sortOrder=desc
    // http://localhost:5000/allFoodData?sortField=price&sortOrder=asc
    // http://localhost:5000/allFoodData?page=1&limit=9
    app.get("/allFoodData", async (req, res) => {
      let query = {};
      let sort = {};

      const category = req.query.category;
      const sortField = req.query.sortField;
      const sortOrder = req.query.sortOrder;
      const page = Number(req.query.page);
      const limit = Number(req.query.limit);
      const skip = (page - 1) * limit;

      if (category) {
        query.category = category;
      }

      if (sortField && sortOrder) {
        sort[sortField] = sortOrder;
      }

      if (req.query?.email) {
        query = { email: req.query.email };
      }

      const result = await allFoodDataCollection
        .find(query)
        .sort(sort)
        .skip(skip)
        .limit(limit)
        .toArray();

      res.send(result);
    });

    app.get("/totalData", async (req, res) => {
      const total = await allFoodDataCollection.estimatedDocumentCount();
      res.send({ total });
    });

    // get a single product from mongodb
    app.get("/allFoodData/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await allFoodDataCollection.findOne(query);
      res.send(result);
    });

    app.delete("/allFoodData/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await allFoodDataCollection.deleteOne(query);
      res.send(result);
    });

    // send food data to mongodb
    app.post("/allFoodData", async (req, res) => {
      const food = req.body;
      const result = await allFoodDataCollection.insertOne(food);
      res.send(result);
    });

    // update product data
    app.put("/allFoodData/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const foodData = req.body;
      const updatedProduct = {
        $set: {
          orderCount: foodData.count,
          quantity: foodData.remainingQuantity,
        },
      };
      const result = await allFoodDataCollection.updateOne(
        filter,
        updatedProduct,
        options
      );
      res.send(result);
    });

    // send resgister user data to mongodb
    app.post("/registerUser", async (req, res) => {
      const userData = req.body;
      const result = await userCollection.insertOne(userData);
      res.send(result);
    });

    // get resgister user data from mongodb
    app.get("/registerUser", async (req, res) => {
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // send order data to mongodb
    app.post("/orderData", async (req, res) => {
      const order = req.body;
      const result = await orderDataCollection.insertOne(order);
      res.send(result);
    });

    // get specific user order data
    app.get("/orderData", async (req, res) => {
      let query = {};

      if (req.query?.userEmail) {
        query = { userEmail: req.query.userEmail };
      }
      const result = await orderDataCollection.find(query).toArray();
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("server is runing");
});

app.listen(port, () => {
  console.log(`server runing on port ${port}`);
});
