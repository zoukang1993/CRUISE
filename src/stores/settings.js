import {observable, action} from 'mobx';

class Settings {
    @observable settings = null;

    @action
    getSettings = async () => {
        
    }
}

export default Settings;
