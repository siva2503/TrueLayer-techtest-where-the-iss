import * as path from 'path'


const getAbsolutePathOf = (relativePath: string) => {
  return path.join(__dirname, relativePath)
}

export const CONTRACTMAP: { [key: string]: string } = {
  IssPositionContract: getAbsolutePathOf('./iss_position_response.json'),
  TLESDataContract: getAbsolutePathOf('./tles_response.json')
}


export enum CONTRACT_NAMES {
  TlesData = 'TLESDataContract',
  IssPositionContract = 'IssPositionContract'
}