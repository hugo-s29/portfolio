import fetch from 'isomorphic-unfetch'
import { IncomingHttpHeaders } from 'http'

export function getBaseUrl(server: boolean, headers: IncomingHttpHeaders) {
  const protocol = server
    ? `${headers['x-forwarded-proto']}:`
    : location.protocol
  const host = server ? headers['x-forwarded-host'] : location.host
  return process.env.NODE_ENV == 'production'
    ? `${protocol}//${host}`
    : `http://localhost:3000`
}

/**
 *Fetch the API
 *
 * @export
 * @param {IncomingMessage} req Object Request from the getInitialProps param
 * @param {string} path path of the query
 * @returns {object} The result of the request parsed
 */
export default async function<T>(
  server: boolean,
  headers: IncomingHttpHeaders,
  path: string,
  params?: RequestInit
): Promise<T> {
  const pageRequest = getBaseUrl(server, headers)
  const res = await fetch(pageRequest + path, params)
  const json = (await res.json()) as T
  return json
}
