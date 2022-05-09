//import '.../public/index.css';


function App() {
  return (<>
    <div id="header">
      <h1 id="main-title"><strong><a href='index.html'>Best Recipes</a></strong></h1>
      <nav> 
        <ul>
          <li><a href="#breakfast">Breakfast</a></li>
          <li><a href="#lunch">Lunch</a></li>
          <li><a href="#dinner">Dinner</a></li>
          <li><a href="dessert.html">Dessert</a></li>
        </ul>
      </nav>
    </div>
    
      <div id="search">
        <div id="search-selectors">
          <h3>What should I eat?</h3>
          <h4 id="recipe-selected">...</h4>
       <button id="recipe-button">Select Recipe</button>
       <button id="try-again"><a href="index.html">Find another recipe</a></button>
        <a href= ''id="recipe-link">Go to recipe!</a>
        </div> 
    </div>
    <main>
      <br/>
      <h2 id="breakfast-title">Breakfast</h2>
      <br/>
      <section id="breakfast">
        <div id="vegan-pancakes">
        <h3 id="vegan-pancakes-title"><a href="https://cooking.nytimes.com/recipes/1021002-vegan-pancakes">Vegan Pancakes</a></h3>
        <figure>
          <a href="https://cooking.nytimes.com/recipes/1021002-vegan-pancakes"><img src="https://static01.nyt.com/images/2020/04/10/dining/gh-vegan-pancakes/gh-vegan-pancakes-articleLarge.jpg" alt="pancakes"/></a>
          <a href="https://cooking.nytimes.com/"><figcaption>Source: NYTimes Cooking</figcaption></a>
        </figure>
        <div class="ingredients accordion-class">
        <h3 class="accordion-title">Ingredients</h3>
        <div class="accordion-body">
          <div class="accordion-body-content">
        <ul>
          <li>1.5 cups of nondairy milk</li>
          <li>2 teaspoons apple cider vinegar or white vinegar</li>
          <li>1 tablespoon of oil</li>
          <li>2 cups of flour</li>
          <li>2 tablespoons cane sugar</li>
          <li>1.5 teaspoons of baking powder</li>
          <li>0.5 teaspoon of baking soda</li>
          <li>0.5 of salt</li>
          <li>Maple syrup or vegan butter (optional)</li>
        </ul>
      </div>
      </div>
      </div>
      <div class="steps accordion-class">
        <h3 class="accordion-title">Steps</h3>
        <div class="accordion-body">
          <div class="accordion-body-content">
        <ol>
          <li>In a medium size bowl, combine the nondairy milk and vinegar. Add 1 tablespoon oil, mix to combine and aside.</li>
          <li>In a large mixing bowl, whisk together the flour, sugar, baking powder, baking soda and salt. Add the wet ingredients to the dry ingredients and mix until no streaks of flour are visible. (A few small clumps in the batter are OK.)</li>
          <li>Oil a griddle or large nonstick skillet and heat it over medium for a few minutes. Avoiding crowding the pan, pour in 1/3 cup portions of batter to make pancakes and let cook until each pancake has formed small bubbles at the surface, 2 to 3 minutes. Flip gently and cook until the pancakes are golden brown on the second side, another 2 to 3 minutes.</li>
          <li>Repeat with all remaining batter, oiling the pan as necessary as you go. Serve with maple syrup, vegan butter or other toppings of choice.</li>
        </ol>
      </div>
        </div>
      </div>
      </div>
      <div id="overnight-oats">
        <a href="https://www.pickuplimes.com/recipe/vegan-nutella-overnight-oats-110"><h3 id="overnight-oats-title">Overnight Oats</h3></a>
        <figure>
          <a href="https://www.pickuplimes.com/recipe/vegan-nutella-overnight-oats-110"><img src="https://cdn.pickuplimes.com/cache/a4/60/a460b1dfad147e2125c462ecfaf37fa9.jpg" alt="oats"/></a>
          <a href="https://www.pickuplimes.com/recipe/vegan-nutella-overnight-oats-110"><figcaption> Source: Pickuplimes.com</figcaption></a>
        </figure>
        <div class="ingredients accordion-class">
          <h3 class="accordion-title">Ingredients</h3>
          <div class="accordion-body">
            <div class="accordion-body-content">
          <ul>
            <li>0.5 cup of oats</li>
            <li>0.5 cup of soy milk</li>
            <li>1 tbsp of coca powder</li>
            <li>1 tbsp of flaxseeds</li>
            <li>1 tbsp of nutella</li>
            <li>1 tbsp of dark chocolate</li>
            <li>Salt</li>
          </ul>
        </div>
        </div>
        </div>
        <div class="steps accordion-class">
          <h3 class="accordion-title">Steps</h3>
        <div class="accordion-body">
          <div class="accordion-body-content">
          <ol>
            <li>Combine all ingredients in a container and let sit overnight in the fridge.</li>
            <li>The next morning, add toppings and enjoy!</li>
          </ol>
        </div>
          </div>
        </div>
      </div>
      </section>
      <h2 id="lunch-title">Lunch</h2>
      <section id="lunch">
        <div id="veggie-wrap-container">
        <h3 id="veggie-wrap"><a href="https://www.foodiecrush.com/hummus-veggie-wrap-plus-10-heavenly-hummus-recipes-to-make-at-home/">Veggie Wrap</a></h3>
        <figure>
          <a href="https://www.foodiecrush.com/hummus-veggie-wrap-plus-10-heavenly-hummus-recipes-to-make-at-home/"><img src="https://www.foodiecrush.com/wp-content/uploads/2015/05/Hummus-Veggie-Wrap-foodiecrush.com-16.jpg" alt="veggie wrap"/></a>
          <figcaption><a href="https://www.foodiecrush.com/hummus-veggie-wrap-plus-10-heavenly-hummus-recipes-to-make-at-home/">Source: Foodiecrush.com</a></figcaption>
        </figure>
        <figure>
          <a href="https://www.foodiecrush.com"><img src="https://www.foodiecrush.com/wp-content/uploads/2015/05/Hummus-Veggie-Wrap-foodiecrush.com-01.jpg" alt="ingredients"/></a>
          <figcaption><a href="https://www.foodiecrush.com">Source: Foodiecrush.com</a></figcaption>
        </figure>
        <div class="ingredients lunch-ingredients accordion-class">
        <h3 class="accordion-title">Ingredients</h3>
        <div class="accordion-body">
          <div class="accordion-body-content">
        <ul>
          <li>1 flavored wrap or tortilla </li>
          <li>1/3 cup hummus</li>
          <li>2 slices cucumber </li> 
          <li>Spinach leaves</li>
          <li>Sliced tomato </li>
          <li>1/4 avocado</li>
          <li>Fresh alfalfa or broccoli sprouts</li>
          <li>Fresh microgreens</li>
          <li>Basil leaves</li>
        </ul>
      </div>
      </div>
      </div>
    </div>
      </section>
      <h2 id="dinner-title">Dinner</h2>
      <section id="dinner">
        <figure>
          <a href="https://themodernproper.com/broccoli-pesto-pasta"><img src="https://images.themodernproper.com/billowy-turkey/production/posts/2020/Broccoli-Pesto-Pasta-7.jpg?w=1200&auto=compress%2Cformat&fit=crop&dm=1599768462&s=1f973289090d6a228c2ee4880d3dcff1"alt="Broccoli Pesto Pasta" /></a>
          <a href="https://themodernproper.com/broccoli-pesto-pasta"> <figcaption id="pasta-title">Broccoli Pesto Pasta</figcaption></a>
        </figure>
        <figure> 
          <a href="https://themodernproper.com/spring-is-springing"><img src="https://images.themodernproper.com/billowy-turkey/production/posts/2014/grapefruit-salmon-salad-3.jpg?w=1200&auto=compress%2Cformat&fit=crop&dm=1599770175&s=9e9524cd24b63b5e2ef4edb828a64b4c" alt="salmon"/></a>
          <a href="https://themodernproper.com/spring-is-springing"><figcaption id="salmon-title"> Salmon</figcaption></a>
        </figure>
        <figure>
          <a href="https://themodernproper.com/instant-pot-mac-and-cheese"><img src="https://images.themodernproper.com/billowy-turkey/production/posts/2020/instant-pot-mac-and-cheese-8.jpg?w=667&auto=compress%2Cformat&fit=crop&dm=1610374934&s=2870d70bc5aaf7e4173b8aad5b9c63c9" alt="mac and cheese"/></a>
          <a href="https://themodernproper.com/instant-pot-mac-and-cheese"><figcaption id="mac-and-cheese-title">Mac and Cheese</figcaption></a>
        </figure>
        <figure>
          <a href="https://themodernproper.com/crispy-chicken-stir-fry"><img src="https://images.themodernproper.com/billowy-turkey/production/posts/2019/crispy-chicken-stir-fry-with-blistered-green-beans-9.jpg?w=1200&auto=compress%2Cformat&fit=crop&dm=1613150922&s=63d666fc53aa1abbb0a2269b0f52f099"alt="chicken stir fry"/></a>
          <a href="https://themodernproper.com/crispy-chicken-stir-fry"><figcaption id='chicken-stir-fry-title'>Chicken Stir Fry</figcaption></a>
        </figure>
      </section>
      <section id="dessert">
        <a href="./dessert.html"><h2>Dessert</h2></a>
      </section>
    </main>
    <footer>
      <p>Sign-up for recipe links:</p>
      <form action="index.html">
          <input type="text" id="email"placeholder="Enter email address"/>
          <p>What is your favorite meal of the day?</p>
          <label for="meal-breakfast">
            <input type="checkbox" id="meal-breakfast" name="favorite-meal"value="breakfast"/>Breakfast
          </label>
          <label for="meal-lunch">
            <input type="checkbox" id="meal-lunch" name="favorite-meal"value="lunch"/>Lunch
          </label>
          <label for="meal-dinner">
            <input type="checkbox" id="meal-dinner" name="favorite-meal"value="dinner"/>Dinner
          </label>
          <label for="meal-dessert">
            <input type="checkbox" id="meal-dessert" name="favorite-meal"value="dessert"/>Dessert
          </label>
          <br/>
          <br/>
          <input type="submit" value="Submit"/>
      </form>
    </footer>
    </>
  );
}

export default App;
