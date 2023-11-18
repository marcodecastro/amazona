import express from "express";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";
import mercadopago from 'mercadopago';



dotenv.config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));





// Configurar o Mercado Pago
mercadopago.configure = ({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
  public_key: process.env.MERCADOPAGO_PUBLIC_KEY,
});




//app.post("/api/preference", (req, res) => {
//  const preference = {
//    items: [
//      {
//        title: "Meu produto",
//        quantity: 1,
//        currency_id: 'BRL',
//        unit_price: 10,
//       
//      },
//    ],
//  };

//  mercadopago.preferences.create(preference)
//  .then(function(response){
//    res.json(response);
//  }).catch(function(error){
//    res.status(500).json({ error: error.message });
//  });
//});






mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });




app.get("/api/keys/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});
app.get("/api/keys/google", (req, res) => {
  res.send({ key: process.env.GOOGLE_API_KEY || "" });
});

app.use("/api/upload", uploadRouter);
app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"))
);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${port}`);
});
