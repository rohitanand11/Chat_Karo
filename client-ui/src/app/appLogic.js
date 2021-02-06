export const checkAndGetUserId = (appStore) => {
    if (appStore.userId === "") {
        const userIdFromLocalStorage = localStorage.getItem("userID");
        if (userIdFromLocalStorage !== null && userIdFromLocalStorage !== undefined) {
            appStore.handleUserId(userIdFromLocalStorage);
        } else {
            appStore.handleShowModal(true);
        }
    }
} 