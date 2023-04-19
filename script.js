const centimeter = document.querySelector("#cm"),
inch = document.querySelector("#in");
const M = document.querySelector("#m"),
MM = document.querySelector("#mm");

window.addEventListener("load", () => centimeter.focus());
window.addEventListener("load", () => JPY.focus());

centimeter.addEventListener("input", ()=>{
    inch.value = (centimeter.value * 0.3937).toFixed(4);
    if(!centimeter.value) inch.value = "";

});
inch.addEventListener("input", ()=>{
    centimeter.value = (inch.value * 2.54).toFixed(2);
    if(!inch.value) centimeter.value = "";
});

M.addEventListener("input", ()=>{
    MM.value = (M.value * 1000).toFixed(0);
    if(!M.value) MM.value = "";

});
MM.addEventListener("input", ()=>{
    M.value = (MM.value * 1).toFixed(2);
    if(!MM.value) M.value = "";

});


