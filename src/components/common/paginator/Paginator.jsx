import React, { useState } from 'react';
import classes from './Paginator.module.css';

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanges, portionSize = 10 }) => {
	let pagesCount = Math.ceil(totalItemsCount / pageSize);

	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	let portionCount = Math.ceil(pagesCount / portionSize);
	let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize));
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;

	return <div className={classes.paginationContainer}>
		{portionNumber > 1 &&
			<button className={classes.prevPage} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}

		{pages
			.filter(p => leftPortionPageNumber <= p && p <= rightPortionPageNumber)
			.map(p => (
				<span
					key={p}
					onClick={(e) => { onPageChanges(p) }}
					className={`${currentPage === p ? classes.selectedPage : ''} ${classes.pagination}`.trim()}>
					{p}
				</span>
			))}

		{portionNumber < portionCount &&
			<button className={classes.nextPage} onClick={() => { setPortionNumber(portionNumber + 1)}}>NEXT</button>}
	</div>

};

export default Paginator;

