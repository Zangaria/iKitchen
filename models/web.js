import mongoose from "mongoose";

const webSchema = new mongoose.Schema({
    code: String,
    data:[],


});

export const webSite = mongoose.model("web", webSchema);
