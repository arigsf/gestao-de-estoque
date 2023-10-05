import { error } from 'console';
import { insert, getObject, remove, list } from '../service/serviceEstoque';

export const inserirEstoque = async (filePath, estoque) => {
    if (await buscarPorNome(filePath, estoque.nome) == null) {
        try {
            return insert(filePath, estoque);
        } catch (error) {
            throw error;
        }
    }
    else {
        throw "Esse item já existe no inventário";
    }
};

export const buscarPorNome = async (filePath, nome) => {
    try {
        return getObject(filePath, nome);
    } catch (error) {
        throw error;
    }
};

export const removerPorNome = async (filePath, nome) => {
    try {
        return remove(filePath, nome);
    } catch (error) {
        throw error;
    }
};

export const listarTodos = async (filePath) => {
    try {
        return list(filePath);
    } catch (error) {
        throw error;
    }
};

export const totalValorInventario = async (filePath) => {
    try {
        const dados = await list(filePath);
        var soma = 0;
        if (dados.length == 0) {
            return 0;
        }
        else {
            dados.forEach((dado, index) => {
                soma += dado.valor*dado.quantidade;
            });
            return soma;
        }
    } catch (error) {
        throw error;
    }
}

export const totalPesoInventario = async (filePath) => {
    try {
        const dados = await list(filePath);
        var soma = 0;
        if (dados.length == 0) {
            return 0;
        }
        else {
            dados.forEach((dado, index) => {
                soma += dado.peso*dado.quantidade;
            });
            return soma;
        }
    } catch (error) {
        throw error;
    }
}

export const mediaValorInventario = async (filePath) => {
    try {
        const dados = await list(filePath);
        var soma = 0;
        var q = 0;
        if (dados.length == 0) {
            return 0;
        }
        else {
            dados.forEach((dado, index) => {
                soma += dado.valor*dado.quantidade;
                q += dado.quantidade;
            });
            return soma/q;
        }
    } catch (error) {
        throw error;
    }
}

export const mediaPesoInventario = async (filePath) => {
    try {
        const dados = await list(filePath);
        var soma = 0;
        var q = 0;
        if (dados.length == 0) {
            return 0;
        }
        else {
            dados.forEach((dado, index) => {
                soma += dado.peso*dado.quantidade;
                q += dado.quantidade;
            });
            return soma/q;
        }
    } catch (error) {
        throw error;
    }
}

export const quantidadeItensInventario = async (filePath) => {
    try {
        const dados = await list(filePath);
        var soma = 0;
        if (dados.length == 0) {
            return 0;
        }
        else {
            dados.forEach((dado, index) => {
                soma += dado.quantidade;
            });
            return soma;
        }
    } catch (error) {
        throw error;
    }
}

export const quantidadeProdutosInventario = async (filePath) => {
    try {
        const dados = await list(filePath);
        return dados.length;
    } catch (error) {
        throw error;
    }
}