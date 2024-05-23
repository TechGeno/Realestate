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
