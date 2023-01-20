canvas = new fabric.Canvas("MyCanvas")
ancho = 30
alto = 30
x = 500
y = 300
jugador = ""
block = ""
function actualizar_jugador() {
    fabric.Image.fromURL("player.png", function (imagen) {
        jugador = imagen;
        jugador.scaleToWidth(150)
        jugador.scaleToHeight(140)
        jugador.set({ top: y, left: x })
        canvas.add(jugador)
    })
}
function actualizar_block(img) {
    fabric.Image.fromURL(img, function (imagen) {
        block = imagen;
        block.scaleToWidth(ancho)
        block.scaleToHeight(alto)
        block.set({ top: y, left: x })
        canvas.add(block)
    })
}
window.addEventListener("keydown", tecla)
function tecla(e) {
    codigo = e.keyCode;
    if (codigo == "40" && y < 600) {
        y = y + alto
        canvas.remove(jugador)
        actualizar_jugador()
    }
    if (codigo == "38" && y > 0) {
        y = y - alto
        canvas.remove(jugador)
        actualizar_jugador()
    }
    if (codigo == "39" && x < 1000) {
        x = x + alto
        canvas.remove(jugador)
        actualizar_jugador()
    }
    if (codigo == "37" && x > 0) {
        x = x - ancho
        canvas.remove(jugador)
        actualizar_jugador()
    }
}




