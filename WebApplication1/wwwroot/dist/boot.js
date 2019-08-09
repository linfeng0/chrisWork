"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("babel-polyfill");
const react_1 = __importDefault(require("react"));
const react_dom_1 = require("react-dom");
require("./style/index.scss");
const App_1 = __importDefault(require("./components/App"));
const redux_1 = require("redux");
const react_redux_1 = require("react-redux");
const reducers_1 = require("./store/reducers");
const redux_saga_1 = __importDefault(require("redux-saga"));
const saga_1 = require("./store/saga");
exports.composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || redux_1.compose;
const sagaMiddleware = redux_saga_1.default();
const store = redux_1.createStore(reducers_1.rootReducer, exports.composeEnhancers(redux_1.applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(saga_1.rootsaga);
react_dom_1.render(react_1.default.createElement(react_redux_1.Provider, { store: store },
    react_1.default.createElement(App_1.default, null)), document.getElementById('root'));
//# sourceMappingURL=boot.js.map