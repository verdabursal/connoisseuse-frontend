import {postJSON, fetchJSON} from "../utils/communication";

export const createBottle = async (body, varietyName, username) =>
    await postJSON(`/bottles/${varietyName}&${username}`, body);

export const findBottlesOfUser = async username => await fetchJSON(`/bottles/${username}`);