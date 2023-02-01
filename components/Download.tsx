import Image from 'next/image';
import { useState } from 'react';
import style from '../styles/Download.module.css';
import Rotate from './Rotate';
import SlideEnter from './SlideEnter';
const Download = ({ classname }: { classname?: string }) => {
	const [rotate, setRotate] = useState(false);

	return (
		<div className={classname}>
			<Rotate rotate={rotate} setRotate={setRotate}>
				<Image
					src={'/qr.c7ceabc360c69e5bb584.png'}
					alt={'qr'}
					width={131}
					height={131}
				></Image>
				<Image
					src={'/rhodes.233a893d934d381666aa.png'}
					alt={'qr'}
					width={131}
					height={131}
				></Image>
			</Rotate>
			<div className={style.container}>
				<div className={style.download}>
					<SlideEnter show={rotate}>
						<Image
							src={'/ak.hypergryph.com_.png'}
							alt={''}
							width={135}
							height={40}
						></Image>
						<Image
							src={'/ak.hypergryph.com_1_.png'}
							alt={''}
							style={{ transitionDelay: '0.5s' }}
							width={135}
							height={40}
						></Image>
						<Image
							src={'/ak.hypergryph.com_tap.png'}
							alt={''}
							style={{ transitionDelay: '1s' }}
							width={135}
							height={40}
						></Image>
					</SlideEnter>
				</div>
				<div className={style.tip}>
					<SlideEnter show={rotate} delayStart={0.3} hiddenNodelay>
						<Image
							src={'/age-tips.32cfababfafa8c51b9a5.png'}
							width={105}
							height={134}
							alt={'age-tips'}
						></Image>
					</SlideEnter>
				</div>
			</div>
		</div>
	);
};
export default Download;
