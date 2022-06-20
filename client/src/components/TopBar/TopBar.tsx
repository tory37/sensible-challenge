import React, { FC } from 'react';
import styles from './TopBar.module.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logo from '../../images/logo.png';


interface TopBarProps {}

const TopBar: FC<TopBarProps> = () => (
  <div className={styles.TopBar} data-testid="TopBar">
     <AppBar position="static">
      <Toolbar variant="dense">
        <div className={styles.logoWrapper}>
          <img src={logo} alt="Logo"/>
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

export default TopBar;
