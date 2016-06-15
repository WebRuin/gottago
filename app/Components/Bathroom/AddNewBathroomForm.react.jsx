import React from 'react';
var HandleBathroomData = require('../Handers/HandleBathroomData.react.jsx');

// Stylesheet
import styles from './style/addNewBathroomForm.css';

export default class AddNewBathroomForm extends React.Component {

  processBathroomData: function(event) {
    event.preventDefault();

    // 1. Take data from form
    var bathroomLocationData = {
      bathroomName: this.refs.bathroomName.value,
      streetAddress: this.refs.streetAddress.value,
      city: this.refs.city.value,
      state: this.refs.state.value,
      zip: this.refs.zip.value,
    }

    // 2. Pass data back to App
    this.props.bathroomLocationData;

    // 3. Reset the form
    this.refs.bathroomLocationForm.reset();

    <HandleBathroomData data={this.props.bathroomLocationData} />
  },

  render() {
    return (
      <div>
        <pre>
          {JSON.stringify(this.props.addBathroomLocation, null, 2)}
        </pre>
        <div classNameName="callout secondary">
          <h4 classNameName="leave-bathroomLocation">Add a Bathroom Location</h4>
          <form classNameName="post-edit" ref="bathroomLocationForm" onSubmit={this.processBathroomData}>
            <label htmlFor="bathroomName">Bathroom Name</label>
            <input type="text" ref="bathroomName" id="bathroomName" required="required" />

            <label htmlFor="streetAddress">Street Address</label>
            <input type="text" ref="streetAddress" id="streetAddress" required="required" />

            <label htmlFor="city">City</label>
            <input type="text" ref="city" id="city" required="required" />

            <label htmlFor="state">State</label>
            <input type="text" ref="state" id="state" required="required" />

            <label htmlFor="zip">Zip</label>
            <input type="text" ref="zip" id="zip" required="required" />
            <br />

            <label htmlFor="bathroomType">Bathroom Type</label>
            <input type="checkbox" ref="bathroomType" id="bathroomType" value="Single - Unisex" />
            <span className="option-title">Single - Unisex</span>
            <br />

            <input type="checkbox" ref="bathroomType" id="bathroomType" value="Dual - Male/Female" />
            <span className="option-title">Dual - Male/Female</span>
            <br />

            <input type="checkbox" ref="bathroomType" id="bathroomType" value="Handicap" />
            <span className="option-title">Handicap</span>
            <br />

            <label htmlFor="accessibility">Accessibility</label>
            <input type="checkbox" ref="accessibility" id="accessibility" value="Do you need a key?" />
            <span className="option-title">Do you need a key?</span>
            <br />

            <input type="checkbox" ref="accessibility" id="accessibility" value="Do you need to be a customer?" />
            <span className="option-title">Do you need to be a customer?</span>
            <br />

            <input type="submit" value="Submit" onClick={this.storeFormData} />
          </form>
        </div>
      </div>
    );
  }
}
