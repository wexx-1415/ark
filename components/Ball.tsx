import { useEffect, useState } from 'react';
import style from '../styles/Ball.module.css';
let BALL_WIDTH = 36;
const Ball = ({ x, y }: { x: number; y: number }) => {
	return (
		<div
			style={{ transform: `translate3d(${x}px,${y}px,0)` }}
			id='ball'
			className={style.ball}
		></div>
	);
};
const BallContainer = ({ children }: { children: React.ReactNode }) => {
	useEffect(() => {
		document.querySelectorAll('*[data-cursor]').forEach((el) => {
			el.addEventListener('mouseenter', () => {
				BALL_WIDTH = 24;
				document.body.classList.add('hovered');
			});
			el.addEventListener('mouseleave', () => {
				BALL_WIDTH = 36;
				document.body.classList.remove('hovered');
			});
		});
	}, []);
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const handleHover = (e: React.MouseEvent<HTMLElement>) => {
		setX(e.clientX - BALL_WIDTH / 2);
		setY(e.clientY - BALL_WIDTH / 2);
	};
	return (
		<div onMouseMove={handleHover} className={style.ballContainer}>
			{children}
			<Ball x={x} y={y}></Ball>
		</div>
	);
};
export { BallContainer };
export default Ball;
