import {action, makeObservable , observable} from "mobx";

class AppStore {
    showModal =true;
    counter = 0;

    constructor() {
        makeObservable(this, {
            showModal:observable,
            counter:observable,
            handleShowModal:action,
            increaseCounter:action,
        });
        // initialization goes here
    }

    handleShowModal(tStatus) {
        this.showModal = tStatus;
    }

    increaseCounter () {
        this.counter +=1;
    }
}

const appstore = new AppStore();

export default appstore;