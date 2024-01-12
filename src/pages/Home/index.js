import { useEffect, useState } from "react";
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';

//URL DA API ; https://api.themoviedb.org/3/movie/now_playing?api_key=6ecaa9f72e72decff9747365a40f99aa

function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        
        async function loadFilmes(){
            const reponse = await api.get("movie/now_playing",  {
                params:{
                    api_key:"6ecaa9f72e72decff9747365a40f99aa",
                    language: "pt-BR",
                    page: 1,
                }
            })

           //console.log(reponse.data.results.slice(0, 10));
          setFilmes(reponse.data.results.slice(0, 10))
          setLoading(false);

}
     loadFilmes();
}, [])

    if (loading) {
        return (
            <div className="loading">
                <h2>Carregando filmes . . .</h2>
            </div>
        )
    }


    return (
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}> Acessar</Link>
                        </article>
                    )
                })}

           </div>
        </div>
    )
}
export default Home;