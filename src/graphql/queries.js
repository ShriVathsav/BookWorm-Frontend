/* eslint-disable */
// this is an auto generated file. This will be overwritten
//igimirdxdoirfstaby@wqcefp.com

export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      title
      price
      sellingPrice
      category
      inStock
      description
      dimensions
      numberOfPages
      bookType
      sold
      author
      year
      weight
      condition
      publisher
      stocksLeft
      deliveryDate
      countryOfOrigin
      averageRating
      reviewCount
      fiveStar
      fourStar
      threeStar
      twoStar
      oneStar
      language
      status
      profile {
        id
        username
        email
        password
        profileImage
        phone
        address1
        address2
        pincode
        booksPosted {
          nextToken
        }
        orders {
          nextToken
        }
        ordersWaiting {
          nextToken
        }
        cart {
          nextToken
        }
        createdAt
        updatedAt
      }
      reviews {
        items {
          id
          content
          stars
          images
          createdAt
          updatedAt
          profile{
            username
            id
          }
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        price
        sellingPrice
        category
        inStock
        description
        dimensions
        numberOfPages
        bookType
        sold
        author
        year
        weight
        condition
        publisher
        stocksLeft
        deliveryDate
        countryOfOrigin
        averageRating
        reviewCount
        fiveStar
        fourStar
        threeStar
        twoStar
        oneStar
        language
        status
        profile {
          id
          username
          email
          password
          profileImage
          phone
          address1
          address2
          pincode
          createdAt
          updatedAt
        }
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
      id
      username
      email
      password
      profileImage
      phone
      address1
      address2
      pincode
      booksPosted {
        items {
          id
          title
          price
          sellingPrice
          category
          inStock
          description
          dimensions
          numberOfPages
          bookType
          sold
          author
          year
          weight
          condition
          publisher
          stocksLeft
          deliveryDate
          countryOfOrigin
          averageRating
          reviewCount
          fiveStar
          fourStar
          threeStar
          twoStar
          oneStar
          language
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      orders {
        items {
          id
          deliveryDate
          quantity
          amount
          status
          reviewed
          createdAt
          updatedAt
        }
        nextToken
      }
      ordersWaiting {
        items {
          id
          deliveryDate
          quantity
          amount
          status
          reviewed
          createdAt
          updatedAt
        }
        nextToken
      }
      cart {
        items {
          id
          quantity
          amount
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        password
        profileImage
        phone
        address1
        address2
        pincode
        booksPosted {
          nextToken
        }
        orders {
          nextToken
        }
        ordersWaiting {
          nextToken
        }
        cart {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      deliveryDate
      seller {
        id
        username
        email
        password
        profileImage
        phone
        address1
        address2
        pincode
        booksPosted {
          nextToken
        }
        orders {
          nextToken
        }
        ordersWaiting {
          nextToken
        }
        cart {
          nextToken
        }
        createdAt
        updatedAt
      }
      buyer {
        id
        username
        email
        password
        profileImage
        phone
        address1
        address2
        pincode
        booksPosted {
          nextToken
        }
        orders {
          nextToken
        }
        ordersWaiting {
          nextToken
        }
        cart {
          nextToken
        }
        createdAt
        updatedAt
      }
      book {
        id
        title
        price
        sellingPrice
        category
        inStock
        description
        dimensions
        numberOfPages
        bookType
        sold
        author
        year
        weight
        condition
        publisher
        stocksLeft
        deliveryDate
        countryOfOrigin
        averageRating
        reviewCount
        fiveStar
        fourStar
        threeStar
        twoStar
        oneStar
        language
        status
        profile {
          id
          username
          email
          password
          profileImage
          phone
          address1
          address2
          pincode
          createdAt
          updatedAt
        }
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      quantity
      amount
      status
      reviewed
      createdAt
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        deliveryDate
        seller {
          id
          username
          email
          password
          profileImage
          phone
          address1
          address2
          pincode
          createdAt
          updatedAt
        }
        buyer {
          id
          username
          email
          password
          profileImage
          phone
          address1
          address2
          pincode
          createdAt
          updatedAt
        }
        book {
          id
          title
          price
          sellingPrice
          category
          inStock
          description
          dimensions
          numberOfPages
          bookType
          sold
          author
          year
          weight
          condition
          publisher
          stocksLeft
          deliveryDate
          countryOfOrigin
          averageRating
          reviewCount
          fiveStar
          fourStar
          threeStar
          twoStar
          oneStar
          language
          status
          createdAt
          updatedAt
        }
        quantity
        amount
        status
        reviewed
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
      id
      content
      stars
      images
      book {
        id
        title
        price
        sellingPrice
        category
        inStock
        description
        dimensions
        numberOfPages
        bookType
        sold
        author
        year
        weight
        condition
        publisher
        stocksLeft
        deliveryDate
        countryOfOrigin
        averageRating
        reviewCount
        fiveStar
        fourStar
        threeStar
        twoStar
        oneStar
        language
        status
        profile {
          id
          username
          email
          password
          profileImage
          phone
          address1
          address2
          pincode
          createdAt
          updatedAt
        }
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      profile {
        id
        username
        email
        password
        profileImage
        phone
        address1
        address2
        pincode
        booksPosted {
          nextToken
        }
        orders {
          nextToken
        }
        ordersWaiting {
          nextToken
        }
        cart {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        stars
        images
        book {
          id
          title
          price
          sellingPrice
          category
          inStock
          description
          dimensions
          numberOfPages
          bookType
          sold
          author
          year
          weight
          condition
          publisher
          stocksLeft
          deliveryDate
          countryOfOrigin
          averageRating
          reviewCount
          fiveStar
          fourStar
          threeStar
          twoStar
          oneStar
          language
          status
          createdAt
          updatedAt
        }
        profile {
          id
          username
          email
          password
          profileImage
          phone
          address1
          address2
          pincode
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCartItem = /* GraphQL */ `
  query GetCartItem($id: ID!) {
    getCartItem(id: $id) {
      id
      profile {
        id
        username
        email
        password
        profileImage
        phone
        address1
        address2
        pincode
        booksPosted {
          nextToken
        }
        orders {
          nextToken
        }
        ordersWaiting {
          nextToken
        }
        cart {
          nextToken
        }
        createdAt
        updatedAt
      }
      book {
        id
        title
        price
        sellingPrice
        category
        inStock
        description
        dimensions
        numberOfPages
        bookType
        sold
        author
        year
        weight
        condition
        publisher
        stocksLeft
        deliveryDate
        countryOfOrigin
        averageRating
        reviewCount
        fiveStar
        fourStar
        threeStar
        twoStar
        oneStar
        language
        status
        profile {
          id
          username
          email
          password
          profileImage
          phone
          address1
          address2
          pincode
          createdAt
          updatedAt
        }
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      quantity
      amount
      createdAt
      updatedAt
    }
  }
`;
export const listCartItems = /* GraphQL */ `
  query ListCartItems(
    $filter: ModelCartItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        profile {
          id
          username
          email
          password
          profileImage
          phone
          address1
          address2
          pincode
          createdAt
          updatedAt
        }
        book {
          id
          title
          price
          sellingPrice
          category
          inStock
          description
          dimensions
          numberOfPages
          bookType
          sold
          author
          year
          weight
          condition
          publisher
          stocksLeft
          deliveryDate
          countryOfOrigin
          averageRating
          reviewCount
          fiveStar
          fourStar
          threeStar
          twoStar
          oneStar
          language
          status
          createdAt
          updatedAt
        }
        quantity
        amount
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchBooks = /* GraphQL */ `
  query SearchBooks(
    $filter: SearchableBookFilterInput
    $sort: SearchableBookSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchBooks(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        title
        price
        sellingPrice
        category
        inStock
        description
        dimensions
        numberOfPages
        bookType
        sold
        author
        year
        weight
        condition
        publisher
        stocksLeft
        deliveryDate
        countryOfOrigin
        averageRating
        reviewCount
        fiveStar
        fourStar
        threeStar
        twoStar
        oneStar
        language
        status
        profile {
          id
          username
          email
          password
          profileImage
          phone
          address1
          address2
          pincode
          createdAt
          updatedAt
        }
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
