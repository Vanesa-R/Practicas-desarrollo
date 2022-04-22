
/* DOM */
let id = document.querySelector(".id__advice");
let quote = document.querySelector(".quote__advice");
let btn = document.querySelector(".generate__advice")


btn.addEventListener("click", () => {
    randomAdvice();
})

const getDates = () => {

    fetch("https://api.adviceslip.com/advice", {
    "method": "GET",
    
})
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(error))
    .then(res => res.json())
    .then(data => {

       let advice = data.slip.advice;
       let idData = data.slip.id;
            
        quote.textContent = `❝${advice}❞`;
        id.textContent = idData;
        quote.classList.remove("--fadeOut");
        id.classList.remove("--fadeOut");
    })

    .catch(err => console.log(err))
}
getDates();



const randomAdvice = () => {
    
    btn.classList.add("--active");
    quote.classList.add("--fadeOut");
    id.classList.add("--fadeOut")
    setTimeout(() => {
        getDates();
        btn.classList.remove("--active");
    }, 800);

}