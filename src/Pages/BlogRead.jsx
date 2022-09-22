import { useEffect, useState } from "react";
import "../styles/BlogRead.css";
import "../styles/Blog.css";
import { BsCalendarPlus, BsClockHistory } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import blog_1 from "../assets/Blog/blog_1.jpg"
import blog_2 from "../assets/Blog/blog_2.jpg"
import blog_3 from "../assets/Blog/blog_3.jpg"
import blog_4 from "../assets/Blog/blog_4.jpg"
import AnimatedHeader from "../components/AnimatedHeader";

const blogsData = [
    {
        id: 1,
        title: "Survi Pristine",
        body: "Our object in the construction of the state is the greatest happiness of the whole, and not that of any one class.",
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
]

const BlogRead = () => {

    const [post, setPost] = useState({});

    let location = useLocation();
    useEffect(() => {
        if (location.state) {
            console.log(location.state)
            let postData = location.state.post;
            setPost(postData)
        }
    }, [location.state])

    if (!post)
        return

    return (
        <div className="container-fluid blog-read">
            <div className="blog_section_1">
                <AnimatedHeader />
                <h1 className='text-center section_head'>{post.title}</h1>
                <div className="underline mt-4">
                    <div className="underline-middleline"></div>
                    <div className="underline-leftcircle"></div>
                    <div className="underline-rightcircle"></div>
                </div>
            </div>
            <div className="blog_read___section_3">
                <div className="blog_calendar_grid">
                    <div className="blog_calendar_head">
                        <BsCalendarPlus className="calendar_icon" />
                        <h2>JAN 25, 2020</h2>
                        <p>CREATION DATE</p>
                    </div>
                    <div className="blog_calendar_head">
                        <BsClockHistory className="calendar_icon" />
                        <h2>3:45 MIN</h2>
                        <p>Reading Time</p>
                    </div>
                </div>
                <img src={post.image} alt="" className="blog_calendar_image" />
            </div>
            <div className="blog_read___section_4">
                <h2>{post.title}</h2>
                <p>I was selling stuff probably since I could remember, like 6 or 7 years old. I was always out there helping my mom and dad sell watches, glasses, CDs, DVDs, stuff like that. Whatever we could put our hands on. I did it until I was around 17. But I was just doing it because I had to. There was no other option. Blow the dust off the clock. Your watches are behind the times. Throw open the heavy curtains which are so dear to you - you do not even suspect that the day has already dawned outside.</p>
                <h3>NEW DIGITAL PERFORMANCE</h3>
                <p>I have a large watch collection, and classic watches are especially important to me. I had a silver Rolex, and I actually gave it to my little brother. He wears it every day. He's an actor, so whenever he goes to an audition, he can look down, see it, and it gives him confidence. It was a great thing to pass on.</p>
                <img src={post.postImages ? post.postImages[1] : undefined} className="post_image" alt="" />
                <p>When we are fearful and worried all the time, we are living as if we don't believe that we have a strong and able Shepherd who is tenderhearted toward us, who only leads us to good places, who protects us and lovingly watches over us.</p>
                <h3>SIMPLE & EFFICIENT</h3>
                <p>
                    Lobortis fames justo placerat habitant pharetra duis purus aliquet ridiculus. Per a viverra. Mus malesuada interdum adipiscing. Duis lobortis eros libero gravida. Mus tempor massa in. Vestibulum morbi rhoncus lectus inceptos quisque, magnis posuere dis, sagittis dictum. Pulvinar convallis, vestibulum platea tellus nibh elit eget justo, lacus torquent dolor mattis purus blandit justo cursus quam eros ad auctor facilisi nisl elit Et Enim. Suscipit in nunc sollicitudin potenti sit nascetur interdum. Penatibus sodales lorem posuere class blandit rhoncus magnis nullam.
                </p>
                <p>
                    Pretium Faucibus quisque felis magna neque, mattis risus tortor Class egestas varius. Facilisis luctus magnis sollicitudin mollis blandit scelerisque condimentum non eget Nostra posuere. Blandit varius neque scelerisque lobortis sapien. Pharetra magnis blandit massa fermentum blandit urna class augue. Mauris ornare molestie parturient rutrum dis non hymenaeos ligula luctus. Pretium nam sociosqu pellentesque cras inceptos. Natoque magnis. Fusce litora ut ridiculus aptent eleifend risus platea varius. Tempor nulla turpis dapibus blandit, magna risus malesuada. Bibendum ultricies purus nostra maecenas auctor aliquam aliquam tellus, aenean. Habitant vestibulum taciti vestibulum posuere lectus turpis lorem lacus, ad egestas leo convallis eleifend dictum vehicula, a pretium magna adipiscing enim orci erat. Ac etiam vestibulum nisi vel molestie a pretium.
                </p>
                <img src={post.postImages ? post.postImages[2] : undefined} className="post_image" alt="" />
                <h5 className="blog_badge_card">
                    Mathematics as an expression of the human mind reflects the active will, the contemplative reason, and the desire for aesthetic perfection. Its basic elements are logic and intuition, analysis and construction, generality and individuality.
                </h5>
                <p>I think that just because the show is titled 'Awkward Black Girl' and it is a predominantly black cast doesn't mean that you shouldn't be able to relate to these people. We're all human beings. We all essentially go through the same things when it comes down to it, so I don't I think that should limit who watches it.</p>
                <h6>Template Features</h6>
                <ul className="feature_list">
                    <li>
                        Beautifully Designed
                    </li>
                    <li>
                        Fully Responsive
                    </li>
                    <li>
                        CMS Content
                    </li>
                    <li>
                        Smooth Interactions
                    </li>
                </ul>
                <p>I think that just because the show is titled 'Awkward Black Girl' and it is a predominantly black cast doesn't mean that you shouldn't be able to relate to these people. We're all human beings. We all essentially go through the same things when it comes down to it, so I don't I think that should limit who watches it.</p>
                <h3>
                    PERFECT BULDING FOR CREATIVE PEOPLE
                </h3>
                <p>
                    Now we live in this DVD, iTunes, Hulu age, and show creators and networks are realizing that and letting shows develop on those terms rather than 'We gotta just punch it week to week, man.' Now they're like, 'What will happen if someone watches the entire show?'
                </p>
                <p>
                    Sapien lacus viverra neque eu dapibus dictum lacinia montes lobortis nonummy vestibulum. Curae; hymenaeos lacus penatibus. Natoque malesuada erat, consequat. Porttitor cubilia quam orci sollicitudin ante penatibus nullam, faucibus conubia sagittis lobortis accumsan eleifend lectus nunc. Congue ipsum morbi. Taciti. Vestibulum vitae sodales placerat dui. Sociosqu sodales lacinia. Imperdiet, malesuada sed eget lorem augue, blandit fames nonummy mauris libero tristique in nisl ante. Sapien. Lorem neque egestas auctor ut. Augue ligula magna est fames risus. Aliquet ut nostra in tempor sapien per pretium sem, nonummy consectetuer velit sagittis facilisis scelerisque erat. Lacinia aliquet risus dolor est vestibulum. Lorem gravida nibh eros aptent nec arcu penatibus nunc senectus justo diam id diam primis duis fringilla tempor per pharetra euismod netus porta habitant in semper venenatis. Dis a dis ornare sociis blandit velit dictum dictum ligula ridiculus suscipit sem. Leo tempus laoreet metus gravida ultrices etiam. A tincidunt accumsan hymenaeos malesuada imperdiet ultrices odio aptent viverra quam Etiam vestibulum proin vel elit pede metus class tortor cras facilisis cursus feugiat, est ipsum potenti, ultrices lorem curae; volutpat euismod ac donec consectetuer.
                </p>
            </div>
            <div className="blog_read___section_5">
                <h1 className='text-center section_head'>Related Post</h1>
                <div className="underline mt-4">
                    <div className="underline-middleline"></div>
                    <div className="underline-leftcircle"></div>
                    <div className="underline-rightcircle"></div>
                </div>
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
    );
};

export default BlogRead;
