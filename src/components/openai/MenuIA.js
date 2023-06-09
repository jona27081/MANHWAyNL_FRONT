import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import "../../styles/MenuIA.css";
import TextDavinci from './TextDavinci';
import ImageDalle from './ImageDalle';
import CorrecionTexto from './CorreccionEscritura';
import Emojis from './PeliculasEmojis';
import ConsultasSQL from './ConsultasSQL';
import Recetas from './Recetas';

const CREATE_PROMPT_MUTATION = gql`
  mutation PostMutation(
    $modelo: String!,
    $prompt: String!,
    $result: String!,
    $fecha: String!,
    ){
      createPrompts(
        modelo: $modelo,
        prompt: $prompt,
        result: $result,
        fecha: $fecha
      ) {
        prompt
        result
        fecha
     }
    }
`;

const MenuIAS = () => {
    const [showPopupNombres, setShowPopupNombres] = useState(false);
    const [showPopupImage, setShowPopupImage] = useState(false);
    const [showPopupCorreccionTexto, setShowPopupCorreccionTexto] = useState(false);
    const [showPopupEmoji, setShowPopupEmoji] = useState(false);
    const [showPopupSQL, setShowPopupSQL] = useState(false);
    const [showPopupReceta, setShowPopupReceta] = useState(false);
    const fecha = new Date().toISOString();

    const [mutate] = useMutation(CREATE_PROMPT_MUTATION, {
        onCompleted: () => alert("Datos guardados exitosamente"),
    });

    const savePrompt = (modelo, prompt, result) => {
        mutate({
            variables: {
                modelo: modelo,
                prompt: prompt,
                result: result,
                fecha: fecha,
            },
        });
    };

    const handleShowPopupNombres = async () => {
        setShowPopupNombres(true);
    };
    const handleClosePopupNombres = () => {
        setShowPopupNombres(false);
    };
    const handleShowPopupImage = async () => {
        setShowPopupImage(true);
    };
    const handleClosePopupImage = () => {
        setShowPopupImage(false);
    };
    const handleShowPopupCorreccionTexto = async () => {
        setShowPopupCorreccionTexto(true);
    };
    const handleClosePopupCorreccionTexto = () => {
        setShowPopupCorreccionTexto(false);
    };
    const handleShowPopupEmoji = async () => {
        setShowPopupEmoji(true);
    };
    const handleClosePopupEmoji = () => {
        setShowPopupEmoji(false);
    };
    const handleShowPopupSQL = async () => {
        setShowPopupSQL(true);
    };
    const handleClosePopupSQL = () => {
        setShowPopupSQL(false);
    };
    const handleShowPopupReceta = async () => {
        setShowPopupReceta(true);
    };
    const handleClosePopupReceta = () => {
        setShowPopupReceta(false);
    };



    return (
        <div className="centered-Div">
            <div className="content-Wrapper">
                <div className="service">
                    <p className="serviceName">RECOMENDACIONES DE NOMBRES</p>
                    <p className="descripcion">Proporciona una categoria y un algo
                        referente a lo que quieras relacionarlo y te dare 3 nombres referentes a eso</p>
                    <button className='usar' onClick={handleShowPopupNombres}>Usar</button>
                    {showPopupNombres && (
                        <TextDavinci
                            onCancel={handleClosePopupNombres}
                            save={savePrompt}
                        />
                    )}
                </div>
                <div className="service">
                    <p className="serviceName">CREACION DE IMAGENES</p>
                    <p className="descripcion">Proporciona una descripcion de una imagen que desees
                        crear</p>
                    <button className='usar' onClick={handleShowPopupImage}>Usar</button>
                    {showPopupImage && (
                        <ImageDalle
                            onCancel={handleClosePopupImage}
                            save={savePrompt} />
                    )}
                </div>
                <div className="service">
                    <p className="serviceName">CORRECCION DE TEXTO</p>
                    <p className="descripcion">Proporciona una texto al cual quieras revisar
                        la gramatica</p>
                    <button className='usar' onClick={handleShowPopupCorreccionTexto}>Usar</button>
                    {showPopupCorreccionTexto && (
                        <CorrecionTexto
                            onCancel={handleClosePopupCorreccionTexto}
                            save={savePrompt} />
                    )}
                </div>
                <div className="service">
                    <p className="serviceName">TITULO DE PELICULA A EMOJI</p>
                    <p className="descripcion">Proporciona un titulo de una pelicula de tu interes y
                        se convertira a emojis</p>
                    <button className='usar' onClick={handleShowPopupEmoji}>Usar</button>
                    {showPopupEmoji && (
                        <Emojis
                            onCancel={handleClosePopupEmoji}
                            save={savePrompt} />
                    )}
                </div>
                <div className="service">
                    <p className="serviceName">CONSULTAS SQL SIMPLES</p>
                    <p className="descripcion">Proporciona con lenguaje natural la consulta que se desea hacer y
                        la IA se encargara de hacerla para ti</p>
                    <button className='usar' onClick={handleShowPopupSQL}>Usar</button>
                    {showPopupSQL && (
                        <ConsultasSQL
                            onCancel={handleClosePopupSQL}
                            save={savePrompt} />
                    )}
                </div>
                <div className="service">
                    <p className="serviceName">RECETAS A PARTIR DE UNA LISTA DE INGREDIENTES</p>
                    <p className="descripcion">Da algunos alimentos con los que
                        deseas comer y la IA se encargara de hacerla una receta para ti</p>
                    <button className='usar' onClick={handleShowPopupReceta}>Usar</button>
                    {showPopupReceta && (
                        <Recetas
                            onCancel={handleClosePopupReceta}
                            save={savePrompt} />
                    )}
                </div>
            </div >
        </div >
    );
};

export default MenuIAS;
