//랜덤번호 지정
//유저->번호 입력-go
//번호 맞추면->정답
//낮은번호 -> up
//높은번호 -> down
//reset ->리셋
//5번의 기회 이후 게임 끝 ,버튼 비활성화
//범위 밖의 숫자-> 알려줌(기회 깍지않음)
//이미 입력한 숫자 다시 입력하면 알려준다.(기회 깍지않음)

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chances = 10
let gameOver = false
let chanceArea = document.getElementById("chance-area")
let history = []

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () { userInput.value = ""; })

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1~100사이 숫자만 입력 가능"
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent = "이미 입력한 숫자 입니다. 다른 숫자를 입력해 주세요";
    return
  }
  chances--;
  chanceArea.textContent = `남은기회:${chances}번`; //외워두자`text:${}`
  console.log("chance", chances)

  if (userValue < computerNum) {
    resultArea.textContent = "UP"

  } else if (userValue > computerNum) {
    resultArea.textContent = "DOWN"

  } else {
    resultArea.textContent = "정답";
    gameOver = true
  }

  history.push(userValue)
  console.log(history)

  if (chances < 1) {
    gameOver = true;
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function reset() {
  //user input정리
  userInput.value = ""
  //새로운 번호 생성
  pickRandomNum();
  resultArea.textContent = "결과값";
}
pickRandomNum();