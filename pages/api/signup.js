import connectDB from "../../utils/connectdb";
import { Medic } from "../../models/users/medic";



export default async function handler(req, res) {
    console.log("Connecting to Mongodb");
    connectDB()
    console.log("Connected to Mongodb");
    const { email } = req.body
    switch (req.method) {
        case "POST":
           await Medic.exists({ email })
                .then(async (result) => {
                    if (!result) {
                        try {
                            console.log("Creating medic")
                            const medic = new Medic({ ...req.body })
                             medic.save()
                                .then(newMedic => {
                                    return res.status(201).json({ newMedic })
                                })
                                .catch(err => console.log(err))
                        } catch (err) {
                            res.json({ ...err,
                            message: "Could not create medic" })
                        }
                    } else (error) => {
                        res.json({
                            ...error,
                            message: "Medic already exists"
                        })
                    }
                })
                .catch((err) => res.json({ ...err }))
    }

}