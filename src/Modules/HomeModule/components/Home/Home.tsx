import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay,EffectFade ,EffectCube} from "swiper/modules";
import slide1 from "../../../../assets/images/img-1-C4nS0eD8.jpg";
import slide2 from "../../../../assets/images/img-6-DFW03AZ3.jpg";
import slide3 from "../../../../assets/images/img-4-tHccITd-.jpg";
import "swiper/css/bundle";

const Home: React.FC = (): JSX.Element => {
    return (
      <>
        Home

         <div className="swiper">
       <Swiper
      className="mySwiper"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay,EffectCube]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        effect="cube"
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000}}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img style={{ height: "500px", width: "100%" }} src={slide1} />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ height: "500px", width: "100%" }} src={slide2} />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ height: "500px", width: "100%" }} src={slide3} />
        </SwiperSlide>
      </Swiper>
    </div> 
        
      </>
    );
  };
  
  export default Home;
  