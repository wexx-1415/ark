import { SVGProps } from 'react';
import Style from './Close.module.css';
const Close = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			{...props}
			className={Style.close + ' ' + className}
			viewBox='-10 -10 90 90'
		>
			<use
				xlinkHref='#close-tl'
				className={Style.arrow}
				transform-origin='40 40'
			></use>
			<use
				xlinkHref='#close-tr'
				className={Style.arrow}
				style={{
					transitionDelay: '0.1s',
				}}
				transform-origin='40 40'
			></use>
			<use
				xlinkHref='#close-br'
				className={Style.arrow}
				style={{
					transitionDelay: '0.2s',
				}}
				transform-origin='40 40'
			></use>
			<use
				xlinkHref='#close-bl'
				className={Style.arrow}
				style={{
					transitionDelay: '0.3s',
				}}
				transform-origin='40 40'
			></use>
			<defs>
				<path
					id='close-br'
					d='M62.324,70.228 L38.768,46.653 L38.768,39.894 L45.522,39.894 L69.077,63.469 L69.077,70.228 L62.324,70.228 Z'
				></path>
				<path
					id='close-tr'
					d='M38.768,31.269 L38.768,24.509 L62.324,0.935 L69.077,0.935 L69.077,7.694 L45.522,31.269 L38.768,31.269 Z'
				></path>
				<path
					id='close-bl'
					d='M0.604,70.228 L0.604,63.469 L24.159,39.894 L30.913,39.894 L30.913,46.653 L7.357,70.228 L0.604,70.228 Z'
				></path>
				<path
					id='close-tl'
					d='M0.604,7.694 L0.604,0.935 L7.357,0.935 L30.913,24.509 L30.913,31.269 L24.159,31.269 L0.604,7.694 Z'
				></path>
			</defs>
		</svg>
	);
};
export default Close;
