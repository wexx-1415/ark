import React from 'react';
import style from '../styles/Rotate.module.css';
const Rotate = ({
	children,
	rotate,
	setRotate,
}: {
	children: React.ReactNode;
	rotate: boolean;
	setRotate: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const count = React.Children.count(children);
	if (count != 2) return <p>children length should be 2</p>;
	const els = React.Children.toArray(children);
	return (
		<div className={style.rotate} onClick={() => setRotate(!rotate)}>
			<span
				className={
					style.rotateItem +
					' ' +
					`${!rotate ? ' ' + style.delay : style.hidden + ' '}`
				}
			>
				{els[0]}
			</span>
			<span
				className={
					style.rotateItem +
					' ' +
					`${rotate ? ' ' + style.delay : style.hidden + ' '}`
				}
			>
				{els[1]}
			</span>
		</div>
	);
};
export default Rotate;
