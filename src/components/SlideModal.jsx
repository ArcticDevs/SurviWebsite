import { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Modal.css'
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md'

const SlideModal = ({ imageList, show, close }) => {


    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handlePrevClick = () => {
        if (index > 0)
            setIndex(index - 1);
        else
            return
    }
    const handleNextClick = () => {
        if (index < imageList.length - 1)
            setIndex(index + 1);
        else
            return
    }

    useEffect(() => {
        if (!show) {
            close()
        }
    }, [show])


    return (
        <Modal show={show} onHide={close} className="modal" centered dialogClassName="modal-50w">
            <button className='close_btn' onClick={close}>x</button>
            <div className='modal_content___box'>
                {index !== 0 && <button className='prev_btn' onClick={handlePrevClick}><MdArrowBackIos /></button>}
                <Carousel fade activeIndex={index} onSelect={handleSelect} className="carousel_cont" controls={false} indicators={false} interval={null}>
                    {imageList.map((val, index) =>
                        <Carousel.Item key={index} className="carousel_item">
                            <img
                                className="d-block w-100"
                                src={val}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    )}
                </Carousel>
                {index !== imageList.length - 1 && <button className='next_btn' onClick={handleNextClick}><MdArrowForwardIos /></button>}
            </div>
            <div className='carousel_grid'>
                {imageList.map((val, key) =>
                    <img src={val} alt="carousel_image" className={index === key ? "active" : undefined} key={key} onClick={() => setIndex(key)} />
                )}
            </div>
        </Modal>
    )
}

export default SlideModal