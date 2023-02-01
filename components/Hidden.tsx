import { ReactNode } from 'react';
import style from '../styles/Hidden.module.css';
const Hidden = ({
	children,
	height,
	open,
}: {
	children: ReactNode;
	height?: number;
	open: boolean;
}) => {
	return (
		<div
			className={style.container}
			style={{ height: open ? height : 0 + 'px' }}
		>
			<div
				className={style.item}
				style={{ transform: `translate3d(0,-${!open ? height : 0}px,0)` }}
			>
				{children}
			</div>
		</div>
	);
};
export default Hidden;
