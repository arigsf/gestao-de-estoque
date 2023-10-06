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
var readline = require("readline");
var controleEstoque_1 = require("./controller/controleEstoque");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var filePath = './db/gestao-de-estoque.csv';
var exibirMenu = function () {
    console.clear();
    console.log('### GESTÃO DO INVENTÁRIO ###');
    console.log('[1] Adicionar item ao inventário');
    console.log('[2] Remover item do inventário');
    console.log('[3] Listar itens do inventário');
    console.log('[4] Valor total do inventário');
    console.log('[5] Peso total do inventário');
    console.log('[6] Média de valor dos itens');
    console.log('[7] Média de peso dos itens');
    console.log('[8] Quantidade total de itens no inventário');
    console.log('[8] Quantidade total de produtos no inventário');
};
var processarEscolha = function (opcao) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, dados, error_1, valorTotal, error_2, pesoTotal, error_3, mediaValor, error_4, mediaPeso, error_5, qTotal, error_6, qTotal, error_7;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = opcao;
                switch (_a) {
                    case '1': return [3 /*break*/, 1];
                    case '2': return [3 /*break*/, 2];
                    case '3': return [3 /*break*/, 3];
                    case '4': return [3 /*break*/, 7];
                    case '5': return [3 /*break*/, 11];
                    case '6': return [3 /*break*/, 15];
                    case '7': return [3 /*break*/, 19];
                    case '8': return [3 /*break*/, 23];
                    case '9': return [3 /*break*/, 27];
                    case '0': return [3 /*break*/, 31];
                }
                return [3 /*break*/, 32];
            case 1:
                rl.question('Digite o nome do item: ', function (nome) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        rl.question('Digite o peso, em kg, do item: ', function (peso) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                rl.question('Digite o valor, em R$, do item: ', function (valor) { return __awaiter(void 0, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        rl.question('Digite a quantidade do item: ', function (quantidade) { return __awaiter(void 0, void 0, void 0, function () {
                                            var item, error_8;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        if (!(nome != null && peso != null && valor != null && quantidade != null)) return [3 /*break*/, 4];
                                                        console.log(nome);
                                                        _a.label = 1;
                                                    case 1:
                                                        _a.trys.push([1, 3, , 4]);
                                                        item = {
                                                            nome: nome,
                                                            peso: parseInt(peso),
                                                            valor: parseFloat(valor),
                                                            quantidade: parseInt(quantidade)
                                                        };
                                                        return [4 /*yield*/, (0, controleEstoque_1.inserirEstoque)(filePath, item)];
                                                    case 2:
                                                        _a.sent();
                                                        console.log("O novo item ".concat(nome, " foi inserido com sucesso!"));
                                                        return [3 /*break*/, 4];
                                                    case 3:
                                                        error_8 = _a.sent();
                                                        console.error(error_8);
                                                        return [3 /*break*/, 4];
                                                    case 4: return [2 /*return*/];
                                                }
                                            });
                                        }); });
                                        return [2 /*return*/];
                                    });
                                }); });
                                return [2 /*return*/];
                            });
                        }); });
                        return [2 /*return*/];
                    });
                }); });
                pausaParaVisualizar(function () {
                    realizarProximaAcao();
                });
                return [3 /*break*/, 33];
            case 2:
                rl.question('Digite o nome do item a ser removido: ', function (nome) { return __awaiter(void 0, void 0, void 0, function () {
                    var item, error_9;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, (0, controleEstoque_1.buscarPorNome)(filePath, nome)];
                            case 1:
                                item = _a.sent();
                                if (item) {
                                    console.log('Você tem certeza de que deseja remover o item abaixo?\n');
                                    console.log('Nome:', item.nome);
                                    console.log('Peso:', item.peso);
                                    console.log('Valor:', item.valor);
                                    console.log('Quantidade:', item.quantidade);
                                    rl.question('s (sim) ou n (não): ', function (resposta) { return __awaiter(void 0, void 0, void 0, function () {
                                        var error_10;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    if (!(resposta == 's')) return [3 /*break*/, 5];
                                                    _a.label = 1;
                                                case 1:
                                                    _a.trys.push([1, 3, , 4]);
                                                    return [4 /*yield*/, (0, controleEstoque_1.removerPorNome)(filePath, nome)];
                                                case 2:
                                                    _a.sent();
                                                    console.log("O item ".concat(nome, " foi removido com sucesso!"));
                                                    return [3 /*break*/, 4];
                                                case 3:
                                                    error_10 = _a.sent();
                                                    console.error(error_10);
                                                    return [3 /*break*/, 4];
                                                case 4: return [3 /*break*/, 6];
                                                case 5:
                                                    console.log("Solicitação de remoção cancelada.");
                                                    _a.label = 6;
                                                case 6: return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                }
                                else {
                                    console.log("Nenhum item encontrado com o nome ".concat(nome, "."));
                                }
                                return [3 /*break*/, 3];
                            case 2:
                                error_9 = _a.sent();
                                console.error(error_9);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                pausaParaVisualizar(function () {
                    realizarProximaAcao();
                });
                return [3 /*break*/, 33];
            case 3:
                _b.trys.push([3, 5, , 6]);
                return [4 /*yield*/, (0, controleEstoque_1.listarTodos)(filePath)];
            case 4:
                dados = _b.sent();
                if (dados.length == 0) {
                    console.log("Nenhum item foi encontrado");
                }
                else {
                    console.log('Estoques encontrados:');
                    dados.forEach(function (dado, index) {
                        console.log("\n#".concat(index + 1, ":"));
                        console.log('Nome:', dado.nome);
                        console.log('Peso:', dado.peso);
                        console.log('Valor:', dado.valor);
                        console.log('Quantidade:', dado.quantidade);
                    });
                }
                return [3 /*break*/, 6];
            case 5:
                error_1 = _b.sent();
                console.error(error_1);
                return [3 /*break*/, 6];
            case 6:
                pausaParaVisualizar(function () {
                    realizarProximaAcao();
                });
                return [3 /*break*/, 33];
            case 7:
                _b.trys.push([7, 9, , 10]);
                return [4 /*yield*/, (0, controleEstoque_1.totalValorInventario)(filePath)];
            case 8:
                valorTotal = _b.sent();
                console.log("O valor total do seu invent\u00E1rio \u00E9 R$".concat(valorTotal, "."));
                return [3 /*break*/, 10];
            case 9:
                error_2 = _b.sent();
                console.error(error_2);
                return [3 /*break*/, 10];
            case 10:
                pausaParaVisualizar(function () {
                    realizarProximaAcao();
                });
                return [3 /*break*/, 33];
            case 11:
                _b.trys.push([11, 13, , 14]);
                return [4 /*yield*/, (0, controleEstoque_1.totalPesoInventario)(filePath)];
            case 12:
                pesoTotal = _b.sent();
                console.log("O peso total do seu invent\u00E1rio \u00E9 ".concat(pesoTotal, "kg."));
                return [3 /*break*/, 14];
            case 13:
                error_3 = _b.sent();
                console.error(error_3);
                return [3 /*break*/, 14];
            case 14:
                pausaParaVisualizar(function () {
                    realizarProximaAcao();
                });
                return [3 /*break*/, 33];
            case 15:
                _b.trys.push([15, 17, , 18]);
                return [4 /*yield*/, (0, controleEstoque_1.mediaValorInventario)(filePath)];
            case 16:
                mediaValor = _b.sent();
                console.log("A m\u00E9dia de valor do seu invent\u00E1rio \u00E9 R$".concat(mediaValor, "."));
                return [3 /*break*/, 18];
            case 17:
                error_4 = _b.sent();
                console.error(error_4);
                return [3 /*break*/, 18];
            case 18:
                pausaParaVisualizar(function () {
                    realizarProximaAcao();
                });
                return [3 /*break*/, 33];
            case 19:
                _b.trys.push([19, 21, , 22]);
                return [4 /*yield*/, (0, controleEstoque_1.mediaPesoInventario)(filePath)];
            case 20:
                mediaPeso = _b.sent();
                console.log("A m\u00E9dia de peso do seu invent\u00E1rio \u00E9 ".concat(mediaPeso, "kg."));
                return [3 /*break*/, 22];
            case 21:
                error_5 = _b.sent();
                console.error(error_5);
                return [3 /*break*/, 22];
            case 22:
                pausaParaVisualizar(function () {
                    realizarProximaAcao();
                });
                return [3 /*break*/, 33];
            case 23:
                _b.trys.push([23, 25, , 26]);
                return [4 /*yield*/, (0, controleEstoque_1.quantidadeItensInventario)(filePath)];
            case 24:
                qTotal = _b.sent();
                console.log("H\u00E1 no seu invent\u00E1rio ".concat(qTotal, " itens."));
                return [3 /*break*/, 26];
            case 25:
                error_6 = _b.sent();
                console.error(error_6);
                return [3 /*break*/, 26];
            case 26:
                pausaParaVisualizar(function () {
                    realizarProximaAcao();
                });
                return [3 /*break*/, 33];
            case 27:
                _b.trys.push([27, 29, , 30]);
                return [4 /*yield*/, (0, controleEstoque_1.quantidadeProdutosInventario)(filePath)];
            case 28:
                qTotal = _b.sent();
                console.log("H\u00E1 no seu invent\u00E1rio ".concat(qTotal, " produtos."));
                return [3 /*break*/, 30];
            case 29:
                error_7 = _b.sent();
                console.error(error_7);
                return [3 /*break*/, 30];
            case 30:
                pausaParaVisualizar(function () {
                    realizarProximaAcao();
                });
                return [3 /*break*/, 33];
            case 31:
                console.log('Saindo...');
                rl.close();
                return [3 /*break*/, 33];
            case 32:
                console.log('Opção inválida.');
                pausaParaVisualizar(function () {
                    realizarProximaAcao();
                });
                _b.label = 33;
            case 33: return [2 /*return*/];
        }
    });
}); };
var realizarProximaAcao = function () {
    exibirMenu();
    rl.question('Digite a opção desejada ou 0 para sair: ', function (opcao) {
        processarEscolha(opcao);
    });
};
function pausaParaVisualizar(callback) {
    rl.question('\nPressione Enter para continuar...', function () {
        if (callback) {
            callback();
        }
    });
}
realizarProximaAcao();
