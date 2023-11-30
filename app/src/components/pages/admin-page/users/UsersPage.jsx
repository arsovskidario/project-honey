import { useEffect, useState } from "react"
import { getUserDetails } from "../../../../services/authService";
import UserItem from "./UserItem";

export function UsersPage() {
    const [userDetails, setUserDetails] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUserDetails();
                setUserDetails(data);
            } catch (error) {
                console.log('Failed to fetch users' + error);
            }
        }

        fetchData();
    }, [])

    return <main className="flex flex-col items-center justify-center">
        <h1 className="mt-10 text-2xl">Users</h1>
        <div className="flex flex-col items-center justify-around mt-10 w-5/6 bg-productWhite">
            {userDetails.map(user =>
                <UserItem key={user._id} {...user}/>
            )}
        </div>
    </main>
}