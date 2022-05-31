
import styles from "./Featured.module.scss";


export function Featured(){
  return(
    <>
      <div className={styles.featured}>
      <div id="product-carousel" className="carousel slide carousel-fade product-img" data-bs-ride="carousel"  data-bs-interval="5000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/4/26/0/FNK_KALE-APPLE-SALAD_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382542442773.jpeg" className="d-block w-100" alt="Kale and Apple Salad Image"/>
            <p><a a href="https://www.foodnetwork.com/recipes/food-network-kitchen/kale-and-apple-salad-recipe-2112013">Kale and Apple Salad</a></p>
          </div>
          <div className="carousel-item">
            <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/10/4/1/FNK_SheetPan-Caprese-Chicken-H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1507136399444.jpeg" className="d-block w-100" alt="Sheet Pan Caprese Chicken"/>
            <p><a href="https://www.foodnetwork.com/recipes/food-network-kitchen/sheet-pan-caprese-chicken-3876232">Sheet Pan Caprese Chicken</a></p>
          </div>
          <div className="carousel-item">
            <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/12/27/1/FNM_010118-Waffles-with-Blueberry-Compote_s4x3.jpg.rend.hgtvcom.826.620.suffix/1514485377254.jpeg" className="d-block w-100" alt="Waffles Image"/>
            <p><a href="https://www.foodnetwork.com/recipes/bobby-flay/waffles-withblueberry-compoteand-lemon-ricotta-cream-4622249">Waffles with Blueberry Compote and Lemon Ricotta Cream</a></p>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#product-carousel" data-bs-slide="prev">
          <span aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#product-carousel" data-bs-slide="next">
          <span aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </>
  )
}
