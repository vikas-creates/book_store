import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pNumber:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
   
})
const Contacts=mongoose.model("Contacts", contactSchema)
export default Contacts;