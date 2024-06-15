const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./reviews");

const listingSchema = new Schema({
    title:{
        type: String,
    },
    description:String,
    image:{
        filename:String,
        url:{
            type:String,
            default:"https://media.istockphoto.com/id/1292886307/photo/mountains-of-himalayas-young-beautiful-high-mountains-of-tibet.jpg?s=1024x1024&w=is&k=20&c=YCzifCVMF3RuCYwafBg5r66DPfXRA9ZTtpe77u8tkI0=",
        set :(v)=>
            v === ""
        ?"https://media.istockphoto.com/id/1292886307/photo/mountains-of-himalayas-young-beautiful-high-mountains-of-tibet.jpg?s=1024x1024&w=is&k=20&c=YCzifCVMF3RuCYwafBg5r66DPfXRA9ZTtpe77u8tkI0=" 
        : v,
        }
    },
    price:String,
    location:String,
    country:String,
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review",


        },

    ],
    

});

listingSchema.post("findOneAndDelete",async (listing) =>{
    if(listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews}});

    }
});


const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;


