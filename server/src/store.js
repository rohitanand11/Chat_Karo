const store = [];

const pushNewMessage = (new_message) => {
    store.push(new_message);
}

const getStoreContent = () => {
    return store;
}

const clearStoreContent = () => {
    store.length = 0;
}

module.exports ={
    pushNewMessage,
    getStoreContent,
    clearStoreContent,
}
