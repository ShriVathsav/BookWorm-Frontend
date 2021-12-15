class Profile {

    constructor(        
        id,
        cognitoId,
        username,
        email,
        password,
        profileImage,
        phone,
        address1,
        address2,
        pincode,
        createdAt,
        updatedAt,
    ) {
        this.id = id,
        this.cognitoId = cognitoId,
        this.username = username,
        this.email = email,
        this.password = password,
        this.profileImage = profileImage,
        this.phone = phone,
        this.address1 = address1,
        this.address2 = address2,
        this.pincode = pincode,
        this.createdAt = createdAt
        this.updatedAt = updatedAt

        //console.log(this.getAverageRatingRound(), this.getAverageRating(), 'FROM BOOK MODEL', this.averageRating, this.averageRatingRound, this)
    }

}

export default Profile