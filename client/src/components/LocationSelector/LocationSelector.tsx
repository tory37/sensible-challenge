import React, { FC } from 'react';
import styles from './LocationSelector.module.css';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Location from '../../types/Location';
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

export interface LocationSelectorProps {
  locations: Location[],
  selectedCity: string,
  setSelectedCity: any
}

const LocationSelector: FC<LocationSelectorProps> = (props: LocationSelectorProps) => {
    return (
       <div className={styles.LocationSelector} data-testid="LocationSelector">
        <Grid container direction="column" alignItems="flex-start" spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">
              Select a Location
            </Typography>
          </Grid>
          <Grid item xs={12}></Grid>
            <FormControl className={styles.formControl}>
              <RadioGroup
                name={props.selectedCity}
                value={props.selectedCity}
                onChange={e => props.setSelectedCity(e.target.value)}
              >
                {props.locations.map(location => (
                  <FormControlLabel key={location.city} value={location.city} control={<Radio />} label={location.city} />
                ))}
              </RadioGroup>
            </FormControl>
        </Grid>
      </div>
    );
  }

export default LocationSelector;
