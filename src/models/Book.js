class Book {

    constructor(        
        title,
        price,
        sellingPrice,
        category,
        inStock,
        description,
        dimensions,
        numberOfPages,
        bookType,
        sold,
        author,
        year,
        weight,
        condition,
        publisher,
        stocksLeft,
        deliveryTime,
        countryOfOrigin,
        language,
        coverImage,
        images,
        status,
        createdAt,
        updatedAt,
        id,
        profile,
        reviewCount,
        fiveStar,
        fourStar,
        threeStar,
        twoStar,
        oneStar,
        reviews = [],
        peopleBought = [],
    ) {
        this.id = id
        this.title = title
        this.price = price
        this.sellingPrice = sellingPrice
        this.category = category
        this.inStock = inStock
        this.description = description
        this.dimensions = dimensions
        this.numberOfPages = numberOfPages
        this.bookType = bookType
        this.sold = sold
        this.author = author
        this.year = year
        this.weight = weight
        this.condition = condition
        this.publisher = publisher
        this.stocksLeft = stocksLeft
        this.deliveryTime = deliveryTime
        this.countryOfOrigin = countryOfOrigin
        this.reviewCount = reviewCount
        this.language = language
        this.coverImage = coverImage
        this.images = images
        this.status = status
        this.createdAt = createdAt
        this.updatedAt = updatedAt
        this.profile = profile
        this.fiveStar = fiveStar
        this.fourStar = fourStar
        this.threeStar = threeStar
        this.twoStar = twoStar
        this.oneStar = oneStar
        this.reviews = reviews
        this.peopleBought = peopleBought
        this.averageRating = this.getAverageRating()
        this.averageRatingRound = this.getAverageRatingRound()

        //console.log(this.getAverageRatingRound(), this.getAverageRating(), 'FROM BOOK MODEL', this.averageRating, this.averageRatingRound, this)
    }

    getAverageRating(){
        const totalRating = ((this.oneStar * 1) + (this.twoStar * 2) + (this.threeStar * 3) 
            + (this.fourStar * 4) + (this.fiveStar * 5))         
        return this.reviewCount === 0 ? 0 : (totalRating / this.reviewCount).toFixed(1)
    }

    getAverageRatingRound(){
        const averageRating = Number(this.getAverageRating())
        if(averageRating % 1 >= 5){
            return Math.trunc(averageRating) + 0.5
        } else if(averageRating % 1 < 5){
            return Math.trunc(averageRating)
        }
    }

}

export default Book