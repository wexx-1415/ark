import Image from 'next/image';
import { useState } from 'react';
import style from '../styles/VideoPlay.module.css';
import Modal from './Modal';
const RadioButton = ({
	id,
	text,
	checked,
	action,
}: {
	id: string;
	text: string;
	checked?: boolean;
	action: () => void;
}) => {
	return (
		<>
			<input
				className={style.radio}
				type='radio'
				name={'videoPlay'}
				id={id}
				value={text}
				onChange={() => {
					action();
				}}
				checked={checked}
			/>
			<label htmlFor={id}>{'00' + text}</label>
		</>
	);
};
const TinyText = ({ title, bgm }: { title: string; bgm: string }) => {
	return (
		<div className={style.tiny_container}>
			<span className={style.tiny_item}>{title}</span>
			<span className={style.tiny_item}>{'BGM-' + bgm}</span>
		</div>
	);
};
const PlayButton = ({ url }: { url: string }) => {
	const [show, setShow] = useState(false);
	return (
		<div className={style.play_wrap} onClick={() => setShow(!show)}>
			<Image
				className={style.play_button_wrap}
				src={'/tx-八边形.png'}
				width={50}
				height={50}
				alt={''}
			></Image>
			<Image
				className={style.play_button_play}
				src={'/播放2.png'}
				width={20}
				height={20}
				alt={''}
			></Image>
			<Modal isModalOpen={show} setIsModalOpen={setShow}>
				<Image src={url} width={300} height={300} alt={''}></Image>
			</Modal>
		</div>
	);
};
const videoList = [
	{
		url: '/rhodes.233a893d934d381666aa.png',
		title: 'THE PRELUDE',
		bgm: 'MONSTER_STARSET',
	},
	{
		url: '/age-tips.32cfababfafa8c51b9a5.png',
		title: 'THE OVERTURE',
		bgm: 'UNBECOMING-STARSET',
	},
	{
		url: '/vercel.svg',
		title: 'THE ECHO',
		bgm: 'INFECTED-STARSET',
	},
];
const VideoPlay = () => {
	const [video, setVideo] = useState(1);
	return (
		<div className={style.wrap}>
			<span style={{ display: 'flex' }}>
				<div className={style.container}>
					<RadioButton
						id='test1'
						action={() => setVideo(0)}
						text='1'
						checked={video === 0}
					></RadioButton>
					<RadioButton
						action={() => setVideo(1)}
						id='test2'
						text='2'
						checked={video === 1}
					></RadioButton>
					<RadioButton
						action={() => setVideo(2)}
						id='test3'
						text='3'
						checked={video === 2}
					></RadioButton>
				</div>
				<TinyText
					title={videoList[video].title}
					bgm={videoList[video].bgm}
				></TinyText>
			</span>
			<PlayButton url={videoList[video].url}></PlayButton>
		</div>
	);
};
export default VideoPlay;
