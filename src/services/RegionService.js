import {fetchJSON} from "../utils/communication";

export const fetchRegionsInCountry = async countryName => await fetchJSON(`/regions/${countryName}`);