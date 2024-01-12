
import { Recipe } from "../Model/Recipe.js";

// addrecipe
export const addrecipe = async (req, res) => {
  const { Name, description, ImgUrl } = req.body;

  const recipe = Recipe.create({
    Name,
    description,
    ImgUrl,
  });
  res.json({ message: " Recipe Added", recipe });
};

// get recipe

export const getRecipe = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    if (recipes.lenght == 0) {
      res.json("No Recipe is Finding");
    } else {
      res.json({ recipes });
    }
  } catch (e) {
    console.log(e);
  }
};


export const updateRecipe = async (req, res) => {
  const id = req.params.id;
  const { Name, description, ImgUrl } = req.body;
  let update = await Recipe.findById(id);
  if (!update) {
    res.json({ message: "Invaild id" });
  }
  (update.Name = Name),
    (update.description = description),
    (update.ImgUrl = ImgUrl);

  update.save();
  res.json(update);
};


//Delete Recipe

export const deleteRecipe = async(req,res)=>{
    const id = req.params.id;
    const recipe = await Recipe.findById(id)
    if(!recipe){
        res.json({message:"Invaild Id"});
    }
    recipe.deleteOne();
    res.json({message:" *************  Data Deleted ********** "})
}