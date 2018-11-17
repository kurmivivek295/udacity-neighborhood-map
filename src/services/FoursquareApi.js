//Calling Foursquare API to get info about location based on LAT and LNG
const CLIENT_ID = "<YOUR_FOURSQUARE_CLIENT_ID>";
const CLIENT_SECRET = "<YOUR_FOURSQUARE_CLIENT_SECRET>";
const URL_REQ = "https://api.foursquare.com/v2/venues/search?limit=1&v=20170101&client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&ll=";
export const requestFoursqureApi = (lat, lng) =>
    fetch(URL_REQ + lat + "," + lng, {})
        .then(res => res.json())
        .then(data => data);