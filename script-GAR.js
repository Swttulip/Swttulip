window.addEventListener("load", function () {
    alert("Welcome to Edralyn's Portfolio!");
});

const toggleBtn = document.getElementById("colorToggleBtn");

let isDefault = true;

toggleBtn.addEventListener("click", function () {
    if (isDefault) {
        document.body.style.backgroundColor = "#F4A300"; 
        document.body.style.color = "#fff"; 
        isDefault = false;
    } else {
        document.body.style.backgroundColor = "#FFF8F0"; 
        document.body.style.color = "#3B2F2F"; 
        isDefault = true;
    }

    toggleBtn.style.transform = "scale(0.9)";
    setTimeout(() => {
        toggleBtn.style.transform = "scale(1)";
    }, 150);
});