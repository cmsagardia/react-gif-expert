import React, { useEffect, useState } from 'react';
import {getGifs} from '../helpers/getGifs'

//Hook: es una funcion que regresa algo
export const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true)

  const getImages = async() => {
    const newImages = await getGifs( category );
    setImages( newImages);
    setisLoading(false);
  }

  useEffect( () => {
    //callback: funciones que queremos volver a ejecutar
    getImages();
  }, [] )//[]: el callback se dispara solo la primera vez que se crea o construye el componente

  //Regreso un objeto  
  return {
    images,
    isLoading
  }
}
