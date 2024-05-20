import mongoose from "mongoose";

const TermAndConditionSchema = new mongoose.Schema({
        conditionName: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
});

export default mongoose.model('TermsAndCondition', TermAndConditionSchema);
