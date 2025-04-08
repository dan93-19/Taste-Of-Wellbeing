const recipes = [
    {
        "name": "Green Gram Sprout Salad",
        "ingredients": [
            "½ cup sprouted green gram (moong dal), washed, drained",
            "4 dates, seedless, chopped",
            "2 tbsp raisins, chopped",
            "1–2 carrots, peeled, grated",
            "1 tbsp coconut, grated",
            "A dash of olive oil",
            "Honey to taste",
            "Lemon juice to taste"
        ],
        "method": [
            "Mix the sprouts, dates, raisins, carrots and coconut together in a deep bowl.",
            "In a separate bowl, mix lemon juice, olive oil and honey together to make the dressing.",
            "Pour the dressing over the sprouts mixture and mix thoroughly. Serve."
        ],
        "notes": [
            "Instead of lemon juice, you can use orange or pomegranate juice.",
            "This green gram salad can be made in numerous ways. Pineapple pieces, pomegranate and dried fruit can be added for a sweet salad.",
            "For a salty salad: cucumber, tomato, raw mango or mint leaves can be added."
        ]
    },
    {
        "name": "Beans and Corn Salad",
        "ingredients": [
            "1½ cups red kidney beans (rajma), uncooked",
            "8–10 baby corn, washed, chopped into ½\" rounds",
            "¼ cabbage, small, shredded",
            "½ green capsicum, medium-sized, deseeded, diced into small pieces",
            "2 tomatoes, small, finely chopped",
            "1 cucumber, small, peeled, chopped into small pieces",
            "1 carrot, small, peeled, chopped into small pieces",
            "5 olives, halved",
            "½ lemon",
            "1½ tsp olive oil",
            "1 tsp roasted cumin, powdered",
            "2 sprigs coriander leaves, fresh, finely chopped",
            "Salt to taste",
            "Black pepper powder to taste"
        ],
        "method": [
            "Cook the kidney beans.",
            "Put the kidney beans, baby corn, cabbage, capsicum, tomato, cucumber, carrot, and olives in a deep bowl. Toss once or twice.",
            "In a separate bowl, mix the juice of the lemon with olive oil, salt, black pepper powder, and roasted cumin powder.",
            "Pour the dressing over the salad and toss well. Serve garnished with coriander leaves."
        ],
        "notes": [
            "The kidney beans can be cooked by washing well in a colander, then soaking overnight. In the morning, drain the water and add the kidney beans along with fresh water into a pot and boil for 10-15 minutes. Then bring to a simmer and let it cook for another 90-120 minutes. An easy way to check if they are ready is if you press the beans, they should be tender, but not mushy. If the beans are still crunchy, then allow them to cook at a simmer for some more time, checking if they are ready every 10 minutes."
        ]
    }
    // Add more recipes here
];

// Populate recipe list
const recipeList = document.getElementById('recipe-list');
const searchBar = document.getElementById('search-bar');

// Display recipes
function displayRecipes(filteredRecipes) {
    recipeList.innerHTML = '';
    filteredRecipes.forEach(recipe => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="recipe-detail.html?recipe=${encodeURIComponent(recipe.name)}">${recipe.name}</a>`;
        recipeList.appendChild(li);
    });
}

// Filter recipes by search input
searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchTerm)
    );
    displayRecipes(filteredRecipes);
});

// Display all recipes initially
displayRecipes(recipes);

// Pass recipe details to the recipe detail page
if (window.location.pathname.includes('recipe-detail.html')) {
    const params = new URLSearchParams(window.location.search);
    const recipeName = decodeURIComponent(params.get('recipe'));
    const recipe = recipes.find(r => r.name === recipeName);

    if (recipe) {
        document.getElementById('recipe-name').textContent = recipe.name;
        document.getElementById('ingredients-list').innerHTML = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
        document.getElementById('method-list').innerHTML = recipe.method.map(step => `<li>${step}</li>`).join('');
        document.getElementById('notes-list').innerHTML = recipe.notes.map(note => `<li>${note}</li>`).join('');
    }
}
