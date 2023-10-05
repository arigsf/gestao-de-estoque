import * as fs from 'fs';
import * as csv from 'csv-parser';
import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';
import Data from '../model/readCSV';

export const insert = async (filePath: string, data: Data[]): Promise<void> => {
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      { id: 'nome', title: 'NOME' },
      { id: 'peso', title: 'PESO' },
      { id: 'valor', title: 'VALOR' },
      { id: 'quantidade', title: 'QUANTIDADE' },
    ],
  });

  return csvWriter.writeRecords(data);
};