//page-01
//logIn button
document.getElementById("log-in").onclick = function(){
    document.getElementById("login").style.position = "absolute";
    document.getElementById("login").style.left = "37%"
    document.getElementById("login").style.zIndex = "2";
    document.getElementById("nav").style.zIndex = "0";
    document.getElementById("box").style.zIndex = "1"
    document.getElementById("box").style.backgroundColor = "#0000008b"
    document.getElementById("forget").style.left = "23%"
    document.body.style.overflowY = "hidden"
}
document.getElementById("close-1").onclick = function(){
    document.getElementById("login").style.position = "static";
    document.getElementById("login").style.zIndex = "0";
    document.getElementById("nav").style.zIndex = "10";
    document.getElementById("box").style.zIndex = "-1";
    document.getElementById("box").style.backgroundColor = "#eeeeee";
    document.getElementById("forget").style.left = "64.5%";
    document.body.style.overflowY = "scroll";
}
//singin button
document.getElementById("sign-in").onclick = function(){
    document.getElementById("login").style.position = "absolute";
    document.getElementById("signin").style.visibility = "visible"
    document.getElementById("login").style.visibility = "hidden"
    document.body.style.overflowY = "hidden"
    document.getElementById("nav").style.zIndex = "0";
    document.getElementById("box").style.zIndex = "1"
    document.getElementById("box").style.backgroundColor = "#0000008b"
}
document.getElementById("close-2").onclick = function(){
    document.getElementById("login").style.position = "static";
    document.getElementById("signin").style.visibility = "hidden"
    document.getElementById("login").style.visibility = "visible"
    document.body.style.overflowY = "scroll"
    document.getElementById("nav").style.zIndex = "10";
    document.getElementById("box").style.zIndex = "-1"
    document.getElementById("box").style.backgroundColor = "#ffffffff"
}
//page-02
//Button-1

document.getElementById("circle1").onclick = function button1() {
  document.getElementById("circle1").style.backgroundColor = "#C28B00";
  document.getElementById("circle1").style.borderColor = "#C28B00";
  document.getElementById("circle2").style.backgroundColor = "#d5d5d5";
  document.getElementById("circle2").style.borderColor = "#d5d5d5";
  document.getElementById("circle3").style.backgroundColor = "#d5d5d5";
  document.getElementById("circle3").style.borderColor = "#d5d5d5";
  document.getElementById("circle4").style.backgroundColor = "#d5d5d5";
  document.getElementById("circle4").style.borderColor = "#d5d5d5";
  document.getElementById("t-2").innerHTML = "chai time snack idea";
  document.getElementById("t-2").style.color = "#C28B00";

  const images = [
    "https://i.pinimg.com/736x/35/48/4e/35484e58f34a7dda919b32e9e5aa8391.jpg",
    "https://i.pinimg.com/736x/52/17/dc/5217dc6995b98b16643669bb2be799b1.jpg",
    "https://i.pinimg.com/736x/db/3e/db/db3edba531649c228318b2c756a27975.jpg",
    "https://i.pinimg.com/736x/20/fb/2f/20fb2f1018ed0050cbfc41eb654d0ecf.jpg",
    "https://i.pinimg.com/736x/dc/e8/d6/dce8d6eae759e047919a1d77552c6f27.jpg",
    "https://i.pinimg.com/736x/ad/a4/18/ada418d77a8bffdb9b6fae98253b4974.jpg",
    "https://i.pinimg.com/736x/34/2a/c3/342ac3bd1da9762f33e3a938559072ff.jpg"
  ];

  for (let i = 1; i <= 7; i++) {
    const img = document.getElementById(`img${i}`);
    img.classList.remove("page2-image");
    void img.offsetWidth;
    img.src = images[i - 1];
    img.classList.add("page2-image");
  }
}


//Button-2
document.getElementById("circle2").onclick = function button2() {
  document.getElementById("circle1").style.backgroundColor = "#d5d5d5";
  document.getElementById("circle1").style.borderColor = "#d5d5d5";
  document.getElementById("circle2").style.backgroundColor = "#0076D3";
  document.getElementById("circle2").style.borderColor = "#0076D3";
  document.getElementById("circle3").style.backgroundColor = "#d5d5d5";
  document.getElementById("circle3").style.borderColor = "#d5d5d5";
  document.getElementById("circle4").style.backgroundColor = "#d5d5d5";
  document.getElementById("circle4").style.borderColor = "#d5d5d5";
  document.getElementById("t-2").innerHTML = "home decor idea";
  document.getElementById("t-2").style.color = "#0076D3";
  const images = [
    "https://i.pinimg.com/736x/58/3f/9a/583f9a1fe34eedb6bd44db1f4054594f.jpg",
    "https://i.pinimg.com/1200x/0a/54/be/0a54be8892013598bec963242bc97ffc.jpg",
    "https://i.pinimg.com/736x/4b/9a/7c/4b9a7cae3d245470b61a30b19c725423.jpg",
    "https://i.pinimg.com/736x/32/8c/f3/328cf3b06dc6c54fce57bf955287cc5d.jpg",
    "https://i.pinimg.com/736x/fc/c8/6c/fcc86c4e08924f025615e4aee872c65d.jpg",
    "https://i.pinimg.com/736x/b0/46/71/b046719a5a03fe9b006ec405c5866a46.jpg",
    "https://i.pinimg.com/736x/e7/b8/b6/e7b8b6140e5ff9573a0d25b00ea361fe.jpg"
  ];
  for (let i = 1; i <= 7; i++) {
    const img = document.getElementById(`img${i}`);
    img.classList.remove("page2-image");
    void img.offsetWidth;
    img.src = images[i - 1];
    img.classList.add("page2-image");
  }
};

