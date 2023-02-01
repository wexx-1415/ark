import React, { SetStateAction, useEffect, useState } from 'react';
import Caster from '../public/caster.svg';
import Doc from '../public/medic.svg';
import Spc from '../public/spc.svg';
import Tank from '../public/tank.svg';
import War from '../public/war.svg';
import style from '../styles/InfiniteList.module.css';
import useDelayState from '../util/useDelayState';
import useThrottle from '../util/useThrottle';
import useToggleDelayState from '../util/useToggleDelayState';
import RoleIntro from './RoleIntro';
const list = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
	23, 24, 25, 26, 27, 28, 29, 30,
];
const ganyuan = [
	{
		id: 0,
		img: '/public/amiya.png',
		name: '阿米娅',
		engName: 'amiya',
		cv: '黑泽明世',
		audio: '',
		type: 'witch',
		des: '罗德岛的公开领袖，在内部拥有最高执行权。虽然，从外表上看起来仅仅是个不成熟的少女，实际上，她却是深受大家信任的合格的领袖。现在，阿米娅正带领着罗德岛，为了感染者的未来，为了让这片大地挣脱矿石病的阴霾而不懈努力。',
	},
	{
		id: 1,
		name: '凯尔希',
		engName: "kal'tsit",
		img: '/public/kaierxi.png',
		cv: '日笠阳子',
		audio: '',
		type: 'doc',
		des: '罗德岛最高管理者之一，阿米娅的直接辅导者。\n罗德岛医疗部门的总负责人。\n作为罗德岛的老成员，凯尔希医生是在阿米娅背后最稳固的援护者。',
	},
	{
		id: 2,
		name: '红',
		engName: 'PROJEKT RED',
		img: '/public/hong.png',
		cv: '小清水亚美',
		audio: '',
		type: 'spc',
		des: '罗德岛最高管理者之一，阿米娅的直接辅导者。\n罗德岛医疗部门的总负责人。\n作为罗德岛的老成员，凯尔希医生是在阿米娅背后最稳固的援护者。',
	},
	{
		id: 3,
		name: '杜宾',
		engName: 'DOBERMANN',
		cv: '种崎敦美',
		img: '/public/dobin.png',
		audio: '',
		type: 'warrior',
		des: '罗德岛最高管理者之一，阿米娅的直接辅导者。\n罗德岛医疗部门的总负责人。\n作为罗德岛的老成员，凯尔希医生是在阿米娅背后最稳固的援护者。',
	},
	{
		id: 4,
		name: '临光',
		engName: 'NEARL',
		cv: '佐仓绫音',
		img: '/public/lingguan.png',
		audio: '',
		type: 'def',
		des: '罗德岛最高管理者之一，阿米娅的直接辅导者。\n罗德岛医疗部门的总负责人。\n作为罗德岛的老成员，凯尔希医生是在阿米娅背后最稳固的援护者。',
	},
	{
		id: 5,
		name: '阿米娅',
		engName: "kal'tsit",
		img: '/public/lingguan.png',
		cv: '日笠阳子',
		audio: '',
		type: 'doc',
		des: '罗德岛最高管理者之一，阿米娅的直接辅导者。\n罗德岛医疗部门的总负责人。\n作为罗德岛的老成员，凯尔希医生是在阿米娅背后最稳固的援护者。',
	},
	{
		id: 6,
		name: '阿米娅',
		engName: "kal'tsit",
		img: '/public/lingguan.png',
		cv: '日笠阳子',
		audio: '',
		type: 'doc',
		des: '罗德岛最高管理者之一，阿米娅的直接辅导者。\n罗德岛医疗部门的总负责人。\n作为罗德岛的老成员，凯尔希医生是在阿米娅背后最稳固的援护者。',
	},
	{
		id: 7,
		name: '阿米娅',
		img: '/public/lingguan.png',
		engName: "kal'tsit",
		cv: '日笠阳子',
		audio: '',
		type: 'doc',
		des: '罗德岛最高管理者之一，阿米娅的直接辅导者。\n罗德岛医疗部门的总负责人。\n作为罗德岛的老成员，凯尔希医生是在阿米娅背后最稳固的援护者。',
	},
	{
		id: 8,
		name: '阿米娅',
		img: '/public/lingguan.png',
		engName: "kal'tsit",
		cv: '日笠阳子',
		audio: '',
		type: 'doc',
		des: '罗德岛最高管理者之一，阿米娅的直接辅导者。\n罗德岛医疗部门的总负责人。\n作为罗德岛的老成员，凯尔希医生是在阿米娅背后最稳固的援护者。',
	},
	{
		id: 9,
		name: '阿米娅',
		img: '/public/lingguan.png',
		engName: "kal'tsit",
		cv: '日笠阳子',
		audio: '',
		type: 'doc',
		des: '罗德岛最高管理者之一，阿米娅的直接辅导者。\n罗德岛医疗部门的总负责人。\n作为罗德岛的老成员，凯尔希医生是在阿米娅背后最稳固的援护者。',
	},
	{
		id: 10,
		img: '/public/lingguan.png',
		name: '阿米娅',
		engName: "kal'tsit",
		cv: '日笠阳子',
		audio: '',
		type: 'doc',
		des: '罗德岛最高管理者之一，阿米娅的直接辅导者。\n罗德岛医疗部门的总负责人。\n作为罗德岛的老成员，凯尔希医生是在阿米娅背后最稳固的援护者。',
	},
	{
		id: 11,
		name: '阿米娅',
		img: '/public/lingguan.png',
		engName: "kal'tsit",
		cv: '日笠阳子',
		audio: '',
		type: 'doc',
		des: '罗德岛最高管理者之一，阿米娅的直接辅导者。\n罗德岛医疗部门的总负责人。\n作为罗德岛的老成员，凯尔希医生是在阿米娅背后最稳固的援护者。',
	},
	{
		id: 12,
		name: '阿米娅',
		img: '/public/lingguan.png',
		engName: "kal'tsit",
		cv: '日笠阳子',
		audio: '',
		type: 'doc',
		des: '罗德岛最高管理者之一，阿米娅的直接辅导者。\n罗德岛医疗部门的总负责人。\n作为罗德岛的老成员，凯尔希医生是在阿米娅背后最稳固的援护者。',
	},
];
const ImgSrcConvent = (src: string) => {
	switch (src) {
		case 'spc':
			return <Spc />;
		case 'doc':
			return <Doc />;
		case 'warrior':
			return <War />;
		case 'def':
			return <Tank />;
		case 'witch':
		default:
			return <Caster />;
	}
};
const ListItem = ({
	item,
	active,
	ex,
}: {
	item: typeof ganyuan[0];
	active?: boolean;
	ex?: string;
}) => {
	return (
		<div className={style.listItem + ' ' + `${active ? style.active : ' '}`}>
			<span className={style.listIndex}>
				{item.id < 9 ? '0' + (item.id + 1) : item.id + 1}
			</span>
			{React.cloneElement(ImgSrcConvent(item.type), { className: style.svg })}
			<span className={style.listName}>{item.name}</span>
		</div>
	);
};
const Lists = ({
	setKey: setTransform,
	transform,
	height: height,
	setTransition,
}: // children,
{
	setKey: React.Dispatch<SetStateAction<number>>;
	transform: number;
	height: number;
	// children: React.ReactNode;
	setTransition: React.Dispatch<SetStateAction<boolean>>;
}) => {
	const count = 13;
	const TotalHeight = height * count;
	const handleInclick = useThrottle((index: number) => {
		setTransition(true);
		setTransform(-(index - count) * height - TotalHeight / 2);
		setTimeout(() => {
			setTransition(false);
		}, 300);
	}, 1000);
	const handleOutclick = useThrottle((index: number) => {
		setTransform(
			index >= 2 * count ? transform + TotalHeight : transform - TotalHeight
		);
		setTimeout(() => {
			setTransition(true);
			setTransform(-(index % count) * height - TotalHeight / 2);
			setTimeout(() => {
				setTransition(false);
			}, 300);
		}, 10);
	}, 1000);
	return (
		<>
			{ganyuan.map((item, index) => {
				return (
					<div
						className={style.list}
						style={{ height: height }}
						onClick={() =>
							index > count - 1 && index < 2 * count
								? handleInclick(index)
								: handleOutclick(index)
						}
						key={item.id}
					>
						<ListItem
							active={index + count / 2 == Math.abs(transform / height)}
							ex={index + '--1'}
							item={item}
						></ListItem>
					</div>
				);
			})}
			{ganyuan.map((item, index) => {
				index = index + count;
				return (
					<div
						className={style.list}
						style={{ height: height }}
						onClick={() =>
							index > count - 1 && index < 2 * count
								? handleInclick(index)
								: handleOutclick(index)
						}
						key={item.id}
					>
						<ListItem
							active={index - count + count / 2 == Math.abs(transform / height)}
							item={item}
							ex={index + '--2'}
						></ListItem>
					</div>
				);
			})}
			{ganyuan.map((item, index) => {
				index = index + 2 * count;
				return (
					<div
						className={style.list}
						style={{ height: height }}
						onClick={() =>
							index > count - 1 && index < 2 * count
								? handleInclick(index)
								: handleOutclick(index)
						}
						key={item.id}
					>
						<ListItem
							active={
								index - 2 * count + count / 2 == Math.abs(transform / height)
							}
							item={item}
							ex={index + '--3'}
						></ListItem>
					</div>
				);
			})}
		</>
	);
};
const InfiniteList = () => {
	const [isTransition, setTransition] = useState(false);
	const [show, setShow] = useToggleDelayState(false, 1000);
	const [transform, setTransform] = useState(-30 * 13);
	const throttleShow = useThrottle(setShow, 1000);
	const [, delayGanyuan, setDelayGanyuan] = useDelayState<typeof ganyuan[0]>(
		ganyuan[0],
		500
	);
	useEffect(() => {
		setDelayGanyuan(ganyuan[Math.abs((transform + 30) / 60 + 6)]);
		throttleShow();
		console.log(transform);
	}, [transform]);
	return (
		<>
			<div className={style.wrapper} style={{ height: 60 * 13 }}>
				<div
					style={{
						transition: isTransition ? 'all 0.3s ease' : 'none',
						transform: `translate3d(0,${transform}px,0)`,
					}}
				>
					<Lists
						height={60}
						transform={transform}
						setKey={setTransform}
						setTransition={setTransition}
					></Lists>
				</div>
				<RoleIntro show={show} {...delayGanyuan}></RoleIntro>
			</div>
		</>
	);
};
export default InfiniteList;
