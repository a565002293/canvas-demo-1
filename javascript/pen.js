const $ = id => document.getElementById(id)
let canvas = $('canvas');

// canvas宽高与视窗宽高相同
canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight
let ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.strokeStyle = 'black';
ctx.lineWidth = 4;
ctx.lineCap = "round";

$('red').onclick = () => {
    ctx.fillStyle = "red";
    ctx.strokeStyle = 'red';
}
$('blue').onclick = () => {
    ctx.fillStyle = "blue";
    ctx.strokeStyle = 'blue';
}
$('green').onclick = () => {
    ctx.fillStyle = "green";
    ctx.strokeStyle = 'green';
}
$('rubber').onclick = () => {
    ctx.fillStyle = "rgb(204, 237, 186)e";
    ctx.strokeStyle = 'rgb(204, 237, 186)';
}
$('strong').onclick = () => {
    ctx.lineWidth = 10;
}
$('mid').onclick = () => {
    ctx.lineWidth = 4;
}
$('thin').onclick = () => {
    ctx.lineWidth = 2;
}
let painting = false

// 创建drawline函数，画线
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
// 判断是否有触屏事件
var isTouchDevice = 'ontouchstart' in document.documentElement
if (isTouchDevice) {
    // 记录初始位置
    canvas.ontouchstart = (e) => {
        let x = e.touches[0].clientX
        let y = e.touches[0].clientY
        last = [x, y]
    }
    canvas.ontouchmove = (e) => {
        let x = e.touches[0].clientX
        let y = e.touches[0].clientY
        drawLine(last[0], last[1], x, y)
        // 更新初始位置
        last = [x, y]
    }
} else {
    canvas.onmousedown = (e) => {
        painting = true
        last = [e.clientX, e.clientY]
    }

    canvas.onmousemove = (e) => {
        if (painting === true) {
            drawLine(last[0], last[1], e.clientX, e.clientY)
            last = [e.clientX, e.clientY]
        }
    }

    canvas.onmouseup = () => {
        painting = false
    }

}


