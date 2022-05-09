//import '.../public/index.css';
import {getRecipes} from "../importRecipes";
import {Nav} from "./Nav";
import {Generator} from "./Recipe-Generator";
import {Recipe} from "./Recipe-Overview";
import {Form} from "./Form";
import {Accordion} from "./Accordion";

// getRecipes()
// .then(data=>{
// console.log(data);
// //createRecipeClasses(data);
// //updateRecipesUI(data);
// })
// .catch(err=>{
// console.log(err);
// });
const listItem=["1.5 cups of nondairy milk","2 teaspoons apple cider vinegar or white vinegar", "1 tablespoon of oil","2 cups of flour","2 tablespoons cane sugar","1.5 teaspoons of baking powder", "0.5 teaspoon of baking soda","0.5 of salt","Maple syrup or vegan butter (optional)"];
const listItems=listItem.map(item=><li>{item}</li>)

function App() {
  return (<>
    <Nav />
    <Generator />

    <main>
      <br/>
      <h2 id="breakfast-title">Breakfast</h2>
      <br/>
      <section id="breakfast">
        <div id="vegan-pancakes">
        <h3><a href="https://cooking.nytimes.com/recipes/1021002-vegan-pancakes">Vegan Pancakes</a></h3>
        <Recipe
      URL="https://cooking.nytimes.com/recipes/1021002-vegan-pancakes"
      imgURL="https://static01.nyt.com/images/2020/04/10/dining/gh-vegan-pancakes/gh-vegan-pancakes-articleLarge.jpg"
      name="Source: Pickuplimes.com"
      id="vegan-pancakes-title"  
      />
      
      <Accordion
        className="ingredients accordion-class"
        title="Ingredients"
        list={listItems}>
        </Accordion>

        <Accordion
        className="steps accordion-class"
        title="Steps">
          <li>In a medium size bowl, combine the nondairy milk and vinegar. Add 1 tablespoon oil, mix to combine and aside.</li>
          <li>In a large mixing bowl, whisk together the flour, sugar, baking powder, baking soda and salt. Add the wet ingredients to the dry ingredients and mix until no streaks of flour are visible. (A few small clumps in the batter are OK.)</li>
          <li>Oil a griddle or large nonstick skillet and heat it over medium for a few minutes. Avoiding crowding the pan, pour in 1/3 cup portions of batter to make pancakes and let cook until each pancake has formed small bubbles at the surface, 2 to 3 minutes. Flip gently and cook until the pancakes are golden brown on the second side, another 2 to 3 minutes.</li>
          <li>Repeat with all remaining batter, oiling the pan as necessary as you go. Serve with maple syrup, vegan butter or other toppings of choice.</li>
        </Accordion>
     
      </div>
      <div id="overnight-oats">
        <a href="https://www.pickuplimes.com/recipe/vegan-nutella-overnight-oats-110"><h3 id="overnight-oats-title">Overnight Oats</h3></a>

        <Recipe
      URL="https://www.pickuplimes.com/recipe/vegan-nutella-overnight-oats-110"
      imgURL="https://cdn.pickuplimes.com/cache/a4/60/a460b1dfad147e2125c462ecfaf37fa9.jpg"
      name="Source: Pickuplimes.com" 
      id="overnight-oats-title"  
      />
      <Accordion
        className="ingredients accordion-class"
        title="Ingredients">
            <li>0.5 cup of oats</li>
            <li>0.5 cup of soy milk</li>
            <li>1 tbsp of coca powder</li>
            <li>1 tbsp of flaxseeds</li>
            <li>1 tbsp of nutella</li>
            <li>1 tbsp of dark chocolate</li>
            <li>Salt</li>
        </Accordion>

        <Accordion
        className="steps accordion-class"
        title="Steps">
            <li>Combine all ingredients in a container and let sit overnight in the fridge.</li>
            <li>The next morning, add toppings and enjoy!</li>
        </Accordion>
        
      </div>
      </section>
      <h2 id="lunch-title">Lunch</h2>
      <section id="lunch">
        <div id="veggie-wrap-container">
        <h3 id="veggie-wrap"><a href="https://www.foodiecrush.com/hummus-veggie-wrap-plus-10-heavenly-hummus-recipes-to-make-at-home/">Veggie Wrap</a></h3>
        <Recipe
          URL="https://www.foodiecrush.com/hummus-veggie-wrap-plus-10-heavenly-hummus-recipes-to-make-at-home/"
          imgURL="https://www.foodiecrush.com/wp-content/uploads/2015/05/Hummus-Veggie-Wrap-foodiecrush.com-16.jpg" alt="veggie wrap"
          name="Source: Foodiecrush.com" 
          id="veggie-wrap-title" 
        />
        <Recipe
          URL="https://www.foodiecrush.com/hummus-veggie-wrap-plus-10-heavenly-hummus-recipes-to-make-at-home/"
          imgURL="https://www.foodiecrush.com/wp-content/uploads/2015/05/Hummus-Veggie-Wrap-foodiecrush.com-16.jpg" alt="veggie wrap"
          name="Source: Foodiecrush.com" 
          id="veggie-wrap-title" 
        />

        <Accordion
        className="ingredients lunch-ingredients accordion-class"
        title="Ingredients">
          <li>1 flavored wrap or tortilla </li>
          <li>1/3 cup hummus</li>
          <li>2 slices cucumber </li> 
          <li>Spinach leaves</li>
          <li>Sliced tomato </li>
          <li>1/4 avocado</li>
          <li>Fresh alfalfa or broccoli sprouts</li>
          <li>Fresh microgreens</li>
          <li>Basil leaves</li>
        </Accordion>
    </div>
      </section>
      <h2 id="dinner-title">Dinner</h2>
      <section id="dinner">
      <Recipe
      URL="https://themodernproper.com/broccoli-pesto-pasta"
      imgURL="https://images.themodernproper.com/billowy-turkey/production/posts/2020/Broccoli-Pesto-Pasta-7.jpg?w=1200&auto=compress%2Cformat&fit=crop&dm=1599768462&s=1f973289090d6a228c2ee4880d3dcff1"
      name="Broccoli Pesto Pasta" 
      id="pasta-title"  
      />
      <Recipe
      URL="https://themodernproper.com/spring-is-springing"
      imgURL="https://images.themodernproper.com/billowy-turkey/production/posts/2014/grapefruit-salmon-salad-3.jpg?w=1200&auto=compress%2Cformat&fit=crop&dm=1599770175&s=9e9524cd24b63b5e2ef4edb828a64b4c"
      name="Salmon" 
      id="salmon-title"  
      />
      <Recipe
      URL="https://themodernproper.com/instant-pot-mac-and-cheese"
      imgURL="https://images.themodernproper.com/billowy-turkey/production/posts/2020/instant-pot-mac-and-cheese-8.jpg?w=667&auto=compress%2Cformat&fit=crop&dm=1610374934&s=2870d70bc5aaf7e4173b8aad5b9c63c9"
      name="Mac and Cheese" 
      id="mac-and-cheese-title"  
      />
       <Recipe
      URL="https://themodernproper.com/crispy-chicken-stir-fry"
      imgURL="https://images.themodernproper.com/billowy-turkey/production/posts/2019/crispy-chicken-stir-fry-with-blistered-green-beans-9.jpg?w=1200&auto=compress%2Cformat&fit=crop&dm=1613150922&s=63d666fc53aa1abbb0a2269b0f52f099"
      name="Chicken Stir Fry" 
      id="chicken-stir-fry-title"  
      />
      </section>
    </main>
    <footer>
      <Form/>
    </footer>
    </>
  );
}

export default App;
