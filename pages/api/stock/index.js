import { Stock } from "../../../models/patient";
import connectDB from "../../../utils/connectdb";

export default async(req, res) =>{
    connectDB()
    switch (req.method) {
        case "POST":
            await Stock.exists({itemName})
            .then(doc => {
                if (doc){
                    res.status(401).json({
                        message: "Item already exists",
                        ...doc
                    })
                }
                console.log(req.body);
                const item = new Stock({...req.body})
               item.save().then(() => {
                    console.log("Item successfully created");
                    return res.status(201).json({
                        status: "success",
                        patient
                    })
                })
                .catch(e => {
                    console.log(e);
                })
            })
            break;
        case "GET":
            try{
                await Stock.find({}).then(items => {
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