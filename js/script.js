const foods=[
{
    name:"Phở bò",
    image:"assets/Pho.jpg",
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
    
},
{
    name:"Cơm tấm",
    image:"assets/comtam.jpg",
    desc:"Món cơm đặc trưng của miền Nam Việt Nam."
},
{
    name:"Cơm gà",
    image:"assets/comga.jpg",
    desc:"Cơm gà thơm ngon với thịt gà mềm."
},
{
    name:"Cơm chiên hải sản",
    image:"assets/comchien.jpg",
    desc:"Cơm chiên cùng tôm, mực và rau củ."
},
{
    name:"Hủ tiếu Nam Vang",
    image:"assets/hutieu.jpg",
    desc:"Món hủ tiếu đậm đà, hấp dẫn."
},
{
    name:"Mì xào bò",
    image:"assets/mixao.jpg",
    desc:"Mì xào cùng thịt bò mềm ngon."
},
{
    name:"Bún thịt nướng",
    image:"assets/bunthitnuong.jpg",
    desc:"Bún tươi ăn kèm thịt nướng thơm lừng."
},
{
    name:"Gỏi cuốn",
    image:"assets/goicuon.jpg",
    desc:"Gỏi cuốn tôm thịt tươi ngon."
},
{
    name:"Chả giò",
    image:"assets/chagio.jpg",
    desc:"Chả giò chiên giòn hấp dẫn."
},
{
    name:"Gà rán",
    image:"assets/garan.jpg",
    desc:"Gà rán giòn tan, thơm ngon."
},
{
    name:"Khoai tây chiên",
    image:"assets/khoaitay.jpg",
    desc:"Khoai tây chiên vàng giòn."
},
{
    name:"Hamburger",
    image:"assets/burger.jpg",
    desc:"Burger bò cùng rau và sốt đặc biệt."
},
{
    name:"Pizza",
    image:"assets/pizza.jpg",
    desc:"Pizza phô mai và xúc xích thơm ngon."
},
{
    name:"Mì Ý",
    image:"assets/miy.jpg",
    desc:"Mì Ý sốt bò bằm đậm vị."
},
{
    name:"Bánh mì thịt nướng",
    image:"assets/banhmithit.jpg",
    desc:"Bánh mì giòn với thịt nướng thơm ngon."
},
{
    name:"Bánh mì chả cá",
    image:"assets/chaca.jpg",
    desc:"Bánh mì chả cá hấp dẫn."
},
{
    name:"Xôi gà",
    image:"assets/xoiga.jpg",
    desc:"Xôi dẻo ăn cùng thịt gà."
},
{
    name:"Cá viên chiên",
    image:"assets/cavien.jpg",
    desc:"Cá viên chiên nóng hổi."
},
{
    name:"Nem nướng Nha Trang",
    image:"assets/nemnuong.jpg",
    desc:"Nem nướng ăn kèm rau sống và nước chấm."
},
{
    name:"Bánh xèo",
    image:"assets/banhxeo.jpg",
    desc:"Bánh xèo giòn rụm đặc trưng miền Tây."
},
{
    name:"Bánh cuốn",
    image:"assets/banhcuon.jpg",
    desc:"Bánh cuốn mềm mịn ăn kèm chả lụa."
},
{
    name:"Bún riêu",
    image:"assets/bunrieu.jpg",
    desc:"Bún riêu cua thơm ngon với nước dùng đậm đà."
},
{
    name:"Lẩu Thái",
    image:"assets/lauthai.jpg",
    desc:"Lẩu Thái chua cay hấp dẫn."
},
{
    name:"Gỏi gà",
    image:"assets/goiga.jpg",
    desc:"Gỏi gà trộn rau thơm thanh mát."
},
{
    name:"Bánh bèo",
    image:"assets/banhbeo.jpg",
    desc:"Bánh bèo Huế thơm ngon."
},
{
    name:"Cháo lòng",
    image:"assets/chaolong.jpg",
    desc:"Cháo lòng nóng hổi, đậm đà."
},
{
    name:"Cá kho tộ",
    image:"assets/cakhoto.jpg",
    desc:"Cá kho tộ đậm vị ăn cùng cơm trắng."
},
{
    name:"cá lóc nướng ",
    image:"assets/calocnuong.jpg",
    desc:"Cá lóc nướng rơm thơm ngon, đậm đà hương vị quê."
},
];

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){
    let keyword = this.value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let name = card.querySelector("h2").innerText.toLowerCase();

        if(name.includes(keyword)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    });
});
function addFavorite(food){
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const exist = favorites.find(item => item.name === food.name);

    if(!exist){
        favorites.push(food);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert("Đã thêm vào yêu thích!");
    }else{
        alert("Món ăn đã có trong danh sách yêu thích!");
    }
}