import { Item } from "../../../models/item";
import connectDB from "../../../utils/connectdb";


export default  async function (req, res) {
    connectDB()
 const {itemId} = req.query
 switch (req.method) {
    case "PUT":
        await Item.findOneAndUpdate({_id: itemId}, {$set: req.body}, {new: true})
        .then(item => 
           res.status(200).json({
               item,
               message: "Patient updated successfully"}))
        .catch(e => console.log(e))
        break;
    case "DELETE":
        await Item.findOneAndDelete({_id: itemId})
        .then(item => {
            res.json({
                message:"item deleted successfully",
                item
            })
            })
            .catch(err => {
                console.log(err);
        })
        case "GET":
            try{
                await Item.find({_id: itemId})
                .then(item => {
                   return  res.status(200).json({
                    item})
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