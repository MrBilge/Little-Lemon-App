import Footer from "./Footer";

function CustomersSaySection() {
  const customers = [
    {
      id: "1",
      name: "Kevin",
      src: "https://img.freepik.com/free-photo/african-american-young-man-colorful-shirt-looking-camera-puzzled-standing-white-background_141793-118183.jpg?w=826&t=st=1720274039~exp=1720274639~hmac=459a6048a92e7b7f737668c8e0bcd9e9d8a5f2d9f958e4bb14423742a016a944",
      comment:
        "Hands down, one of the best dining experiences I've ever had! The food was incredibly fresh and flavorful, and the presentation was top-notch. The staff went above and beyond to ensure we had a memorable meal. Highly recommend this place!",
    },
    {
      id: "2",
      name: "Micheal",
      src: "https://media.istockphoto.com/id/825083568/photo/proud-latin-man.webp?b=1&s=170667a&w=0&k=20&c=CyG-7qRsTApt2se9eMhc-iPBHMj5Yj-ISytCWd3uZzQ=",
      comment:
        "A delightful culinary experience! The menu offered a fantastic variety of dishes, each one more delicious than the last. The service was impeccable, and the atmosphere was warm and welcoming. A must-visit for any food lover!",
    },
    {
      id: "3",
      name: "Julia",
      src: "https://www.avantgynecology.com/wp-content/uploads/2020/07/womenshealth60blogphoto.jpg",
      comment:
        "An absolute gem in the city! Every dish we tried was bursting with flavor and cooked to perfection. The ambiance was cozy and inviting, making it a perfect spot for a romantic dinner. Can't wait to come back!",
    },
    {
      id: "4",
      name: "Robin",
      src: "https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.webp?b=1&s=170667a&w=0&k=20&c=pGdjFVdK-_BhTa6PMy5VNcXdbxVNngzg-OPzMfJKrG8=",
      comment:
        "This restaurant exceeded all my expectations! The food was not only delicious but also beautifully presented. The staff was incredibly friendly and attentive, making our dining experience truly exceptional. Highly recommended!",
    },
  ];

  return (
    <>
      <div className="customer-container">
        {customers.map((customer) => (
          <div className="customer">
            <div className="ratings">
              {Array.from({ length: 5 })
                .fill("*")
                .map((star, index) => (
                  <span>{star}</span>
                ))}
            </div>
            <h3>{customer.name}</h3>
            <div className="person">
              <img className="person-img" src={customer.src}></img>
              <p className="person-comment">
                {" "}
                <span
                  style={{
                    fontSize: "86px",
                    color: "teal",
                    position: "absolute",
                    top: "-40px",
                    left: "-50px",
                  }}
                >
                  ``
                </span>
                {customer.comment}
                <span
                  style={{
                    fontSize: "86px",
                    color: "teal",
                    position: "absolute",
                    marginTop: "2px",
                    marginLeft: "5px",
                  }}
                >
                  ``
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CustomersSaySection;
