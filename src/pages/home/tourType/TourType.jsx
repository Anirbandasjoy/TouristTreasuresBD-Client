import { useState } from "react"
import { toureTypeData } from "./toureTypeData"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";
const TourType = () => {
    const [data, setData] = useState(toureTypeData)
    console.log(data)
    console.log(setData)
    return (
        <div className="max-w-5xl my-14 mt-40 mx-auto">
            <Swiper
                slidesPerView={1}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    769: {
                        slidesPerView: 4,
                        slidesPerGroup: 1,
                    },
                }}
                scrollbar={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper"
            >

                {data?.map((type) => (
                    <SwiperSlide key={type?.email}>
                        <div className="h-[14rem] text-center">
                            <Link to={`/tourType-data/${type?.value}`} className="text-9xl">{type?.icon}</Link>
                            <h1 className="text-sm mt-6 font-medium">{type?.name}</h1>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

        </div>
    )
}

export default TourType