import React from 'react';
import ContentLoader from 'react-content-loader';
import liked from '../../assets/liked.svg'
import unliked from '../../assets/unliked.svg'
import checked from '../../assets/btn-checked.svg'
import btnPlus from '../../assets/btn-plus.svg'
import AppContext from '../../context';
import styles from './Card.module.scss';

function Card({
  id,
  title,
  url,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const obj = { id, parentId: id, title, url, price };
 
  const onClickPlus = () => {
    onPlus(obj);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <div className={styles.favorite} onClick={onClickFavorite}>
              <img src={isFavorite ? liked : unliked} alt="Unliked" />
            </div>
          )}
          <img width="100%" height={135} src={url} alt="Sneakers" />
          <h5>{title}</h5>
          <div className={styles.bottom_block}>
            <div className={styles.bottom_text}>
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={isItemAdded(id) ? checked : btnPlus}
                alt="Plus"
                checked

              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
