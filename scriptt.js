/* =====================================================
   VARIABLES
===================================================== */

let selName = "";
let selPrice = "";
let selinformetion = "";
let isAdmin = false;
let currentCat = "";


/* =====================================================
   PET DATA
===================================================== */

const petData = {

    Dog: [

        {
            name: "Golden Retriever",
            price: "₹7000",
            img: "https://images.ctfassets.net/scac5p2hkp4h/3hF0E8wZ8RZePllDtdgWWk/ee66565f098c3bd3e5c9a7927eb941d8/GoldenRetriever-FF.jpg",
            info: "Friendly family dog"
        },

        {
            name: "Gersman Shepherd",
            price: "₹8500",
            img: "https://tse2.mm.bing.net/th/id/OIP.PhidpscG2ZNzQHpWR_RYIQHaEo?pid=Api&P=0&h=180https://wallpapers.com/images/hd/healthy-german-shepherd-dog-xhtyh1epn4r8e43p.jpg",
            info: "Guard dog"
        },

        {
            name: "Labrador",
            price: "₹6000",
            img: "https://tse1.mm.bing.net/th/id/OIP.2j5gR4F7SkitzsGhV5jRtgHaE8?pid=Api&P=0&h=180https://happydogbreeds.com/wp-content/uploads/2023/06/Labrador-Retriever-puppies-with-different-colors-1200x800.jpg",
            info: "Easy to train"
        },

        {
            name: "Indian Pariah Dog",
            price: "₹500",
            img: "https://tse4.mm.bing.net/th/id/OIP.BmS9ToMe7uY-w0g86SLeCQHaG3?pid=Api&P=0&h=180https://blog.unleavables.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-04-at-20.32.54_67fce629.jpg",
            info: "Loyal Indian dog"
        },

        {
            name: "Pug",
            price: "₹15000",
            img: "https://www.thesprucepets.com/thmb/C1fxGGWQCrYSrrmlTzugtSlVe9M=/2121x0/filters:no_upscale():strip_icc()/GettyImages-861319804-3b23b6cb302247d49d9bec0b020179a0.jpg",
            info: "Cute companion"
        },

        {
            name: "Beagle",
            price: "₹6500",
            img: "https://cdn.britannica.com/17/234217-050-F74C669C/Beagle-hound-dog-puppy.jpg",
            info: "Playful dog"
        },

        {
            name: "Rottweiler",
            price: "₹18000",
            img: "https://www.rottweilerturkiye.com/wp-content/uploads/2023/09/rottweiler-nelerden-hoslanir.webphttps://cdn.wallpapersafari.com/44/45/AthRas.jpg",
            info: "Strong guard dog"
        },

        {
            name: "Doberman",
            price: "₹20000",
            img: "https://www.animalsaroundtheglobe.com/wp-content/uploads/2023/03/lying-ga59746ead_1280-1200x798.jpg",
            info: "Alert dog"
        },

        {
            name: "Husky",
            price: "₹25000",
            img: "https://www.petpaw.com.au/wp-content/uploads/2014/07/Siberian-Husky-4-1030x579.jpg",
            info: "Snow dog"
        },

        {
            name: "Shih Tzu",
            price: "₹12000",
            img: "https://www.mydogsname.com/wp-content/uploads/2022/09/shih-tzu-breed.jpg",
            info: "Indoor dog"
        },

        {
            name: "Pomeranian",
            price: "₹10000",
            img: "https://tse3.mm.bing.net/th/id/OIP.gZRlx7hUII8Gkqd8ltfI6wHaE8?pid=Api&P=0&h=180https://www.omlet.us/images/cache/512/346/Dog-Pomeranian-Three_lovely_Pomeranians%2C_each_with_big%2C_bushy_tails_and_beautiful_pointed_ears.jpg",
            info: "Fluffy dog"
        },

        {
            name: "Boxer",
            price: "₹16000",
            img: "https://vhd-wordpress-uploads.s3.amazonaws.com/uploads/2022/08/Boxer-shutterstock_232556533-1.jpg",
            info: "Active dog"
        },

        {
            name: "Dalmatian",
            price: "₹19000",
            img: "https://cdn.britannica.com/49/236049-050-AEEBDD63/Dalmation-dog-brown-and-white.jpg",
            info: "Spotted dog"
        },

        {
            name: "Chihuahua",
            price: "₹14000",
            img: "https://a-z-animals.com/media/2021/06/Apple-Head-Chihuahua-playing.jpg",
            info: "Tiny dog"
        },

        {
            name: "Saint Bernard",
            price: "₹28000",
            img: "https://www.dailypaws.com/thmb/oez53kAzsPvFWmBeUBpbaTdrwDU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/saint-bernard-tongue-out-866830016-461b9a5423344296af446d3d1317e1ec.jpg",
            info: "Rescue dog"
        },

        {
            name: "Great Dane",
            price: "₹30000",
            img: "https://images.saymedia-content.com/.image/t_share/MjAwNTUwMjc4NTQwMzcxMzIw/great-dane-guide.jpg",
            info: "Giant dog"
        },

        {
            name: "Cocker Spaniel",
            price: "₹17000",
            img: "https://www.bubblypet.com/wp-content/uploads/2022/04/Best-Cocker-Spaniel-breeders-to-find-Cocker-Spaniel-puppies-for-sale.jpg",
            info: "Friendly dog"
        },

        {
            name: "Border Collie",
            price: "₹21000",
            img: "https://highlandcanine.com/wp-content/uploads/2023/04/border-collie-in-the-grass.jpg",
            info: "Smart dog"
        },

        {
            name: "Dachshund",
            price: "₹13000",
            img: "https://a-z-animals.com/media/2023/05/shutterstock-2184543203-huge-licensed-1-scaled.jpg",
            info: "Small hunter"
        },

        {
            name: "Akita",
            price: "₹24000",
            img: "https://justusdogs.com.au/wp-content/uploads/2024/11/Akita_or_Akita_Inu_Dog_Breed/Image_2.jpg",
            info: "Loyal dog"
        },

        {
            name: "Pitbull",
            price: "₹18000",
            img: "https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg",
            info: "Strong dog"
        },

        {
            name: "Cane Corso",
            price: "₹35000",
            img: "https://images.pexels.com/photos/7210699/pexels-photo-7210699.jpeg",
            info: "Powerful dog"
        },

        {
            name: "Belgian Malinois",
            price: "₹26000",
            img: "https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg",
            info: "Police dog"
        },

        {
            name: "Chow Chow",
            price: "₹23000",
            img: "https://images.pexels.com/photos/847353/pexels-photo-847353.jpeg",
            info: "Fluffy dog"
        },

        {
            name: "Basset Hound",
            price: "₹16000",
            img: "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg",
            info: "Scent dog"
        },

        {
            name: "Bull Terrier",
            price: "₹19000",
            img: "https://images.pexels.com/photos/4587965/pexels-photo-4587965.jpeg",
            info: "Energetic dog"
        },

        {
            name: "Newfoundland",
            price: "₹32000",
            img: "https://images.pexels.com/photos/7210748/pexels-photo-7210748.jpeg",
            info: "Water rescue"
        },

        {
            name: "Alaskan Malamute",
            price: "₹29000",
            img: "https://images.pexels.com/photos/3715587/pexels-photo-3715587.jpeg",
            info: "Snow dog"
        },

        {
            name: "Rhodesian Ridgeback",
            price: "₹27000",
            img: "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg",
            info: "Hunting dog"
        }

    ],


    Cat: [

        {
            name: "Persian Cat",
            price: "₹9,000",
            img: "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=400"
        },

        {
            name: "Indie Cat",
            price: "₹500",
            img: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400"
        },

        {
            name: "Siamese Cat",
            price: "₹10,500",
            img: "https://images.pexels.com/photos/596590/pexels-photo-596590.jpeg?auto=compress&cs=tinysrgb&w=400"
        },

        {
            name: "British Shorthair",
            price: "₹15,000",
            img: "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=400"
        },

        {
            name: "Maine Coon",
            price: "₹18,000",
            img: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=400"
        },

        {
            name: "Bengal Cat",
            price: "₹20,000",
            img: "https://tse3.mm.bing.net/th/id/OIP.hk0_gOa0YJZwXLmH-GH8CwHaE8?pid=Api&P=0&h=180"
        },

        {
            name: "Russian Blue",
            price: "₹14,000",
            img: "https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg?auto=compress&cs=tinysrgb&w=400"
        },

        {
            name: "Ragdoll",
            price: "₹16,000",
            img: "https://tse1.mm.bing.net/th/id/OIP.UdNsscxivtd07yjMZx1sXwHaEK?pid=Api&P=0&h=180"
        },

        {
            name: "Street Cat",
            price: "₹1,000",
            img: "https://headsupfortails.com/cdn/shop/articles/street_cat.jpg?v=1642056014"
        },

        {
            name: "Mixed Breed Cat",
            price: "₹16,000",
            img: "https://www.trupanion.com/images/trupanionwebsitelibraries/bg/mixed-breed-cat.jpg?sfvrsn=959c7b73_1"
        },

        {
            name: "Rescue Cat",
            price: "₹10,000",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNtuLfvvWhjf1dIJpT5ue_koozncYo2nMlg&s"
        },

        {
            name: "American Shorthair",
            price: "₹15,000",
            img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Jewelkatz_Romeo_Of_Stalker-Bars.jpg"
        },

        {
            name: "Abyssinian",
            price: "₹20,000",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8miFlyRgKOg_oWzgx4Ottz8xKO7gZzrGuTg&s"
        },

        {
            name: "Scottish Fold",
            price: "₹11,000",
            img: "https://www.purina.com/sites/default/files/styles/social_share/public/2025-08/scottish_fold_cat_4.jpg?h=82f92a78&itok=yk1UqTTL"
        },

        {
            name: "Sphynx",
            price: "₹17,200",
            img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Jewelkatz_Romeo_Of_Stalker-Bars.jpg"
        },

        {
            name: "Oriental Shorthair",
            price: "₹15,000",
            img: "https://preview.redd.it/experiences-when-introducing-an-oriental-shorthair-to-a-new-v0-psssv96132yc1.jpeg?width=1080&crop=smart&auto=webp&s=906f41d9fc37ea14f5bda7c9485e1c70e0f44836"
        },

        {
            name: "Devon Rex",
            price: "₹15,000",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNvIuLa_q3Wb2JqrToSgGvbqSJlWajVhC9ow&s"
        },

        {
            name: "Cornish Rex",
            price: "₹15,000",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRHX_seXEgvuC2zGrUwy7iIUrGH6Yc4RcUtQ&s"
        },

        {
            name: "Himalayan Cat",
            price: "₹15,000",
            img: "https://a-z-animals.com/media/2018/09/Himalayan-header.jpg"
        }

    ],


    Bird: [

        {
            name: "Parrot",
            price: "₹2,000",
            img: "https://images.pexels.com/photos/56733/pexels-photo-56733.jpeg?auto=compress&cs=tinysrgb&w=400"
        },

        {
            name: "Budgies",
            price: "₹800",
            img: "https://cdn.pixabay.com/photo/2018/02/09/10/59/budgie-3141369_1280.jpg"
        },

        {
            name: "Cockatiel",
            price: "₹3,500",
            img: "https://images.pexels.com/photos/2662434/pexels-photo-2662434.jpeg?auto=compress&cs=tinysrgb&w=400"
        },

        {
            name: "African Grey",
            price: "₹45,000",
            img: "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=400"
        },

        {
            name: "Macaw",
            price: "₹80,000",
            img: "https://cdn.britannica.com/35/3635-050-96241EC1/Scarlet-macaw-ara-macao.jpg"
        },

        {
            name: "Finch",
            price: "₹1,000",
            img: "https://tse2.mm.bing.net/th/id/OIP.BN_HBEwfFhm2FejwflgyaAHaFj?pid=Api&P=0&h=180"
        },

        {
            name: "Sun Conure",
            price: "₹15,000",
            img: "https://tse3.mm.bing.net/th/id/OIP.3pKAtPbAYemvJ7T1QDuQ5wHaE8?pid=Api&P=0&h=180"
        },

        {
            name: "Canary",
            price: "₹2,500",
            img: "https://cdn.britannica.com/02/188002-050-E08453AB.jpg"
        },

        {
            name: "Peacock",
            price: "₹2,000",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJCQcAhCMA2UVSFHbx0vp4r4QJLquMRk1WaA&s"
        },

        {
            name: "Sparrow",
            price: "₹800",
            img: "https://birdlifedata.blob.core.windows.net/species-images/103818789.jpg"
        },

        {
            name: "Pigeon",
            price: "₹3,500",
            img: "https://www.allaboutbirds.org/guide/assets/photo/308074031-480px.jpg"
        },

        {
            name: "Crow",
            price: "₹45,000",
            img: "https://corvidresearch.blog/wp-content/uploads/2015/04/junlge-crow.jpg"
        },

        {
            name: "Myna",
            price: "₹80,000",
            img: "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/187563981/900"
        },

        {
            name: "Koel",
            price: "₹1,000",
            img: "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/126392811/900"
        },

        {
            name: "Kingfisher",
            price: "₹15,000",
            img: "https://upload.wikimedia.org/wikipedia/commons/9/92/%E2%99%82_Common_Kingfisher_%28Alcedo_atthis%29_Photograph_By_Shantanu_Kuveskar%2C_Mangaon%2C_Maharashtra%2C_India.jpg?_=20161229171136"
        },

        {
            name: "Eagle",
            price: "₹2,500",
            img: "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/636107892/1200"
        }

    ],


    Rabbit: [

        {
            name: "Angora Rabbit",
            price: "₹3,000",
            img: "https://images.pexels.com/photos/4001296/pexels-photo-4001296.jpeg?auto=compress&cs=tinysrgb&w=400"
        },

        {
            name: "Dutch Rabbit",
            price: "₹1,500",
            img: "https://www.zooplus.co.uk/magazine/wp-content/uploads/2022/03/a-pair-of-domesticated-dutch-rabbits.jpeg"
        },

        {
            name: "White Rabbit",
            price: "₹1,000",
            img: "https://tse1.mm.bing.net/th/id/OIP.gxTFQiPKZoqmAh-X4eOk9AHaE6?pid=Api&P=0&h=180"
        },

        {
            name: "Lionhead",
            price: "₹4,000",
            img: "https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&w=400"
        },

        {
            name: "Mini Lop",
            price: "₹5,000",
            img: "https://tse3.mm.bing.net/th/id/OIP.0rNh86AScCJHkZCBBA0ouAHaE8?pid=Api&P=0&h=180"
        },

        {
            name: "Flemish Giant",
            price: "₹7,500",
            img: "https://a-z-animals.com/media/2023/07/shutterstock-1778110187-huge-licensed-scaled.jpg"
        },

        {
            name: "Netherland Dwarf",
            price: "₹6,000",
            img: "https://tse3.mm.bing.net/th/id/OIP.hqHfE54d4bPLLDhtMYDWNwHaEK?pid=Api&P=0&h=180"
        },

        {
            name: "Grey Rabbit",
            price: "₹1,200",
            img: "https://tse4.mm.bing.net/th/id/OIP.wDzd3J6l_BUXJ_33EZJJqQHaFB?pid=Api&P=0&h=180"
        },

        {
            name: "Holland Lop",
            price: "₹1,000",
            img: "https://gregrichdvm.com/wp-content/uploads/2022/11/holland-lop-Metairie-LA.jpg"
        },

        {
            name: "Mini Rex",
            price: "₹4,000",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSSp3uRcpw_wzaqdNi5FxxoSpmiBsM5c-U5Q&s"
        },

        {
            name: "Californian Rabbit",
            price: "₹5,000",
            img: "https://upload.wikimedia.org/wikipedia/commons/0/06/Kr%C3%B3liki_kalifornijskie_666.jpg"
        },

        {
            name: "New Zealand White Rabbit",
            price: "₹7,500",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC9B_z3kFiD0ByzrKCMhKXjF2vgJ5E_uUuig&s"
        },

        {
            name: "Himalayan Rabbit",
            price: "₹6,000",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Zp39ktTx1Ps7w8TKYXvHmbqjAGRGTga28Q&s"
        },

        {
            name: "Rex Rabbit",
            price: "₹1,200",
            img: "https://cottontails-rescue.org.uk/wp-content/uploads/2023/09/rex-for-website-2-cropped.jpg"
        },

        {
            name: "FrenchA Lop",
            price: "₹1,200",
            img: "https://cdn.creatures.com/32a/f8c/13e/390b3.jpeg"
        },

        {
            name: "English Lop",
            price: "₹1,200",
            img: "https://external-preview.redd.it/english-lop-rabbit-v0-if1Nizvx6oM7y2RAHmKLKdxdylMvE3KxgqrEaoh1CX4.jpg?width=640&crop=smart&auto=webp&s=8b9d84c3a82520ffdf55dd1f61180d0c628a025d"
        },

        {
            name: "American Rabbit",
            price: "₹1,200",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqqJgdAvjg4klD-S8phVfdAF293lDmVZKDtQ&s"
        },

        {
            name: "Harlequin Rabbit",
            price: "₹1,200",
            img: "https://cdn.creatures.com/bfe/1b3/e99/4c579.jpeg"
        },

        {
            name: "Polish Rabbit",
            price: "₹1,200",
            img: "https://cdn-fastly.petguide.com/media/2022/02/16/8215091/polish-rabbit.jpg?size=720x845&nocrop=1"
        },

        {
            name: "Hotot Rabbit",
            price: "₹1,200",
            img: "https://livestockconservancy.org/wp-content/uploads/classified-listing/2025/07/IMG_9525.jpeg"
        }

    ]
};


