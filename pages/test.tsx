import { useState } from 'react';
import Story from '../components/Story';
import style from '../styles/Test.module.css';
import useDelayState from '../util/useDelayState';
const Test = () => {
	const [immediate, delay, setState] = useDelayState(0, 1000);
	const [fade, setFade] = useState(false);
	return (
		<>
			<main className={style.main}>
				{/* <StoryList></StoryList> */}
				<Story></Story>
				{/* <div></div> */}
			</main>
		</>
	);
};
export default Test;
