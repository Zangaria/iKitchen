import {Ingredient} from "../../models/ingredient.js"

// Eliran 02/02/24
// data = {token:'toekn', and paramaeter you want update the params need be like the schema!!!!!}
// use this func to update user , user password or... username......
export const addIngrediant = async (data) => {
    const {  } = data;
    
    try {

        // Find the user by userId
        const user = await user.findById(userId);

        if (!user) {
            
            return { err: true, msg: "User not found" };
        }

        // Update fields if they exist in the data object
        if (password) {
            user.password = password;
        }

        if (userName) {
            user.userName = userName;
        }

        // Save the updated user to the database
        await user.save();

        return { err: false, msg: "User data updated successfully" };
    } catch (error) {
        return { err: true, msg: error.message };
    }
};


