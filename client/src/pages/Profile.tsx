import Header from "@/components/Header";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div>
            <Header />

            <div className="p-14">
                <div className="flex items-center justify-between">
                    <p className="font-bold md:text-3xl text-2xl">My Listing</p>
                    <Link to={'/add-listing'}>
                        <button className="flex items-center gap-2 bg-indigo-600 text-white px-3 py-2 rounded-lg">
                            Add a new Listing
                            <IoMdAdd className="text-white text-xl" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Profile;