import { convertableToString, parseStringPromise } from 'xml2js';

export type XML = convertableToString & { brand: 'XML' }

export const parseXml = async<T>(xml: XML): Promise<T> => {
    return parseStringPromise(xml)
}