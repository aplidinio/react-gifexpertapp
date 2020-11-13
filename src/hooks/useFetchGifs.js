import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {   // ojo, es síncrono

        getGifs(category)
            .then(imgs => {

                    setState({
                        data: imgs,
                        loading: false
                    });

            })

    }, [category]);


    return state; // el state es { data:[], loading: true}

}
