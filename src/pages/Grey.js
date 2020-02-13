import React from 'react';

import Layout from '../components/Layout';
import pic4 from '../assets/images/greyBoxes.jpg';
import pic5 from '../assets/images/canisterGrey.jpg';
import pic6 from '../assets/images/list.jpg';
const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Gastro Grey</h2>
        
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Information</h3>
          <p>
          Available throughout the UK, Ireland, Portugal & Spain, Gastro Grey is produced by Liss in their state-of-the-art European factory.

Gastro Grey N2O Cream Chargers contain the ideal gas for food and medical applications. Gastro Grey Cream Chargers are made of 100% recyclable steel, they are painted grey, not refillable and contain min. 10 ml (approx. 8 gram) of pure food-grade N2O. 
          </p>
          <img width="50%"src={pic4} alt="" />
                <img src={pic5}  width="50%"alt="" />
          <p>N2O is a tasteless and colorless gas, that is widely used as a propellant in the food industry. N2O or Nitrous Oxide is a tasteless, colourless, non inflammable, bacteriostatic (stops growth of bacteria) gas with a slightly sweet odour. N2O is used worldwide as a food propellant especially in the dairy industry.

Since N2O, if inhaled concentrated and in larger quantities has a weak anaesthetic effect, it has been used by doctors and dentists since the late 18th century. LISS N2O Chargers contain a relatively small quantity of only 8 gram N2O to whip up 0,5 l / 1 pint of cream, which makes it absolutely impossible to feel any side effects, if used properly. However, like all things N2O can also be misused!

Gastro Grey is available in the UK, Ireland, Portugal & Spain.</p>

          <p>
          All our stock comes with COI, Certificate of Origin with all labelling in strict accordance with EU 169/2011 EK regulations meeting Worldwide Food Standard requirements regulations.
          </p>
          <img width="100%" src={pic6}  />
         
      
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