/* =====================================================
   PAGE NAVIGATION
===================================================== */

function go(id) {

    document.querySelectorAll(".page").forEach(function(page) {
        page.classList.remove("active");
    });

    const targetPage = document.getElementById(id);

    if (!targetPage) {
        console.error("Page not found:", id);
        return;
    }

    targetPage.classList.add("active");


    const navbarPages = [
        "p2",
        "p3",
        "p4",
        "p5",
        "p6",
        "p_pay"
    ];

    if (navbarPages.includes(id)) {

        document.getElementById("mainNavbar").style.display = "flex";

    } else {

        document.getElementById("mainNavbar").style.display = "none";

    }


    window.scrollTo(0, 0);
}


function goBack(page) {
    go(page);
}


/* =====================================================
   REGISTRATION
===================================================== */

function registerUser() {

    const name =
        document.getElementById("regName").value.trim();

    const mobile =
        document.getElementById("regMobile").value.trim();

    const password =
        document.getElementById("regPass").value.trim();


    if (name === "") {

        alert("Enter Full Name");
        return;

    }


    if (!/^[A-Za-z ]+$/.test(name)) {

        alert("Name must contain only letters");
        return;

    }


    if (!/^[0-9]{10}$/.test(mobile)) {

        alert("Mobile Number must be 10 digits");
        return;

    }


    if (password.length < 4) {

        alert("Password minimum 4 characters");
        return;

    }


    let users =
        JSON.parse(localStorage.getItem("users")) || [];


    const alreadyExists = users.some(
        user => user.mobile === mobile
    );


    if (alreadyExists) {

        alert("Mobile number already registered");
        return;

    }


    users.push({

        name: name,
        mobile: mobile,
        password: password

    });


    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );


    alert("Registration Successful");

    document.getElementById("regName").value = "";
    document.getElementById("regMobile").value = "";
    document.getElementById("regPass").value = "";

    go("p1");
}


