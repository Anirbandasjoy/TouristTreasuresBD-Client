import { Helmet } from "react-helmet"
import Banner from "../banner/Banner"
import Story from "../story/Story"
import TourType from "../tourType/TourType"
import TravelGuide from "../travelGuide/TravelGuide"

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | TouristTreasuresBD</title>
            </Helmet>
            <Banner />
            <TravelGuide />
            <TourType />
            <Story />
        </div>
    )
}

export default Home