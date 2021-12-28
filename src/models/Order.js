
class Order {

    constructor(        
        deliveryDate,
        seller,
        buyer,
        book,
        quantity,
        amount,
        buyerName,
        buyerEmail,
        phone,
        address1,
        address2,
        pincode,
        createdAt,
        updatedAt,
        status = "IN PROGRESS",
        id,
    ) {
        this.delivery_date = deliveryDate
        this.seller = seller
        this.buyer = buyer
        this.book = book
        this.quantity = quantity
        this.buyerName = buyerName
        this.buyerEmail = buyerEmail
        this.amount = amount
        this.phone = phone
        this.address1 = address1
        this.address2 = address2
        this.pincode = pincode
        this.createdAt = createdAt
        this.updatedAt = updatedAt
        this.status = status
        this.id = id
    }

}

export default Order