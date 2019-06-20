import {postJSON, fetchJSON} from "../utils/communication";

export const createBottle = async (body, varietyName, username, regionName, countryName) =>
    await postJSON(`/bottles/${varietyName}&${username}&${regionName}&${countryName}`, body);

export const findBottlesOfUser = async username => await fetchJSON(`/bottles/user/${username}`);

export const findBottleById = async id => await fetchJSON(`/bottles/${id}`);