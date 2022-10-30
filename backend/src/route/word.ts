import  { Router} from 'express';
import { getRandomWords } from '../controller/word.controller';
const route = Router();
route.get('/' , getRandomWords);


module.exports = route