import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import style from '../styles/Swipe.module.css';
const SwipeArrows = ({
	onLeft,
	onRight,
}: {
	onLeft: () => void;
	onRight: () => void;
}) => {
	return (
		<>
			<div
				className={style.selector}
				style={{ left: 0 }}
				onClick={() => {
					onLeft();
				}}
			>
				<Image
					alt='上一个'
					src={'/ark/public/img/向左.png'}
					width={100}
					height={100}
				></Image>
			</div>
			<div
				className={style.selector}
				style={{ right: 0 }}
				onClick={() => {
					onRight();
				}}
			>
				<Image
					alt='下一个'
					src={'/ark/public/img/下一个.png'}
					width={100}
					height={100}
				></Image>
			</div>
		</>
	);
};
const CustomDots = ({
	dots,
	index,
	count,
}: {
	dots?: React.ReactElement;
	index: number;
	count: number;
}) => {
	if (!dots) return null;
	const dotsArray = new Array(count).fill(0);
	return (
		<div className={style.dot_wrap}>
			{dotsArray.map((_, i) => {
				return React.cloneElement(dots, { active: i === index, key: i });
			})}
		</div>
	);
};
const Swipe = ({
	children,
	width,
	isArrow,
	dots,
}: {
	children: React.ReactNode;
	width: number;
	isArrow?: boolean;
	dots?: React.ReactElement<{ active: boolean }>;
}) => {
	const count = React.Children.count(children);
	width = width || 256;
	let [left, setLeft] = useState(0);
	const [timer, setTimer] = useState<NodeJS.Timer | null>(null);
	useEffect(() => {
		const time = setInterval(() => {
			setLeft((left) => (left >= (count - 1) * width ? 0 : left + width));
		}, 3000);
		setTimer(time);
		return () => {
			clearInterval(time);
		};
	}, [count, width]);
	const handleMouseOver = () => {
		if (timer) clearInterval(timer);
		setTimer(null);
	};
	const onLeft = useCallback(() => {
		setLeft((left) => (left <= 0 ? (count - 1) * width : left - width));
	}, [count, width]);
	const onRight = useCallback(() => {
		setLeft((left) => (left >= (count - 1) * width ? 0 : left + width));
	}, [count, width]);
	const handleMouseOut = () => {
		setTimer(
			setInterval(() => {
				setLeft((left) => (left >= (count - 1) * width ? 0 : left + width));
			}, 3000)
		);
	};
	return (
		<div
			className={style.wrapper}
			style={{ width: `${width}px` }}
			onMouseOver={() => handleMouseOver()}
			onMouseLeave={() => handleMouseOut()}
		>
			{isArrow ? <SwipeArrows onLeft={onLeft} onRight={onRight} /> : null}
			<div
				className={style.item}
				style={{
					transform: `translate3d(-${left}px,0,0)`,
				}}
			>
				{children}
			</div>
			{dots ? (
				<>
					{
						<CustomDots
							index={left / width}
							count={count}
							dots={dots}
						></CustomDots>
					}
				</>
			) : null}
		</div>
	);
};
export default Swipe;
