const url = "https://api.adviceslip.com/advice";
const request = new Request(url);
const adviceEl = document.querySelector(".advice");
console.log(adviceEl);
window.onload = () => getAdvice();

function updateAdvice() {
  getAdvice();
}

async function getAdvice() {
  try {
    let response = await fetch(request);
    if (!response.ok) throw new Error("could not getAdvice");
    let advice = await response.json();
    console.log(advice);
    console.log(advice.slip.id);
    console.log(advice.slip.advice);
    const markup = `
    <h3 class="uppercase text-lg text-teal-300 font-bold tracking-widest">
      Advice #${advice.slip.id}
    </h3>
    <p class="text-sky-200 my-5 font-bold leading-7">
      "${advice.slip.advice}"
    </p>
    <img src="./images/pattern-divider-mobile.svg" alt="" class="mb-8">
    <button class="bg-teal-300 rounded-full w-16 h-16 flex items-center justify-center -mb-16 mx-auto" onClick = "updateAdvice()">
      <!-- <p>hello</p> -->
      <img src="./images/icon-dice.svg" alt="dice image"/>
    </button>
`;
    adviceEl.innerHTML = markup;
  } catch (error) {
    console.warn(error.message);
  }
}
