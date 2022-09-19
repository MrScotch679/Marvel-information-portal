import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import useMarvelService from '../../services/MarvelService';

import './comicsList.scss';

const setContent = (process, Component, newItemLoading) => {
  switch (process) {
    case 'waiting':
      return <Spinner/>;
    case 'loading':
      return newItemLoading ? <Component/> : <Spinner/>;
    case 'confirmed':
      return <Component/>;
    case 'error': 
      return <ErrorMessage/>;
    default: 
      break;
  }
}

const ComicsList = (props) => {
  const [comicsList, setComicsList] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(210);
  const [comicsEnded, setComicsEnded] = useState(false);

  const {process, setProcess, getAllComics} = useMarvelService();

  useEffect(() => {
    onRequest(offset, true);
  }, [])

  const onComicsListLoaded = (newComicsList) => {
    let ended = false;
    if (newComicsList < 8) {
      ended = true;
    }

    setComicsList(charList => [...comicsList, ...newComicsList]);
    setNewItemLoading(newItemLoading => false);
    setOffset(offset => offset + newComicsList.length);
    setComicsEnded(comicsEnded => ended);
  }

  const onRequest = (offset, initial) => {
    initial ? setNewItemLoading(false) : setNewItemLoading(true);
    getAllComics(offset)
      .then(onComicsListLoaded)
      .then(() => setProcess('confirmed'))
      .catch(() => setProcess('error'));
  }

  function renderItems(arr) {
    const items = arr.map(item => {
      return (
        <li className="comics__item"
          key={item.id}>
          <Link to={`/comics/${item.id}`}>
            <img src={item.thumbnail} alt="ultimate war" className="comics__item-img"/>
            <div className="comics__item-name">{item.title}</div>
            <div className="comics__item-price">{item.prices}</div>
          </Link>
        </li>
      )
    })

    return (
      <ul className="comics__grid">
        {items}
      </ul>
    )
  }

  return (
    <div className="comics__list">
      {setContent(process, () => renderItems(comicsList), newItemLoading)}
      <button className="button button__main button__long"
        disabled={newItemLoading}
        style={{'display': comicsEnded ? 'none' : 'block'}}
        onClick={() => onRequest(offset)}>
        <div className="inner">load more</div>
      </button>
      
    </div>
  )
}

export default ComicsList;