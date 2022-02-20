import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCharacter, selectCharacter} from "../slice/character";

const Character: FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const character = useSelector(selectCharacter())

    useEffect(() => {
        dispatch(getCharacter());
    }, []);

    console.log(character);

    return (
        <div>
            character
        </div>
    );
};

export default Character;