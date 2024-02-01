export const Data = [
  {
    id: 1,
    imgUrl: "https://www.machenaonline.com/media/wysiwyg/visa.png",
    price: 9800,
    cardType: "VISA",
    cardNumber: "****1234",
    backgroundColor: "#3C0753",
    textColor: "black",
  },
  {
    id: 2,
    imgUrl:
      "https://logolook.net/wp-content/uploads/2021/07/Mastercard-Logo.png",
    price: 4654,
    cardType: "MasterCard",
    cardNumber: "****1234",
    backgroundColor: "#1363DF",
    textColor: "white",
  },
  {
    id: 3,
    imgUrl:
      "https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png",
    price: 3300,
    cardType: "Stripe",
    cardNumber: "****1234",
    backgroundColor: "purple",
    textColor: "white",
  },
  {
    id: 4,
    imgUrl:
      "https://1000logos.net/wp-content/uploads/2021/05/Discover-logo.png",
    price: 3300,
    cardType: "Discover",
    cardNumber: "****1234",
    backgroundColor: "#0002A1",
    textColor: "white",
  },
  {
    id: 5,
    imgUrl:
      "https://logos-world.net/wp-content/uploads/2020/04/PayPal-Emblem.png",
    price: 3300,
    cardType: "PayPal",
    cardNumber: "****1234",
    backgroundColor: "orange",
    textColor: "white",
  },
];
export const transaction = [
  {
    id: 1,
    name: "Netflix",
    type: "Subscription",
    amount: "$99.00",
    date: "12 December",
    imaUrl: "https://aodisseia.com/wp-content/uploads/2020/03/logo-netflix.jpg",
  },
  {
    id: 2,
    name: "Amazon",
    type: "Subscription",
    amount: "$12.00",
    date: "18 December",
    imaUrl: "http://wallsdesk.com/wp-content/uploads/2016/10/Amazon-Logo.jpg",
  },
  {
    id: 3,
    name: "Spotify",
    type: "Subscription",
    amount: "$9.00",
    date: "15 December",
    imaUrl:
      "https://logodownload.org/wp-content/uploads/2016/09/Spotify-logo-11.jpg",
  },
  {
    id: 4,
    name: "Youtube",
    type: "Subscription",
    amount: "$11.00",
    date: "20 December",
    imaUrl:
      "hhttps://techcrunch.com/wp-content/uploads/2018/11/youtube-ios.jpg",
  },
];

Data.forEach((item) => {
  item.price = item.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
});
