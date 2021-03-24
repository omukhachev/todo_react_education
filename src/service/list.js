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

export const postListItem = (data) => {
    try {
        fetch(`${rem_url}/items/create`,
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        );
    }
    catch (e) {
        throw new Error(e);
    }
}

export const deleteListItem = (key) => {
    try {
        fetch(`${rem_url}/items/delete/${key}`,
            {
                method: 'DELETE',
            })
    }
    catch (e) {
        throw new Error(e);
    }
}

export const checkListItem = (key, state) => {
    const data = {
        ready: !state.list.data.find(item => item.key === key).ready
    };
    try {
        fetch(`${rem_url}/items/update/${key}`,
            {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
    }
    catch (e) {
        throw new Error(e);
    }
}

export const checkAllItems = () => {
    try {
        fetch(`${rem_url}/items/update`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
    }
    catch (e) {
        throw new Error(e);
    }
}

export const clearCompletedItems = () => {
    try {
        fetch(`${rem_url}/items/delete`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
    }
    catch (e) {
        throw new Error(e);
    }
}