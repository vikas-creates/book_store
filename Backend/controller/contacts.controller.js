import Contacts from "../model/contact.model.js";

export const contact=async(req,res)=>{
    try {
        const {name, lName, email, pNumber, message}=req.body;

        //creata a new contact instance
        const createdContacts= new Contacts({
            name,
            lName,
            email,
            pNumber,
            message

        })

        //save the contact to the database 
      await createdContacts.save()
        res.status(201).json({message:"data submitted successfully"});
    } catch (error) {
       console.log("Error: " + error.message);
       res.status(500).json({message:"Internal Server Error"}); 
    }
}