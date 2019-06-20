import {fetchJSON} from "../utils/communication";

export const fetchAllCountries = async () => await fetchJSON("/countries/");