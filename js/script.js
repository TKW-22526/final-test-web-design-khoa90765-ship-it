const foods=[
{
    name:"Phở bò",
    image:"assets/pho.jpg",
    desc:"Phở là món ăn truyền thống nổi tiếng của Việt Nam."
},
{
    name:"Bánh mì",
    image:"assets/banh mi.jpg",
    desc:"Bánh mì Việt Nam được nhiều du khách yêu thích."
},
{
    name:"Bún bò Huế",
    image:"assets/bunbo.jpg",
    desc:"Đặc sản nổi tiếng của cố đô Huế."
}
];

let html = "";

foods.forEach(food => {
    html += `
    <div class="card">
        <img src="${food.image}">
        <h2>${food.name}</h2>
        <p>${food.desc}</p>

        <a href="html/chi-tiet.html">
            <button>Xem chi tiết</button>
        </a>
    </div>
    `;
});

document.getElementById("food-list").innerHTML = html;