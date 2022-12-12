import { Patient } from "../../../models/patient";
import connectDB from "../../../utils/connectdb";

export default  async (req, res) => {
    console.log("Connecting to DB....");
    connectDB()
    console.log("Connected to DB");
    const {phone} = req.body

    switch (req.method) {
        case "POST":
            await Patient.exists({phone})
            .then(doc => {
                if (doc){
                    res.status(401).json({
                        message: "Patient already exists",
                        ...doc
                    })
                }
                const patient = new Patient({...req.body})
                patient.save().then(() => {
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
                await Patient.find({}).then(patients => {
                   return  res.status(200).json({patients})
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