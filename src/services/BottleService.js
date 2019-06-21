import {postJSON, fetchJSON, putJSON} from "../utils/communication";

export const createBottle = async (bottle, varietyName, username, regionName, countryName) =>
    await postJSON(`/bottles/${varietyName}&${username}&${regionName}&${countryName}`, bottle);

export const findBottlesOfUser = async username => await fetchJSON(`/bottles/user/${username}`);

export const findBottleById = async id => await fetchJSON(`/bottles/${id}`);

export const updateBottle = async (varietyName, regionName, countryName, newBottle) => {
    await putJSON(`/bottles/${varietyName}&${regionName}&${countryName}`, newBottle)
};