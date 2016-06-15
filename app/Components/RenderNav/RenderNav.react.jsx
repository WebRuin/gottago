import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style/renderNav.css';
import AddNewBathroomForm from '../Bathroom/AddNewBathroomForm.react.jsx'

export default class RenderNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className={styles.siteHeader}>

        <a href="#0" className={styles.logo}>Tinge</a>

        <nav className={styles.siteNav}>
          <ul>
            <li className={styles.active}><a href="#0">Revenue</a></li>
            <li><a href="#0">Churn</a></li>
            <li><a href="#0">Customer</a></li>
          </ul>
        </nav>

        <div className={styles.accountActions}>

          <div className={styles.accountDropdown}>
            Add A Bathroom
            <ul className={styles.newBathroomForm}>
              <li>
                <AddNewBathroomForm />
              </li>
            </ul>
          </div>

          <a href="#0" className={styles.sign_out_link}>Sign Out</a>

        </div>

      </header>
    );
  }
}
