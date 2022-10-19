"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("express-async-errors");
const express_1 = require("express");
const AppError_1 = require("./shared/AppError");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.use(routes_1.router);
app.use((err, request, response, _) => {
    if (err instanceof AppError_1.default) {
        return response
            .status(err.statusCode >= 100 && err.statusCode < 600 ? err.statusCode : 500)
            .send(err.message)
            .json({
            status: "error",
            message: err.message,
        });
    }
    console.error(err);
    return response.status(500).json({
        status: "error",
        message: "internal server error",
    });
});
app.listen(3000, () => {
    console.log("app is listening on port 3000");
});
//# sourceMappingURL=server.js.map