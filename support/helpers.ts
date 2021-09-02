import * as generateSchema from 'generate-schema'
import { get } from 'lodash'
import * as fs from 'fs'
import { CONTRACTMAP, CONTRACT_NAMES } from '../contracts/contractsMapping'


interface ExpectedSchema {
  type: string
  properties: {
    [key: string]: string
  }

  required?: string[]
}

/*
Takes sample API Response and parse JSON
*/
const parseJsonFromFile = (filePath: string) => {
  const contractOnFile = fs.readFileSync(filePath, 'utf-8')
  try {
    return JSON.parse(contractOnFile)
  } catch (error) {
    throw new Error(`The contract in ${filePath} is not a valid json`)
  }
}

/*
Using generateSchema library this funciton creates schema out of sample response.
*/
const createSchemaFromContract = (contract: string, typeOfData?: string): ExpectedSchema => {
  let contractKey
  if (typeOfData == 'array') {
    contractKey = get(contract, ['data'])[0]
  } else {
    contractKey = get(contract, ['data'])
  }
  const newschema = generateSchema.json(contractKey)
  delete newschema.$schema
  return newschema
}

/*
By default the schema generated from sample response json is non-mandatory. 
This logic makes it mandatory, to make the validation strict.
*/
const makeSchemaObjectStrict = (obj: ExpectedSchema) => {
  obj['required'] = Object.keys(obj.properties)
}


/*
  gets expectedschema from sample response, makes the schema object strict and returns
*/
export const getExpectedSchemaFromContract = (contractName: string): ExpectedSchema => {
  const dataKey = contractName === CONTRACT_NAMES.IssPositionContract ? 'array' : undefined
  const contractJson = parseJsonFromFile(CONTRACTMAP[contractName])
  const expectedSchema = createSchemaFromContract(contractJson, dataKey)
  makeSchemaObjectStrict(expectedSchema)
  return expectedSchema
}