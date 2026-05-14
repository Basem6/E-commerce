export const All_proudct = [
    {
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDp0R08gCPSKSBaH7q3p5fQLwJ88blfZvqQHdboWJhHRwsSiRlYbNRUFBrKKuGW_BVyScD8SUkaii-ViiiY93qhVR-dG86DU8K3HubekbAzvgM8UUwoNeiaTaT5uq0XU6ZBfgsVDz27JEGTNZn9w7yz8M9lWHGvclag1lTv8B00KWuGvchJ0f4ukqwYTZFUPIGIjub5DOeSqk5mtZ5ZuOJefFAt2NlKH6PU3LrwSELMDcZWaMxtQiwwvUtSdOpWujtrd-RHClCwf6Y",
        category: "Headphones",
        name: "headphone1",
        price: "120",
        isfetured:false,
        description: "Wireless headphone with clear sound.",
        addtocard: false,
        addtoLove: false,
        Rate: 3,
        Discount: 5,
        countincart: 1,
    },
    {
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuClMg0N8hBJIfYaz7qh69iQtTyz5ihiiIjLcknKFYjObY-d4AenMA7rXjpA3gvpfMFmMYPb7B0_1EwHCzIPMaVe9_0wToaSS0RRWGbMeDCBN2bkNqiIw63fy1TWn2j1No-cPxPmJZP3c2DYcrVjWKvHdSHlgYd71XMU7lE_YCGLOIdrklex_3iXrCs1SZ3ftmTKK59n9NyP4MKNL2XVCP1Y_TWxhUrBgdkUXrEO_KL2xYcGJvu3aBjTT7BP2IDOE2j0lg6uaaFTr8Q",
        category: "watchs",
        name: "Rolex",
        price: "330",
        isfetured:true,
        description: "Luxury watch with premium design.",
        addtocard: false,
        addtoLove: false,
        Rate: 2,
        Discount: 15,
        countincart: 1,
    },
    {
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDp0R08gCPSKSBaH7q3p5fQLwJ88blfZvqQHdboWJhHRwsSiRlYbNRUFBrKKuGW_BVyScD8SUkaii-ViiiY93qhVR-dG86DU8K3HubekbAzvgM8UUwoNeiaTaT5uq0XU6ZBfgsVDz27JEGTNZn9w7yz8M9lWHGvclag1lTv8B00KWuGvchJ0f4ukqwYTZFUPIGIjub5DOeSqk5mtZ5ZuOJefFAt2NlKH6PU3LrwSELMDcZWaMxtQiwwvUtSdOpWujtrd-RHClCwf6Y",
        category: "Headphones",
        name: "headphone2",
        price: "220",
        isfetured:true,
        description: "Noise cancelling wireless headphone.",
        addtocard: false,
        addtoLove: false,
        Rate: 5,
        Discount: 25,
        countincart: 1,
    },

    {
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        category: "Shoes",
        name: "Nike Air",
        price: "180",
        isfetured:false,
        description: "Comfortable running shoes.",
        addtocard: false,
        addtoLove: false,
        Rate: 4,
        Discount: 10,
        countincart: 1,
    },

    {
        
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        category: "watchs",
        name: "Casio",
        isfetured:true,
        price: "90",
        description: "Classic everyday watch.",
        addtocard: false,
        addtoLove: false,
        Rate: 4,
        Discount: 8,
        countincart: 1,
    },

    {
        
        img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        category: "Phones",
        name: "iPhone 14",
        price: "999",
        isfetured:false,
        description: "Apple smartphone with advanced camera.",
        addtocard: false,
        addtoLove: false,
        Rate: 5,
        Discount: 12,
        countincart: 1,
    },

    {
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        category: "Headphones",
        name: "Sony WH-1000XM5",
        price: "450",
        isfetured:true,
        description: "Premium noise cancelling headphones.",
        addtocard: false,
        addtoLove: false,
        Rate: 5,
        Discount: 18,
        countincart: 1,
    },

    {
        img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
        category: "Shoes",
        name: "Adidas UltraBoost",
        price: "210",
        isfetured:false,
        description: "Stylish and comfortable sneakers.",
        addtocard: false,
        addtoLove: false,
        Rate: 4,
        Discount: 20,
        countincart: 1,
    },
];
const ProductReducer = (state, action) => {
    switch (action.type) {
        case "addedcart":
            return state.map((item , index)=>{
                if(index == action.payload.id-1){
                    return {...item,addtocard:true}
                }else{
                    return item
                }
        })
        case "romvefromcart":
            return state.map((item , index)=>{
                if(index == action.payload){
                    return {...item,addtocard:false}
                }else{
                    return item
                }
        })
        case "addedLove":
            return state.map((item , index)=>{
                if(index == action.payload.id-1){
                    return {...item,addtoLove:true}
                }else{
                    return item
                }
        })
        case "removefromlove":
            return state.map((item , index)=>{
                if(index == action.payload){
                    return {...item,addtoLove:false}
                }else{
                    return item
                }
        })
        case "plusItem":
            return state.map((item,index)=>{
                if(index == action.payload){
                    return {...item , countincart:item.countincart+1}
                }else{
                    return item
                }
        })
        case "minusItem":
            return state.map((item,index)=>{
                if(index == action.payload){
                    return {...item , countincart:item.countincart-1}
                }else{
                    return item
                }
        })
    default:
    return  state;
    }
};
export default ProductReducer;