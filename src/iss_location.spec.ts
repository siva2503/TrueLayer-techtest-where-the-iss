import axios from 'axios'
import { expectToMatchSchema } from 'jest-json-schema-extended'
import { ISS_LOCATION_URL } from '../support/routes'
import { getExpectedSchemaFromContract } from '../support/helpers'
import { CONTRACT_NAMES } from '../contracts/contractsMapping'

describe('Tests satellites/[id] endpoint of wheretheiss.at service ', () => {
  const ENDPOINT = ISS_LOCATION_URL()
  it('Validate if response data retrieved contains all necessary attributes', async () => {
    const response = await axios.get(
      ENDPOINT,
    )
    const expectedSchema = getExpectedSchemaFromContract(CONTRACT_NAMES.IssLocation)
    expectToMatchSchema(response.data, expectedSchema)
    expect(response.status).toBe(200)
  })

  it('Validate the endpoint with changed units and timestamp', async () => {
    const EpochTimeStampNow = Math.floor(new Date().getTime() / 1000)
    const response = await axios.get(
      ENDPOINT,
      { params: { units: 'miles', timestamp: EpochTimeStampNow } }
    )
    expect(response.data.units).toBe('miles')
    expect(response.data.timestamp).toBe(EpochTimeStampNow)
    expect(response.status).toBe(200)
  })

  it('Validate the endpoint with incorrect ISS ID', async () => {
    await axios.get(
      ISS_LOCATION_URL('999999999'),
    ).catch((error) => {
      expect(error.response.status).toBe(404)
      expect(error.response.statusText).toBe('Not Found')
    }).then((response) => {
      expect(response).toBe(undefined)
    })
  })

  it('Test endpoint with invalid timestamp and validate the error response', () => {
    axios.get(
      ENDPOINT,
      { params: { timestamp: 'INVALID_TIMESTAMP' } }
    ).catch((error) => {
      expect(error.response.status).toBe(400)
      expect(error.response.statusText).toBe('Bad Request')
    }).then((response) => {
      expect(response).toBe(undefined)
    })
  })
})
