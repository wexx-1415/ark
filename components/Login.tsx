import Image from 'next/image';
import { useState } from 'react';
import Icon from '../public/icon.e6666cd11b2a7b982b6d.png';
import style from '../styles/Login.module.css';
const Header = () => {
	return (
		<header className={style.header}>
			<Image src={Icon} width={56} height={56} alt={'logo'}></Image>
			<span>
				HYPERGRYPH
				<br></br>
				ACCOUNT.
			</span>
		</header>
	);
};
const Input = ({
	label,
	error,
	value,
	hidden,
	button,
	isErrorHidden = true,
	setErrorHidden,
	setValue,
}: {
	label: string;
	error?: string;
	hidden?: boolean;
	button?: string;
	value: string;
	setErrorHidden?: React.Dispatch<React.SetStateAction<boolean>>;
	isErrorHidden?: boolean;
	setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
	return (
		<div className={style.input_wrap + ' ' + `${hidden ? style.hidden : ' '}`}>
			<span
				className={
					`${isErrorHidden ? style.error_hidden : ' '}` +
					' ' +
					style.input_error
				}
			>
				{error}
			</span>
			<label className={style.input_label} htmlFor={label}>
				{label}
			</label>
			<div className={style.input_with_button}>
				<input
					id={label}
					type='text'
					className={
						`${!isErrorHidden ? style.input_error_line : ' '}` +
						' ' +
						style.input
					}
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
						if (setErrorHidden) setErrorHidden(true);
					}}
				/>
				<button
					type='button'
					className={
						style.input_button + ' ' + `${button ? ' ' : style.hidden}`
					}
				>
					{button}
				</button>
			</div>
		</div>
	);
};
const Login = ({
	close,
	setClose,
}: {
	close?: boolean;
	setClose: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [phone, setPhone] = useState('');
	const [isCode, setIsCode] = useState(false); // 是否是验证码登录
	const [password, setPassword] = useState('');
	const [phoneError, setPhoneError] = useState('');
	const [code, setCode] = useState('');
	const [phoneErrorHidden, setPhoneErrorHidden] = useState(true);
	const [codeErrorHidden, setCodeErrorHidden] = useState(true);
	const [codeError, setCodeError] = useState('');
	const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (!phone) {
			setPhoneError('请输入手机号');
			setPhoneErrorHidden(false);
			return;
		}
		const phoneReg = /^1[3456789]\d{9}$/;
		if (!phoneReg.test(phone)) {
			setPhoneError('手机号格式错误');
			setPhoneErrorHidden(false);
			return;
		}
		if (isCode) {
			if (!code) {
				setCodeError('请输入验证码');
				setCodeErrorHidden(false);
				return;
			}
		}
	};
	return (
		<div className={style.container + ' ' + `${close ? style.close : ' '}`}>
			<Header></Header>
			<form>
				<Input
					error={phoneError}
					label='手机号'
					value={phone}
					isErrorHidden={phoneErrorHidden}
					// setError={setPhoneError}
					setErrorHidden={setPhoneErrorHidden}
					setValue={setPhone}
				></Input>
				<Input
					error=''
					label='密码'
					value={password}
					hidden={isCode}
					setValue={setPassword}
				></Input>
				<Input
					error={codeError}
					label='验证码'
					setErrorHidden={setCodeErrorHidden}
					value={code}
					isErrorHidden={codeErrorHidden}
					// setError={setCodeError}
					button='获取验证码'
					hidden={!isCode}
					setValue={setCode}
				></Input>
				<div className={style.links}>
					<span className={style.link_text} onClick={() => setIsCode(!isCode)}>
						{isCode ? '使用密码登录' : '使用验证码登录'}
					</span>
					<span className={style.link_text}>注册账号</span>
				</div>
				<div className={style.buttons}>
					<button className={style.button} onClick={handleLogin}>
						登录
					</button>
					<button
						className={style.button}
						onClick={(e) => {
							e.preventDefault();
							setClose(false);
						}}
					>
						取消
					</button>
				</div>
			</form>
		</div>
	);
};
export default Login;
