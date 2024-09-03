
import { UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "./ui/button";

const Header = () => {

    const {isSignedIn} = useUser();

    return (
        <div className="flex justify-between lg:px-14 md:px-8 p-5 items-center shadow-sm">
            {/* Logo */}
            <div>
                <img src='./logoName.svg' alt='Company Logo' width={150} height={150} />
            </div>

            {/* List Items */}
            <div>
                <ul className="hidden md:flex gap-12">
                    <li className="nav-link">Home</li>
                    <li className="nav-link">Search</li>
                    <li className="nav-link">Latest</li>
                    <li className="nav-link">About</li>
                </ul>
            </div>

            {/* Profile & Sign In */}
            {isSignedIn ? (
                <div className="flex items-center gap-4">
                    <UserButton />
                    <Button className="submit-listing">Submit Listing</Button>
                </div>
            ) : (
                <div>
                    <Button className="submit-listing">Submit Listing</Button>
                </div>
            ) }
        </div>
    );
}

export default Header;