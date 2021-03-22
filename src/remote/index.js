export const postItem = (data, remUrl) => {
    try {
        fetch(`${remUrl}/items/create`,
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
    }
    catch (e) {
        throw new Error(e);
    }
}