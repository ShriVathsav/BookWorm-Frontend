/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBook = /* GraphQL */ `
  mutation CreateBook(
    $input: CreateBookInput!
    $condition: ModelBookConditionInput
  ) {
    createBook(input: $input, condition: $condition) {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
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
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
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
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
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
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
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
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
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
export const createCartItem = /* GraphQL */ `
  mutation CreateCartItem(
    $input: CreateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    createCartItem(input: $input, condition: $condition) {
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
export const updateCartItem = /* GraphQL */ `
  mutation UpdateCartItem(
    $input: UpdateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    updateCartItem(input: $input, condition: $condition) {
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
export const deleteCartItem = /* GraphQL */ `
  mutation DeleteCartItem(
    $input: DeleteCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    deleteCartItem(input: $input, condition: $condition) {
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
