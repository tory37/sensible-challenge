import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import LocationSelector from './components/LocationSelector/LocationSelector';
import SearchBox from './components/SearchBox/SearchBox';
import SearchResultList from './components/SearchResultList/SearchResultList';
import { SearchResultEntryProps } from './components/SearchResultEntry/SearchResultEntry';
import TopBar from './components/TopBar/TopBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Location from './types/Location';
import AppData from "./data";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const locations: Location[] = AppData.getLocations();
  const [searchResults, setSearchResults] = React.useState<SearchResultEntryProps[] | null>(null);
  const [selectedLocation, setSelectedLocation] = React.useState<Location | undefined>(undefined);
  const [keyword, setKeyword] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const setLocation = ((city: string) => {
    const match: Location | undefined = locations.find(location => location.city === city);
    setSelectedLocation(match);
  });

  const canSearch = React.useMemo(() => {
    if (selectedLocation !==  undefined && keyword.length > 0) {
      return true;
    }

    return false;
  }, [selectedLocation, keyword]);

  const doSearch = React.useCallback((): void => {
    if (!!canSearch && selectedLocation !== undefined) {
      setIsLoading(true);
      fetch(`http://localhost:3001/places?lat=${selectedLocation.lat}&lon=${selectedLocation.lon}8&keyword=${keyword}`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(
            data.results.map((result: any) => {
              return {
                placeName: result.name,
                address: result.vicinity,
                rating: result.rating
              }
            })
          )
        })
        .catch(e => console.error(e))
        .finally(() => setIsLoading(false));
        //.catch(e => alert(`Exception: ${e.message}`));
      }
  }, [selectedLocation, keyword]);

  return (
    <>
      <TopBar />
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={8}>
            <Box sx={{ my: 4 }}>
              <LocationSelector
                locations={locations}
                selectedCity={selectedLocation ? selectedLocation.city : ""}
                setSelectedCity={setLocation}/>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ my: 4 }}>
              <SearchBox
                doSearch={doSearch}
                keyword={keyword}
                setKeyword={setKeyword}
                canSearch={canSearch}
              />
            </Box>
          </Grid>
          <Grid item xs={8} >
            <Box sx={{ my: 4 }}>
              <SearchResultList entries={searchResults} isLoading={isLoading} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
