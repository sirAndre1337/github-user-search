import axios from 'axios';
import Button from 'core/components/Button';
import ImageLoader from 'core/components/Loaders/ImageLoader';
import InfoLoader from 'core/components/Loaders/InfoLoader';
import { User } from 'core/types/User';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles.css';

const Search = () => {
    const [dados, setDados] = useState<User>();
    const [user, setUser] = useState('');
    const [isLoading, setLoading] = useState(0);

    const handleClick = () => {
        window.location.href = `https://github.com/${dados?.login}`;
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(1);
        axios.get(`https://api.github.com/users/${user}`)
            .then(result => setDados(result.data))
            .finally(() => setLoading(2));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='search-container'>
                    <div className='search-title'>
                        Encontre um perfil Github
                    </div>
                    <input
                        value={user}
                        name="user"
                        type="text"
                        onChange={(e) => { setUser(e.target.value) }}
                        className='search-input'
                        placeholder='Usuário Github' />
                    <div className='search-button'>
                        <Button title="Encontrar" />
                    </div>
                </div>
            </form>
            {isLoading === 0 && <div></div>}
            {isLoading === 1 && <div className='result-container'>
                <div>
                    <ImageLoader />
                </div>
                <div className='result-content output-info'>
                    <InfoLoader />
                </div>
            </div>
            }
            {isLoading === 2 && <div className='result-container'>
                <div>
                    <img src={dados?.avatar_url} alt="" className='result-img' />
                    <button onClick={handleClick} className='btn2'>Ver Perfil</button>
                </div>
                <div className='result-content'>
                    <div className='output-info'>
                        <output className='public-repos'>
                            Repositórios públicos:  {dados?.public_repos}
                        </output>
                        <output className='public-folow'>
                            Seguidores:  {dados?.followers}
                        </output>
                        <output className='public-folow'>
                            Seguindo:  {dados?.following}
                        </output>
                    </div>
                    <div className='info-container'>
                        <p className='info'>
                            informações
                        </p>
                        <div className='out'>
                            <output className='testo'>
                                Empresa: {dados?.company}<br />
                            </output>
                        </div>
                        <div className='out'>
                            <output className='testo'>
                                Website/Blog: {dados?.blog} <br />
                            </output>
                        </div>
                        <div className='out'>
                            <output className='testo'>
                                Localidade: {dados?.location}<br />
                            </output>
                        </div>
                        <div className='out'>
                            <output className='testo'>
                                Membro desde: {dados?.created_at}
                            </output>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
};

export default Search;