"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
// import Routers
const openaiRoute_1 = __importDefault(require("./Routers/openaiRoute"));
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
// router to text to speach
app.use("/api/openai", (0, openaiRoute_1.default)());
app.listen(8080, () => {
    console.log("backend listening on port 8080");
});
