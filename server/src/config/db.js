import mongoose from "mongoose" 

mongoose.connect(`mongodb://mongodb:27017`);

let db = mongoose.connection

export { db }