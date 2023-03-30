import { parseStringPromise } from 'xml2js';

export type XML = any & { brand: 'XML' }

export const parseXml = async (xml: XML): Promise<any> => {
    return parseStringPromise(xml)
}