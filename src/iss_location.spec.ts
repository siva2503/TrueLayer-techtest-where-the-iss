import axios from 'axios'
import { expectToMatchSchema } from 'jest-json-schema-extended'
import { ISS_POSITION_URL } from '../support/routes'
import { getExpectedSchemaFromContract } from '../support/helpers'
import { CONTRACT_NAMES } from '../contracts/contractsMapping'

describe('Tests "satellites/[id]/positions" endpoint of wheretheiss.at service ', () => {
  const EpochTimeStampNow: number = Math.floor(new Date().getTime() / 1000)
  const EpochTimeStampFuture: number = EpochTimeStampNow + 1000
  const ENDPOINT = ISS_POSITION_URL()
  it('Validate if response data retrieved contains all necessary attributes', async () => {
    const response = await axios.get(
      ENDPOINT,
      { params: { timestamps: `${EpochTimeStampNow},${EpochTimeStampFuture}` } }
    )
    const expectedSchema = getExpectedSchemaFromContract(CONTRACT_NAMES.IssPositionContract)
    expectToMatchSchema(response.data[0], expectedSchema)
    expect(response.data.length).toBe(2)
    expect(response.status).toBe(200)
  })

  it('Validate the endpoint with changed units and timestamp', async () => {
    const EpochTimeStampNow = Math.floor(new Date().getTime() / 1000)
    const response = await axios.get(
      ENDPOINT,
      { params: { units: 'miles', timestamps: EpochTimeStampNow } }
    )
    expect(response.data[0].units).toBe('miles')
    expect(response.data[0].timestamp).toBe(EpochTimeStampNow)
    expect(response.status).toBe(200)
  })

  it('Validate the endpoint with incorrect ISS ID', async () => {
    await axios.get(
      ISS_POSITION_URL('999999999'),
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
      { params: { timestamps: 'INVALID_TIMESTAMP' } }
    ).catch((error) => {
      expect(error.response.status).toBe(400)
      expect(error.response.statusText).toBe('Bad Request')
    }).then((response) => {
      expect(response).toBe(undefined)
    })
  })
})
