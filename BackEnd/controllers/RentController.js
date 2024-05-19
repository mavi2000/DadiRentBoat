import express from 'express';
import Rent from '../models/Rent.js';
import Boat from '../models/Boat.js';
import Joi from 'joi';
import { createError } from '../utils/createError.js';




export const RentBoat =async (req,res,next)=>{
    try {
        
        const rentalSchema = Joi.object({
            // boatId: Joi.string().allow(''),
            BoatName: Joi.string().required(),
            Port: Joi.string().required(),
            city: Joi.string().required(),
            minPrice: Joi.number().required(),
            duration: Joi.string().required()
        });

     

        const { error: rentalError, value: rentalValue } = rentalSchema.validate(req.body);
        if (rentalError) {
            throw createError(400, rentalError.details[0].message);
        }

       
        // const boatExists = await Boat.findById(rentalValue.boat);
        // if (!boatExists) {
        //     throw createError(404, 'Boat not found');
        // }

    
        const rental = new Rent(rentalValue);
        console.log("rental",rental)
        await rental.save();

        res.status(201).json(rental);
    } catch (error) {
        next(error);
    }

}