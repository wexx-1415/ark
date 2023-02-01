import { BallContainer } from '../components/Ball';
import InfiniteList from '../components/InfiniteList';
import Information from '../components/Information';
import MainPage from '../components/MainPage';
import Particle from '../components/Particle';
import Screens from '../components/Screen';
import Story from '../components/Story';
import '../wdyr';

const Index = () => {
	return (
		<>
			<BallContainer>
				<Screens names={['首页', '情报', '干员', '档案', '设定']}>
					<MainPage />
					<Information />
					<InfiniteList></InfiniteList>
					<Story />
					<div>5</div>
				</Screens>{' '}
				{/* <Ball /> */}
				<Particle />
			</BallContainer>
		</>
	);
};
export default Index;
