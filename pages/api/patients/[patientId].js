import { Patient } from "../../../models/patient";
import connectDB from "../../../utils/connectdb";


export default  async function (req, res) {
    connectDB()
 const {patientId} = req.query
 switch (req.method) {
    case "PUT":
        await Patient.findOneAndUpdate({_id: patientId}, {$set: req.body}, {new: true})
        .then(patient => 
           res.status(200).json({
               patient,
               message: "Patient updated successfully"}))
        .catch(e => console.log(e))
        break;
    case "DELETE":
        await Patient.findOneAndDelete({_id: patientId})
        .then(patient => {
            res.json({
                message: "Patient deleted successfully",
                patient
            })
            })
            .catch(err => {
                console.log(err);
        })
    default:
        break;
 }

 
}