import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import style from '../styles/StoryList.module.css';
import BorderText from './BorderText';
interface SettingType {
	zh: string;
	en: string;
	img: string;
}
const settings: SettingType[] = [
	{
		zh: '源石',
		en: 'ORIGINIUMS',
		img: '/originiums.a3d9f6533545b6423c8d.png',
	},
	{
		zh: '源石技艺',
		en: 'ORIGINIUM ARTS',
		img: '/originium_arts.13526240f1a6ebaddd0b.png',
	},
	{
		zh: '整合运动',
		en: 'REUNION',
		img: '/reunion.bc6f43d5a485bd1c161f.png',
	},
	{
		zh: '感染者',
		en: 'INFECTED',
		img: '/infected.fe3e5622b0381b933397.png',
	},
	{
		zh: '移动城邦',
		en: 'NOMADIC CITY',
		img: '/nomadic_city.0856ca1fc4da54177a9a.png',
	},
	{
		zh: '罗德岛',
		en: 'RHODES ISLAND',
		img: '/rhodes_island.a8b9f712d951012ec40a.png',
	},
];
const ListItem = ({
	item,
	click,
	index,
}: {
	item: SettingType;
	click?: () => void;
	index?: number;
}) => {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		setX(e.clientX);
		setY(e.clientY);
	};
	const [isin, setIn] = useState(false);
	return (
		<div
			className={clsx(style.list_wrap)}
			style={{ transitionDelay: `${0.1 * (index || 1)}s` }}
			onClick={() => click && click()}
		>
			{isin && (
				<Image
					src={item.img}
					width={1024}
					height={1024}
					alt=''
					className={style.img}
					style={{
						transform: ` translate3d(${-410 + x - window.innerWidth / 2}px, ${
							-950 + y
						}px,0)`,
					}}
				/>
			)}
			<div
				className={style.list}
				onMouseEnter={(e) => {
					setX(e.clientX);
					setY(e.clientY);
					setIn(true);
				}}
				onMouseLeave={() => setIn(false)}
				onMouseMove={isin ? handleMouseMove : undefined}
			>
				<BorderText
					className={style.border}
					text={item.en.toLocaleUpperCase()}
				></BorderText>
				<div className={style.text}>
					<span>{item.zh}</span>
					<span style={{ marginLeft: '1rem' }}>{item.en}</span>
				</div>
			</div>
		</div>
	);
};
const StoryList = ({
	hidden,
	action,
}: {
	hidden: boolean;
	action: (index: number) => void;
}) => {
	return (
		<>
			<div className={clsx(style.wrap, hidden && style.hidden)}>
				{settings.map((item, index) => (
					<ListItem
						key={item.en}
						index={index}
						click={() => action(index)}
						item={item}
					/>
				))}
			</div>
		</>
	);
};
export default StoryList;
