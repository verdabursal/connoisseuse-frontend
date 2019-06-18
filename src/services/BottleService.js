import {postJSON} from "../utils/communication";

export const createBottle = async (body, varietyName, username) =>
    await postJSON(`/bottles/${varietyName}&${username}`, body);