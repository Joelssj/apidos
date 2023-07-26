"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sensorRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
exports.sensorRouter = express_1.default.Router();
exports.sensorRouter.get("/", dependencies_1.getAllSensorController.run.bind(dependencies_1.getAllSensorController));
exports.sensorRouter.get("/:id", dependencies_1.getByIdSensorController.run.bind(dependencies_1.getByIdSensorController));
exports.sensorRouter.post("/", dependencies_1.createSensorController.run.bind(dependencies_1.createSensorController));
