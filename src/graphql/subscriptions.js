/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook {
    onCreateBook {
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
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook {
    onUpdateBook {
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
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook {
    onDeleteBook {
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
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile {
    onCreateProfile {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile {
    onUpdateProfile {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile {
    onDeleteProfile {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview {
    onCreateReview {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview {
    onUpdateReview {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview {
    onDeleteReview {
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
export const onCreateCartItem = /* GraphQL */ `
  subscription OnCreateCartItem {
    onCreateCartItem {
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
export const onUpdateCartItem = /* GraphQL */ `
  subscription OnUpdateCartItem {
    onUpdateCartItem {
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
export const onDeleteCartItem = /* GraphQL */ `
  subscription OnDeleteCartItem {
    onDeleteCartItem {
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
