const comments = document.querySelector("#comments");
const commentButton = document.querySelector(".commentButton");

const initComments = [
  { name: "양갱이", contents: "안녕", date: "2021.05.05" },
  { name: "정강이", contents: "메롱", date: "2021.05.06" },
  { name: "메롱이", contents: "메롱", date: "2021.05.06" },
];

let reply = {
  init: () => {
    initComments.forEach(reply.renderMessage);
  },

  renderMessage: ({ name, contents, date }) => {
    let text = `
    <div class ="comment">
    <div class="info">
    <div class="name">${name}</div>
    <div class="date">${date}</div>
    <div class="menubar">여기는 메뉴</div>
    </div>
   <div class="contents">${contents}</div>
   <div class=
   
   <div>`;

    comments.innerHTML = comments.innerHTML + text;
  },
};
reply.init();

function handleClick() {
  if (!commentsStatus) {
    initComments.forEach((el) => {
      let divElement = document.createElement("div");
      divElement.classList.add("contentsDetail");
      divElement.textContent = el.contents;
      comments.appendChild(divElement);
    });
    commentsStatus = true;
  } else {
    while (comments.hasChildNodes()) {
      comments.removeChild(comments.firstChild);
    }
    commentsStatus = false;
  }
}
