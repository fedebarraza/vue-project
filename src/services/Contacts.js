import axios from "axios";

//const ROOT_URL = ""; //TODO: Get Api Url
//const DEFAULT_REGION_URL = ""; //TODO: Get Api Endpoint

/**
 * Request to retrieve all contacts.
 * @returns {Promise} - Returns a promise of the request.
 */
const getContacts = () => {
  return axios.get("/dummy/contacts.json");
};

export { getContacts };
