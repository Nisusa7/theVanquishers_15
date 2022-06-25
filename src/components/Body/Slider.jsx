import Carousel from "react-multi-carousel";
import pottery from "../Header/images/pottery.jpg"
import fabric from "../Header/images/fabric.jpg"
import murti from "../Header/images/murti.jpg"
import { styled } from "@mui/material";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Image = styled('img')({
    width: '100%',
    height: '65%'
})

const CarouselComponent = styled(Carousel)`
    margin-top:100px;
`

const Slider = () => {
    return (
        <CarouselComponent responsive={responsive}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}>

            <Image src={pottery} alt="" />
            <Image src={murti} alt="" />
            <Image src={fabric} alt="" />
        </CarouselComponent>
    )
}
export default Slider;