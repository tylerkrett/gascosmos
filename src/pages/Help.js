import React from 'react';

import Layout from '../components/Layout';
import mosa from '../assets/pdf/mosa.pdf';
import world from '../assets/pdf/worldwidegas.pdf';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Help Page</h2>
        
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Information</h3>
        
        <p>Documents:</p>
        <a target="_blank" href={world}>Worldwide Information</a>
        <br />
     <a  target="_blank" href={mosa}>Mosa Information</a>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
