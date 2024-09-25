import { Schema, model } from "mongoose";
import bcrypt from "bcrypt"
const userSchema = new Schema ({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,

    },
    nickname: {
        type: String,
        required: false,
        default: this.email
    },
    role: {
        type: String,
        enum: ["ADMIN", "USER"],
        default: "USER"
    }
})

userSchema.pre("save", function (){
    this.password
    bcrypt.hash(this.password)
})

userSchema.methods.isValidPassword = async function(password){
    return await bcrypt.compare(password, this.password)
}


const User = model("User", userSchema);

export default User