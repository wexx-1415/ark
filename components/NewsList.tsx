import Image from 'next/image';
import { useState } from 'react';
import style from '../styles/NewsList.module.css';
import Swipe from './Swiper';
interface NewsType {
	date: string;
	type: 'news' | 'activity' | 'announcement';
	title: string;
	isTop: boolean;
}
const NEWS: NewsType[] = [
	{
		date: '2023-01-03',
		type: 'activity',
		title: '[活动预告]#02「引航者试炼」限时活动即将开启',
		isTop: true,
	},
	{
		date: '2023-01-02',
		type: 'activity',
		title: '[活动预告]#02「引航者试炼」限时活动即将开启',
		isTop: true,
	},
	{
		date: '2023-01-01',
		type: 'activity',
		title: '[活动预告]#02「引航者试炼」限时活动即将开启',
		isTop: true,
	},
	{
		date: '2023-03-01',
		type: 'activity',
		title: '[活动预告]#02「引航者试炼」限时活动即将开启',
		isTop: true,
	},
	{
		date: '2023-02-01',
		type: 'activity',
		title: '[活动预告]#02「引航者试炼」限时活动即将开启',
		isTop: true,
	},
	{
		date: '2022-12-27',
		type: 'activity',
		title: '[活动预告]#02「引航者试炼」限时活动即将开启',
		isTop: true,
	},
	{
		date: '2023-01-05',
		type: 'announcement',
		title: '[明日方舟]01月04日封禁处理公示',
		isTop: false,
	},
	{
		date: '2023-01-07',
		type: 'news',
		title: '《明日方舟》制作组通讯#26期',
		isTop: false,
	},
	{
		date: '2023-01-08',
		type: 'announcement',
		title: '[明日方舟]01月04日封禁处理公示',
		isTop: false,
	},
	{
		date: '2023-01-09',
		type: 'news',
		title: '《明日方舟》制作组通讯#26期',
		isTop: false,
	},
	{
		date: '2023-01-10',
		type: 'announcement',
		title: '[明日方舟]01月04日封禁处理公示',
		isTop: false,
	},
	{
		date: '2023-01-11',
		type: 'news',
		title: '《明日方舟》制作组通讯#26期',
		isTop: false,
	},
	{
		date: '2023-01-12',
		type: 'announcement',
		title: '[明日方舟]01月04日封禁处理公示',
		isTop: false,
	},
	{
		date: '2023-01-13',
		type: 'news',
		title: '《明日方舟》制作组通讯#26期',
		isTop: false,
	},
	{
		date: '2023-01-14',
		type: 'announcement',
		title: '[明日方舟]01月04日封禁处理公示',
		isTop: false,
	},
	{
		date: '2023-01-15',
		type: 'news',
		title: '《明日方舟》制作组通讯#26期',
		isTop: false,
	},
	{
		date: '2023-01-16',
		type: 'announcement',
		title: '[明日方舟]01月04日封禁处理公示',
		isTop: false,
	},
	{
		date: '2023-01-17',
		type: 'news',
		title: '《明日方舟》制作组通讯#26期',
		isTop: false,
	},
];
const Dot = ({ active }: { active: boolean }) => {
	return (
		<div
			style={{
				width: 45,
				height: 5,
				backgroundColor: active ? '#90ddff' : 'white',
				// borderRadius: '50%',
				margin: 5,
			}}
		></div>
	);
};
const ChineseType = (type: NewsType['type']) => {
	switch (type) {
		case 'news':
			return '新闻';
		case 'activity':
			return '活动';
		case 'announcement':
			return '公告';
	}
};
const List = ({ data }: { data: NewsType }) => {
	return (
		<div className={style.list}>
			<div className={style.list_date}>{data.date}</div>
			<div className={style.list_type}>{ChineseType(data.type)}</div>
			<div>{data.title}</div>
			{data.isTop ? <div className={style.list_top}>置顶</div> : null}
		</div>
	);
};
const Filter = (type: NewsType['type'] | 'news activity announcement') => {
	return NEWS.filter((item) => type.includes(item.type)).slice(0, 6);
};
const Menu = ({
	callback,
}: {
	callback: React.Dispatch<React.SetStateAction<NewsType[]>>;
}) => {
	return (
		<div className={style.menu}>
			<div
				className={style.menu_item}
				onClick={() => callback(Filter('news activity announcement'))}
			>
				全部
			</div>
			<div className={style.menu_item} onClick={() => callback(Filter('news'))}>
				新闻
			</div>
			<div
				className={style.menu_item}
				onClick={() => callback(Filter('activity'))}
			>
				活动
			</div>
			<div
				className={style.menu_item}
				onClick={() => callback(Filter('announcement'))}
			>
				公告
			</div>
		</div>
	);
};
const More = () => {
	return <div className={style.more}>更多－－－＞</div>;
};
const NewsList = () => {
	const [News, setNews] = useState<NewsType[]>(NEWS.slice(0, 6));
	return (
		<>
			<Menu callback={setNews} />
			<Swipe width={868} dots={<Dot active={false} />}>
				<Image
					src={'/b3e2844a59c8b175766b726f8e03f05f.jpg'}
					width={868}
					height={224}
					alt={''}
				></Image>
				<Image
					src={'/57dac7604c0ecee23605448c2303ce47.png'}
					width={868}
					height={224}
					alt={''}
				></Image>
				<Image
					src={'/65e947d1e208cfd7a0a0ee44b7900721.jpg'}
					width={868}
					height={224}
					alt={''}
				></Image>
				<Image
					src={'/292a414a2fe22cecd195511e048f19e8.jpg'}
					width={868}
					height={224}
					alt={''}
				></Image>
			</Swipe>
			<div className={style.container}>
				{News.map((item) => (
					<List data={item} key={item.title + item.date} />
				))}
			</div>
			<More></More>
		</>
	);
};
export default NewsList;
