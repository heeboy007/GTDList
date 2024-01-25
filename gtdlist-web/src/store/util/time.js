import { format } from "date-fns";

function generateNewTimeStamp() {
    return format(new Date(), 'yyyy-MM-dd HH:mm');
}

export { generateNewTimeStamp };