import express from 'express';
import promotionController from '../controllers/promotionController';
let promotionRouter = express.Router();

promotionRouter.get('/',promotionController.getAll)
promotionRouter.get('/sale',promotionController.getById)
promotionRouter.post('/',promotionController.save)
promotionRouter.delete('/',promotionController.remove)
promotionRouter.patch('/',promotionController.update)
export default promotionRouter;