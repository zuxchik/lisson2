let inp = document.getElementById("input").value
let btn = document.getElementById("button")

btn.addEventListener("click", () => {
    if (inp === "name") {
        window.location = "html.htm"
    } else {
        console.log(inp);
    }
})