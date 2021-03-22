{
    const canvas = document.getElementById("jsCanvas");
    const ctx = canvas.getContext("2d");
    const colors = document.getElementsByClassName("jsColor");

    // 동작 범위 필요 canvas만 실행 하면 안됨
    canvas.width = 700;
    canvas.height = 700;

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2.5;

    let painting = false;

    function stopPainting() {
        painting = false;
    }

    function startPainting(event) {
        painting = true;
    }

    function onMouseMove(event) {
        const x = event.offsetX;
        const y = event.offsetY;
        if (!painting) {
            ctx.beginPath();
            ctx.moveTo(x,y);
        } else {
            ctx.lineTo(x,y);
            ctx.stroke();
        }
    }

    function handleColorClick (event) {
        const color = event.target.style.backgroundColor;
        ctx.strokeStyle = color;
    }

    if (canvas) {
        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mousedown", startPainting);
        canvas.addEventListener("mouseup", stopPainting);
        canvas.addEventListener("mouseleave", stopPainting);
    }

    Array.from(colors).forEach(color =>
        color.addEventListener("click",handleColorClick)
    );
}