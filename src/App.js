import { useState, useEffect, useCallback } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

const countTotal = (num) => {
    console.log('counting...');
    return num + 10;
}

const Slider = (props) => {

    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    useEffect(() => {
        console.log('useEffect');
    }, [])

    const getSomeImages = useCallback(() => {
        console.log('fetching');
        return ['https://trashbox.ru/ifiles/1410973_d35777_dbf124c4-f0d7-4187-9add-986df96406f0.jpeg-orig/live-wallpapers-for-windows-31.jpg', 'https://trashbox.ru/ifiles/1411024_87c3de_snimok_ekrana_20.png-orig/15-zhivyh-oboev-dlya-pk-kotorye-nelzya-stavit-na-rabote.-ot-nih-ne-otorvatsya-1.jpg'];
    }, []);

    function changeSlide(i) {
        setSlide(slide => slide + i);
    }

    function toggleAutoplay() {
        setAutoplay(!autoplay);
    }

    const total = countTotal(slide);

    //= render 
    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <Slide getSomeImages={getSomeImages}/>
                <div className="text-center mt-5">Active slide {slide} <br/>{autoplay ? 'auto' : null}</div>
                <div className="text-center mt-5">Total slides {total}</div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button> 
                    <button 
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}

const Slide = ({getSomeImages}) => {
    const [images,setImages] = useState([]);

    useEffect(() => {
        setImages(getSomeImages());
    }, [getSomeImages]);

    return (
        <>
        {images.map((url, i) => <img className="d-block w-100" src={url} alt="slide" key={i}/>)}
        </>
    )
}


function App() {
    const [slider, setSlider] = useState(true);

  return (
    <>
        <button onClick={() => setSlider(!slider)}>Click</button>
        {slider ? <Slider/> : null}
    </>
  );
}

export default App;