//Button-3
document.getElementById("circle3").onclick = function button3() {
  document.getElementById("circle1").style.backgroundColor = "#d5d5d5";
  document.getElementById("circle1").style.borderColor = "#d5d5d5";
  document.getElementById("circle2").style.backgroundColor = "#d5d5d5";
  document.getElementById("circle2").style.borderColor = "#d5d5d5";
  document.getElementById("circle3").style.backgroundColor = "#518C7B";
  document.getElementById("circle3").style.borderColor = "#518C7B";
  document.getElementById("circle4").style.backgroundColor = "#d5d5d5";
  document.getElementById("circle4").style.borderColor = "#d5d5d5";
  document.getElementById("t-2").innerHTML = "outfit idea";
  document.getElementById("t-2").style.color = "#518C7B";
  const images = [
    "https://i.pinimg.com/736x/de/9e/92/de9e92353bcc6350b4ebf12023b65bfd.jpg",
    "https://i.pinimg.com/736x/5f/90/25/5f9025ebfea50238fb3e253b4e15437a.jpg",
    "https://i.pinimg.com/736x/2d/4a/15/2d4a1577c6412634029d3f2271d72418.jpg",
    "https://i.pinimg.com/736x/8a/37/5a/8a375a79ddef3f5dd316f591ec2b2781.jpg",
    "https://i.pinimg.com/736x/eb/4e/a0/eb4ea02da99d25c4e7877146c19e5be8.jpg",
    "https://i.pinimg.com/736x/f8/c0/23/f8c023c81e32a491110822e799467253.jpg",
    "https://i.pinimg.com/736x/e6/53/c5/e653c505a0a2c47f91d61420604166c7.jpg"
  ];
  for (let i = 1; i <= 7; i++) {
    const img = document.getElementById(`img${i}`);
    img.classList.remove("page2-image");
    void img.offsetWidth;
    img.src = images[i - 1];
    img.classList.add("page2-image");
  }
};

//Button-4
document.getElementById("circle4").onclick = function button4() {
  // Update circle styles
  document.getElementById("circle1").style.backgroundColor = "#d5d5d5";
  document.getElementById("circle1").style.borderColor = "#d5d5d5";
  document.getElementById("circle2").style.backgroundColor = "#d5d5d5";
  document.getElementById("circle2").style.borderColor = "#d5d5d5";
  document.getElementById("circle3").style.backgroundColor = "#d5d5d5";
  document.getElementById("circle3").style.borderColor = "#d5d5d5";
  document.getElementById("circle4").style.backgroundColor = "#507A57";
  document.getElementById("circle4").style.borderColor = "#507A57";
  document.getElementById("t-2").innerHTML = "DIY idea";
  document.getElementById("t-2").style.color = "#507A57";

  const images = [
    "https://i.pinimg.com/736x/31/0e/9d/310e9d19a71fcbf448b25568ef5f06ee.jpg",
    "https://i.pinimg.com/736x/09/bc/c3/09bcc38300b6b961448c7a2b44820ef6.jpg",
    "https://i.pinimg.com/1200x/7b/fd/11/7bfd11aea24cf1e126e44d06a7739673.jpg",
    "https://i.pinimg.com/1200x/3d/de/37/3dde37bd6df2a55c3bf7323d16ffc213.jpg",
    "https://i.pinimg.com/736x/07/ca/52/07ca52bcbe9f7555a5cbebfe405013bd.jpg",
    "https://i.pinimg.com/736x/0f/37/0b/0f370b9ddf79c9eda2749ea4c4a7bc1b.jpg",
    "https://i.pinimg.com/736x/f9/a5/39/f9a539a3c0476666c20dbf22efa78d7a.jpg"
  ];

  for (let i = 1; i <= 7; i++) {
    const img = document.getElementById(`img${i}`);
    img.classList.remove("page2-image");
    void img.offsetWidth;
    img.src = images[i - 1];
    img.classList.add("page2-image");
  }
};
