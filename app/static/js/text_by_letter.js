
export function by_Letter(message) {
    const textElement = document.getElementById("by_letter_output1")
    textElement.textContent = "";
    let i = 0;
    const interval = setInterval(function () {
        textElement.textContent += message.charAt(i);
        i++;
        if (i > message.length) {
            clearInterval(interval);
        }
        window.addEventListener("click", (event) => {
            if (
                currentIntersect.object === cubeSubmit2 ||
                currentIntersect.object === cubeSubmit20 ||
                currentIntersect.object === cubeSubmit22 ||
                currentIntersect.object === cubeSubmit30 ||
                currentIntersect.object === cubeSubmit31 ||
                currentIntersect.object === cubeSubmit32 ||
                currentIntersect.object === cubeSubmit40 ||
                currentIntersect.object === cubeSubmit41 ||
                currentIntersect.object === cubeSubmit42 ||
                currentIntersect.object === cubeSubmit50 ||
                currentIntersect.object === cubeSubmit51 ||
                currentIntersect.object === cubeSubmit52
            ) {
                clearInterval(interval)
                textElement.innerHTML = "";
            }
        })
    }, 10);

}
