import React, { useLayoutEffect, useRef } from "react";

const Word = (props) => {
	// wordEl = React.createRef();
	const wordEl = useRef();

	const {onDelete, word} = props;

	// helper method
	const renderColor = (color) => color === undefined || color === null ? "black" : color;
	
	const getRandomInt = (min, max) => parseInt(Math.random() * (max - min) + min);

	useLayoutEffect(()=> {
		const el = wordEl.current;
		el.style.top = getRandomInt(0, window.innerHeight - el.clientHeight) + 'px';
		el.style.left = getRandomInt(0, window.innerHeight - el.clientWidth) + 'px';
		//this is equivalente to componentWillUnmount
		return () => {
			console.log('goodbye, ${word.word}')
		}
	}, [wordEl, word.word])

		return (
			<div
				ref={wordEl}
				id={word.id}
				onClick={() => onDelete(word.id)}
				className="Word"
				style={{ color: renderColor(word.color) }}
			>
				{word.word}
			</div>
		);
}

export default Word;
