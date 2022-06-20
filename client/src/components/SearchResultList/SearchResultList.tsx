import React, { FC } from 'react';
import styles from './SearchResultList.module.css';
import SearchResultEntry, {SearchResultEntryProps} from '../SearchResultEntry/SearchResultEntry';
import { Typography, CircularProgress } from '@mui/material';

export interface SearchResultListProps {
  entries: SearchResultEntryProps[] | null,
  isLoading: boolean
}

const SearchResultList: FC<SearchResultListProps> = (props) => {
  return (
    <div className={styles.SearchResultList} data-testid="SearchResultList">
      {props.isLoading && <CircularProgress />}
      {!props.isLoading && props.entries !== null && (
        <>
          {props.entries.length === 0 &&
              <Typography variant="h6">
                {"No Results"}
              </Typography>
          }
          {props.entries.length > 0 &&
              props.entries.map((entry) => {
                return <SearchResultEntry placeName={entry.placeName} address={entry.address} rating={entry.rating} />
              })
          }
        </>
      )}
    </div>
  )
};

export default SearchResultList;
