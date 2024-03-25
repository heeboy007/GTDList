import Payment from "../enum/Payment";

type UserProfile = {
    thumbnailURL: string;
    name: string;
    payment: Payment;
    creationDateTime: Date;
};

export default UserProfile;