const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = require("../models/User")

const router = express.Router();

//Register
router.post(
    "/register",
    async (req, res) => {
        try {
            const {
                name,
                email,
                password
            } = req.body;
            const existUser = await User.findOne({
                email
            });
            if (existUser) {
                return res.status(400).json({ message: "User Already Exists" })
            }

            const hashedPassword = await bcrypt.hash(password, 10)
            await User.create({ name, email, password: hashedPassword })

            res.status(201).json({ message: "Registration Successful" })
        } catch (error) {
            res.status(500).json({ message: error.message });
        }

    }

)



//Login
router.post(
    "/login", async (req, res) => {
        try {
            const {
                email,
                password
            } = req.body;
            const user = await User.findOne({email})
            if(!user){
                return res.status(400).json({message:"Invalid Credentials"})
            }

            const isMatch = await bcrypt.compare(password,
                user.password
            )
            if(!isMatch){
                return res.status(400).json({message: "Password not match"})
            }

            const token = jwt.sign({
                id: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"1d"
            }
        );
        res.json({token, name: user.name});

        }  catch (error){
            res.status(500).json({ message: error.message })
        }
    }
)


module.exports = router; 
