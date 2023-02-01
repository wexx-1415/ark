import React from 'react';
import style from '../styles/SlideEnter.module.css';
const SlideEnter = ({
	show,
	children,
	delayStart,
	hiddenNodelay,
}: {
	show: boolean;
	children: React.ReactNode;
	delayStart?: number;
	hiddenNodelay?: boolean;
}) => {
	const delay = delayStart || 0;
	const hidden = hiddenNodelay ? (!show ? 0 : 1) : 1;
	return (
		<>
			{React.Children.map(children, (child, index) => {
				if (React.isValidElement(child)) {
					return (
						<span
							className={style.item + ' ' + `${!show ? style.hidden : ' '}`}
							style={{ transitionDelay: `${hidden * (index * 0.1 + delay)}s` }}
						>
							{child}
						</span>
					);
				}
			})}
		</>
	);
};
export default SlideEnter;
