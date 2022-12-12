import { Medic } from "../../models/users/medic";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; import connectDB from "../../utils/connectdb";
export default async function handler(req, res) {

    connectDB();
    const { email, password } = req.body;
    await Medic.findOne({ email })
        .then((medic) => {
            const match = bcrypt.compare(password, medic.password)
            const token = jwt.sign({ ...medic }, process.env.JWT_SECRET, {
                expiresIn: 3600
            })
            if (match) {
                res.status(200).json({
                    message: "Auth Successful",
                    token,
                    ACK: match,
                });
            } else {
                return res.status(401).json({
                    message: "Auth failed, Check your credentials",
                    value: error,
                });
            }
        })
        .catch(error => {
            res.json({
                ...error,
                message: "Medic not found"
            })
        });
};