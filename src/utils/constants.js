const HASURA_GRAPHQL_ENGINE_HOSTNAME = "localhost:8080";

const scheme = proto => {
  return window.location.protocol === "https:" ? `${proto}s` : proto;
};

export const GRAPHQL_URL = `${scheme(
  "http"
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1/graphql`;
export const REALTIME_GRAPHQL_URL = `${scheme(
  "ws"
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1/graphql`;
export const authClientId = "tL3kxban4fSiy43GCiJgYTRq2xNXBrPL";
export const authDomain = "dev-peobaxoi.auth0.com";
export const callbackUrl = "http://localhost:3000/callback";
