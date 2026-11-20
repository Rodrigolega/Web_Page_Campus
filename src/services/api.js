const GRAPHQL_URL = import.meta.env.VITE_API_URL;

export async function queryGraphQL(query, variables = {}) {
  if (!GRAPHQL_URL) {
    throw new Error("VITE_API_URL no está configurada.");
  }

  const token = localStorage.getItem("token");
  const headers = { "Content-Type": "application/json" };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const respuesta = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
  });

  if (!respuesta.ok) {
    throw new Error(`Error en la petición GraphQL: ${respuesta.status}`);
  }

  return respuesta.json();
}
