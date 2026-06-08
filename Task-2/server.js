const express = require('express')
const bodyParser = require("body-parser")
const path = require("path")
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

const users = []
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})
app.post('/submit', (req, res) => {
    const { name, email, age,phone , password } = req.body;
     
    if (!name || !email || !age || !phone || !password) {
        res.send("Please Fill all the fields");
    }
    if (name === "") {
        res.send("Please Enter the name")
   
    }
    if (!email.includes("@")) {
        res.send("Enter valid email")
   
    }
    if (age < 18) {
        res.send("The age must 18 or above")
       
    }
    if (phone.length < 10 || phone.length > 10) {
        res.send("Phone number should 10 digits")
    }
    if (password.length < 4) {
        res.send("Password must atleast 4 characters")
        
    }

    users.push({
        name, email,age ,phone , password
    })

    console.log(users)
    res.send(`
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%); display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; box-sizing: border-box;">
    
    <div style="background-color: #ffffff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); width: 100%; max-width: 600px;  box-sizing: border-box;">
        <div style="background-color: #34eb5f; color: #155724; padding: 12px; border-radius: 6px; text-align: center; font-weight: bold; margin-bottom: 20px;">
            ✓ Submission Successful!
        </div>
        
        <h2 style="color: #333; margin-top: 0; text-align: center; border-bottom: 2px solid #eaeaea; padding-bottom: 10px; font-size: 24px;">
            Your Details
        </h2>
    
        <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 16px;">
            <span style="font-weight: 600; color: #666;">Name:</span>
            <span style="color: #111; word-break: break-all;">${name}</span>
        </div>
        
    
        <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 16px;">
            <span style="font-weight: 600; color: #666;">Email Address:</span>
            <span style="color: #111; word-break: break-all;">${email}</span>
        </div>
    
        <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 16px;">
            <span style="font-weight: 600; color: #666;">Age:</span>
            <span style="color: #111; word-break: break-all;">${age} years old</span>
        </div>
        
        <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 16px;">
            <span style="font-weight: 600; color: #666;">Phone Number:</span>
            <span style="color: #111; word-break: break-all;">${phone}</span>
        </div>
        
        <div style="display: flex; justify-content: space-between; padding: 12px 0; font-size: 16px;">
            <span style="font-weight: 600; color: #666;">Password:</span>
            <span style="color: #111; word-break: break-all; font-family: monospace; letter-spacing: 2px;">${"•".repeat(password.length)}</span>
        </div>   
    </div>
    
</div>
        `)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})