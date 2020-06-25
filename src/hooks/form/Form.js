import React, { useState } from 'react';
import useForm from './useForm';
import './form.sass'

export default function Form(props) {
    const [{state}, handleChange, handleSubmit] = useForm();
    const [description, setDescription] = useState();

    return (
        <main>
            <form onSubmit={handleSubmit(props.action)}>
                <label>Nome
                    <input type="text" name="Title" 
                        placeholder="Digite o nome do filme" required onChange={handleChange}
                        value={state.Title}
                    />
                </label>
                <label>Sinopse
                <input name="Synopsis" placeholder="Descrição"  value={state.Synopsis}
                        onChange={handleChange}
                    />
                </label>
                <label>Genero
                    <input type="text" name="Genre" 
                        placeholder="Digite o genero do filme" required onChange={handleChange}
                        value={state.Genre}
                    />
                </label>
                <label>Idioma
                    <input type="text" name="Language" 
                        placeholder="Digite o idioma do filme" required onChange={handleChange}
                        value={state.Language}
                    />
                </label>
                <label>Legenda
                    <input type="text" name="Subtitle" 
                        placeholder="Digite o idioma da legenda do filme" required onChange={handleChange}
                        value={state.Subtitle}
                    />
                </label>
                <label>Ano
                    <input type="text" name="Year" 
                        placeholder="Digite o ano de lançamento do filme"  onChange={handleChange}
                        value={state.Year}
                    />
                </label>
                <label>Diretor
                    <input type="text" name="Director" 
                        placeholder="Digite o nome do diretor do filme"  onChange={handleChange}
                        value={state.Director}
                    />
                </label>
                <label>Ranking
                    <select value={state.Rank} name="Rank" onChange={handleChange}>
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label>
                <label>IMDB
                    <input type="text" name="IMDB" 
                        placeholder="Digite o link do filme no IMDB"  onChange={handleChange}
                        value={state.IMDB}
                    />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </main>
    );
}