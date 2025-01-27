import { timeStamp } from "console";
import validator from "validator"
import mongoose from "mongoose";


interface IUser extends Document {
    _id: String
    name: String
    email: String
    photo: String
    role: "admin" | "user"
    gender: "male" | "female"
    dob: Date
    createdAt: Date
    updatedAt: Date

    age: Number
    
}



const  userSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            required: [true,"Please enter Id"]
        },
        name: {
            type: String,
            required: [true,"Please enter name"]
        },
        email: {
            type: String,
            unique: [true, "Email already exist"],
            required: [true,"Please enter email"],
            validate: validator.default.isEmail
        },
        photo: {
            type: String,
            required: [true,"Please add IPhoto"]
        },
        role: {
            type: String,
            enum: ["admin","user"],
            default: "user"
        },
        gender: {
            type: String,
            enum: ["male","female"],
            required: [true, "plz enter gender"]
        },
        dob: {
            type: Date,
            enum: ["male","female"],
            required: [true, "plz enter date of birth"]
        },
        
    },{timestamps: true})


    userSchema.virtual("age").get(function (){
        const today = new Date()
        const dob = this.dob
        let age = today.getFullYear() - dob.getFullYear()


        if (today.getMonth() < dob.getMonth() || today.getMonth() === dob.getMonth()  && today.getDate() < dob.getDate()){
            age--
        }
        return age
    })

export const User = mongoose.model<IUser>('User',userSchema)