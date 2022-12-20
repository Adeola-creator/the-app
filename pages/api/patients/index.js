import { Patient } from "../../../models/patient";
import connectDB from "../../../utils/connectdb";

export default  async (req, res) => {
    connectDB()
    const {phone} = req.body

    switch (req.method) {
        case "POST":
            await Patient.exists({phone})
            .then(doc => {
                if (doc){
                    res.status(401).json(
                        ...doc
                    )
                }
                console.log(req.body);
                const patient = new Patient({...req.body})
                patient.save().then(() => {
                    console.log("Patient successfully created");
                    return res.status(201).json(
                        patient
                    )
                })
                .catch(e => {
                    console.log(e);
                })
            })
            break;
        case "GET":
            try{
                await Patient.find({}).then(patients => {
                   return  res.status(200).json(patients)
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