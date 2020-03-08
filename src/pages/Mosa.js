import React from 'react';

import Layout from '../components/Layout';
import pic4 from '../assets/images/mosapic.jpg';
import pic5 from '../assets/images/canisterSilver.jpg';
import pic6 from '../assets/images/list.jpg';
const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Mosa</h2>
        
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Information</h3>
          <p>
          Available worldwide, combines the very best industry knowledge, manufacturing techniques and high quality to produce a truly outstanding product.

Produced in our state-of-the-art factory,  N2O Cream Chargers contain the perfect gas for food and medical applications.Mosa Cream Chargers are made of 100% recyclable steel, not refillable and contain min. 10 ml (approx. 8 gram) of pure food-grade N2O. 
          </p>
          <img width="50%"src={pic4} alt="" />
                <img src={pic5}  width="50%"alt="" />
          <p>N2O is a tasteless and colorless gas, that is widely used as a propellant in the food industry. More details about N2O: N2O or Nitrous Oxide is a tasteless, colourless, non inflammable, bacteriostatic (stops growth of bacteria) gas with a slightly sweet odour. N2O is used worldwide as a food propellant especially in the dairy industry.

Gastro Silver is available worldwide. </p>

          <p>
        All our stock comes with COI, Certificate of Origin with all labelling in strict accordance with EU 169/2011 EK regulations meeting Worldwide Food Standard requirements regulations.
          </p>

      
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
