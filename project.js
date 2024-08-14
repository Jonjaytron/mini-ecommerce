const sneakers = [
    {
        id: 1,
        title: "Nike Jordan Air",
        price: 400,
        colors: [
            {
                code: "black",
                img: "./media/b&wjordan.png",
            },

            {
                 code: "#3d36a2",
                img: "./media/purplejordan.png",
            },
        ],

    },

    {
        id: 2,
        title: "New Balance 9060",
        price: 470,
        colors: [
            {
                code: "black",
                img: "./media/newbalance 9060.png",
            },

            {
                 code: "#3c3c3a",
                img: "./media/9060 grey.png",
            },
        ],

    },

    {
        id: 3,
        title: "Adidas Yeezy Boost 700",
        price: 453,
        colors: [
            {
                code: "black",
                img: "./media/yeezy black.png",
            },

            {
                 code: "#736565",
                img: "./media/yeezy mauve.png",
            },
        ],

    },

    {
        id: 4,
        title: "Reebok Hi Tops",
        price: 380,
        colors: [
            {
                code: "black",
                img: "./media/Reebok black.png",
            },

            {
                 code: "#c2c2c2",
                img: "./media/reebok grey.png",
            },
        ],

    },

]




const slider = document.querySelector(".sliderwrapper");
const menuitem = document.querySelectorAll(".menuitem");

const producttitle = document.querySelector(".product-title");
const productprice = document.querySelector(".product-price");
const productsize = document.querySelectorAll(".size");
const productcolors = document.querySelectorAll(".variation");
const productimage = document.querySelector(".product-image");
const buynowbtn = document.querySelector(".buy-now");
const close = document.querySelector(".close");
const payment = document.querySelector(".payment");

const chosensneaker = sneakers[0];

menuitem.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        //change slider//
        slider.style.transform = `translateX(${-100 * index}vw)`

        //change chosen sneaker//
        const chosensneaker = sneakers[index];

        //change chosen sneaker content//
        producttitle.textContent = chosensneaker.title;
        productprice.textContent = "$" + chosensneaker.price;
        productimage.src = chosensneaker.colors[0].img;

            //New Sneaker Colors
        productcolors.forEach((color, index)=>{
            color.style.backgroundColor = chosensneaker.colors[index].code;

            productcolors.forEach((color, index)=>{
                color.addEventListener("click", ()=>{
                    productimage.src = chosensneaker.colors[index].img;
                })
            })
        });
    });
   
});

productsize.forEach((size, index)=>{
    size.addEventListener("click", ()=>{
        productsize.forEach((size)=>{
        size.style.backgroundColor = "white";
        size.style.color = "black";
        })
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
    
});


buynowbtn.addEventListener("click", ()=>{
    payment.style.display = "flex";
});


close.addEventListener("click", ()=>{
    payment.style.display = "none";
});

menuitem.forEach(item=>{
item.addEventListener("click", ()=>{
    menuitem.forEach(i=>i.classList.remove("active"))
    item.classList.add("active");
});
});

