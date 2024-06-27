import Agreement from "../models/RentalAgreement.js";
export const createAgreement = async (req, res) => {
  try {
    const agreement = new Agreement(req.body);
    await agreement.save();
    return res
      .status(200)
      .json({ message: "Rental agreement created successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message || "Internal server error" });
  }
};
