import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getEpisodes, selectEpisodes} from "../../slice/episodes";
import styles from "../Characters/Characters.module.scss";

export const Episodes = () => {
    const dispatch = useDispatch();
    const episodes = useSelector(selectEpisodes())

    useEffect(() => {
        dispatch(getEpisodes());
    }, []);

    return (
        <div>
            <div className={styles.content}>
                <tbody className={styles.table}>
                <tr>
                    <th>The name of the episode.</th>
                    <th>The air date of the episode.</th>
                    <th>Creation date in the database</th>
                    <th>The code of the episode.</th>
                </tr>
                {episodes.map((data) => {
                    return (
                        <Fragment key={data.id}>
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.air_date}</td>
                                <td>{data.created}</td>
                                <td>{data.episode}</td>
                            </tr>
                        </Fragment>
                    );
                })}
                </tbody>
            </div>
        </div>
    );
};
