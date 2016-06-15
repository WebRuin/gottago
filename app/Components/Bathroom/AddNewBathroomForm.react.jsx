import React from 'react';
import styles from './addNewBathroomForm.css';

export default class AddNewBathroomForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div>
        <pre>
          {JSON.stringify(this.props.addBathroomLocation, null, 2)}
        </pre>
        <div className="callout secondary">
          <h4 className="leave-bathroomLocation">Add a Bathroom Location</h4>
          <form className="post-edit" ref="bathroomLocationForm" onSubmit={this.processBathroomLocation}>
            <fieldset>
               <label for="bathroomName">Bathroom Name</label>
               <input type="text" ref="bathroomName" id="bathroomName" required="required" />

               <label for="streetAddress">Street Address</label>
               <input type="text" ref="streetAddress" id="streetAddress" required="required" />

               <label for="city">City</label>
               <input type="text" ref="city" id="city" required="required" />

               <label for="state">State</label>
               <input type="text" ref="state" id="state" required="required" />

               <label for="zip">Zip</label>
               <input type="text" ref="zip" id="zip" required="required" />
            </fieldset>

            <fieldset>
              <label for="bathroomType">Bathroom Type</label>
                <input type="checkbox" ref="bathroomType" id="bathroomType" value="Single - Unisex" />
                <span class="option-title">Single - Unisex</span>
                <br />

                <input type="checkbox" ref="bathroomType" id="bathroomType" value="Dual - Male/Female" />
                <span class="option-title">Dual - Male/Female</span>
                <br />

                <input type="checkbox" ref="bathroomType" id="bathroomType" value="Handicap" />
                <span class="option-title">Handicap</span>
                <br />
            </fieldset>

            <fieldset>
              <label for="accessibility">Accessibility</label>
                <input type="checkbox" ref="accessibility" id="accessibility" value="Do you need a key?" />
                <span class="option-title">Do you need a key?</span>
                <br />

                <input type="checkbox" ref="accessibility" id="accessibility" value="Do you need to be a customer?" />
                <span class="option-title">Do you need to be a customer?</span>
                <br />
            </fieldset>
            <input type="submit" value="Submit" onClick={this.storeFormData} />
          </form>
        </div>
      </div>
    );
  }
}
