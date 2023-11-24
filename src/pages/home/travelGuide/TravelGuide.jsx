import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import { Overview } from "./Overview"

const TravelGuide = () => {
    return (
        <div className="my-20 max-w-4xl mx-auto ">
            <Tabs className="mx-auto text-center">
                <TabList className="flex  justify-center gap-5
                ">

                    <Tab className=" ml-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer">Overview</Tab>
                    <Tab className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer">Our Packages</Tab>
                    <Tab className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer">Meet Our Tour Guides</Tab>
                </TabList>

                <div className="mt-10">
                    <TabPanel>

                        <Overview />
                    </TabPanel>
                    <TabPanel>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente atque quo voluptatibus est itaque quas praesentium esse odit repudiandae hic architecto provident repellat tenetur, consequuntur blanditiis? Doloribus provident esse nisi suscipit eos reprehenderit sint explicabo expedita a dolorem, eum repellat enim aspernatur mollitia cupiditate voluptatem dolore? Sint ab in quia reprehenderit perferendis, quod eaque incidunt excepturi repellendus provident, nulla placeat libero. Commodi amet iusto saepe aliquam fuga blanditiis aperiam laboriosam eligendi. Laboriosam consequatur, id quia reiciendis perferendis dolorum laborum iure ducimus pariatur sit quisquam molestias illum velit dignissimos, quibusdam, aspernatur voluptates inventore. Quisquam saepe, a, unde ea voluptate explicabo adipisci deserunt laboriosam voluptatum necessitatibus commodi. Temporibus quod tempore, incidunt voluptatum accusantium laboriosam consequuntur quaerat voluptatibus eveniet voluptatem quae blanditiis expedita in laborum eum modi veniam pariatur? Porro ipsum architecto iure laudantium. Expedita laborum ipsa provident vel eaque magni, voluptatum corrupti velit hic officiis repellendus, ipsum magnam est eos eum sit, sapiente error. Labore laborum mollitia aut sapiente aperiam illum. Error temporibus consectetur praesentium </h2>
                    </TabPanel>
                    <TabPanel>
                        <Overview />
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    )
}

export default TravelGuide