import * as path from 'path'


const getAbsolutePathOf = (relativePath: string) => {
  return path.join(__dirname, relativePath)
}

export const CONTRACTMAP: { [key: string]: string } = {
  IssLocationContract: getAbsolutePathOf('./iss_location_response.json'),
  TLESDataContract: getAbsolutePathOf('./tles_response.json')
}

export enum CONTRACT_NAMES {
  IssLocation = 'IssLocationContract',
  TlesData = 'TLESDataContract'
}