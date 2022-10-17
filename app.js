const wrapper = document.getElementById("wrapper");

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const uniqueRand = (min, max, prev) => {
    let next = prev;
    while(prev === next) next = rand(min, max);
    return next;
}

const combinations = [
    { configuration: 1, roundness: 1},
    { configuration: 1, roundness: 2},
    { configuration: 1, roundness: 4},
    { configuration: 2, roundness: 1},
    { configuration: 2, roundness: 2},
    { configuration: 3, roundness: 4},
];

let prev = 0;

setInterval(() => {
    const index = uniqueRand(0, combinations.length - 1, prev),
        combination = combinations[index];

    wrapper.dataset.configuration = combination.configuration;
    wrapper.dataset.roundness = combination.roundness;

    prev = index;
}, 3000);


document.getElementById("wrapper").onmousemove = e => {
    for(const card of document.getElementsByClassName("shape")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }