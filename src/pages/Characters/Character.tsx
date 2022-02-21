import React from 'react';
import styles from "./Characters.module.scss";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {selectCharacter} from "../../slice/character";

export const Character = () => {
    const {id} = useParams();
    const character = useSelector(selectCharacter(Number(id)));
    return (
        <div className={styles.contentItem}>
            {character.map(e => {
                return (
                    <div className={styles.itemStyle}>
                        <figure key={e.id}>
                            <img src={e.image} alt=""/>
                            <figcaption>{e.name}</figcaption>
                        </figure>
                        <div>
                            <p><span className={styles.itemStyleInfo}>Species:</span> {e.species}</p>
                            <p><span className={styles.itemStyleInfo}>Gender:</span> {e.gender}</p>
                            <p><span className={styles.itemStyleInfo}>Location:</span> {e.location.name}</p>
                            <p><span className={styles.itemStyleInfo}>Status:</span> {e.status}</p>
                            <p><span className={styles.itemStyleInfo}>Created:</span> {e.created}</p>
                            <p><span className={styles.itemStyleInfo}>Episode:</span> {e.episode.map(e => <p>{e}</p>)}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

