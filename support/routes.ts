export const ISS_LOCATION_URL = (id?: string): string => {
  const issId = id ? id : process.env.ISS_NORAD_CATALOGUE_ID
  return `${process.env.BASE_URL}/v1/satellites/${issId}`
}
export const TLES_URL = (id?: string): string => {
  const issId = id ? id : process.env.ISS_NORAD_CATALOGUE_ID
  return `${process.env.BASE_URL}/v1/satellites/${issId}/tles`
}