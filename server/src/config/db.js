import mongoose from 'mongoose';

mongoose.connect('mongodb://mongodb:27017');

const db = mongoose.connection;

export default db;
