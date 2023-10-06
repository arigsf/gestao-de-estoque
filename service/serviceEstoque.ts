import * as fs from 'fs';
import * as csv from 'csv-parser';
import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';
import Data from '../model/readCSV';

export const insert = async (filePath: string, data: Data): Promise<void> => {
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      { id: 'nome', title: 'nome' },
      { id: 'peso', title: 'peso' },
      { id: 'valor', title: 'valor' },
      { id: 'quantidade', title: 'quantidade' },
    ],
    append: true,
  });

  return csvWriter.writeRecords([data]);
};

export const getObject = async (filePath: string, nome: string): Promise<Data | undefined> => {
  try {
    const dados = await list(filePath);
    return dados.find((objeto) => objeto.nome === nome);
  } catch (error) {
    throw error;
  }
};

export const remove = async (filePath: string, nome: string): Promise<void> => {
  try {
    const dados = await list(filePath);
    const objetoIndex = dados.findIndex((objeto) => objeto.nome === nome);

    if (objetoIndex !== -1) {
      dados.splice(objetoIndex, 1);
      const fileStream = fs.createWriteStream(filePath);
      fileStream.write('nome,peso,valor,quantidade\n');
      dados.forEach((objeto) => {
        fileStream.write(`${objeto.nome},${objeto.peso},${objeto.valor},${objeto.quantidade}\n`);
      });
      fileStream.end();
    }
  } catch (error) {
    throw error;
  }
};

export const list = async (filePath: string): Promise<Data[]> => {
  return new Promise((resolve, reject) => {
    const results: Data[] = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data: Data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
};