const comments = document.querySelector("#comments");
const commentButton = document.querySelector(".commentButton");
const mycomment = document.querySelector("#mycomment");

let isLogin = false;

const initComments = [
  {
    name: "양갱이",
    contents: "여기는 댓글영역입니다.",
    date: "2021.05.05",
    like: 0,
    dislike: 1,
  },
  {
    name: "정강이",
    contents: "저도 동의합니다.",
    date: "2021.05.06",
    like: 1,
    dislike: 1,
  },
  {
    name: "메롱이",
    contents: "이하동문입니다.",
    date: "2021.05.07",
    like: 2,
    dislike: 0,
  },
];

let loginInfo = {
  name: "야옹이",
  isLike: false,
};

let reply = {
  init: () => {
    initComments.forEach(reply.renderComment);
  },

  renderComment: ({ name, contents, date, like, dislike }) => {
    let text = `
      <div class="comment">
        <div class="info">
          <div class="nameArea">
            <span class="mark">ㄴ</span>
            <span class="name">${name
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")}</span>
            
          </div>

          <div class="date">${date}</div>
          <button class="delete" onClick="reply.deleteMessage(${name})">삭제</button>
        </div>
        <div class="contents">${contents
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")}</div>
        <div class="utilArea">
          <button class="utilButton">대댓글</button>
          <button class="utilButton" onClick="handleLike(${like})">
            좋아요${like}
          </button>
          <button class="utilButton">싫어요${dislike}</button>
        </div>
      </div>`;
    comments.innerHTML = comments.innerHTML + text;
  },
  renderMyComment: () => {
    let text = `<div id="mycommentWrap" onClick=reply.handleOpenLogin()>
        <div id="mycommentHead">
        <h3 id="headcontent">나도 한마디!</h3>
        </div>
        <div id="mycommentTextArea">
          <textarea id="mycommentText" placeholder="댓글을 입력해주세요" disabled></textarea>
          <button id="mycommentButton">등록</button>
        </div>
      </div>`;
    mycomment.innerHTML = text;
  },

  handleOpenLogin: () => {
    isLogin = true;
    alert("정상적으로 로그인되었습니다.");
  },
  clearMessage: () => {
    comments.innerHTML = "";
  },
  deleteMessage: (name) => {
    initComments.filter((el) => {
      return el.name !== name;
    });
    reply.clearMessage();
    reply.init();
  },
};
reply.init();
reply.renderMyComment();

const handleLike = async ({ likes }) => {
  if (!isLogin) {
    alert("로그인해주세요.");
  } else if (!loginInfo.isLike) {
    likes = likes + 1;
    await console.log(initComments);
    await console.log(likes);
    await reply.clearMessage();
    await reply.init();
  }
};
