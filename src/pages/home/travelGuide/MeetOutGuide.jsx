import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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


const MeetOutGuide = () => {

    const { data, isLoading } = useQuery({
        queryKey: ["Guides"],
        queryFn: async () => {
            const response = await axios.get("./guide.json");
            return response.data;
        },
    });
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    console.log(data)
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


                {
                    data.map((guide) => {
                        return <div key={guide.id} className="p-2 relative">
                            <SwiperSlide>
                                <div className="h-[18rem]">
                                    <img className="h-full w-full" src={guide?.profilePhoto} />
                                </div>
                                <div className="pt-4 pb-7">
                                    <button className="py-2 px-4 z-[10] bg-blue-400 text-white font-bold text-sm"><Link>See Details</Link></button>
                                </div>
                            </SwiperSlide>
                        </div>
                    })
                }

            </Swiper>

        </div>
    )
}

export default MeetOutGuide