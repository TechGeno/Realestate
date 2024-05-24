import List from '../models/list.model.js';


export const createList = async (req, res,next) => {
    try {
        const list = await List.create(req.body);
        // req success and data items created
        return res.status(201).json(list);
    }
    catch(error){
        next(error);
    }
}

export const deleteList = async (req, res, next) => {
    const list = await List.findById(req.params.id);
  
    if (!list) {
      return next(errorHandler(404, 'List not found!'));
    }
  
    if (req.user.id !== list.userRef) {
      return next(errorHandler(401, 'You can only delete your own lists!'));
    }
  
    try {
      await List.findByIdAndDelete(req.params.id);
      res.status(200).json('List has been deleted!');
    } catch (error) {
      next(error);
    }
  };