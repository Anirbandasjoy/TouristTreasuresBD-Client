import { useContext } from "react"
import { AuthContext } from "../../../context/AuthProvider"
import useGetRole from "../../../hooks/useGetRole"
const Profile = () => {
    const { user, loading } = useContext(AuthContext)
    const { role } = useGetRole(user, loading)

    if (loading) {
        return <h1>Loading.....</h1>
    }

    return (
        <div className="flex justify-center  items-center h-[calc(100vh-200px)]">
            <div>
                <div className="">
                    <div className="space-y-4">
                        <img className="w-28 h-28 rounded-full mx-auto" src={user?.photoURL} alt="user" />
                        <h2 className="text-xl text-center lg:text-3xl">Welcome, {user?.displayName}</h2>
                    </div>
                </div>
                <div className="mt-10 p-5 bg-slate-100 shadow-sm">
                    <h1><strong>UserId</strong> : {user?.uid}</h1>
                    <h1><strong>Name</strong> : {user?.displayName}</h1>
                    <h1><strong>Email</strong> : {user?.email}</h1>
                    <h1><strong>Role</strong> : {role}</h1>
                </div>
            </div>
        </div>
    )
}

export default Profile