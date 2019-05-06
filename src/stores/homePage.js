import {observable, action} from 'mobx';

class HomePage {
    @observable myPictureList = null;

    @action
    getMineInfo = async () => {
        return {};
    }
}

export default HomePage;
