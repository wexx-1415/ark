import Image from 'next/image';
import style from '../styles/MainPage.module.css';
import BoldText from './BoldText';
import Download from './Download';
import GridText from './GridText';
import ScrollTip from './ScrollTip';
import VideoPlay from './VideoPlay';
const MainPage = () => {
	return (
		<div className={style.main}>
			<Image
				className={style.title}
				alt='title'
				src={'/title.png'}
				width={155}
				height={77}
			></Image>
			<GridText
				classname={style.grid}
				width={200}
				text={'arknights'.toUpperCase()}
				columns={3}
			></GridText>
			<BoldText text={'rhodes island'.toUpperCase()}></BoldText>
			<br />
			<Download classname={style.download}></Download>
			<ScrollTip></ScrollTip>
			<VideoPlay></VideoPlay>
		</div>
	);
};
export default MainPage;