/* =====================================================
   LOGIN
===================================================== */

function handleLogin() {

    const u =
        document.getElementById("logUser").value.trim();

    const p =
        document.getElementById("logPass").value.trim();


    if (u === "") {

        alert("Enter Username / Mobile");
        return;

    }


    if (p === "") {

        alert("Enter Password");
        return;

    }


    /* ADMIN */

    if (u === "admin" && p === "1234") {

        isAdmin = true;

        document.getElementById("adminTag").style.display = "block";

        document.getElementById("adminPanel").style.display = "block";

        showHistory();

        go("p2");

        return;
    }


    /* NORMAL USER */

    let users =
        JSON.parse(localStorage.getItem("users")) || [];


    let validUser = users.find(function(user) {

        return (
            (user.mobile === u || user.name === u) &&
            user.password === p
        );

    });


    if (validUser) {

        isAdmin = false;

        document.getElementById("adminTag").style.display = "none";

        document.getElementById("adminPanel").style.display = "none";

        alert("Login Successful");

        go("p2");

    } else {

        alert("Invalid Username or Password");

    }
}


/* =====================================================
   SHOW USER HISTORY
===================================================== */

function showHistory() {

    let users =
        JSON.parse(localStorage.getItem("users")) || [];


    const box =
        document.getElementById("historyList");


    if (!box) {
        return;
    }


    box.innerHTML = "";


    if (users.length === 0) {

        box.innerHTML =
            "<p>No registered users found.</p>";

    }


    users.forEach(function(u) {

        box.innerHTML += `

            <div class="user-history">

                <b>Name:</b> ${u.name}<br>

                <b>Mobile:</b> ${u.mobile}

            </div>

        `;

    });


    document.getElementById(
        "historyPanel"
    ).style.display = "block";
}


