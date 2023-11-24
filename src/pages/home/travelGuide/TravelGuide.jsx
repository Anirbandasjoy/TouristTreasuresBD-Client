import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import { Overview } from "./Overview"
import TripPackages from "./TripPackages"
const TravelGuide = () => {
    return (
        <div className="my-20 max-w-4xl mx-auto ">
            <Tabs className="mx-auto text-center">
                <TabList className="flex  justify-center lg:gap-5 gap-1
                ">
                    <Tab className="ml-2 py-2.5 text-xs px-5 me-2 mb-2  font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer">Overview</Tab>
                    <Tab className="py-2.5 px-5 text-xs me-2 mb-2  font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer">Our Packages</Tab>
                    <Tab className="py-2.5 px-5 text-xs me-2 mb-2 font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer">Meet Our Tour Guides</Tab>
                </TabList>

                <div className="mt-10">
                    <TabPanel>
                        <Overview />
                    </TabPanel>
                    <TabPanel>
                        <TripPackages />
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