import React from 'react';

import Layout from '../components/Layout';
import logo from '../assets/images/logo.png';
import pic1 from '../assets/images/chargers.jpg';
import pic2 from '../assets/images/canisterGrey.jpg';
import pic3 from '../assets/images/canisterSilver.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2><img src={logo}></img></h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a  className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Trade Specialist</h2>
            <p>
            As the appointed Mosa and Liss agent for the UK, Ireland, Spain and Portugal, we understand market-leading quality. Gastro is built upon the same dedication to quality of product and customer service. After 5 years of searching, testing and rejecting manufacturers, we have sourced the very best facilities to produce our products, Gastro Grey and Gastro Silver. 




            </p>
            <p>All our stock comes with COI, Certificate of Origin with all labelling in strict accordance with EU 169/2011 EK regulations meeting Worldwide Food Standard requirements regulations, ensuring you and your customers receive stock without delay.</p>
            <p>Gastro comes in 2 distinct varieties, Gastro Grey and Gastro Silver.</p>
            {/* <a href="/Silver" className="special">
              Learn more
            </a> */}
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/Grey" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Gastro Grey/Silver</h2>
            <p>
           Gastro Grey available throughout the UK, Ireland, Portugal & Spain, Gastro Grey is produced by Liss in their state-of-the-art European factory.


            </p>
            <p>Gastro Silver is available worldwide, Gastro Silver combines the very best industry knowledge, manufacturing techniques and high quality to produce a truly outstanding product.</p>
            <p>Gastro Grey N2O Cream Chargers contain the ideal gas for food and medical applications. Gastro Grey Cream Chargers are made of 100% recyclable steel, they are painted grey, not refillable and contain min. 10 ml (approx. 8 gram) of pure food-grade N2O. </p>
             
        <p>
           Gastro Silver N2O Cream Chargers contain the perfect gas for food and medical applications. Gastro Silver Cream Chargers are made of 100% recyclable steel, they are painted grey, not refillable and contain min. 10 ml (approx. 8 gram) of pure food-grade N2O. 
        </p>
            <a href="/Grey" className="special">
              Grey info
            </a>
            <a href="/Silver" className="special">
              Silver Info
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/Silver" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Mosa Silver</h2>
  <p>MOSA’s cream chargers can also be used to give added volume and body to any dressings or sauces that might not otherwise have been aerated. This further allows you some leeway to experiment with your recipes. Once the air is added to the mix, the sauce sticks to foods more easily as well as making the flavour of the food much stronger.</p>

  
            <p>Mosa N2O Cream Chargers contain the ideal gas for food and medical applications. Mosa are made of 100% recyclable steel, they are not refillable and contain min. 10 ml (approx. 8 gram) of pure food grade N2O. </p>
             
        
        <a href="/Mosa" className="special">
              More Info
            </a>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">About Us</h2>
          <p>
          Gas Cosmos specialises in producing high-quality CO2, N2O and Specialist Gas products. 

          Gas Cosmos Ltd are the official agent for both Liss and Mosa, supplying their products throughout the UK, Spain, Portugal and Ireland.

Our company have been in operation since 2013

Working with Liss and Mosa, we understand market-leading quality. Our brand, Gastro, is built upon this very same dedication to quality of product and customer service.
          </p>
          <h2 className="major">Working with us</h2>
          <p>
You will be working with a professional company that upholds and promotes exacting professional standards, we always do the right thing.
 
We are a B2B company supplying Trade Only worldwide.

As a distributor, you can take comfortable in the knowledge that you are dealing directly with the only Worldwide agent, to be officially appointed as an agent for 3 of the World’s Leading manufacturers, Mosa, Gastro and Liss.

In addition to being an officially registered UK company, as well as having our own manufactured and registered trademarked brand Gas Cosmos ltd.

We do not work with, nor do we recommend anyone works with, middle-men or agents who are non-manufacturer appointed. They are supplying outside of their remit. Stock from such middle-men, agents, 3rd parties etc., is subject to seizure for many reasons; un-verifiable origin, not-genuine, labelling not in strict accordance with EU 169/2011 EK regulations and Worldwide Food Standard requirements, incorrect import duty or tax declarations and often with total disregard to responsible Terms of Use Policy and Charger and Whipper Safety Guidelines.</p>

   <h2 className="major">Gas Cosmos - Your Opportunity</h2>
   
<p>We are looking to appoint selected Gastro Distributors on a state, county, city or country basis.Our products offer market-leading quality and with our cost-effective pricing structure, customer demand has been astonishing. 

You will be granted continuous access to Gastro stock, which is available both by the pallet and container. Wholesale pallet orders start from just 11 pallets of 48 cases of Gastro Cream Chargers.

Gastro Silver, our worldwide product, builds on the international success of “Shiny Silver” chargers. Gastro Silver offers the favourable shiny silver chargers at a fraction of the cost, allowing for large retail mark-ups.

The incredible demand for our products is the reason we seek location-specific worldwide distributors who are better placed to meet local customer demand.

Also, Europe-wide, we offer drop-shipping for your pallet orders direct from either our UK or European warehouse. This allows you to focus on generating sales, without the hassle of storage or distribution.

As an Official Gastro Distributor, you will become eligible to receive leads from our marketing campaigns including SMM campaigns on Facebook, Twitter, Instagram, Pinterest and YouTube, in addition to our large e-mail marketing campaign which already produces active sales leads ready to pass onto distributors.</p>
          {/* <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Sed feugiat lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Nisl placerat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Ante fermentum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">Fusce consequat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul> */}
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
