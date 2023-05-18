import {
	mobile,
	backend,
	web,
	javascript,
	androidlogo,
	html,
	css,
	reactjs,
	java,
	tailwind,
	nodejs,
	mongodb,
	git,
	python,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
	logo,
	justchat,
} from "../assets"

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
]

const services = [
	{
		title: "Frontend Developer",
		icon: web,
	},
	{
		title: "Coding Enthusiast",
		icon: mobile,
	},
]

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "java",
		icon: java,
	},
]

const experiences = [
	{
		title: "Box-Office Application",
		type: "Web",
		icon: web,
		iconBg: "#383E56",
		date: "Dec 22 - Ongoing",
		points: [
			"Cloned the IMDB website in which you can get information about your favourite movies including the release date, ratingand genre. You can also see the top rated movies of current scenario",
			"Technology: HTML/CSS, JavaScript, MySQL, Python Django",
			" Team Project: 4 members",
			"Role: Backend Development",
		],
	},
	{
		title: "Box-Office Application",
		type: "Web",
		icon: web,
		iconBg: "#383E56",
		date: "Dec 22 - Ongoing",
		points: [
			"Cloned the IMDB website in which you can get information about your favourite movies including the release date, ratingand genre. You can also see the top rated movies of current scenario",
			"Technology: HTML/CSS, JavaScript, MySQL, Python Django",
			" Team Project: 4 members",
			"Role: Backend Development",
		],
	},
	{
		title: "Just Chat",
		type: "Android",
		icon: mobile,
		iconBg: "#E6DEDD",
		date: "Feb 2023 - Mar 2023",
		points: [
			" It’s a chatting application with real time messaging service, with secure login and cloud storage integration.",
			"Technology: Java, Firebase",
			"Solo Project",
		],
	},
]

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
	{
		name: "Box-Office Application ",
		description:
			"Cloned the IMDB website in which you can get information about your favourite movies including the release date, rating and genre.",
		tags: [
			{
				name: "HTML5",
				color: "blue-text-gradient",
			},
			{
				name: "CSS3",
				color: "green-text-gradient",
			},
			{
				name: "ReactJS",
				color: "pink-text-gradient",
			},
			{
				name: "RestAPI",
				color: "orange-text-gradient",
			},
		],
		source_code_link: "https://github.com/Krish-Sinha/Box-Office-Application",
	},

	{
		name: "Maze Generation Game",
		description:
			"A game in which the user can input the rows and columns and a maze game will be generated for the user to play and solve.",
		tags: [
			{
				name: "HTML5",
				color: "blue-text-gradient",
			},
			{
				name: "CSS3",
				color: "green-text-gradient",
			},
			{
				name: "JavaScript",
				color: "pink-text-gradient",
			},
		],
		image: justchat,
		source_code_link: "https://github.com/Krish-Sinha/Maze-Generation-Game",
	},
	{
		name: "Tesla Clone",
		description:
			"Building a clone of Tesla Inc (Tesla) which is an automotive and energy company that designs, develops, manufactures. ",
		tags: [
			{
				name: "HTML5",
				color: "blue-text-gradient",
			},
			{
				name: "CSS3",
				color: "green-text-gradient",
			},
			{
				name: "ReactJS",
				color: "pink-text-gradient",
			},
		],
		image: tesla,
		source_code_link: "https://github.com/Krish-Sinha/tesla-clone",
	},
]

export { services, technologies, experiences, projects }
