import {fetchJSON} from "../utils/communication";

export const fetchAllVarieties = async () => await fetchJSON("/varieties/");

export const fetchVarietiesOfCategory = async category => await fetchJSON(`/varieties/${category}`);