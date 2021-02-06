import { action, makeObservable, observable, runInAction } from "mobx";

class AppStore {
    showModal = true;
    userId = "";
    selfUserName = "";

    constructor() {
        makeObservable(this, {
            showModal: observable,
            userId: observable,
            selfUserName: observable,

            handleShowModal: action,
            handleUserId: action,
            handleSelfUserName: action,

        });
        // initialization goes here
    }

    handleShowModal(pStatus) {
        runInAction(() => {
            this.showModal = pStatus;
        })
    }

    handleUserId(pUserId) {
        runInAction(() => {
            this.userId = pUserId;
        })
    }

    handleSelfUserName(pUserName) {
        runInAction(() => {
            this.selfUserName = pUserName;
        })
    }
}

const appstore = new AppStore();

export default appstore;