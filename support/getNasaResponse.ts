import axios from 'axios'

const TLE_REFERENCE_ENDPOINT = (id: string): string => `https://tle.ivanstanojevic.me/api/tle/${id}`

interface ReferenceResponseData {
  [key: string]: string
}

export const tleReferenceDataFromNasa = async (): Promise<ReferenceResponseData> => {
  const satelliteId = process.env.ISS_NORAD_CATALOGUE_ID || ''
  const response = await axios.get(TLE_REFERENCE_ENDPOINT(satelliteId))
  return response.data
}