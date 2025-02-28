const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
    {
      id: 10,
      title: "Kuru Fasulye",
      category: "Turkey",
      price: 5.99,
      img:
        "https://i.ytimg.com/vi/VAaw7d6FQ80/maxresdefault.jpg",
      desc: `Türk mutfağında pişmiş bir fasulye yemeğidir`,
    },
    {
      id: 11,
      title: "Köfte",
      category: "Turkey",
      price: 9.99,
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Ineg%C3%B6l_k%C3%B6fte.jpg/220px-Ineg%C3%B6l_k%C3%B6fte.jpg",
      desc: ` Köfte, kıymaların yuvarlanarak küçük bir top şeklini almasıyla yapılan bir yemektir.`,
    },
    {
      id: 12,
      title: "Etli Ekmek",
      category: "Turkey",
      price: 2.99,
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Etliekmek.jpg/220px-Etliekmek.jpg",
      desc: ` Konya yöresine ait olan ve özellikle bu yörede yapılan bir çeşit ince ve kenarsız içli pide türüdür.`,
    },
    {
      id: 13,
      title: "İzmir Bomba",
      category: "Turkey",
      price: 1.99,
      img:
        "https://i.ytimg.com/vi/7ebN2FlIw1c/maxresdefault.jpg",
      desc: `zmir bombası, kısaca bomba veya pralin dolgulu çikolatalı kurabiye`,
    },
  ];
  
  const section = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );
  
  const categoryList = () => {
    const categoryBtns = categories
      .map((category) => {
        return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".btn-item");
  
    //filter menu
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.id;
        console.log(category);
        const menuCategory = menu.filter((menuItem) => {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "All") {
          menuList(menu);
        } else {
          menuList(menuCategory);
        }
      });
    });
  };
  
  const menuList = (menuItems) => {
    let displayMenu = menuItems.map((item) => {
        return `<div class="menu-items col-lg-6 col-sm-12">
                  <img src=${item.img} alt=${item.title} class="photo"/>
                  <div class="menu-info">
                    <div class="menu-title">
                      <h4>${item.title}</h4>
                      <h4 class="price">${item.price} TL</h4>
                    </div>
                    <div class="menu-text">${item.desc}</div>
                    <button class="btn btn-success add-to-cart" data-title="${item.title}" data-price="${item.price}">Sepete Ekle</button>
                  </div>
                </div>`;
    });

    displayMenu = displayMenu.join("");
    section.innerHTML = displayMenu;

    // Sepete ekleme butonlarına event listener ekle
    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", (e) => {
            const title = e.target.dataset.title;
            const price = parseFloat(e.target.dataset.price);
            addToCart(title, price);
        });
    });
};

  
  menuList(menu);
  categoryList();

  document.getElementById("search").addEventListener("keyup", (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredMenu = menu.filter((item) =>
      item.title.toLowerCase().includes(searchText)
    );
    menuList(filteredMenu);
  });
  
  let cart = [];

const addToCart = (title, price) => {
    // Sepette var mı kontrol et
    const existingItem = cart.find(item => item.title === title);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ title, price, quantity: 1 });
    }
    updateCart();
};

const updateCart = () => {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalContainer = document.getElementById("cart-total");

  cartItemsContainer.innerHTML = ""; // Önce sepeti temizle
  let total = 0;

  cart.forEach((item) => {
      total += item.price * item.quantity;
      const listItem = document.createElement("li");
      listItem.innerHTML = `
          ${item.title} x${item.quantity} - ${item.price * item.quantity} TL
          <button class="remove-item" data-title="${item.title}">X</button>
      `;
      cartItemsContainer.appendChild(listItem);
  });

  cartTotalContainer.textContent = total.toFixed(2);

  // Sepetten silme butonlarına event listener ekle
  document.querySelectorAll(".remove-item").forEach((button) => {
      button.addEventListener("click", (e) => {
          const title = e.target.dataset.title;
          removeFromCart(title);
      });
  });
};


const removeFromCart = (title) => {
    cart = cart.filter(item => item.title !== title);
    updateCart();
};

// Sepeti tamamen temizleme fonksiyonu
document.getElementById("clear-cart").addEventListener("click", () => {
    cart = [];
    updateCart();
});


  