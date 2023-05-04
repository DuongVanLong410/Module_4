"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dataSource_1 = __importDefault(require("./src/dataSource"));
const index_1 = __importDefault(require("./src/routers/index"));
const app = (0, express_1.default)();
dataSource_1.default.initialize().then(() => {
    console.log('con nếch súc sét !');
});
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use('', index_1.default);
app.listen(3000, () => {
    console.log('listening on http://localhost:3000');
});
//# sourceMappingURL=index.js.map