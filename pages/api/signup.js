import connectDB from "../../utils/connectdb";
import { Medic } from "../../models/users/medic";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
    connectDB()
    const { email, password } = req.body
    switch (req.method) {
        case "POST":
           await Medic.exists({ email })
                .then(async (result) => {
                    if (!result) {
                        try {
                          const hash =await bcrypt.hash(password, 10)
                           const medic = new Medic({ ...req.body,
                            password: hash})
                            medic.save()
                               .then(newMedic => {
                                   console.log(newMedic);
                                   return res.status(201).json({ newMedic })
                               })
                               .catch(err => console.log(err))
                        } catch (err) {
                            res.json({ ...err,
                            message: "Could not create medic" })
                        }
                    } else{
                        return res.status(409).json({
                            message: "Medic already exists",
                            ...result
                        })
                    }
                })
                .catch((err) => res.json({ ...err }))
    }

}