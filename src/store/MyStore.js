import { observable, makeObservable, action } from 'mobx';

class MyStore {
    isLogin = false;
   
    constructor() {
        makeObservable(this, {
            isLogin: observable,
            setIsLogin: action,
            setIsAdmin: action,
        })
    }

    setIsLogin = (value) => {
        this.isLogin = value;
    }
    setIsAdmin = (value) => {
        this.isAdmin = value;
    }

}

export default new MyStore();