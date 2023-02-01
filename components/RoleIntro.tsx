import Image from 'next/image';
import Audio from '../public/audio.svg';
import style from '../styles/RoleIntro.module.css';
import BorderText from './BorderText';
interface RoleIntroProps {
	id: number;
	img: string;
	name: string;
	engName: string;
	cv: string;
	audio: string;
	type: string;
	des: string;
	show: boolean;
}
const RoleIntro = (pros: RoleIntroProps) => {
	return (
		<div
			className={pros.show ? style.show : ' '}
			style={{
				display: 'flex',
				alignItems: 'center',
				position: 'relative',
			}}
			// onClick={() => throttled()}
		>
			<Image
				src={pros.img.replace('/public', '')}
				className={style.img}
				// width={518}
				style={{ objectFit: 'contain' }}
				fill
				alt=''
			></Image>
			<div className={style.intro}>
				<div style={{ paddingTop: '30px' }}>
					<div className={style.role_name}>{pros.name}</div>
					<div className={style.cv}>
						<span>{pros.engName.toLocaleUpperCase()}</span>
						<span className={style.audio}>
							<span style={{ whiteSpace: 'nowrap' }}> CV:{pros.cv}</span>{' '}
							<Audio></Audio>
						</span>
					</div>
					<BorderText
						className={style.border_text}
						text={pros.engName.toLocaleUpperCase()}
					></BorderText>

					<span className={style.intro_text}>{pros.des}</span>
				</div>
			</div>
		</div>
	);
};
export default RoleIntro;
