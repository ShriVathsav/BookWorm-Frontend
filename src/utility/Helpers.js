import moment from "moment"

export const formatTime = (deliveryTime) => {
    console.log(deliveryTime)
    return moment(new Date()).add(deliveryTime,'d').format("Do MMM YYYY")
}