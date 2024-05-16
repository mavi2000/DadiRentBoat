import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';
import UserRoute from './routes/user.route.js';
import ContactRoute from './routes/contact.route.js';
import  boatRoutes from  "./routes/boatRoutes.js"
import boatDescriptionRoutes from "./routes/boatDescriptionRoutes.js"
import boatImageRoute from "./routes/boatImageRoute.js"
import  boatRentRoutes from "./routes/boatRentRoutes.js"
import inviteLinkRoute from "./routes/inviteLink.route.js"



const app = express();
const PORT = process.env.PORT || 3800;

// middlewares
app.use(express.json());
app.use(cors());

// apis / routes
app.use('/', UserRoute);
app.use("/invite",inviteLinkRoute)
app.use('/', ContactRoute);
app.use("/boat",boatRoutes)
app.use("/decription",boatDescriptionRoutes)
app.use("/image",boatImageRoute)
app.use("/rent",boatRentRoutes)


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  

  console.error(`Error Status: ${errorStatus}, Message: ${errorMessage}`);
  
 
  return res.status(errorStatus).json({ error: errorMessage });
});

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('DB Connected');
    app.listen(PORT, () => {
      console.log(`Dadi Rent Boat app listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
