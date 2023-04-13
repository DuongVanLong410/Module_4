"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.set('views', './src/view');
app.set('view engine', 'ejs');
app.use(express_1.default.static('./public'));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/students/:id', (req, res) => {
    res.send('This is student ' + req.params.id);
});
app.post('/', (req, res) => {
    console.log(req.body);
});
//# sourceMappingURL=index.js.map