import Agent from './agent';
import HomePage from './homePage';
import Settings from './settings';
import Test from './test';

class Stores {
    constructor() {
        this.agentStore = new Agent();
        this.homePageStore = new HomePage();
        this.settingsStore = new Settings();
        this.testStore = new Test();
    }
}

export default new Stores();
