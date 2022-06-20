import Location from "./types/Location";

const LOCATIONS: Location[] = [
  new Location("Snowmass, CO", "39.2130", "-106.9378"),
  new Location("Malibu, CA", "34.0259", "-118.7798"),
  new Location("Catskill, NY", "42.2146", "-73.9595"),
  new Location("Grand Teton National Park, WY", "43.7904", "-110.6818"),
  new Location("Columbia River Gorge, OR", "45.7253", "-121.7300")
];

export default abstract class AppData {
  public static getLocations(): Location[] {
    return LOCATIONS;
  }
}
