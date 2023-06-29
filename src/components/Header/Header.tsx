import * as React from "react";
import logo from '../../assets/investment-calculator-logo.png';
import styles from './Header.module.css';

type HeaderProps = {
  //
};

const Header: React.FC<HeaderProps> = (props:HeaderProps) => {
  return(
    <>
      <header className={styles.header}>
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
    </>
  );
};

export default Header;
