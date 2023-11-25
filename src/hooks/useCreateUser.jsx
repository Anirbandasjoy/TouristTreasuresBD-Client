import useAxios from "./useAxios"

const useCreateUser = (user) => {
    const { axiosSecure } = useAxios()
    const userInfo = {
        name: user?.displayName,
        image: user?.photoURL,
        email: user?.email,
        role: "Tourist"
    }

    const { data } = axiosSecure.put(`/user/${user?.email}`, userInfo)
    return data
}



export default useCreateUser