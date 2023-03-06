// import { message } from 'react-message-popup'
import { useCallback, useEffect, useRef, useState } from 'react';
import style from '../styles/Dom.module.css';
interface Heading {
	heading: number;
	text: string;
}
const Headings: Heading[] = [];
const HeadingCollection = (node: Element) => {
	switch (node.tagName) {
		case 'H1':
			Headings.push({ heading: 1, text: node.innerHTML });
			break;
		case 'H2':
			Headings.push({ heading: 2, text: node.innerHTML });
			break;
		case 'H3':
			Headings.push({ heading: 3, text: node.innerHTML });
			break;
		case 'H4':
			Headings.push({ heading: 4, text: node.innerHTML });
			break;
		case 'H5':
			Headings.push({ heading: 5, text: node.innerHTML });
			break;
		case 'H6':
			Headings.push({ heading: 6, text: node.innerHTML });
			break;
		default:
			break;
	}
};
const addHeadingId = (node: Element, index: number) => {
	node.id = `heading-${index}`;
};
const Content = ({
	active,
	headings,
}: {
	active: number;
	headings: Heading[];
}) => {
	const container = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (container.current) {
			container.current.scrollTo(0, 20 * active - 20);
			console.log(container.current.scrollTop);
		}
	}, [active]);
	return (
		<div
			ref={container}
			className={style.content}
			style={{
				position: 'fixed',
				top: '0',
				backgroundColor: 'black',
			}}
		>
			{headings.map((item, index) => {
				return (
					<a
						href={`#heading-${index}`}
						key={headings[index].text + headings[index].heading}
						style={{ color: index == active ? 'red' : 'white' }}
					>
						{item.text}
					</a>
				);
			})}
		</div>
	);
};
const Test = () => {
	const [active, setActive] = useState(0);
	const interSet = new Set<number>();
	const callback: IntersectionObserverCallback = useCallback(
		(entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && entry.intersectionRatio == 1) {
					interSet.add(+entry.target.id.split('-')[1]);
					console.log('push', interSet);
					if (interSet.size > 0) setActive(Math.min(...interSet));
				}
				if (!entry.isIntersecting) {
					interSet.delete(+entry.target.id.split('-')[1]);
					console.log(interSet);
					if (interSet.size > 0) setActive(Math.min(...interSet));
				}
			});
		},
		[]
	);
	const [headings, setHeadings] = useState<Heading[]>([]);
	useEffect(() => {
		const doms = document.querySelector('article');
		let options = {
			rootMargin: '0px',
			threshold: 1.0,
		};
		let observer = new IntersectionObserver(callback, options);
		Headings.splice(0, Headings.length);
		if (!doms) return;
		let index = 0;
		Array.from(doms.children).forEach((item) => {
			HeadingCollection(item);
			if (item.tagName.startsWith('H')) {
				observer.observe(item);
				addHeadingId(item, index);
				index++;
			}
		});
		setHeadings(Headings);
		console.log(Headings);
		return () => observer.disconnect();
	}, [callback]);
	return (
		<article>
			<Content active={active} headings={headings} />

			<h2>类的设计:</h2>
			<p>三个大的主类: 读者类,图书类,管理员类</p>
			<ol>
				<li>
					<p>读者类</p>
					<ul>
						<li>注册 登录 忘记密码 修改密码流程</li>
						<li>对个人信息如电话号码 用户名等的修改</li>
						<li>图书的查找,支持多重查找方式,如按书名 ISBN号 作者查询</li>
						<li>图书的借阅</li>
						<li>图书的归还</li>
						<li>查询借还记录</li>
					</ul>
				</li>
				<li>
					<p>管理员类</p>
					<ul>
						<li>对读者个人信息以及密码的修改</li>
						<li>对图书信息的修改,增加图书和删除图书</li>
					</ul>
				</li>
				<li>
					<p>超级管理员</p>
					<ul>
						<li>分配以及管理管理员账号</li>
					</ul>
				</li>
				<li>
					<p>图书类</p>
					<ul>
						<li>存储图书的各种属性,如书名,作者等</li>
						<li>开放接口以供读者借阅和管理员管理</li>
					</ul>
				</li>
			</ol>
			<h2>功能设计:</h2>
			<ol>
				<li>
					登录界面
					用户和管理员界面不必分开,对用户名做识别,对不同身份返回不同内容即可
				</li>
				<li>使用二进制格式存储数据</li>
				<li>设计一种数据结构能够存储大量数据并且能够快速查找到所需条目</li>
				<li>先设计出命令行界面,功能成熟后再考虑图形化界面</li>
				<li>能够随机生成足够多的数据以供测试</li>
				<li>仅使用最基本的IO库完成该项目</li>
			</ol>
			<p>
				经过分析,我们认为我们团队的编程水平以及算法和数据结构知识能够基本完成本次项目
			</p>
			<h2>概述</h2>
			<p>1.1 设计思想</p>
			<p>(1)该系统的设计分成几个相对独立的模块，这些模块都进行集中式管理。</p>
			<p>
				(2)分层的模块化程序设计思想，整个系统采用模块化结构设计作为应用程序，有较强的可操作性和扩展性。
			</p>
			<p>
				(3)合理的数据设计，在应用系统设计中，相对独立的模块间以数据相互连接，使各模块间的耦合性较低，方便系统运行，提高系统安全性
				。
			</p>
			<p>1.2 设计原则</p>
			<p>
				为了使本系统功能齐全完备，操作简便，最大限度的提高用户的使用的体验，从而满足用户的实际需要，在设计开发过程中遵循了如下原则：
			</p>
			<p>
				(1)合法性原则：规范录入各种图书信息和各种数据，对用户的账号信息进行规范保存。
			</p>
			<p>
				(2)实用性原则：根据用户对图书信息浏览和借阅的基本需求设计各种功能，并能够处理一些特殊情况的要求，此外，尽可能预留空间，以便扩充功能。
			</p>
			<p>
				(3)易操作原则：要求设计的系统功能齐全，界面友好，操作方便，必要的地方进行提示。
			</p>
			<p>
				(4)源程序可读性原则：为了便于其他设计，维护人员读懂代码或以后的代码修改，软件升级维护，即可能做好代码注释工作。
			</p>
			<h2>进度控制</h2>
			<ul>
				<li>使用飞书等办公软件对小组各成员进行分工已经控制各成员进度</li>
				<li>
					定时开展会议对讨论目前的遇到的困难,总结之前的经验,并对进度计划做出适当调整.
				</li>
				<li>制定详尽的进度计划</li>
			</ul>
			<h2>具体进度计划</h2>
			<ol>
				<li>
					对整个项目进行需求分析与可行性研究,确认我们需要做一个什么样的系统,学习相关知识
					1 个周
				</li>
				<li>
					对项目所需的数据结构,所需模块以及类进行设计,确保能够满足需求 1 个周
				</li>
				<li>开始编程实现项目各个部分模块,类以及数据结构 4 个周</li>
				<li>实现可视化 1 个周可选</li>
				<li>对整个软件进行详细的测试 0.5 个周</li>
				<li>对项目做最后的优化,优化用户体验,以及编写用户文档 0.5 个周</li>
			</ol>
			<h2>质量管控</h2>
			<h2>人员分工</h2>
		</article>
	);
};

export default Test;
