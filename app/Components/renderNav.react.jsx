import React from 'react';
import styles from './renderNav.scss';

export default class RenderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <header className={styles.site-header}>

        <a href="#0" className={styles.logo}>Tinge</a>

        <nav className={styles.site-nav}>
          <ul>
            <li className={styles.active}><a href="#0">Revenue</a></li>
            <li><a href="#0">Churn</a></li>
            <li><a href="#0">Customer</a></li>
          </ul>
        </nav>

        <div className={styles.account-actions}>

          <div className={styles.account-dropdown}>
            Gear
            <ul>
              <li>Your Account</li>
            </ul>
          </div>

          <a href="#0" className={styles.sign-out-link}>Sign Out</a>

        </div>

      </header>
    );
  }
}
