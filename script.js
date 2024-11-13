const febHolidays = [
  "Dear heart waali,",
  "First of all, I am sorry❤️",
  "You're my kya bolu bas",
  "You are cutu sammy😇",
  "And of course...",
  "My pyari pasandida aurat😌",
  "I will always be there for you",
  "No matter how far we are🥰",
  "You're the prettiest, cutest, funniest,",
  "sweetest girl alive.",
  "In one word, you're just perfect.😍",
  "I'm the happiest one after meet u",
  "I'm so grateful I met you❤️",
  "I'll always do my best to keep you happy🥺",
  "You are the most special person in my life🥰",
  "you are my better half😚",
  "And trust me I dont want anyone else",
  "There's no one better than you❤️",
  "You're the best moti !!",
  "aur badmoshi nhi mittr🥸",
  "aur moti jyada gussa ni hoti😒",
  "There's some hardships,",
  "aree ptaa me na shy type bhola baalak hu😞",
  "but i want to ur prior friend❤️",
  "This for you,",
  "Ki tere maathe ke kumkum ko",
  "Te tilak lga kr ghumungaa",
 "Teri baali ki chunchun ko 🤣❤️",
 "Me dil se laga kr jhoomongaa",
 "Lag rha jaada ho gya",
  "But anyways, sorry ignore kiya",
  "You're the sukoon,",
  "lastly hatt motki kahi ki😂❤️"
];
const ulEl = document.querySelector("ul");
const d = new Date();
let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
let activeIndex = daynumber;
const rotate = -360 / febHolidays.length;
init();
function init() {
  febHolidays.forEach((holiday, idx) => {
    const liEl = document.createElement("li");
    liEl.style.setProperty("--day_idx", idx);
    liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
      idx + 1
    }</time><span>${holiday}</span>`;
    ulEl.append(liEl);
  });
  ulEl.style.setProperty("--rotateDegrees", rotate);
  adjustDay(0);
}
function adjustDay(nr) {
  daynumber += nr;
  ulEl.style.setProperty("--currentDay", daynumber);
  const activeEl = document.querySelector("li.active");
  if (activeEl) activeEl.classList.remove("active");
  activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
  const newActiveEl = document.querySelector(
    `li:nth-child(${activeIndex + 1})`
  );
  document.body.style.backgroundColor = window.getComputedStyle(
    newActiveEl
  ).backgroundColor;
  newActiveEl.classList.add("active");
}
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      adjustDay(-1);
      break;
    case "ArrowDown":
      adjustDay(1);
      break;
    default:
      return;
  }
});