/* =====================================================
   BREEDS
===================================================== */

function showBreeds(cat) {

    currentCat = cat;

    document.getElementById(
        "breedTitle"
    ).innerText = cat + " Breeds";


    renderList();

    go("p3");
}


/* =====================================================
   RENDER PET LIST
===================================================== */

function renderList() {

    const grid =
        document.getElementById("breedGrid");


    if (!grid) {
        return;
    }


    grid.innerHTML = "";


    if (!petData[currentCat]) {

        grid.innerHTML =
            "<p>No pets available.</p>";

        return;

    }


    petData[currentCat].forEach(function(pet, i) {

        const card =
            document.createElement("div");

        card.className = "card";


        card.onclick = function() {

            openTerms(
                pet.name,
                pet.price
            );

        };


        card.innerHTML = `

            <div class="img-box">

                <img
                    src="${pet.img}"
                    alt="${pet.name}"
                    onerror="this.src='https://via.placeholder.com/300?text=Pet+Image'"
                >

            </div>

            <h3>${pet.name}</h3>

            <p>${pet.price}</p>

            <p class="info">
                ${pet.info || "Cute Pet Available"}
            </p>

        `;


        if (isAdmin) {

            const deleteButton =
                document.createElement("button");

            deleteButton.className =
                "del-btn";

            deleteButton.innerText =
                "Delete";


            deleteButton.onclick =
                function(event) {

                    delPetAdmin(
                        i,
                        event
                    );

                };


            card.appendChild(deleteButton);

        }


        grid.appendChild(card);

    });
}


