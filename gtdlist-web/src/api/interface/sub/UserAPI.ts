import UserProfile from "../../recordTypes/UserProfile";

interface UserAPI {
    getEntireUserProfile: Promise<UserProfile>;
};

export default UserAPI;