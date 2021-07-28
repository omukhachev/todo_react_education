const rem_url = 'http://localhost:1122';

export const addUser = async (data) => {
    try {
        const response = await fetch(`${rem_url}/users/create`,
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return await response.json();
    }
    catch (e) {
        throw new Error(e);
    };
};

export const signInUser = async (data) => {
    try {
        const response = await fetch(`${rem_url}/users/auth`,
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return await response.json();
    }
    catch (e) {
        throw new Error(e);
    };
};