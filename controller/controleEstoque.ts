import { insert, getObject, remove, list } from '../service/serviceEstoque';

export const inserirEstoque = async (filePath, estoque) => {
    try {
        return insert(filePath, estoque);
    } catch (error) {
        throw error;
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
