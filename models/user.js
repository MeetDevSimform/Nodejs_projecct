import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    firstName:{ type: String,require:true},
    lastName:{ type: String,require:true},
    userName:{ type: String,require:true},
    email:{ type: String,require:true},
    password:{ type: String,require:true},

})

export const User = mongoose.model('User', userSchema);