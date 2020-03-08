import React from 'react';
import Form from './Form';

import config from '../../config';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Sign Up</h2>
        {/* <p>
            Get in touch to ask any questions or learn more about becoming a Gastro Distributor Name *
        </p> */}
       <Form></Form>
        <ul className="contact">
          <li className="fa-home">{config.address}</li>

          <li className="fa-phone">{config.phone}</li>

          {config.socialLinks.map(social => {
            const isEmail = social.name === 'Email'
            const { icon, url } = social;
            return (
              <li className={`${icon}`} key={url}>
                <a href={`${isEmail ? 'mailto:' : ''}${url}`}>{url}</a>
              </li>
            );
          })}
        </ul>
        <ul className="copyright">
        <li>&copy; {new Date().getFullYear()} Gas Cosmos. All rights reserved.</li>
        
        </ul>
      </div>
    </section>
  );
}
