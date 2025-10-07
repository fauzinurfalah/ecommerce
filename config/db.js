import mongoose from "mongoose";

let chaced = global.mongoose

if (!chaced) {
    chaced = global.mongoose = { conn: null, promise: null}
}

async function connectDB() {
    if (chaced.conn) {
        return chaced.conn
    }

    if (!chaced.promise) {
        const opts = {
            bufferCommands: false,
        }

        chaced.promise = mongoose.connect(`${process.env.MONGODB_URI}/ecommerce`, opts).then( mongoose =>{
            return mongoose
        })
        
    }
    chaced.conn = await chaced.promise
    return chaced.conn

}

export default connectDB
