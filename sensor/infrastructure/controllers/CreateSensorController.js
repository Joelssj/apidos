"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSensorController = void 0;
class CreateSensorController {
    constructor(createSensorUseCase) {
        this.createSensorUseCase = createSensorUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            console.log("mensaje " + JSON.stringify(data));
            try {
                const sensor = yield this.createSensorUseCase.run(data.pulso_cardiaco, data.temperatura);
                if (sensor)
                    //Code HTTP : 201 -> Creado
                    res.status(201).send({
                        status: "success",
                        data: {
                            id: sensor === null || sensor === void 0 ? void 0 : sensor.id,
                            pulso_cardiaco: sensor === null || sensor === void 0 ? void 0 : sensor.pulso_cardiaco,
                            temperatura: sensor === null || sensor === void 0 ? void 0 : sensor.temperatura,
                        },
                    });
                else
                    res.status(204).send({
                        status: "error",
                        data: "NO fue posible agregar el registro",
                    });
            }
            catch (error) {
                //Code HTTP : 204 Sin contenido
                res.status(204).send({
                    status: "error",
                    data: "Ocurrio un error",
                    msn: error,
                });
            }
        });
    }
}
exports.CreateSensorController = CreateSensorController;
