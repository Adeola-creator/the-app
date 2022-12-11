import { Medic } from "../../models/users/medic";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    const {email, password}= req.body;
    await Medic.findOne({ email }).then((medic) => {
      console.log(medic);
      if (medic) {
        console.log(medic);
        // check password
        bcrypt.compare(password, medic.password, (error, result) => {
          if (error) {
            return res.status(401).json({
              message: "Auth failed, Check your credentials",
              value: error,
            });
          }
          const token = jwt.sign({
              active_user: medic.email,
              id: medic._id
          }, process.env.JWT_SECRET, {
              expiresIn: "1h"
          }, )
          res.status(200).json({
            message: "Auth Successful",
            token,
            ACK: result,
          });
        });
      }
    });
  };