/* =====================================================
   ADD PET
===================================================== */

function addPetAdmin() {

    if (!currentCat) {

        alert("Please select a category first");
        return;

    }


    const n =
        document.getElementById("addName").value.trim();

    const p =
        document.getElementById("addPrice").value.trim();

    const im =
        document.getElementById("addImg").value.trim();

    const inf =
        document.getElementById("addinfornation").value.trim();


    if (n === "" || p === "" || im === "") {

        alert("Please fill Pet Name, Price and Image Link");
        return;

    }


    petData[currentCat].push({

        name: n,

        price: p,

        img: im,

        info: inf || "Cute Pet Available"

    });


    document.getElementById("addName").value = "";
    document.getElementById("addPrice").value = "";
    document.getElementById("addImg").value = "";
    document.getElementById("addinfornation").value = "";


    renderList();


    alert("Pet Added Successfully");
}


/* =====================================================
   DELETE PET
===================================================== */

function delPetAdmin(i, e) {

    e.stopPropagation();


    if (confirm("Delete this pet?")) {

        petData[currentCat].splice(i, 1);

        renderList();

    }
}


/* =====================================================
   TERMS
===================================================== */

function openTerms(n, p) {

    selName = n;

    selPrice = p;


    document.getElementById(
        "pName"
    ).innerText = n;


    document.getElementById(
        "pPrice"
    ).innerText =
        "Adoption Fee: " + p;


    document.getElementById(
        "agree"
    ).checked = false;


    go("p4");
}


