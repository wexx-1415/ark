import React, { useState } from 'react';
import style from '../styles/Screen.module.css';
import DotCanvas from './DotCanvas';
import Share from './Share';

const HoverBar = ({
	page,
	setPage,
	names,
}: {
	page: number;
	setPage: React.Dispatch<React.SetStateAction<number>>;
	names: string[];
}) => {
	names = names.map((name) => name.toUpperCase());
	const bars = names.map((name, index) => {
		return (
			<span
				className={(page == index ? style.active : '') + ' ' + style.bar}
				onClick={() => setPage(index)}
				data-cursor
				key={name}
			>
				{name}
			</span>
		);
	});
	return <div className={style.hoverBar}>{bars}</div>;
};
const Screen = ({ children }: { children: React.ReactNode }) => {
	return <section className={style.screen}>{children}</section>;
};
const CustomElement = ({ page }: { page: number }) => {
	return (
		<>
			<Share></Share>
			<DotCanvas
				width={500}
				height={60}
				style={{
					position: 'absolute',
					left: '5.75em',
					top: '10px',
					opacity: page != 0 ? 1 : 0,
					transition: 'opacity 0.5s',
				}}
			></DotCanvas>
			<DotCanvas
				url={'city.png'}
				width={500}
				
				height={500}
				style={{
					position: 'absolute',
					left: '800px',
					bottom: '200px',
					opacity: page != 0 ? 1 : 0,
					transition: 'opacity 0.5s',
				}}
			></DotCanvas>
		</>
	);
};
const Screens = ({
	children,
	names,
	hideHoverBar,
}: {
	children: React.ReactNode;
	names: string[];

	hideHoverBar?: boolean;
}) => {
	const [page, setPage] = useState(0);
	const [time, setTime] = useState(new Date().getTime());
	const count = React.Children.count(children);
	const handleWheel = (e: React.WheelEvent<HTMLElement>) => {
		if (new Date().getTime() - time < 500) return;
		if (!e) {
			return;
		}
		console.log(e.deltaY);
		if (e.deltaY > 0) {
			if (page < count - 1) setPage((page) => page + 1);
		} else {
			if (page > 0) setPage((page) => page - 1);
		}
		setTime(new Date().getTime());
	};

	if (names.length < count)
		return <p>names length should bigger than children length</p>;

	const els = React.Children.toArray(children);
	const screens = els.map((child, index) => (
		<Screen key={names[index]}>{child}</Screen>
	));
	return (
		<div style={{ overflow: 'hidden' }}>
			{hideHoverBar ? (
				' '
			) : (
				<HoverBar page={page} setPage={setPage} names={names} />
			)}
			<CustomElement page={page}></CustomElement>
			<main
				style={{ transform: `translateY(-${page}00vh)` }}
				onWheel={handleWheel}
				className={style.screens}
			>
				{screens}
			</main>
		</div>
	);
};
export default Screens;
