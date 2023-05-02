import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';
import "../styles/createLink.css";

const CREATE_LINK_MUTATION = gql`
  mutation PostMutation(
    $adaptacion: String!,
    $artista: String!,
    $autor: String!,
    $capitulos: Int!,
    $clasificacion: String!,
    $descripcion: String!,
    $estado: String!,
    $genero: String!,
    $pais: String!,
    $titulo: String!,
    ){
      createManhwas(
        adaptacion: $adaptacion,
        artista: $artista,
        autor: $autor,
        capitulos: $capitulos,
        clasificacion: $clasificacion,
        descripcion: $descripcion,
        estado: $estado,
        genero: $genero,
        pais: $pais,
        titulo: $titulo
      ) {
        adaptacion
        artista
        autor
        capitulos
        clasificacion
        descripcion
        estado
        genero
        pais
        titulo
     }
    }
`;

const CreateLink = () => {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        adaptacion: "",
        artista: "",
        autor: "",
        capitulos: 0,
        clasificacion: "",
        descripcion: "",
        estado: "",
        genero: "",
        pais: "",
        titulo: "",
    });

    const [createLink] = useMutation(CREATE_LINK_MUTATION, {
        variables: {
            adaptacion: formState.adaptacion, //
            artista: formState.artista, //
            autor: formState.autor, //
            capitulos: formState.capitulos, //
            clasificacion: formState.clasificacion, //
            descripcion: formState.descripcion, //
            estado: formState.estado, 
            genero: formState.genero, //
            pais: formState.pais, 
            titulo: formState.titulo, //
        },
        onCompleted: () => navigate('/')
    });

    return (
        <div className='form-container'>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    createLink();
                }}
            >
                <div className="form-input">
                    <input
                        className="form-input"
                        value={formState.titulo}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                titulo: e.target.value
                            })
                        }
                        type="text"
                        placeholder="Titulo: "
                    />
                    <input
                        className="form-input"
                        value={formState.descripcion}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                descripcion: e.target.value
                            })
                        }
                        type="text"
                        placeholder="Descripcion:"
                    />
                    <input
                        className="form-input"
                        value={formState.genero}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                genero: e.target.value
                            })
                        }
                        type="text"
                        placeholder="Genero:"
                    />
                    <input
                        className="form-input"
                        value={formState.capitulos}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                capitulos: e.target.value
                            })
                        }
                        type="number"
                        placeholder="Capitulos: "
                    />
                    <input
                        className="form-input"
                        value={formState.autor}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                autor: e.target.value
                            })
                        }
                        type="text"
                        placeholder="Autor: "
                    />
                    <input
                        className="form-input"
                        value={formState.artista}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                artista: e.target.value
                            })
                        }
                        type="text"
                        placeholder="Artista: "
                    />
                    <input
                        className="form-input"
                        value={formState.adaptacion}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                adaptacion: e.target.value
                            })
                        }
                        type="text"
                        placeholder="Adaptacion: "
                    />
                    <input
                        className="form-input"
                        value={formState.clasificacion}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                clasificacion: e.target.value
                            })
                        }
                        type="text"
                        placeholder="Clasificacion: "
                    />
                    <input
                        className="form-input"
                        value={formState.pais}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                pais: e.target.value
                            })
                        }
                        type="text"
                        placeholder="Pais: "
                    />
                    <input
                        className="form-input"
                        value={formState.estado}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                estado: e.target.value
                            })
                        }
                        type="text"
                        placeholder="Estado"
                    />
                </div>
                <button type="submit">Subir</button>
            </form>
        </div>
    );
};

export default CreateLink;