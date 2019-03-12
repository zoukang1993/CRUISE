import Agent from './agent';

class Stores {
    constructor() {
        this.agentStore = new Agent();
    }
}

export default new Stores();
