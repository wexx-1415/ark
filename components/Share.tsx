import Image from 'next/image';
import { useState } from 'react';
import style from '../styles/Share.module.css';
import util from '../styles/util.module.css';
import Hidden from './Hidden';
import LoginButton from './LoginButton';
const imgs = [
	{
		src: '/bilibili-line.png',
		alt: 'bili',
	},
	{
		src: '/微信.png',
		alt: '微信',
	},
	{
		src: '/weibo.png',
		alt: '微博',
	},
	{
		src: '/QQ.png',
		alt: 'QQ',
	},
];
const Share = () => {
	const [open, setOpen] = useState(false);
	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<>
			<div className={style.container}>
				<div className={style.buttons}>
					<LoginButton></LoginButton>
					<svg
						onClick={handleClick}
						data-cursor
						className={style.svg}
						version='1.1'
						xmlns='http://www.w3.org/2000/svg'
						xmlnsXlink='http://www.w3.org/1999/xlink'
						viewBox='0 0 300 300'
					>
						<circle cx='242' cy='49' r='35'></circle>
						<circle cx='242' cy='251' r='35'></circle>
						<circle cx='58' cy='150' r='35'></circle>
						<line x1='242' y1='49' x2='59' y2='150' strokeWidth='20'></line>
						<line x1='242' y1='251' x2='59' y2='150' strokeWidth='20'></line>
					</svg>
				</div>
				<Hidden height={28 + 39 * 2} open={open}>
					<Image
						src={'/截图 2023-01-01 18.15.36.png'}
						width={119}
						data-cursor
						className={util.hoverBright}
						height={28}
						alt='bili'
					></Image>
					<div className={style.imgs}>
						{imgs.map((img, index) => (
							<Image
								className={util.hoverBright}
								data-cursor
								src={img.src}
								width={38.5}
								height={38.5}
								alt={img.alt}
								key={img.src}
							/>
						))}
					</div>
				</Hidden>
			</div>
			
		</>
	);
};
export default Share;
