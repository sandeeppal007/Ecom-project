import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,"please provide a product name"],
        trim:true,
        maxLength:[120,"product name should be a maz 120 chararch"]

    },

    price :{
        type:Number,
        required:[true, "please provide a product price"],
        maxLengthL: [5,"product price sholud nor be more than 5 digit "]
    },
    description:{
        type :String,
        // use some form of editore

    },
    photos:[{
        secure_url:{
            type: String,
            required:true
        }
    }],
    stock: {
        type: Number,
        default: 0
    },
    sold:{
        type:Number,
        default:0
    },
    collectionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Collection"

    }





},
{
    timestamps:true
}

)


export default mongoose.model("Product",productSchema)