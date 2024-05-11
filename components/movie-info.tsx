import { API_URL } from '../app/(home)/page';
import style from '../styles/movie-info.module.css';

async function getMovie(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={style.container}>
      <img src={movie.poster_path} className={style.poster} alt={movie.title} />
      <div>
        <h1 className={style.title}>{movie.title}</h1>
        <h3>⭐️{movie.vote_average.toFixed(1)}</h3>
        <p className={style.info}>{movie.overview}</p>
        <a href={movie.homepage} target={'_blank'}>
          Homepage →
        </a>
      </div>
    </div>
  );
}
