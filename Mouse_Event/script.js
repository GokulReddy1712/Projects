const containerE1 = document.querySelector(".container")

window.addEventListener("mousemove",(event) => {
    containerE1.innerHTML = `
    <div class="Mouse-Event">
    ${event.clientX}
    <h4>Mouse X Position(px)</h4>
    </div>
    <div class="Mouse-Event">
    ${event.clientY}
    <h4>Mouse Y Position(px)</h4>
    </div>
`
});

