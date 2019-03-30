import {observable, action} from 'mobx';

class HomePage {
    @observable myPictureList = null;

    @action
    getMineInfo = async () => {
        
    }
}

export default HomePage;
