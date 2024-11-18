const wrapper = document.getElementById("wrapper");
const gif = document.getElementById("gif");
const question = document.getElementById("question");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

let moveCount = 0; // Biến đếm số lần nút "No" di chuyển
const maxMoves = 5; // Số lần tối đa nút "No" di chuyển

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Bạn của tôi đã trưởng thành, Bạn đã đưa ra quyết định rất đúng đắn!";
  gif.src = "https://i.pinimg.com/originals/ce/63/c2/ce63c26f8747e2181594d2db8787c026.gif";
  noBtn.hidden = true;
  yesBtn.hidden = true;
});

noBtn.addEventListener("mouseover", () => {
  if (moveCount < maxMoves) {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute"; // Đảm bảo vị trí được đặt đúng để di chuyển
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    moveCount++; // Tăng số lần di chuyển mỗi khi chuột lướt qua
  }
});

noBtn.addEventListener("click", () => {
  question.innerHTML = "Có bị khùng không chọn lại đi -.-";
  gif.src = "https://i.pinimg.com/originals/03/a4/28/03a428ee705240475480c7722c6c2b3b.gif";
  noBtn.hidden = true;
  // yesBtn.hidden = true;
});
