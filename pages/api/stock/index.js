import { Item } from "../../../models/item";
import connectDB from "../../../utils/connectdb";

export default async(req, res) =>{
    connectDB()
    switch (req.method) {
        case "POST":
            await Item.exists({itemName})
            .then(doc => {
                if (doc){
                    res.status(401).json({
                        message: "Item already exists",
                        ...doc
                    })
                }
                console.log(req.body);
                const item = new Item({...req.body})
               item.save().then(() => {
                    console.log("Item successfully created");
                    return res.status(201).json({
                        status: "success",
                        item
                    })
                })
                .catch(e => {
                    console.log(e);
                })
            })
            break;
        case "GET":
            try{
                await Item.find({})
                .then(items => {
                   return  res.status(200).json({items})
                })
                .catch(err => res.json({...err}))
            }catch(error){
                return res.json({...error})
            }
            break;
        default:
            break;
    }
}