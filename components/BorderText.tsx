const BorderText = ({
	color = ' transparent',
	text,
	style,
	size = '60px',
	className,
}: {
	color?: string;
	text: string;
	size?: string;
	className?: string;
	style?: React.CSSProperties;
}) => {
	return (
		<>
			<span
				style={{
					color: color,
					fontSize: size,
					display: 'inline-block',
					lineHeight: '1',
					WebkitTextFillColor: 'transparent',
					// fontWeight: 'bold',
					WebkitTextStroke: '1px #5c5959',
					...style,
				}}
				className={className}
			>
				{text}
			</span>
		</>
	);
};
export default BorderText;
