import { Patient } from "../../../models/patient";
import connectDB from "../../../utils/connectdb";


export default  async function (req, res) {
    connectDB()
 const {patientId} = req.query
 switch (req.method) {
    case "PUT":
        await Patient.findOneAndUpdate({_id: patientId}, {$set: req.body}, {new: true})
        .then(patient => 
           res.status(200).json(
               patient))
        .catch(e => console.log(e))
        break;
    case "DELETE":
        await Patient.findOneAndDelete({_id: patientId})
        .then(patient => {
            res.json(
                patient
            )
            })
            .catch(err => {
                console.log(err);
        })
        case "GET":
            try{
                await Patient.find({_id: patientId})
                .then(patient => {
                   return  res.status(200).json(patient)
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