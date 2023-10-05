import * as readline from 'readline';
import { listarTodos, buscarPorNome, removerPorNome, inserirEstoque, totalValorInventario, totalPesoInventario, mediaValorInventario, mediaPesoInventario, quantidadeItensInventario, quantidadeProdutosInventario } from './controller/controleEstoque';
import Data from './model/readCSV';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const filePath = './db/gestao-de-estoque.csv';

const exibirMenu = () => {
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

const processarEscolha = async (opcao) => {
    switch (opcao) {
        case '1':
            rl.question('Digite o nome do item: ', async (nome) => {
                rl.question('Digite o peso, em kg, do item: ', async (peso) => {
                    rl.question('Digite o valor, em R$, do item: ', async (valor) => {
                        rl.question('Digite a quantidade do item: ', async (quantidade) => {
                            if (nome != null && peso != null && valor != null && quantidade != null) {
                                console.log(nome);
                                try {
                                    const item: Data = {
                                        nome: nome,
                                        peso: parseInt(peso),
                                        valor: parseFloat(valor),
                                        quantidade: parseInt(quantidade)
                                    };
                                    await inserirEstoque(filePath, item);
                                    console.log(`O novo item ${nome} foi inserido com sucesso!`);
                                } catch (error) {
                                    console.error(error);
                                }
                            }
                        });
                    });
                });
            });
            pausaParaVisualizar(() => {
                realizarProximaAcao();
            });
            break;
        case '2':
            rl.question('Digite o nome do item a ser removido: ', async (nome) => {
                try {
                    const item = await buscarPorNome(filePath, nome);
                    if (item) {
                        console.log('Você tem certeza de que deseja remover o item abaixo?\n');
                        console.log('Nome:', item.nome);
                        console.log('Peso:', item.peso);
                        console.log('Valor:', item.valor);
                        console.log('Quantidade:', item.quantidade);
                        rl.question('s (sim) ou n (não): ', async (resposta) => {
                            if (resposta == 's') {
                                try {
                                    await removerPorNome(filePath, nome);
                                    console.log(`O item ${nome} foi removido com sucesso!`);
                                } catch (error) {
                                    console.error(error);
                                }
                            }
                            else {
                                console.log("Solicitação de remoção cancelada.");
                            }
                        });
                    } else {
                        console.log(`Nenhum item encontrado com o nome ${nome}.`);
                    }
                } catch (error) {
                    console.error(error);
                }
            });
            pausaParaVisualizar(() => {
                realizarProximaAcao();
            });
            break;
        case '3':
            try {
                const dados = await listarTodos(filePath);
                if (dados.length == 0) {
                    console.log("Nenhum item foi encontrado")
                }
                else {
                    console.log('Estoques encontrados:');
                    dados.forEach((dado, index) => {
                        console.log(`\n#${index + 1}:`);
                        console.log('Nome:', dado.nome);
                        console.log('Peso:', dado.peso);
                        console.log('Valor:', dado.valor);
                        console.log('Quantidade:', dado.quantidade);
                    });
                }
            } catch (error) {
                console.error(error);
            }
            pausaParaVisualizar(() => {
                realizarProximaAcao();
            });
            break;
        case '4':
            try {
                const valorTotal = await totalValorInventario(filePath);
                console.log(`O valor total do seu inventário é R$${valorTotal}.`)
            } catch (error) {
                console.error(error);
            }
            pausaParaVisualizar(() => {
                realizarProximaAcao();
            });
            break;
        case '5':
            try {
                const pesoTotal = await totalPesoInventario(filePath);
                console.log(`O peso total do seu inventário é ${pesoTotal}kg.`)
            } catch (error) {
                console.error(error);
            }
            pausaParaVisualizar(() => {
                realizarProximaAcao();
            });
            break;
        case '6':
            try {
                const mediaValor = await mediaValorInventario(filePath);
                console.log(`A média de valor do seu inventário é R$${mediaValor}.`)
            } catch (error) {
                console.error(error);
            }
            pausaParaVisualizar(() => {
                realizarProximaAcao();
            });
            break;
        case '7':
            try {
                const mediaPeso = await mediaPesoInventario(filePath);
                console.log(`A média de peso do seu inventário é ${mediaPeso}kg.`)
            } catch (error) {
                console.error(error);
            }
            pausaParaVisualizar(() => {
                realizarProximaAcao();
            });
            break;
        case '8':
            try {
                const qTotal = await quantidadeItensInventario(filePath);
                console.log(`Há no seu inventário ${qTotal} itens.`)
            } catch (error) {
                console.error(error);
            }
            pausaParaVisualizar(() => {
                realizarProximaAcao();
            });
            break;
        case '9':
            try {
                const qTotal = await quantidadeProdutosInventario(filePath);
                console.log(`Há no seu inventário ${qTotal} produtos.`)
            } catch (error) {
                console.error(error);
            }
            pausaParaVisualizar(() => {
                realizarProximaAcao();
            });
            break;
        case '0':
            console.log('Saindo...');
            rl.close();
            break;
        default:
            console.log('Opção inválida.');
            pausaParaVisualizar(() => {
                realizarProximaAcao();
            });
    }
};

const realizarProximaAcao = () => {
    exibirMenu();
    rl.question('Digite a opção desejada ou 0 para sair: ', (opcao) => {
        processarEscolha(opcao);
    });
};

function pausaParaVisualizar(callback) {
    rl.question('\nPressione Enter para continuar...', () => {
        if (callback) {
            callback();
        }
    });
}

realizarProximaAcao();