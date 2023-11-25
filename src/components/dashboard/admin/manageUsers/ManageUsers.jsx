import useGetAllusers from "../../../../hooks/useGetAllusers"


const ManageUsers = () => {
    const { allUsers, isLoading } = useGetAllusers()
    console.log(allUsers)
    if (isLoading) {
        return <h1>Loading....</h1>
    }
    return (
        <div>
            {allUsers.length}
        </div>
    )
}

export default ManageUsers