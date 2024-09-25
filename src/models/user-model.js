import { Schema, model } from "mongoose";

const userSchema = new Schema ({
    email: {
        type: String,
        required: true,
        unique: true,
        validator: {
            validate(v){
                
            }
        }
    },
    password: {
        type: String,
        validator: {
            validate(v){
                return 
            }
        }
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


const User = model("User", userSchema);

export default User