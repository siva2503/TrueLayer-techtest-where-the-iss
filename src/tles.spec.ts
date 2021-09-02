import axios from 'axios'
import { expectToMatchSchema } from 'jest-json-schema-extended'
import { TLES_URL } from '../support/routes'
import { getExpectedSchemaFromContract } from '../support/helpers'
import { CONTRACT_NAMES } from '../contracts/contractsMapping'
import { tleReferenceDataFromNasa } from '../support/getNasaResponse'

describe('Tests satellites/[id]/tles endpoint of wheretheiss.at service ', () => {
  const ENDPOINT = TLES_URL()
  it('Validate if response data retrieved contains all necessary attributes and compare against reference', async () => {
    const response = await axios.get(
      ENDPOINT,
    )
    const expectedSchema = getExpectedSchemaFromContract(CONTRACT_NAMES.TlesData)
    expectToMatchSchema(response.data, expectedSchema)
    expect(typeof response.data).toBe('object')
    expect(response.status).toBe(200)

    const dataFromOtherSource = await tleReferenceDataFromNasa()

    /* Attempt was made to compare value against NASA API, but due to difference in requested timestamp the output is different as well.
      Not pursuing it further as its only tech test. But,for a real life scenario partial matches can be validated or request can be made
      with exact timestamp for validation purposes.
    */
    // expect(response.data.line1).toBe(dataFromOtherSource.line1)
    // expect(response.data.line2).toBe(dataFromOtherSource.line2)
    expect(dataFromOtherSource.name.toLowerCase()).toContain(response.data.name.toLowerCase())
  })

  it('Validate the endpoint with changed format', async () => {
    const response = await axios.get(
      ENDPOINT,
      { params: { format: 'text' } }
    )
    expect(typeof response.data).toBe('string')
    expect(response.status).toBe(200)
  })

  it('Validate the endpoint with incorrect ISS ID', async () => {
    await axios.get(
      TLES_URL('999999999'),
    ).catch((error) => {
      expect(error.response.status).toBe(404)
      expect(error.response.statusText).toBe('Not Found')
    }).then((response) => {
      expect(response).toBe(undefined)
    })
  })

  it('Test endpoint with invalid file format and validate if the data format defaults to JSON', async () => {
    const response = await axios.get(
      ENDPOINT,
      { params: { format: 'INVALID_FILE_FORMAT' } }
    )
    expect(typeof response.data).toBe('object')
    expect(response.status).toBe(200)
  })
})
