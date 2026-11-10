import {useState} from "react";
import {queryGraphQL} from "../services/api";

export function ProductoForm(){
    const [titulo, setTitulo] = useState('');
    const [body, setBody] = useState('');

    const QUERY_MUTACION = `
        mutation CreatePost($input: CreatePostInput!) {
            createPost(input: $input) {
                id
                title
                body
            }
        }
    `;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await queryGraphQL(QUERY_MUTACION, {
                input: {
                    title: titulo,
                    body: body
                }
            })
            
            Console.log(data);
            alert('REGISTRO CREADO CON EXITO CON ID: ' + data.data.createPost.id);
        } catch (error) {
            alert('Error:' + error);
        }
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h5>Nuevo Post</h5>
                <input 
                        type="text" 
                        className="form-control"
                        placeholder="Titulo" 
                        value={titulo} 
                        onChange={(e) => setTitulo(e.target.value)} />
                <input 
                        type="text"
                        className="form-control"
                        placeholder="Cuerpo Del producto"
                        value={titulo}
                        onChange={(e) => setBody(e.target.value)} />

                        <button type="submit">GUARDAR</button>
            </form>
        </div>

    )

}