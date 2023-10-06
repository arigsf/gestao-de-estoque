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
exports.list = exports.remove = exports.getObject = exports.insert = void 0;
var fs = require("fs");
var csv = require("csv-parser");
var csv_writer_1 = require("csv-writer");
var insert = function (filePath, data) { return __awaiter(void 0, void 0, void 0, function () {
    var csvWriter;
    return __generator(this, function (_a) {
        csvWriter = (0, csv_writer_1.createObjectCsvWriter)({
            path: filePath,
            header: [
                { id: 'nome', title: 'nome' },
                { id: 'peso', title: 'peso' },
                { id: 'valor', title: 'valor' },
                { id: 'quantidade', title: 'quantidade' },
            ],
            append: true,
        });
        return [2 /*return*/, csvWriter.writeRecords([data])];
    });
}); };
exports.insert = insert;
var getObject = function (filePath, nome) { return __awaiter(void 0, void 0, void 0, function () {
    var dados, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, exports.list)(filePath)];
            case 1:
                dados = _a.sent();
                return [2 /*return*/, dados.find(function (objeto) { return objeto.nome === nome; })];
            case 2:
                error_1 = _a.sent();
                throw error_1;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getObject = getObject;
var remove = function (filePath, nome) { return __awaiter(void 0, void 0, void 0, function () {
    var dados, objetoIndex, fileStream_1, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, exports.list)(filePath)];
            case 1:
                dados = _a.sent();
                objetoIndex = dados.findIndex(function (objeto) { return objeto.nome === nome; });
                if (objetoIndex !== -1) {
                    dados.splice(objetoIndex, 1);
                    fileStream_1 = fs.createWriteStream(filePath);
                    fileStream_1.write('nome,peso,valor,quantidade\n');
                    dados.forEach(function (objeto) {
                        fileStream_1.write("".concat(objeto.nome, ",").concat(objeto.peso, ",").concat(objeto.valor, ",").concat(objeto.quantidade, "\n"));
                    });
                    fileStream_1.end();
                }
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                throw error_2;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.remove = remove;
var list = function (filePath) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                var results = [];
                fs.createReadStream(filePath)
                    .pipe(csv())
                    .on('data', function (data) { return results.push(data); })
                    .on('end', function () { return resolve(results); })
                    .on('error', function (error) { return reject(error); });
            })];
    });
}); };
exports.list = list;
