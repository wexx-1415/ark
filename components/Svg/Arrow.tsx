import { SVGProps } from 'react';
import Style from './Arrow.module.css';
const ArrowRight = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			className={Style.arrow + ' ' + Style.right + ' ' + className}
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			{...props}
			viewBox='0 0 103 103'
		>
			<defs>
				<path
					id='arrow-btn-tl'
					transform-origin='16.1% 15.9%'
					d='M30.833,30.926 C29.311,32.448 26.844,32.448 25.322,30.926 L1.440,7.044 C-0.082,5.523 -0.082,3.055 1.440,1.533 C2.962,0.011 5.429,0.011 6.951,1.533 L30.833,25.415 C32.355,26.937 32.355,29.405 30.833,30.926 Z'
				></path>
				<path
					id='arrow-btn-bl'
					transform-origin='16% 55%'
					d='M1.440,65.725 L25.322,41.843 C26.844,40.321 29.311,40.321 30.833,41.843 C32.355,43.365 32.355,45.832 30.833,47.354 L6.951,71.236 C5.429,72.758 2.962,72.758 1.440,71.236 C-0.082,69.714 -0.082,67.247 1.440,65.725 Z'
				></path>
			</defs>
			<circle
				className={Style.dot}
				r='4.5'
				cx='67'
				cy='51.5'
				transform-origin='66% 50%'
				transform='scale(0, 0)'
			></circle>

			<g transform='translate(35, 15)'>
				<use
					className={Style.top}
					xlinkHref='#arrow-btn-tl'
					transform-origin='16.1% 15.9%'
				></use>
				<use
					className={Style.bot}
					xlinkHref='#arrow-btn-bl'
					transform-origin='16% 55%'
				></use>
			</g>
		</svg>
	);
};
const ArrowLeft = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			viewBox='0 0 103 103'
			{...props}
			className={Style.arrow + ' ' + Style.left + ' ' + className}
		>
			<circle
				className={Style.dot}
				r='4.5'
				cx='36'
				cy='51.5'
				transform-origin='34% 50%'
				transform='scale(0, 0)'
			></circle>
			<defs>
				<path
					id='arrow-btn-tr'
					transform-origin='16.1% 15.9%'
					d='M31.274,7.155 L7.392,31.037 C5.870,32.559 3.402,32.559 1.880,31.037 C0.358,29.515 0.358,27.048 1.880,25.526 L25.762,1.644 C27.284,0.122 29.752,0.122 31.274,1.644 C32.795,3.166 32.795,5.633 31.274,7.155 Z'
				></path>
				<path
					id='arrow-btn-br'
					transform-origin='16% 55%'
					d='M1.880,41.954 C3.402,40.432 5.870,40.432 7.392,41.954 L31.274,65.836 C32.795,67.358 32.795,69.825 31.274,71.347 C29.752,72.869 27.284,72.869 25.762,71.347 L1.880,47.465 C0.358,45.943 0.358,43.476 1.880,41.954 Z'
				></path>
			</defs>
			<g transform='translate(35, 15)'>
				<use
					className={Style.top}
					xlinkHref='#arrow-btn-tr'
					transform-origin='16.1% 15.9%'
				></use>
				<use
					className={Style.bot}
					xlinkHref='#arrow-btn-br'
					transform-origin='16% 55%'
				></use>
			</g>
		</svg>
	);
};
export { ArrowRight, ArrowLeft };
export default ArrowRight;
