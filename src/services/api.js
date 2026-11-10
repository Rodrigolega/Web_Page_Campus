//const GRAPHQL_URL = 'https://rickandmortyapi.com/graphql';
const GRAPHQL_URL = 'https://graphqlzero.almansi.me/api';

export async function queryGraphQL(query, variables = {}) {
    // Obtener el token si existe
    const token = localStorage.getItem('token');

    // Objeto de cabeceras básicas para el header de autorización
    const cabeceras = {
        'Content-Type': 'application/json'
    };

    // Insertamos el token si existe
    if (token) {
        cabeceras['Authorization'] = `Bearer ${token}`;
    }

    const cuerpoPeticion = JSON.stringify({
        query,
        variables
    });

    const respuesta = await fetch(GRAPHQL_URL, {
        method: 'POST',
        headers: cabeceras,
        body: cuerpoPeticion
    });

    if (!respuesta.ok) {
        throw new Error(`Error en la petición GraphQL: ${respuesta.status}`);
    }

    return respuesta.json();
}