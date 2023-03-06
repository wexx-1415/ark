import Head from 'next/head';
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
			<Head>
				<title>仿明日方舟官网</title>
				<meta name='description' content='仿明日方舟官网' />
				<link rel='icon' href='/favicon.ico' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='keywords' content='arknights 明日方舟 react 仿官网' />
			</Head>
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
