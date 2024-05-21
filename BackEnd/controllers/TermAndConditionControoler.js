import TermsAndCondition from "../models/TermsAndCondition.js";
import { createError } from "../utils/createError.js";



export const addCondition = async (req, res, next) => {
    console.log("req.body",req.body)
    try {
        const { conditionName, description } = req.body;
        const existingCondition = await TermsAndCondition.findOne({ conditionName });
        if (existingCondition) {
            throw createError(400, 'Condition name already exists');
        }

        const team = new TermsAndCondition({
            conditionName,
            description
        });

      
        const savedTeam = await team.save();

        res.status(201).json(savedTeam);
    } catch (error) {
        next(error);
    }
};



export const getAllConditions = async (req, res, next) => {
    try {
        const conditions = await TermsAndCondition.find();
        res.status(200).json(conditions);
    } catch (error) {
        next(error);
    }
};




export const editCondition = async (req, res, next) => {
    try {
        const { conditionId, conditionName, description } = req.body;


        if (!conditionId) {
            throw createError(400, 'Condition ID is required');
        }

   
        const existingCondition = await TermsAndCondition.findById(conditionId);
        if (!existingCondition) {
            throw createError(404, 'Condition not found');
        }

        
        existingCondition.conditionName = conditionName;
        existingCondition.description = description;

    
        const updatedCondition = await existingCondition.save();

        res.status(200).json(updatedCondition);
    } catch (error) {
        next(error);
    }
};




export const deleteCondition = async (req, res, next) => {
    try {
        const { conditionId } = req.body;

     
        if (!conditionId) {
            throw createError(400, 'Condition ID is required');
        }

   
        const deletedCondition = await TermsAndCondition.findByIdAndDelete(conditionId);
        
   
        if (!deletedCondition) {
            throw createError(404, 'Condition not found');
        }

        res.status(200).json({ message: 'Condition deleted successfully' });
    } catch (error) {
        next(error);
    }
};