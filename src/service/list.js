import jwt from 'jsonwebtoken';

const rem_url = 'http://localhost:1122';

const token = jwt.sign({ id: localStorage.getItem('uid') }, 'privateKey');

export const getListItem = async () => {
    try {
        const sendData = { token: token };
        const response = await fetch(`${rem_url}/items/user`,
            {
                method: 'POST',
                body: JSON.stringify(sendData),
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        );
        return await response.json();
    }
    catch (e) {
        throw new Error(e);
    }
}

export const postListItem = async (data) => {
    try {
        const sendData = { ...data, token: token };
        const response = await fetch(`${rem_url}/items/create`,
            {
                method: 'POST',
                body: JSON.stringify(sendData),
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        );
        return await response.json();
    }
    catch (e) {
        throw new Error(e);
    }
}

export const deleteListItem = async (key) => {
    const sendData = { token: token };
    try {
        const response = await fetch(`${rem_url}/items/delete/user/${key}`,
            {
                method: 'POST',
                body: JSON.stringify(sendData),
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        )
        return await response.json();
    }
    catch (e) {
        throw new Error(e);
    }
}

export const checkListItem = async (key, state) => {
    const data = {
        isChecked: !state.list.data.find(item => item.key === key).isChecked,
        token: token,
    };
    try {
        const response = await fetch(`${rem_url}/items/update/user/${key}`,
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        )
        return await response.json();
    }
    catch (e) {
        throw new Error(e);
    }
}

export const checkAllItems = async () => {
    const sendData = { token: token };
    try {
        const response = await fetch(`${rem_url}/items/update/user`,
            {
                method: 'POST',
                body: JSON.stringify(sendData),
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        )
        return await response.json();
    }
    catch (e) {
        throw new Error(e);
    }
}

export const clearCompletedItems = async () => {
    const sendData = { token: token };
    try {
        const response = await fetch(`${rem_url}/items/delete/user`,
            {
                method: 'POST',
                body: JSON.stringify(sendData),
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        )
        return await response.json();
    }
    catch (e) {
        throw new Error(e);
    }
}