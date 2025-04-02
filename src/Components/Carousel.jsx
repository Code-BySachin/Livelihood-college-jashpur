import { useRef} from "react";
import leftArrow from '../assets/Icons/left-arrow.png'
import rightArrow from '../assets/Icons/right-arrow.png'
function Carousel() {
    const images = [
        "https://ascentgroupindia.com/wp-content/uploads/2021/08/25-Government-Schemes-that-are-Transforming-the-Lives-of-Rural-India.jpeg",
        "https://ascentgroupindia.com/wp-content/uploads/2021/08/25-Government-Schemes-that-are-Transforming-the-Lives-of-Rural-India.jpeg",
        "https://ascentgroupindia.com/wp-content/uploads/2021/08/25-Government-Schemes-that-are-Transforming-the-Lives-of-Rural-India.jpeg",
        "https://ascentgroupindia.com/wp-content/uploads/2021/08/25-Government-Schemes-that-are-Transforming-the-Lives-of-Rural-India.jpeg",
        "https://ascentgroupindia.com/wp-content/uploads/2021/08/25-Government-Schemes-that-are-Transforming-the-Lives-of-Rural-India.jpeg",
        "https://ascentgroupindia.com/wp-content/uploads/2021/08/25-Government-Schemes-that-are-Transforming-the-Lives-of-Rural-India.jpeg",
        "https://ascentgroupindia.com/wp-content/uploads/2021/08/25-Government-Schemes-that-are-Transforming-the-Lives-of-Rural-India.jpeg"
    ]
    const imageRef = useRef([]);
    const index = useRef(0);
    console.log(imageRef);
    const handlePrev = () => {
        index.current -= 1;
        if (index.current >= 0) {
            imageRef.current[index.current].scrollIntoView({ behavior: 'smooth' });
            console.log("Prev");
        }else{
            index.current = 0;
        }
    }
    const handleNext = () => {
        index.current +=1
        if(index.current<imageRef.current.length){
            imageRef.current[index.current].scrollIntoView({ behavior: 'smooth' });
            console.log("Next");
        }else{
            index.current = imageRef.current.length -1;
        }


    }

    return (
        <div>
            <div className="flex overflow-scroll h-150" style={{ scrollbarWidth: "none" }}>{
                images.map((image, index) => <img className="w-1/0 " key={index} src={image} alt="poster" ref={(e) => imageRef.current[index] = e} />)
            }
            </div>
            <div className="flex justify-between h-1">
            {/* <div className="flex justify-between" style={{display:'none'}}> */}
                <button className="relative bottom-80 cursor-pointer w-20 blur-xs" onClick={handlePrev}><img src={leftArrow} alt="<==" /></button>
                <button className="relative bottom-80 cursor-pointer w-20 blur-xs" onClick={handleNext}><img src={rightArrow} alt="==>" /></button>
            </div>
        </div>
    )
}
export default Carousel;