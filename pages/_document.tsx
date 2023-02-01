import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='zh'>
			<Head />
			<body>
				<div id='portal' />
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
