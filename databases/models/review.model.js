import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    comment: {
        type: String,
        trim: true,
        required: [true, 'comment is required']
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: "product"
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    rating: {
        type: Number,
        required: [true, 'rating is required']
    }
}, {
    timestamps: true
})
reviewSchema.pre(/^find/, function () {
    this.populate('user', 'name')
       
})

export const reviewModel = mongoose.model('review', reviewSchema)