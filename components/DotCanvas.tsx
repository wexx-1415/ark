import { useCallback, useEffect, useRef } from 'react';
const RandomChoices = (x: number, y: number, firstFrequency: number) => {
	if (Math.random() < firstFrequency) {
		return x;
	} else {
		return y;
	}
};
const imageDataDraw = (
	ctx: CanvasRenderingContext2D,
	width: number,
	height: number,
	frequency?: number
) => {
	const imageData = ctx.getImageData(0, 0, width, height);
	const data = imageData.data;
	for (let i = 0; i < data.length; i += 4) {
		const column = Math.floor(i / 4 / width);
		if (
			(i / 4) % (frequency || RandomChoices(2, 3, 0.7)) == 0 ||
			column % (frequency || RandomChoices(2, 3, 0.7)) == 0
		) {
			data[i] = 0;
			data[i + 1] = 0;
			data[i + 2] = 0;
			data[i + 3] = 0;
		}
	}
	ctx.putImageData(imageData, 0, 0);
};
const drawCanvas = (
	ctx: CanvasRenderingContext2D,
	width: number,
	height: number,
	frequency?: number,
	text?: string,
	url?: string,
	color?: string
) => {
	ctx.clearRect(0, 0, width, height);
	console.log('drawCanvas', width, height);
	ctx.fillStyle = color || 'gray';
	ctx.font = 'bold 40px Arial';
	ctx.fillText(text || 'Hello World', 0, 40);
	if (url) {
		ctx.clearRect(0, 0, width, height);
		const img = new Image();
		img.src = url;
		img.onload = () => {
			ctx.drawImage(img, 0, 40, width, height);
			imageDataDraw(ctx, width, height, frequency);
		};
	} else {
		imageDataDraw(ctx, width, height, frequency);
	}
};
const TextCanvas = ({
	frequency,
	width,
	height,
	classname,
	style,
	text,
	url,
	color,
}: {
	frequency?: number;
	width?: number;
	height?: number;
	classname?: string;
	style?: React.CSSProperties;
	text?: string;
	url?: string;
	color?: string;
}) => {
	const ref = useRef<HTMLCanvasElement | null>(null);
	const draw = useCallback(() => {
		const canvas = ref.current;
		if (!canvas) return;
		const ctx = canvas.getContext('2d', { willReadFrequently: true });
		if (!ctx) return;
		canvas.width = canvas.clientWidth;
		canvas.height = canvas.clientHeight;
		const widthDefault = canvas.width;
		const heightDefault = canvas.height;
		drawCanvas(ctx, widthDefault, heightDefault, frequency, text, url, color);
	}, [color, frequency, text, url]);
	useEffect(() => {
		draw();
	}, [draw]);

	return (
		<canvas
			style={style}
			className={classname}
			ref={ref}
			width={width || '600'}
			height={height || '200'}
		></canvas>
	);
};
export default TextCanvas;
