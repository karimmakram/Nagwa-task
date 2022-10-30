import  { Router, Request, Response } from 'express';
import { getRank, getAllScores } from "../controller/score.controller";
import { body } from "express-validator";
const route = Router();
route.post('/' ,
    body('score','score must be between 0 - 100').isInt({max:100,min:0}) ,
    getRank);

route.get('/', getAllScores)

module.exports = route