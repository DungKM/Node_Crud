import mongoose from "mongoose";


const productSchema = mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    price:Number,
    desc:String,
    status:String,
    quality:String
})

export default mongoose.model("Product",productSchema);