const GridText = ({
	text,
	columns,
	width,
	classname,
}: {
	text: string;
	columns: number;
	width: number;
	classname?: string;
}) => {
	const Texts = text.split('').map((text, index) => {
		return <span key={text + index}>{text}</span>;
	});
	return (
		<span
			className={classname}
			style={{
				display: 'grid',
				gridTemplateColumns: `repeat(${columns}, 1fr)`,
				width: width,
				fontFamily: 'monospace',
				userSelect: 'none',
				gridGap: `${width / columns}px`,
			}}
		>
			{Texts}
		</span>
	);
};
export default GridText;
