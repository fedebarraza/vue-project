import axios from "axios";

const ROOT_URL = "https://restcountries.eu";
const DEFAULT_REGION_URL = "/rest/v2/regionalbloc";

/**
 * Request to retrieve all countries for selected region.
 * @param {String} region - region bloc
 * @returns {Promise} - Returns a promise of the request.
 */
const getCountriesByRegion = region => {
  return axios.get(`${ROOT_URL}${DEFAULT_REGION_URL}/${region}`);
};

export { getCountriesByRegion };
