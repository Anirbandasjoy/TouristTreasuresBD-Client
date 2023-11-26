import { Link, useParams } from "react-router-dom"
import useGetSingleUser from "../../../hooks/useGetSingleUser";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
const GuideDetails = () => {
    const { id } = useParams();
    const { singleUser } = useGetSingleUser(id)
    console.log(singleUser)
    return (
        <div className="flex justify-center  items-center h-[calc(100vh-300px)]">
            <div>
                <div className="">
                    <div className="space-y-4">
                        <img className="w-28 h-28 rounded-full mx-auto" src={singleUser?.image} alt="user" />
                        <div className="flex gap-5  justify-center">
                            <Link to={singleUser?.contactInfo?.facebook}><FaFacebook size={25} className="text-blue-400 cursor-pointer" /></Link>
                            <Link to={singleUser?.contactInfo?.instagram}>

                                <BsInstagram size={25} className="text-[#684ac0] cursor-pointer" />
                            </Link>
                            <Link to={singleUser?.contactInfo?.linkedin}>
                                <FaLinkedin size={25} className="text-blue-400 cursor-pointer" />
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="mt-10 p-5 bg-slate-100 shadow-sm">
                    <h1><strong>UserId</strong> : {singleUser?._id}</h1>
                    <h1><strong>Name</strong> : {singleUser?.name}</h1>
                    <h1><strong>Email</strong> : {singleUser?.email}</h1>
                    <h1><strong>Role</strong> : {singleUser?.role}</h1>
                </div>
            </div>
        </div>
    )
}

export default GuideDetails