import React from 'react';
import ReactDOM from 'react-dom';
import styles from './renderNav.scss';
import AddNewBathroomForm from './Bathroom/AddNewBathroomForm.react.jsx'

export default class RenderNav extends React.Component {
  render() {
    return (
      <header className={styles.site_header}>

        <a href="#0" className={styles.logo}>Tinge</a>

        <nav className={styles.site_nav}>
          <ul>
            <li className={styles.active}><a href="#0">Revenue</a></li>
            <li><a href="#0">Churn</a></li>
            <li><a href="#0">Customer</a></li>
          </ul>
        </nav>

        <div className={styles.account_actions}>

          <div className={styles.account_dropdown}>
            Gear
            <ul>
              <li>
                Your Account
                <ul className={styles.new_bathroom_form}>
                  <li>
                    <AddNewBathroomForm />
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <a href="#0" className={styles.sign_out_link}>Sign Out</a>

        </div>

      </header>
    );
  }
}
