shareIcon.addEventListener("click", (event) => {
    cardCredits.classList.toggle("active");

    if (cardCredits.classList.contains("active")) {
        creditsLeftpart.style.display = "none"

        shareBar.style.display = "flex";
        shareIconContainer.style.backgroundColor = "#9eafc2";
        shareIcon.src = "./assets/img/icon-share-inverted.svg";
    } else {
        creditsLeftpart.style.display = "flex";

        shareBar.style.display = "none";

        shareIconContainer.style.backgroundColor = "#ecf2f8";
        shareIcon.src = "./assets/img/icon-share.svg";
    }
})