import React, { FC } from 'react';
import styles from './SearchRoute.module.css';

interface SearchRouteProps {}

const SearchRoute: FC<SearchRouteProps> = () => (
  <div className={styles.SearchRoute} data-testid="SearchRoute">
    SearchRoute Component
  </div>
);

export default SearchRoute;
