import React from 'react';
import style from '../styles/LoginButton.module.css';
import Login from './Login';
import Modal from './Modal';
const LoginButton = () => {
	const [isModalOpen, setIsModalOpen] = React.useState(false);

	return (
		<div>
			<span
				className={style.text}
				data-cursor
				onClick={() => setIsModalOpen(true)}
			>
				登录
			</span>{' '}
			<span className={style.sep}>|</span>{' '}
			<span className={style.text} data-cursor>
				注册
			</span>
			<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
				<Login close={!isModalOpen} setClose={setIsModalOpen}></Login>
			</Modal>
		</div>
	);
};
export default LoginButton;
