import React, {FC, Fragment, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCharacter, selectCharacters} from "../../slice/character";
import styles from "./Characters.module.scss";
import {Link} from "react-router-dom";

const Characters: FC = React.memo((): JSX.Element => {
    const [searchFields, setSearchFields] = useState<string>('');
    const dispatch = useDispatch();
    const character = useSelector(selectCharacters(searchFields))

    useEffect(() => {
        dispatch(getCharacter());
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.search}>
                <input onChange={(event) => {
                    setSearchFields(event.target.value);
                }}/>
                <span className={styles.searchButton}>Search characters by name</span>
            </div>
            <div className={styles.content}>
                <tbody className={styles.table}>
                <tr>
                    <th>Name character</th>
                    <th>Location</th>
                    <th>Status</th>
                </tr>
                {character.map((data) => {
                    return (
                        <Fragment key={data.id}>
                            <tr>
                                <td><Link to={`/character/${data.id}`} key={data.id}>{data.name}</Link></td>
                                <td>{data.location.name}</td>
                                <td>{data.status}</td>
                            </tr>
                        </Fragment>
                    );
                })}
                </tbody>
            </div>
        </div>
    );
});

export default Characters;