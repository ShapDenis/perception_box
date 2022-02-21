import React from 'react';
import styles from "./Characters.module.scss";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {selectCharacter} from "../../slice/character";

export const Character = () => {
    const {id} = useParams();
    const character = useSelector(selectCharacter(Number(id)));
    if (!character) return null
    return (
        <div className={styles.contentItem}>
            <div className={styles.itemStyle}>
                <figure key={character.id}>
                    <img src={character.image} alt=""/>
                    <figcaption>{character.name}</figcaption>
                </figure>
                <div>
                    <p><span className={styles.itemStyleInfo}>Species:</span> {character.species}</p>
                    <p><span className={styles.itemStyleInfo}>Gender:</span> {character.gender}</p>
                    <p><span className={styles.itemStyleInfo}>Location:</span> {character.location.name}</p>
                    <p><span className={styles.itemStyleInfo}>Status:</span> {character.status}</p>
                    <p><span className={styles.itemStyleInfo}>Created:</span> {character.created}</p>
                    <p><span className={styles.itemStyleInfo}>Episode:</span> {character.episode.map(e => <p>{e}</p>)}
                    </p>
                </div>
            </div>
        </div>
    );
};

