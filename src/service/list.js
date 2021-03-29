const rem_url = 'http://localhost:1122';
const user_id = '60586cc7c911a043b5df4a9e';

export const getListItem = async () => {
    try {
        const response = await fetch(`${rem_url}/items/${user_id}`);
        return await response.json();
    }
    catch (e) {
        throw new Error(e);
    }
}

export const postListItem = async (data) => {
    try {
        const response = await fetch(`${rem_url}/items/create`,
            {
                method: 'POST',
                body: JSON.stringify(data),
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
    try {
        const response = await fetch(`${rem_url}/items/delete/${user_id}/${key}`,
            {
                method: 'DELETE',
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
        isChecked: !state.list.data.find(item => item.key === key).isChecked
    };
    try {
        const response = await fetch(`${rem_url}/items/update/${user_id}/${key}`,
            {
                method: 'PUT',
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
    try {
        const response = await fetch(`${rem_url}/items/update/${user_id}`,
            {
                method: 'PUT',
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
    try {
        const response = await fetch(`${rem_url}/items/delete/${user_id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        return await response.json();
    }
    catch (e) {
        throw new Error(e);
    }
}