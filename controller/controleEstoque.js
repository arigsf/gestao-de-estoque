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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.quantidadeProdutosInventario = exports.quantidadeItensInventario = exports.mediaPesoInventario = exports.mediaValorInventario = exports.totalPesoInventario = exports.totalValorInventario = exports.listarTodos = exports.removerPorNome = exports.buscarPorNome = exports.inserirEstoque = void 0;
var serviceEstoque_1 = require("../service/serviceEstoque");
var inserirEstoque = function (filePath, estoque) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.buscarPorNome)(filePath, estoque.nome)];
            case 1:
                if ((_a.sent()) == null) {
                    try {
                        return [2 /*return*/, (0, serviceEstoque_1.insert)(filePath, estoque)];
                    }
                    catch (error) {
                        throw error;
                    }
                }
                else {
                    throw "Esse item já existe no inventário";
                }
                return [2 /*return*/];
        }
    });
}); };
exports.inserirEstoque = inserirEstoque;
var buscarPorNome = function (filePath, nome) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            return [2 /*return*/, (0, serviceEstoque_1.getObject)(filePath, nome)];
        }
        catch (error) {
            throw error;
        }
        return [2 /*return*/];
    });
}); };
exports.buscarPorNome = buscarPorNome;
var removerPorNome = function (filePath, nome) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            return [2 /*return*/, (0, serviceEstoque_1.remove)(filePath, nome)];
        }
        catch (error) {
            throw error;
        }
        return [2 /*return*/];
    });
}); };
exports.removerPorNome = removerPorNome;
var listarTodos = function (filePath) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            return [2 /*return*/, (0, serviceEstoque_1.list)(filePath)];
        }
        catch (error) {
            throw error;
        }
        return [2 /*return*/];
    });
}); };
exports.listarTodos = listarTodos;
var totalValorInventario = function (filePath) { return __awaiter(void 0, void 0, void 0, function () {
    var dados, soma, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, serviceEstoque_1.list)(filePath)];
            case 1:
                dados = _a.sent();
                soma = 0;
                if (dados.length == 0) {
                    return [2 /*return*/, 0];
                }
                else {
                    dados.forEach(function (dado, index) {
                        soma += dado.valor * dado.quantidade;
                    });
                    return [2 /*return*/, soma];
                }
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                throw error_1;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.totalValorInventario = totalValorInventario;
var totalPesoInventario = function (filePath) { return __awaiter(void 0, void 0, void 0, function () {
    var dados, soma, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, serviceEstoque_1.list)(filePath)];
            case 1:
                dados = _a.sent();
                soma = 0;
                if (dados.length == 0) {
                    return [2 /*return*/, 0];
                }
                else {
                    dados.forEach(function (dado, index) {
                        soma += dado.peso * dado.quantidade;
                    });
                    return [2 /*return*/, soma];
                }
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                throw error_2;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.totalPesoInventario = totalPesoInventario;
var mediaValorInventario = function (filePath) { return __awaiter(void 0, void 0, void 0, function () {
    var dados, soma, q, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, serviceEstoque_1.list)(filePath)];
            case 1:
                dados = _a.sent();
                soma = 0;
                q = 0;
                if (dados.length == 0) {
                    return [2 /*return*/, 0];
                }
                else {
                    dados.forEach(function (dado, index) {
                        var valor = Number(dado.valor);
                        var quantidade = Number(dado.quantidade);
                        soma += valor * quantidade;
                        q += quantidade;
                        console.log(soma);
                        console.log(q);
                    });
                    return [2 /*return*/, soma / q];
                }
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                throw error_3;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.mediaValorInventario = mediaValorInventario;
var mediaPesoInventario = function (filePath) { return __awaiter(void 0, void 0, void 0, function () {
    var dados, soma, q, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, serviceEstoque_1.list)(filePath)];
            case 1:
                dados = _a.sent();
                soma = 0;
                q = 0;
                if (dados.length == 0) {
                    return [2 /*return*/, 0];
                }
                else {
                    dados.forEach(function (dado, index) {
                        soma += dado.peso * dado.quantidade;
                        q += dado.quantidade;
                    });
                    return [2 /*return*/, soma / q];
                }
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                throw error_4;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.mediaPesoInventario = mediaPesoInventario;
var quantidadeItensInventario = function (filePath) { return __awaiter(void 0, void 0, void 0, function () {
    var dados, soma, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, serviceEstoque_1.list)(filePath)];
            case 1:
                dados = _a.sent();
                soma = 0;
                if (dados.length == 0) {
                    return [2 /*return*/, 0];
                }
                else {
                    dados.forEach(function (dado, index) {
                        soma += dado.quantidade;
                    });
                    return [2 /*return*/, soma];
                }
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                throw error_5;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.quantidadeItensInventario = quantidadeItensInventario;
var quantidadeProdutosInventario = function (filePath) { return __awaiter(void 0, void 0, void 0, function () {
    var dados, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, serviceEstoque_1.list)(filePath)];
            case 1:
                dados = _a.sent();
                return [2 /*return*/, dados.length];
            case 2:
                error_6 = _a.sent();
                throw error_6;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.quantidadeProdutosInventario = quantidadeProdutosInventario;
