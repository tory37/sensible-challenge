export default class Location  {
  city: string;
  lat: string;
  lon: string;

  constructor(city: string, lat: string, lon: string) {
    this.city = city;
    this.lat = lat;
    this.lon = lon;
  }
}
