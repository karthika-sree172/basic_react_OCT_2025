const mongoose=require("mongoose")

const taskSchema=mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    status:{
        type:String,
        default:'pending'
    },
    UserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
});
module.exports=mongoose.model('Task',taskSchema)