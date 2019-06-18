import {postJSON} from "../utils/communication";

export const authUser = async body => await postJSON("/users/authenticate", body);

export const createUser = async body => await postJSON("/users/", body);