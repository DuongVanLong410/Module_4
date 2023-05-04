"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "hatikita",
    synchronize: true,
    entities: ["dist/src/entity/*.js"],
});
exports.default = AppDataSource;
//# sourceMappingURL=dataSource.js.map