/* =====================================================
   AGREEMENT
===================================================== */

function checkAgreement() {

    const agree =
        document.getElementById("agree");


    if (agree.checked) {

        go("p5");

    } else {

        alert("Agree to terms");

    }
}


/* =====================================================
   OPEN UPI
===================================================== */

function openUPI() {

    let amt =
        selPrice.replace(/[^0-9]/g, "");


    window.location.href =
        `upi://pay?pa=9284352472@upi&pn=VarsidaPet&am=${amt}&cu=INR`;
}


/* =====================================================
   VERIFY PAYMENT
===================================================== */

function verifyPay() {

    const txn =
        document.getElementById("txnId").value.trim();


    if (txn.length > 5) {

        sendWhatsApp();

    } else {

        alert("Enter Transaction ID");

    }
}


/* =====================================================
   PAYMENT PAGE
===================================================== */

function goPayment() {

    document.getElementById(
        "payFor"
    ).innerText = selName;


    document.getElementById(
        "payAmt"
    ).innerText = selPrice;


    go("p_pay");
}


/* =====================================================
   WHATSAPP
===================================================== */

function sendWhatsApp() {

    const msg =
        `*🐾 NAVA ADOPTION FORM 🐾*%0A%0A` +

        `*--- PET DETAILS ---*%0A` +

        `*Pet:* ${selName}%0A` +

        `*Fee:* ${selPrice}%0A` +

        `*Gender:* ${document.getElementById("petGender").value}%0A` +

        `*Age:* ${document.getElementById("petAgeReq").value}%0A` +

        `*Duration:* ${document.getElementById("petDuration").value}%0A%0A` +

        `*--- PAYMENT ---*%0A` +

        `*Txn ID:* ${document.getElementById("txnId").value}%0A` +

        `*Status:* Paid ✅%0A%0A` +

        `*--- APPLICANT ---*%0A` +

        `*Name:* ${document.getElementById("custName").value}%0A` +

        `*Aadhar:* ${document.getElementById("custAadhar").value}%0A` +

        `*Mob:* ${document.getElementById("custMob").value}%0A` +

        `*Addr:* ${document.getElementById("custAddr").value}`;


    window.location.href =
        `https://wa.me/919284352472?text=${msg}`;
}


