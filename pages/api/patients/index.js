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
                    res.json("Patient already exists");
                    return res.json(doc)
                }
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
                await Patient.find({})
                // .populate('visits', 'date')
                .then(patients => {
                   return  res.status(200).json(patients)
                })
                .catch(err => res.json(err))
            }catch(error){
                return res.json(error)
            }
            break;
        default:
            break;
    }
}