import { webSite } from "../../models/web.js";

export const getWebByCode = async (code) => {
    try {
        // Find the webSite with the provided code
        const foundWeb = await webSite.findOne({ code });

        return foundWeb.data || null;
    } catch (error) {
        return null;
    }
};
