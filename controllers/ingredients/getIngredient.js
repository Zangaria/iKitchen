import { Ingredient } from "../../models";


export const getIngredient = async(ingredName)=>{

    try{
        const find = await Ingredient.findOne({
            ingredName: ingredName,
          });

          if (find)

          return find;
          else
          return {err:true,msg:'not found'}
    }catch(err){
        return {err:true,msg:err}
    }


    return 0;
}