import { webSite } from "../../models/web.js";

export const addWeb = async (data) => {
    try {
        // Check if a webSite with the provided code already exists
        const existingWeb = await webSite.findOne({ code: data.code });

        if (existingWeb) {
            // WebSite with this code already exists, update the existing record
            const updatedWeb = await webSite.findOneAndUpdate(
                { code: data.code },
                { $set: { data: data.data } },
                { new: true }
            );

            return {
                code: 102,
                err: false,
                msg: "WebSite updated successfully.",
                updatedWebId: updatedWeb?._id.toString(),
            };
        }

        // Create a new webSite
        const newWeb = new webSite({
            code: data.code,
            data: data.data,
        });

        // Save the new webSite to the database
        const res = await newWeb.save();
        return {
            code: 100,
            err: false,
            msg: "WebSite added successfully.",
            newWebId: res?._id.toString(),
        };
    } catch (error) {
        return { err: true, msg: error };
    }
};
