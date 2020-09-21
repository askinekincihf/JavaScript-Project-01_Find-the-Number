document.getElementById("button").addEventListener("click", guessNumber);

function guessNumber() {
    const num_1 = document.getElementById("input").value;
    const num_2 = 76;
    if (num_1 == num_2) {
        return alert("Good guess!");
    } else if (num_1 < num_2) {
        return alert("Try a higher number!");
    } else(num_1 > num_2); {
        return alert("Try a smaller number!");
    }
}