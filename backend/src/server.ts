import express from "express";
import dotenv from "dotenv";
import cors from "cors";


const app = express();
dotenv.config();
//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTES
// app.use('/api/auth/user', authRoutes);
// app.use('/api/products',productRoutes);
// app.use('/api/auth/seller', sellerRoutes);
// // app.use("/api/payment", paymentRoutes);
// app.use("/api/mail", mailRoutes);
// app.use("/api/otp", otpRoutes);
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running",
  });
});


const PORT = process.env.PORT || 5000;

const startServer = ()=>{
    try {
        app.listen(PORT, ()=>{
            console.log(`Server is running on port ${PORT}`)
        });
    } catch (error) {
        console.log(`Server failed to start`, error);
        process.exit(1);
    }
};
startServer();