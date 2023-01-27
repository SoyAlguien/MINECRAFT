canvas = new fabric.Canvas("myCanvas")
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
    tecla = e.key;
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
    if(tecla == "1"){
        actualizar_block("cloud.jpg")
    }
    if(tecla == "2"){
        actualizar_block("dark_green.png")
    }
    if(tecla == "3"){
        actualizar_block("ground.png")
    }
    if(tecla == "4"){
        actualizar_block("light_green.png")
    }
    if(tecla == "5"){
        actualizar_block("roof.jpg")
    }
    if(tecla == "6"){
        actualizar_block("trunk.jpg")
    }
    if(tecla == "7"){
        actualizar_block("unique.png")
    }
    if(tecla == "8"){
        actualizar_block("wall.jpg")
    }

    if(tecla == "9"){
        actualizar_block("yellow_wall.png")
    }
    if(e.shiftKey&&tecla=="+"){
        ancho=ancho+10
        alto=alto+10
        document.getElementById("ancho").innerHTML=ancho
        document.getElementById("alto").innerHTML=alto    
    }
    if(e.shiftKey&&tecla=="-"){
        ancho=ancho-10
        alto=alto-10
        document.getElementById("ancho").innerHTML=ancho
        document.getElementById("alto").innerHTML=alto    
    }
}
