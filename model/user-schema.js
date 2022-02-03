import mongoose  from "mongoose";
import autoIncrement from 'mongoose-auto-increment'


const employeeSchema=mongoose.Schema({
    name:String,
    email:String,
    city:String,
    phone:Number,
    department:String,
    salary:Number,
    dateOfHire:String,
    experience:Number,
    age:Number,
    jobTital:String,

})
autoIncrement.initialize(mongoose.connection);
employeeSchema.plugin(autoIncrement.plugin,'employee')
 const employee=mongoose.model('employee',employeeSchema);




export default employee