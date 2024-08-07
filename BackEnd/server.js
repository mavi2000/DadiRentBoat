import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import UserRoute from "./routes/user.route.js";
import ContactRoute from "./routes/contact.route.js";
import boatRoutes from "./routes/boatRoutes.js";
import boatDescriptionRoutes from "./routes/boatDescriptionRoutes.js";
import boatImageRoute from "./routes/boatImageRoute.js";
import boatRentRoutes from "./routes/boatRentRoutes.js";
import inviteLinkRoute from "./routes/inviteLink.route.js";
import bootBookingRoutes from "./routes/boatBookingRoutes.js";
import boatAccessRoute from "./routes/boatAccessRoute.js";
import TermsandCoditionRoute from "./routes/TermsAndConditionRoutes.js";
import RateRoute from "./routes/RateRoute.js";
import voucherRoutes from "./routes/voucherRoutes.js";
import demageDepositsRoute from "./routes/demageDepositsRoute.js";
import ExtraServiceRoute from "./routes/ExtraServiceRoute.js";
import InsurenseRoute from "./routes/InsurenceRoutes.js";
import locationRoute from "./routes/locationRoute.js";
import EquipmentsRoutes from "./routes/EquipmetRoute.js";
// import CheckoutRoute from "./routes/locationRoute.js"
import PaymentRoute from "./routes/paymentRoutes.js";
import rentalAgreementRoutes from "./routes/rentalAgreementRoutes.js";
import rentalOTPRoutes from "./routes/rentalOTPRoutes.js";
import ExpenseRoute from "./routes/expenseRoute.js"
import reminderRoutes from "./routes/reminderRoutes.js"
import boatdocumentRoute from "./routes/boatdocumentRoute.js"
import signatureRoute from "./routes/signatureRoute.js";

const app = express();
const PORT = process.env.PORT || 3800;

// middlewares
app.use(express.json());
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use("/", UserRoute);
app.use("/invite", inviteLinkRoute);
app.use("/", ContactRoute);
app.use("/boat", boatRoutes);
app.use("/decription", boatDescriptionRoutes);
app.use("/image", boatImageRoute);
app.use("/rent", boatRentRoutes);
app.use("/Booking", bootBookingRoutes);
app.use("/boatAccess", boatAccessRoute);
app.use("/condition", TermsandCoditionRoute);
app.use("/Rate", RateRoute);
app.use("/voucher", voucherRoutes);
app.use("/demage", demageDepositsRoute);
app.use("/service", ExtraServiceRoute);
app.use("/insurence", InsurenseRoute);
app.use("/location", locationRoute);
app.use("/equipment", EquipmentsRoutes);
app.use("/checkout", PaymentRoute);
app.use("/rental", rentalAgreementRoutes);
app.use("/otp", rentalOTPRoutes);
app.use("/Expense",ExpenseRoute)
app.use("/Reminder",reminderRoutes)
app.use("/document",boatdocumentRoute)
app.use('/api',signatureRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  console.error(`Error Status: ${errorStatus}, Message: ${errorMessage}`);

  return res.status(errorStatus).json({ error: errorMessage });
});

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("DB Connected");
    app.listen(PORT, () => {
      console.log(`Dadi Rent Boat app listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
