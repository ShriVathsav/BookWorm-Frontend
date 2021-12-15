
class CartItem {

    constructor(
        book,
        quantity = 1,
        totalAmount
    ) {
        this.book = book
        this.quantity = quantity
        this.totalAmount = totalAmount
    }

    computeTotalAmount() {
        this.totalAmount = this.quantity * this.book.sellingPrice
    }

}

export default CartItem