import React from 'react';

import Layout from '../components/Layout';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';

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
          <h3 className="major">Lorem ipsum dolor</h3>
          <p>
          Available throughout the UK, Ireland, Portugal & Spain, Gastro Grey is produced by Liss in their state-of-the-art European factory.

Gastro Grey N2O Cream Chargers contain the ideal gas for food and medical applications. Gastro Grey Cream Chargers are made of 100% recyclable steel, they are painted grey, not refillable and contain min. 10 ml (approx. 8 gram) of pure food-grade N2O. 
          </p>
          <p>N2O is a tasteless and colorless gas, that is widely used as a propellant in the food industry. N2O or Nitrous Oxide is a tasteless, colourless, non inflammable, bacteriostatic (stops growth of bacteria) gas with a slightly sweet odour. N2O is used worldwide as a food propellant especially in the dairy industry.

Since N2O, if inhaled concentrated and in larger quantities has a weak anaesthetic effect, it has been used by doctors and dentists since the late 18th century. LISS N2O Chargers contain a relatively small quantity of only 8 gram N2O to whip up 0,5 l / 1 pint of cream, which makes it absolutely impossible to feel any side effects, if used properly. However, like all things N2O can also be misused!

Gastro Grey is available in the UK, Ireland, Portugal & Spain.</p>

          <p>
            Vestibulum ultrices risus velit, sit amet blandit massa auctor sit
            amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor mollis
            id vel diam. Praesent sit amet posuere risus, eu faucibus lectus.
            Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam.
            Proin nec commodo, vel scelerisque nisi scelerisque. Suspendisse id
            quam vel tortor tincidunt suscipit. Nullam auctor orci eu dolor
            consectetur, interdum ullamcorper ante tincidunt. Mauris felis nec
            felis elementum varius.
          </p>

          <h3 className="major">Vitae phasellus</h3>
          <p>
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
            Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
            egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
            in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
          </p>

          <section className="features">
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
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
