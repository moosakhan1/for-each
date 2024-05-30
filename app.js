var card = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: { rate: 3.9, count: 120 }
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: { rate: 4.1, count: 259 }
    },
    {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        rating: { rate: 4.7, count: 500 }
    },
    


    {
        id: 6,
        title: "Solid Gold Petite Micropave ",
        price: 168,
        description:
          "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        category: "jewelery",
        image: "https://images-cdn.ubuy.co.in/64ed7274b3614d0909461989-hafeez-center-14k-solid-gold-petite.jpg",
        rating: { rate: 3.9, count: 70 },
    },
    {
        id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/1/373881784/JI/VR/FI/201863206/white-gold-princess-cut-diamond-ring-500x500.jpeg",
    rating: { rate: 3, count: 400 },
    },
    {
        id: 8,
        title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        price: 10.99,
        description:
          "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        category: "jewelery",
        image: "https://m.media-amazon.com/images/I/51UDEzMJVpL._AC_SL1254_.jpg",
        rating: { rate: 1.9, count: 100 },
    },

];

card.forEach(function (product) {
    var parnet = document.getElementById('parnet');

    var content = `
                <h2>${product.title}</h2>
                <img src="${product.image}" alt="">
                <p><b>Price:</b> $${product.price}</p>
                <p><b>Description:</b> ${product.description}</p>
                <p><b>Category:</b> ${product.category}</p>
                <p><b>Rating:</b> ${product.rating.rate} (${product.rating.count} reviews)</p>
            `;
    parnet.innerHTML += content
});