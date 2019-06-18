import config from '../config';

export const fetchJSON = async (endpoint) => {
    const response = await fetch(`${config["backendAPI"]}${endpoint}`);
    return response.json();
};

export const deleteJSON = async (endpoint) => {
    await fetch(`${config["backendAPI"]}${endpoint}`, {
        method: "DELETE",
    });
};

export const postJSON = async (endpoint, body) => {
    const response = await fetch(`${config["backendAPI"]}${endpoint}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json"
        }
    });

    return response.json();
};

export const putJSON = async (endpoint, body) => {
    const response = await fetch(`${config["backendAPI"]}${endpoint}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json"
        }
    });

    return response.json();
};