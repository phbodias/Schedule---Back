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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var postgres_1 = __importDefault(require("../src/databases/postgres"));
var professionalsFac_1 = require("./factories/professionalsFac");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, upsertCountries()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, upsertStates()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, upsertCities()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, upsertServices()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, createProfessionals()];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function upsertCountries() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, postgres_1["default"].countries.upsert({
                        where: { id: 1 },
                        update: {},
                        create: { country: "Brasil" }
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function upsertStates() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, postgres_1["default"].states.upsert({
                        where: { id: 1 },
                        update: {},
                        create: { state: "São Paulo", initials: "SP", countrieId: 1 }
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, postgres_1["default"].states.upsert({
                            where: { id: 2 },
                            update: {},
                            create: { state: "Rio de Janeiro", initials: "RJ", countrieId: 1 }
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, postgres_1["default"].states.upsert({
                            where: { id: 3 },
                            update: {},
                            create: { state: "Distrito Federal", initials: "DF", countrieId: 1 }
                        })];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function upsertCities() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, postgres_1["default"].cities.upsert({
                        where: { id: 1 },
                        update: {},
                        create: { city: "Campinas", stateId: 1 }
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, postgres_1["default"].cities.upsert({
                            where: { id: 2 },
                            update: {},
                            create: { city: "São Paulo", stateId: 1 }
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, postgres_1["default"].cities.upsert({
                            where: { id: 3 },
                            update: {},
                            create: { city: "Rio de Janeiro", stateId: 2 }
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, postgres_1["default"].cities.upsert({
                            where: { id: 4 },
                            update: {},
                            create: { city: "Brasília", stateId: 3 }
                        })];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function upsertServices() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, postgres_1["default"].services.upsert({
                        where: { id: 1 },
                        update: {},
                        create: { service: "Cabeleireiro" }
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, postgres_1["default"].services.upsert({
                            where: { id: 2 },
                            update: {},
                            create: { service: "Manicure" }
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, postgres_1["default"].services.upsert({
                            where: { id: 3 },
                            update: {},
                            create: { service: "Pedicure" }
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, postgres_1["default"].services.upsert({
                            where: { id: 4 },
                            update: {},
                            create: { service: "Mecânico" }
                        })];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, postgres_1["default"].services.upsert({
                            where: { id: 5 },
                            update: {},
                            create: { service: "Dentista" }
                        })];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, postgres_1["default"].services.upsert({
                            where: { id: 6 },
                            update: {},
                            create: { service: "Pediatra" }
                        })];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, postgres_1["default"].services.upsert({
                            where: { id: 7 },
                            update: {},
                            create: { service: "Advogado" }
                        })];
                case 7:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function createProfessionals() {
    return __awaiter(this, void 0, void 0, function () {
        var professionals;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, postgres_1["default"].professionals.findFirst()];
                case 1:
                    professionals = _a.sent();
                    if (!!professionals) return [3 /*break*/, 30];
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(19, 1, 1)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(19, 1, 2)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(19, 1, 3)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(19, 1, 4)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(19, 1, 5)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(19, 1, 6)];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(19, 1, 7)];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(19, 2, 1)];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(19, 2, 2)];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(19, 2, 3)];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(19, 2, 4)];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(19, 2, 5)];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(19, 2, 6)];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(19, 2, 7)];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(21, 3, 1)];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(21, 3, 2)];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(21, 3, 3)];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(21, 3, 4)];
                case 19:
                    _a.sent();
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(21, 3, 5)];
                case 20:
                    _a.sent();
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(21, 3, 6)];
                case 21:
                    _a.sent();
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(21, 3, 7)];
                case 22:
                    _a.sent();
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(61, 4, 1)];
                case 23:
                    _a.sent();
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(61, 4, 2)];
                case 24:
                    _a.sent();
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(61, 4, 3)];
                case 25:
                    _a.sent();
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(61, 4, 4)];
                case 26:
                    _a.sent();
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(61, 4, 5)];
                case 27:
                    _a.sent();
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(61, 4, 6)];
                case 28:
                    _a.sent();
                    return [4 /*yield*/, (0, professionalsFac_1.createProfessionalsFac)(61, 4, 7)];
                case 29:
                    _a.sent();
                    _a.label = 30;
                case 30: return [2 /*return*/];
            }
        });
    });
}
main()["catch"](function (e) {
    console.log(e);
    process.exit(1);
})["finally"](function () {
    postgres_1["default"].$disconnect();
});
