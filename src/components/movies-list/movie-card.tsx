import { Link } from 'react-router-dom';
import VideoPlayer from '../video-player/video-player.tsx';
import { FilmType } from '../../types.ts';

type MovieCardProps = {
  film: FilmType;
  activeFilm: string | null;
  onMouseOver: (id: string) => void;
  onMouseOut: () => void;
};

export default function MovieCard({
  film,
  activeFilm,
  onMouseOver,
  onMouseOut,
}: MovieCardProps) {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => onMouseOver(film.id)}
      onMouseOut={() => onMouseOut()}
    >
      <div className="small-film-card__image">
        <VideoPlayer film={film} activeFilm={activeFilm} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>
          {film.name}
        </Link>
      </h3>
    </article>
  );
}
