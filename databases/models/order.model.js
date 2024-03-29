import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    cartItems: [
        {
            product: { type: mongoose.Types.ObjectId, ref: 'product' },
            quantity: Number,
            price: Number,

        }
    ],
    totalOrderPrice: Number,
    shippingAddress: {
        street: String,
        city: String,
        zipcode: Number
    },
    paymentMethod: {
        type: String,
        enum: ['card', 'cash'],
        default: 'cash'
    },
    isPaid: {
        type: Boolean,
        default: false
    },
    paidAt: Date,
    isDelivered: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

export const orderModel = mongoose.model('order', orderSchema)