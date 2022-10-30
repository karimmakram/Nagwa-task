import  {Request, Response } from 'express';
import { validationResult } from "express-validator";
import scoreModel from "../model/Score";

export const getRank = (req:Request, res:Response)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    const {score} = req.body

    res.json({rank:scoreModel.getRank(score)})
}

export const getAllScores = (req:Request, res:Response)=>{
    const scoreObj = new scoreModel()
    res.json(scoreObj.getAll())
 }