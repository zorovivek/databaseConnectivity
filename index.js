const express= require("express")
const jwt = require("jsonwebtoken")
const mongoose= require("mongoose")
const jwtPassword= "123456"
const app= express()
app.use(express.json())
mongoose.connect("mongodb+srv://zorovivek:m0nster1king@cluster0.v0pe8v9.mongodb.net/userserver")
const User= mongoose.model("users",{email: String, password: String, Name: String})
app.post("/signup",async function(req, res){
    const email= req.body.email;
    const password= req.body.password;
    const name= req.body.name;
    const userExists= await User.findOne({email: email});
    if(userExists){
        res.status(400).send("user is already available in the database")
    }
    else{
        const user= new User({
            email: email,
            password: password,
            name: name
        })
        user.save()
        res.json({
            msg:" you have successfully signed up "
        })
    }
})
app.post("/signup", function(req, res){

})
app.get("/users", function(req, res){

})
app.listen(3000)