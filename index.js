const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const mainHtml = document.getElementById("main");

let heartBtn = "";
let likeCountHtml = "";
let bigHeart = "";
let imgDiv = "";

let isLiked = false;

function renderPost() {
  const profileArray = posts
    .map((data) => {
      let card = "";

      card = `<div class="info">
              <img src=${data.avatar} class="dp dp-hero" alt="" />
              <div>
              <p class="name">${data.name}</p>
              <p class="location">${data.location}</p>
              </div>
              </div>
              <div class="post---div">
              <img src=${data.post} class="post-img" alt="">
              <i class="fa-solid fa-heart dbl-click-heart"></i>
              </div>
              
              <div id="icon-div" class="icons-div">
              <button class="btn heart">
                <i class="fa-regular fa-heart"></i>
              </button>
              <button class="btn">
              <img src="images/icon-comment.png" class="icon" alt="">
              </button>
              <button class="btn">
              <img src="images/icon-dm.png" class="icon" alt="">
              </button>
              </div>
              
              <div class="likes">
                <p class="likes-count"><strong>${data.likes} likes</strong></p>
                <p class="comment"><strong>${data.username}</strong> ${data.comment}</p>
            </div>`;

      return card;
    })
    .join("");

  mainHtml.innerHTML = profileArray;

  heartBtn = document.querySelectorAll(".heart");

  likeCountHtml = document.querySelectorAll(".likes-count");

  bigHeart = document.querySelectorAll(".dbl-click-heart");

  imgDiv = document.querySelectorAll(".post---div");

  for (let i = 0; i < imgDiv.length; i++) {
    imgDiv[i].addEventListener("dblclick", () => {
      bigHeart[i].style.animation = null;

      if (!isLiked) {
        likeBtn = `<i class="fa-solid fa-heart"></i>`;
        isLiked = true;

        posts[i].likes += 1;

        renderPost();

        heartBtn[i].innerHTML = likeBtn;

        bigHeart[i].style.animation = "hrtAnimation 2s ease";
      } else {
        likeBtn = `<i class="fa-solid fa-heart"></i>`;

        renderPost();
        heartBtn[i].innerHTML = likeBtn;

        bigHeart[i].style.animation = "hrtAnimation 2s ease";

        console.log(bigHeart[i]);
      }
    });
  }

  for (let i = 0; i < heartBtn.length; i++) {
    heartBtn[i].addEventListener("click", () => {
      let likeBtn = "";

      renderPost();

      console.log(bigHeart[i]);

      if (!isLiked) {
        likeBtn = `<i class="fa-solid fa-heart"></i>`;
        isLiked = true;

        posts[i].likes += 1;

        renderPost();

        heartBtn[i].innerHTML = likeBtn;

        console.log(bigHeart);
      } else {
        likeBtn = `<i class="fa-regular fa-heart"></i>`;

        isLiked = false;

        posts[i].likes -= 1;

        renderPost();

        heartBtn[i].innerHTML = likeBtn;
      }
    });
  }
}

renderPost();
