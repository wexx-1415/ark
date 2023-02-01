import style from '../styles/BoldText.module.css';
const BoldText = ({ text }: { text: string }) => {
	return <span className={style.text}>{text}</span>;
};
export default BoldText;
