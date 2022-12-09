import { Medic } from "../../models/users/medic";
import bcrypt from "bcrypt";

export default async function handler (req, res){
    const {email, password} = req.body
    await Medic.findOne({email})
    .then((medic) => {
        try{
            bcrypt.compare(password,medic.password)
            .then((medic) => {
                if(medic){
                   const token = jwt.sign
                }
            })
        }catch{}
    }).catch((error) =>  res.status(404).json({
        ...error,
        message:"User not found"
    }))
}