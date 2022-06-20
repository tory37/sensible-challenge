import React, { FC } from 'react';
import styles from './SearchResultEntry.module.css';
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from '@mui/material';


export interface SearchResultEntryProps {
  placeName: string;
  address: string;
  rating: string;
}

const SearchResultEntry: FC<SearchResultEntryProps> = (props: SearchResultEntryProps) => (
  <div className={styles.SearchResultEntry} data-testid="SearchResultEntry">
    <Card variant="outlined">
      <Container>
        <Grid container spacing={2}>
          <Grid item container direction="column" alignItems="flex-start" justifyContent="center" xs={6} height="100%">
            <Grid item xs={12}>
              <Typography variant="h6">
                {props.placeName}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2">
                Address - {props.address}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={6} height="100%">
            <Typography variant="h5">
              Rating - {props.rating}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Card>
  </div>
);

export default SearchResultEntry;
