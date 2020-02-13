import React from 'react';

import Layout from '../components/Layout';
import pic4 from '../assets/images/multiChargers.png';
import pic5 from '../assets/images/infusion.jpg';
import pic6 from '../assets/images/aromatic.jpg';
import pic7 from '../assets/images/filling.jpg';
import pic8 from '../assets/images/espuma.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Gastro Dispensers</h2>
        
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Gastro Cream Whippers</h3>
          <p>
          Used by a whole host of restaurants and cafes, our Gastro Cream Dispenser offers the most modernistic and performance-focused cream dispenser.

From classic cream application and aromatising and infusion through to espuma and filing and decorating, there are lots of ways that our dispensers and Nitrous Oxide chargers can be used to optimise productivity, precision and results in both residential and commercial kitchens.

Ideal for creating Nitro coffee, cold brew beer, and of course, whipping up garnishes, mousses, whipped cream, and foams quickly and effectively, this easy to use dispenser will also allow you to prepare the perfect coffee shakes, cappuccinos, mochas, and even ice cream.


          </p>

                {/* <img src={pic5}  width="50%"alt="" /> */}
          <p>Convenient and super easy to use, this cream dispenser boasts a tilt at the end of the nozzle for expert performance and precision. But that’s not all… the contents inside your whipper can remain fresh for up to 14 days, meaning you will be able to save on prep time and even prepare fresh ingredients in advance.

A welcomed addition to any commercial or residential kitchen environment, this high performance, professional whipped cream dispenser is fully compliant with all catering kitchen requirements.</p>

          <p>
          Perfect for restaurants, cafes and even home kitchens, this dispenser utilises 8G Nitrous Oxide (N20) gas cartridges, in order to perform a number of whipping and propelling tasks quickly and effectively in the kitchen.

Gastro Cream Dispensers arecompatible with all major brands of N20 chargers, including Gastro, Mosa and Liss.

Dedicated to delivering the highest standard of customer service, from the moment you get in touch, we will help you to identify the best products for your individual requirements.
          </p>
          {/* <img width="100%" src={pic6} /> */}
        
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Classic Cream Application</h3>
              <p>
              Whippers are used in all areas of the catering industry when it comes to whipping cream and preparing sauces, cocktails, foams, espumas, as well as many other culinary delicacies. Despite many advances in technology, whippers remain one of the best ways of preparing cream, and other liquid-based ingredients
              </p>
       
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Aromatising And infusion</h3>
              <p>
              Infusing techniques are adopted my chefs in all corners of the world when it comes infusing liquids with different aromas. The process works when the N20 gas flows out of the cream charger into the liquid, which then forces the liquid to bind together with the N20 due to the high pressure that it is under. This then flavours the overall substance. Once the pressure in the whipping device has been released, the N20 then forms bubbles and takes on the flavours of the ingredient, transferring the aroma into the liquid.
              </p>
  
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic8} alt="" />
              </a>
              <h3 className="major">Espuma</h3>
              <p>
              The Spanish word for foam, Espuma involves creating airily light foams to go on top of a range of different beverages.  To achieve this texture, people in all corners of the globe used whippers and as a result, they are now a common sight in many modern-day kitchens. It’s easy to prepare espumas from purees, cream and extracts, from juices, coulis, as well as soups or sauces, and they can be added to a diverse range of dishes and drinks. Espumas are not only a great way to enhance the flavours of food, but they are also a great way of optimising the aesthetic appeal of food.
              </p>
  
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">Filling and Decorating</h3>
              <p>
              When it comes to adding a new and exciting dimension to your favourite dishes, it’s all about getting your filling and decorating right, especially when it comes to enhancing its presentation. There are a whole host of high performance tools that can be used to unleash your imagination in the kitchen, allowing you to experiment with different flavours, textures and finishes.
              </p>
  
            </article>
          </section>
    
       
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
