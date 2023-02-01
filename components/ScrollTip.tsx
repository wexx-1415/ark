import style from '../styles/ScrollTip.module.css';
const ScrollTip = () => {
	return (
		<div className={style.container}>
			<div className={style.text}>SCROLL</div>
			<span className={style.tip}></span>
			<span className={style.tip + ' ' + style.delay}></span>
		</div>
	);
};
export default ScrollTip;
