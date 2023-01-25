import { Visit } from "../../../models/visit";
import { Patient } from "../../../models/patient";
import connectDB from "../../../utils/connectdb";

const manageVisit = async(req, res) =>{
    connectDB()
    switch (req.method) {
        case "POST":
            try{
                Patient.find(patientNumber)
                const visit = new Visit({
                    patient : Patient._id,
                    ...req.body})
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
                .then(visits => {                    if (res.status === 404){
                        console.log("No visits found");
                    }
                   return  res.status(200).json(visits)
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
export default manageVisit