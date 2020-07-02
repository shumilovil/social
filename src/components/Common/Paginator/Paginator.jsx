import React from 'react';
import styles from "./Paginator.module.css";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Paginator = ({ totalItemsCount, pageSize, currentPage, portionSize = 10 }) => {

  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div>
      {portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => {
          return (
            <NavLink to={'/users/' + p} activeClassName={styles.activeLink} >
              <span key={p} className={styles.page} >
                {p}
              </span>
            </NavLink>
          )
        })}
      {portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
    </div>
  )
}

export default Paginator;