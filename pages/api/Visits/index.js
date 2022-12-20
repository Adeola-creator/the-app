import { Visit } from "../../../models/visit";
import connectDB from "../../../utils/connectdb";

export default async(req, res) =>{
    connectDB()
    switch (req.method) {
        case "POST":
            try{
                const visit = new Visit({...req.body})
               visit.save().then(() => {
                    console.log("Visit successfully created");
                    return res.status(201).json({
                        status: "success",
                        visit
                    })
                })
                .catch(e => {
                    console.log(e);
                })
            }catch(err){
                console.log(err);
            }
             
            break;
        case "GET":
            try{
                await Visit.find({})
                .then(visits => {
                   return  res.status(200).json({visits})
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