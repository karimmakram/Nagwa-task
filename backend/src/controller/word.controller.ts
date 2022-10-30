import  {Request, Response } from 'express';
import wordModel from "../model/Word";

export const getRandomWords = (req:Request, res:Response)=>{
    res.json(wordModel.getRandom())
}
