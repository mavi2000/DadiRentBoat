import TermsAndCondition from "../models/TermsAndCondition.js";
import { createError } from "../utils/createError.js";



export const addCondition = async (req, res, next) => {
    try {
        const { conditionName, description } = req.body;
        const existingCondition = await Team.findOne({ conditionName });
        if (existingCondition) {
            throw createError(400, 'Condition name already exists');
        }

        const team = new Team({
            conditionName,
            description
        });

      
        const savedTeam = await team.save();

        res.status(201).json(savedTeam);
    } catch (error) {
        next(error);
    }
};