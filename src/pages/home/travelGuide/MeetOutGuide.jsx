// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";
import useGetRoleUser from '../../../hooks/useGetRoleUser';
const MeetOutGuide = () => {
    const { data, isLoading } = useGetRoleUser("Guide")

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
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
                        slidesPerGroup: 2,
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

                {data?.map((guide) => (
                    <SwiperSlide key={guide?.email}>
                        <div className="h-[18rem]">
                            <img className="h-full w-full" src={guide?.image} alt={guide?.email} />
                        </div>
                        <div className="pt-6 pb-4">
                            <Link to={`guide-details/${guide._id}`} className="py-2 px-4 z-[10] bg-blue-400 text-white font-bold text-xs">
                                See Details
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

        </div>
    )
}

export default MeetOutGuide