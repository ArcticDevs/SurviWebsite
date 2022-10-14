import { useState } from 'react'
import project_1 from '../assets/home/project_1.jpg'
import project_2 from '../assets/home/project_2.jpg'
import project_3 from '../assets/home/project_3.jpg'
import project_4 from '../assets/home/project_4.jpg'
import project_5 from '../assets/home/project_5.jpg'
import project_6 from '../assets/home/project_6.jpg'
import SlideModal from '../components/SlideModal';
import "../styles/pages/Gallery.css"

const projectData = [
    {
        carouselImage: [project_1, project_2, project_3],
        image: project_1,
        title: "Project 1",
    },
    {
        carouselImage: [project_2, project_3, project_4],
        image: project_2,
        title: "Project 2",
    },
    {
        carouselImage: [project_3, project_4, project_5],
        image: project_3,
        title: "Project 3",
    },
    {
        carouselImage: [project_4, project_5, project_6],
        image: project_4,
        title: "Project 4",
    },
    {
        carouselImage: [project_5, project_6, project_1],
        image: project_5,
        title: "Project 5",
    },
    {
        carouselImage: [project_6, project_1, project_2],
        image: project_6,
        title: "Project 6",
    },
]

const Gallery = () => {

    const [projectImageList, setProjectImageList] = useState([]);
    const [projectTitle, setProjectTitle] = useState("");

    const [showModal, setShowModal] = useState(false);

    const handleProjectClick = (data, title) => {
        setProjectImageList(data);
        setProjectTitle(title)
        setShowModal(true);
    }

    const handleModalClose = () => {
        setProjectImageList([])
        setProjectTitle("")
        setShowModal(false)
    }

    return (
        <>
            <div className='container-fluid'>
                <div className='gallery-head'>
                    <h1 className='text-center section_head'>Projects</h1>
                    <div className="underline mt-4">
                        <div className="underline-middleline"></div>
                        <div className="underline-leftcircle"></div>
                        <div className="underline-rightcircle"></div>
                    </div>
                </div>
                <div className='gallery'>
                    <h1 className='text-center section_head'>Our Projects</h1>
                    <div className="underline mt-4">
                        <div className="underline-middleline"></div>
                        <div className="underline-leftcircle"></div>
                        <div className="underline-rightcircle"></div>
                    </div>
                    <div className='row d-flex justify-content-center'>
                        {projectData.map((val, index) =>
                            <div className='project' key={index} onClick={() => handleProjectClick(val.carouselImage, val.title)}>
                                <img className='project-image' src={val.image} alt="" />
                                <h2 className='project-name-hover'>{val.title}</h2>
                                {/* <div className='project-hover'>
                                    <img src={project_icon} alt="" />
                                    <span className='ms-3'>Quick View</span>
                                </div> */}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <SlideModal imageList={projectImageList} projectTitle={projectTitle} show={showModal} close={handleModalClose} />
        </>
    )
}

export default Gallery