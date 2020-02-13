
import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mrgqrylr"
        method="POST"
      >
        <label>Full Name</label>
        <input type="text" name="name" required />
        <label>Any Other Company Owners/Persons of Significant Control*</label>
        <input type="text" name="other companies" required />
        <label>Trading Style*</label>
        <input type="text" name="trading style" required placeholder="(Partnership, Sole Trader, Limited Company)"/>
        <p>We only accept applications from businesses</p>
        <label>Company Trading Name*</label>
        <input type="text" name="trading name" required />
        <label>Your Trading Address*</label>
        <input type="text" name="trading address" required />
        <label>Your Registered Office Address (if different)</label>
        <input type="text" name="address"  />
        <label>Contact Office / Mobile Number*</label>
        <input type="text" name="phone number" required />
        <label>Sales Tax Number*</label>
        <input type="text" name="tax number" required />
        <label>Email*</label>
        <input type="email" name="email" required />
        <label>Website</label>
        <input type="text" name="website"  />
        <label>Type of Business*</label>
        <input type="text" name="website"  required placeholder="(B2B, B2C or B2B & B2C)"/>
        <label>Products of Interest*</label>
        <input type="text" name="products of interest" required placeholder="Silver Cream Chargers, Grey Cream Chargers, Cold Brew Coffee Chargers, Cartridges, Dispensers, Inflator Kits, Siphons" />
   
        
             <label>Current Business Sector Activity*</label>
             <input type="text" name="business sector" required  />   
             
             <label>Approximate Monthly Order Requirement*</label>
             <input type="text" name="monthly requirements" required  />   
             <label>Business Operational Area*</label>
             <input type="text" name="operational area" required  placeholder="List any city, state, region or country you would like to distribute to"/>   
        <label>More Information/Comments</label>
        
        <input type="text" name="more info" />
        <p>Distributorships are limited and awarded to the applicants with most potential. Details of current monthly order volume, future requirements, first order value etc will help support your application. Approximate sales value etc. You must read, accept and agree to our Terms of Business, Terms of Use Policy and Charger and Whipper Safety Guidelines</p>

        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        <p>By clicking submit, I hereby acknowledged that I have read, agree and accept the Terms of Business, Terms of Use Policy and Charger and Whipper Safety Guidelines as shown on this website.</p>
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}