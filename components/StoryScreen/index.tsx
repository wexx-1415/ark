import Story from '../Story';
import StoryList from '../StoryList';
import ArrowRight, { ArrowLeft } from '../Svg/Arrow';
import Close from '../Svg/Close';

const StoryScreen = () => {
	return (
		<>
			{/* <StoryList></StoryList> */}
			<Story></Story>
			<Close />
			<ArrowLeft />
			<ArrowRight />
		</>
	);
};
export default StoryScreen;
