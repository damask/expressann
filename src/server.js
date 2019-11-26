const e = require('express');
const app = e();

function express() {
    return function decorator(target) {
        target.isTestable = true;
    }
}

@express()
class App {
    constructor() {

    }
}


new App();
new App();
