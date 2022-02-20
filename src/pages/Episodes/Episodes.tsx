import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getEpisodes, selectEpisodes} from "../../slice/episodes";


export const Episodes = () => {
    const dispatch = useDispatch();
    const episodes = useSelector(selectEpisodes())

    useEffect(() => {
        dispatch(getEpisodes());
    }, []);
    return (
        <div>
            Episodes
        </div>
    );
};
