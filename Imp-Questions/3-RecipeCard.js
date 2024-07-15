const favoriteRecipe = {
    title: "Mole",
    servings: 2,
    ingredients: ["cinnamon", "cumin", "cocoa"]
};
console.log(favoriteRecipe.title);
console.log(`Serves: ${favoriteRecipe.servings}`);
console.log("Ingredients:");
for (let i = 0; i < favoriteRecipe.ingredients.length; i++) {
    console.log(favoriteRecipe.ingredients[i]);
}
