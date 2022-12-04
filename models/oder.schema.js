import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
    products:{
        type:[
            {
                productId:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required:true
                },
                count:Number,
                price:Number
            }
        ],
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true

    },
    adress:{
        type:String,
        required:true

    },
  amount:{
        type:Number,
        required:true

    },
    status:{
          type:String,
          enum:["ORDERED","SHIPPED","DELIVERED","CANCELLED"],
          DEAFULT:"ORDERED",
          // CAN WE IMPOROVE THIS 
    },
    // PAYMENT MODE : UPI,CREDIRCARD OR WALLET, COD
    
    coupon:String,
    transcationId:String
},

{
    timestamps:true
}


)







export default mongoose.model("Order",orderSchema)