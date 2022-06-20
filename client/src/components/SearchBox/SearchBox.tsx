import React, { FC } from 'react';
import styles from './SearchBox.module.css';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export interface SearchBoxProps {
  doSearch: any,
  setKeyword: any,
  keyword: string,
  canSearch: boolean
}

const SearchBox: FC<SearchBoxProps> = (props) => {

  return (
    <div className={styles.SearchBox} data-testid="SearchBox">
      <Grid container direction="column" alignItems="flex-start" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">
            Search
          </Typography>
        </Grid>
        <Grid item xs={12}></Grid>
        <FormControl className={styles.formControl}>
          <Grid item container direction="column" spacing={2}>
            <Grid item>
              <TextField id="outlined-basic" label="Keyword" variant="outlined" value={props.keyword} onChange={e => props.setKeyword(e.target.value)}  />
            </Grid>
            <Grid item>
              <Button disabled={!props.canSearch} variant="outlined" onClick={e => props.doSearch()}>Search</Button>
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
    </div>
  )
}

export default SearchBox;
