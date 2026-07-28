const search = document.getElementById("search");
const results = document.getElementById("results");
const cards = document.querySelectorAll(".profileCard");

search.addEventListener("input", () => {
    const value = search.value.toLowerCase().trim();

    results.innerHTML = "";

    if (value === "") {
        results.style.display = "none";

        cards.forEach(card => {
            card.style.display = "";
        });

        return;
    }

    let found = 0;

    cards.forEach(card => {
        const name = card.querySelector("strong").textContent.toLowerCase();

        if (name.includes(value)) {
            found++;

            const item = document.createElement("div");
            item.classList.add("result");
            item.textContent = card.querySelector("strong").textContent;

            item.addEventListener("click", () => {
                search.value = item.textContent;
                results.style.display = "none";

                cards.forEach(c => c.style.display = "none");

                card.style.display = "";

                card.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            });

            results.appendChild(item);
        }
    });

    results.style.display = found ? "block" : "none";
});