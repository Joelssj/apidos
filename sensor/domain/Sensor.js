"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sensor = void 0;
class Sensor {
    constructor(id, pulso_cardiaco, temperatura) {
        this.id = id;
        this.pulso_cardiaco = pulso_cardiaco;
        this.temperatura = temperatura;
    }
}
exports.Sensor = Sensor;
