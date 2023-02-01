import { useCallback, useEffect, useRef } from 'react';
import style from '../styles/Particle.module.css';
const min = 0.1;
const max = 0.1;
class Particles {
	x: number;
	v: number;
	maxH: number;
	h: number;
	alpha: number;
	constructor() {
		this.x = Math.random() * 100;
		this.v = Math.random() * (max - min + 0.1) + min;
		this.h = Math.random();
		this.maxH = Math.random();
		this.alpha = 1;
	}
	init() {
		this.x = Math.random() * 100;
		this.h = 0;
		this.v = Math.random() * (max - min + 0.1) + min;
		this.maxH = Math.random();
		this.alpha = 1;
	}
}
const Particle = () => {
	const ref = useRef<HTMLCanvasElement | null>(null);
	const particles = new Array(20).fill(0).map(() => new Particles());

	const draw = useCallback(() => {
		const canvas = ref.current;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		canvas.width = document.body.clientWidth;
		canvas.height = document.body.clientHeight;
		const width = canvas.width;
		const height = canvas.height;
		ctx.clearRect(0, 0, width, height);
		particles.forEach((particle) => {
			particle.h += particle.v;
			if (particle.h > particle.maxH * height) {
				particle.alpha -= 0.01;
			}
			if (particle.alpha <= 0) {
				particle.init();
			}
			ctx.fillStyle = `rgba(255,255,255,${particle.alpha})`;
			ctx.beginPath();
			ctx.arc((particle.x / 100) * width, particle.h, 2, 0, Math.PI * 2);
			ctx.fill();
		});
		requestAnimationFrame(draw);
	}, [ref, particles]);
	useEffect(() => {
		draw();
	}, [draw]);
	return (
		<canvas
			ref={ref}
			width={'100%'}
			height={'100%'}
			className={style.canvas}
		></canvas>
	);
};
export default Particle;
