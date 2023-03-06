import Image from 'next/image';
import { useState } from 'react';
import AgeTip from '../public/age-tips.32cfababfafa8c51b9a5.png';
import Com from '../public/ak.hypergryph.com_.png';
import Com1 from '../public/ak.hypergryph.com_1_.png';
import ComTap from '../public/ak.hypergryph.com_tap.png';
import Qr from '../public/qr.c7ceabc360c69e5bb584.png';
import Rh from '../public/rhodes.233a893d934d381666aa.png';

import style from '../styles/Download.module.css';
import Rotate from './Rotate';
import SlideEnter from './SlideEnter';
const Download = ({ classname }: { classname?: string }) => {
	const [rotate, setRotate] = useState(false);

	return (
		<div className={classname}>
			<Rotate rotate={rotate} setRotate={setRotate}>
				<Image src={Qr} alt={'qr'} width={131} height={131}></Image>
				<Image src={Rh} alt={'qr'} width={131} height={131}></Image>
			</Rotate>
			<div className={style.container}>
				<div className={style.download}>
					<SlideEnter show={rotate}>
						<Image src={Com} alt={''} width={135} height={40}></Image>
						<Image
							src={Com1}
							alt={''}
							style={{ transitionDelay: '0.5s' }}
							width={135}
							height={40}
						></Image>
						<Image
							src={ComTap}
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
							src={AgeTip}
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