/* =====================================================
   DROPDOWN
===================================================== */

function toggleDrop(id) {

    const menu =
        document.getElementById(id);


    if (!menu) {
        return;
    }


    menu.style.display =
        menu.style.display === "block"
        ? "none"
        : "block";
}


/* =====================================================
   PDF
===================================================== */

function openPdf(p, t) {

    alert(
        "Opening " + t + " for " + p
    );

}


/* =====================================================
   CUSTOMIZATION VALIDATION
===================================================== */

function validateCustomization() {

    const age =
        document.getElementById(
            "petAgeReq"
        ).value.trim();


    const duration =
        document.getElementById(
            "petDuration"
        ).value.trim();


    if (age === "") {

        alert("Enter Pet Age");
        return;

    }


    if (duration === "") {

        alert("Enter Duration");
        return;

    }


    go("p6");
}


/* =====================================================
   DETAILS VALIDATION
===================================================== */

function validateDetails() {

    const name =
        document.getElementById(
            "custName"
        ).value.trim();


    const mob =
        document.getElementById(
            "custMob"
        ).value.trim();


    const aadhar =
        document.getElementById(
            "custAadhar"
        ).value.trim();


    const addr =
        document.getElementById(
            "custAddr"
        ).value.trim();


    const age =
        document.getElementById(
            "custAge"
        ).value.trim();


    const family =
        document.getElementById(
            "familyMembers"
        ).value.trim();


    const reason =
        document.getElementById(
            "reasonAdopt"
        ).value.trim();


    const emergency =
        document.getElementById(
            "emergencyContact"
        ).value.trim();


    /* NAME */

    if (name === "") {

        alert("Enter Name");
        return;

    }


    if (!/^[A-Za-z ]+$/.test(name)) {

        alert("Name must contain only letters");
        return;

    }


    /* MOBILE */

    if (!/^[0-9]{10}$/.test(mob)) {

        alert("Enter Valid WhatsApp Number");
        return;

    }


    /* AADHAR */

    if (!/^[0-9]{12}$/.test(aadhar)) {

        alert("Aadhar must be 12 digits");
        return;

    }


    /* ADDRESS */

    if (addr === "") {

        alert("Enter Address");
        return;

    }


    /* AGE */

    if (!/^[0-9]+$/.test(age)) {

        alert("Age must contain only numbers");
        return;

    }


    if (Number(age) < 18) {

        alert("Age must be 18+");
        return;

    }


    /* FAMILY */

    if (!/^[0-9]+$/.test(family)) {

        alert(
            "Family Members must contain only numbers"
        );

        return;

    }


    /* REASON */

    if (reason === "") {

        alert(
            "Enter Reason For Adoption"
        );

        return;

    }


    if (!/^[A-Za-z ]+$/.test(reason)) {

        alert(
            "Reason must contain only letters"
        );

        return;

    }


    /* EMERGENCY */

    if (!/^[0-9]{10}$/.test(emergency)) {

        alert(
            "Enter Valid Emergency Contact"
        );

        return;

    }


    /* SUCCESS */

    goPayment();
}


/* =====================================================
   PAGE LOAD
===================================================== */

window.addEventListener("load", function() {

    go("p_home");

});