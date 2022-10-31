import "../styles/pages/Blog.css";
import AnimatedHeader from "../components/AnimatedHeader";

import blog_1 from "../assets/Blog/blog_1.jpg"
import blog_2 from "../assets/Blog/blog_2.jpg"
import blog_3 from "../assets/Blog/blog_3.jpg"
import blog_4 from "../assets/Blog/blog_4.jpg"
import blog_5 from "../assets/Blog/blog_5.jpg"

import { Link } from "react-router-dom";

const blogsData = [
	{
		id: 1,
		title: "How to find the right real estate developer for you?",
		body: "One of the most important financial decisions that every person must make at some point in their lives is purchasing a property.",
		image: blog_1,
		postImages: [blog_1, blog_2, blog_3],
	},
	{
		id: 2,
		title: "Survi Pristine",
		body: "Our object in the construction of the state is the greatest happiness of the whole, and not that of any one class.",
		image: blog_2,
		postImages: [blog_2, blog_3, blog_4],
	},
	{
		id: 3,
		title: "Survi Pristine",
		body: "Our object in the construction of the state is the greatest happiness of the whole, and not that of any one class.",
		image: blog_3,
		postImages: [blog_3, blog_4, blog_5],
	},
	{
		id: 4,
		title: "Survi Pristine",
		body: "Our object in the construction of the state is the greatest happiness of the whole, and not that of any one class.",
		image: blog_4,
		postImages: [blog_4, blog_5, blog_1],
	},
	{
		id: 5,
		title: "Survi Pristine",
		body: "Our object in the construction of the state is the greatest happiness of the whole, and not that of any one class.",
		image: blog_5,
		postImages: [blog_5, blog_1, blog_2],
	},
]

const App = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="blog_section_1">
					<AnimatedHeader />
					<h1 className='text-center section_head'>Blog</h1>
					<div className="underline mt-4">
						<div className="underline-middleline"></div>
						<div className="underline-leftcircle"></div>
						<div className="underline-rightcircle"></div>
					</div>
				</div>
				<div className="blog_section_2">
					<div className="blog-grid">
						{blogsData.map((val, index) => (
							<Link to={`/post/${val.id}`} state={{ post: val, id: val.id }} className="card blog-card hover-card" key={index}>
								<img src={val.image} className="card-img-top " alt="Work_Image" />
								<div className="card-body">
									<h3 className="card-title">{val.title}</h3>
									<p className="card-text">{val.body}</p>
									<h6>Read More</h6>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
