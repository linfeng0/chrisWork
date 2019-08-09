"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const saga_1 = require("../components/content-bar/saga");
function* rootsaga() {
    yield effects_1.all([
        saga_1.watchAll()
    ]);
}
exports.rootsaga = rootsaga;
//# sourceMappingURL=saga.js.map