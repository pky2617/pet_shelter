import express from 'express';
import { indexPage, petCreatePage, petsPage, petDetailsPage } from '../../controllers';
const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/pets', petsPage);
indexRouter.post('/pet', petCreatePage);
indexRouter.get('/pets/:petId', petDetailsPage);
//indexRouter.get('/pets', petPage);

export default indexRouter;