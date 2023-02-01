import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import style from '../styles/Modal.module.css';
const Modal = ({
	isModalOpen,
	setIsModalOpen,
	children,
}: {
	isModalOpen: boolean;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	children?: React.ReactNode;
}) => {
	const ref = useRef<Element | null>(null);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		ref.current = document.querySelector<HTMLElement>('#portal');
		setMounted(true);
	}, []);

	return mounted && ref.current
		? createPortal(
				<>
					<div
						onClick={() => setIsModalOpen(!isModalOpen)}
						className={style.bg + ' ' + `${isModalOpen ? ' ' : style.close}`}
					></div>
					<div
						className={
							style.content + ' ' + `${isModalOpen ? ' ' : style.close}`
						}
					>
						{children}
					</div>
				</>,
				ref.current
		  )
		: null;
};
export default Modal;
