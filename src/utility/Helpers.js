import moment from "moment"

export const formatTime = (deliveryTime) => {
    return moment(new Date()).add(deliveryTime,'d').format("Do MMM YYYY")
}