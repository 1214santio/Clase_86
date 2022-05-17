lienzo = new fabric.Canvas("myCanvas");
jugador_x = 10;
jugador_y = 10;
ancho_bloque = 30;
alto_bloque = 30;
objeto_jugador = "";
objeto_bloque = "";
function imagen_jugador()
{
    fabric.Image.fromURL("player.png", function(Img)
    {
        objeto_jugador = Img;
        objeto_jugador.scaleToWidth(150);
        objeto_jugador.scaleToHeight(140);
        objeto_jugador.set(
        {
            top: jugador_y,
            left: jugador_x
        }
        );
        lienzo.add(objeto_jugador);
    });
}
function imagen_bloque(tipo_de_bloque)
{
    fabric.Image.fromURL(tipo_de_bloque, function(Img)
    {
        objeto_bloque = Img;
        objeto_bloque.scaleToWidth(ancho_bloque);
        objeto_bloque.scaleToHeight(alto_bloque);
        objeto_bloque.set(
        {
            top: jugador_y,
            left: jugador_x
        }
        );
        lienzo.add(objeto_bloque);
    });
}
window.addEventListener("keydown", tecla_presionada);
function tecla_presionada(e)
{
    tecla = e.keyCode;
    console.log(tecla);
    if (e.shiftKey == true && tecla == "81")
    {
        ancho_bloque = ancho_bloque + 10;
        alto_bloque = alto_bloque + 10;
        document.getElementById("current_width").innerHTML = ancho_bloque;
        document.getElementById("current_height").innerHTML = alto_bloque;
    }
    if (e.shiftKey == true && tecla == "69")
    {
        ancho_bloque = ancho_bloque - 10;
        alto_bloque = alto_bloque - 10;
        document.getElementById("current_width").innerHTML = ancho_bloque;
        document.getElementById("current_height").innerHTML = alto_bloque;
    }
    if (tecla == "37")
    {
        izquierda();
    }
    if (tecla == "38")
    {
        arriba();
    }
    if (tecla == "39")
    {
        derecha();
    }
    if (tecla == "40")
    {
        abajo();
    }
    if (tecla == "80")
    {
        if (tecla == "65")
        {
           tipo_de_bloque("yellow_wall.png");
        }
    }
    if (tecla == "80")
    {
        if (tecla == "78")
        {
           tipo_de_bloque("wall.png");
        }
    }
    if (tecla == "82")
    {
        if (tecla == "78")
        {
           tipo_de_bloque("nether_stone.jpg");
        }
    }
    if (tecla == "82")
    {
        if (tecla == "83")
        {
           tipo_de_bloque("stone.jpg");
        }
    }
    if (tecla == "83")
    {
        if (tecla == "78")
        {
           tipo_de_bloque("ground.png");
        }
    }
    if (tecla == "83")
    {
        if (tecla == "67")
        {
           tipo_de_bloque("light_green_ground.png");
        }
    }
    if (tecla == "83")
    {
        if (tecla == "70")
        {
           tipo_de_bloque("dark_green_ground.png");
        }
    }
    if (tecla == "76")
    {
        tipo_de_bloque("light.png");
    }
    if (tecla == '84')
    {
        tipo_de_bloque('trunk.jpg');
    }
    
}
function izquierda()
{
    if (jugador_x >= 0)
    {
        jugador_x = jugador_x - ancho_bloque;
        lienzo.remove(objeto_jugador);
        imagen_jugador();
    }
};
function derecha()
{
    if (jugador_x < 851)
    {
        jugador_x = jugador_x + ancho_bloque;
        lienzo.remove(objeto_jugador);
        imagen_jugador();
    }
};
function arriba()
{
    if (jugador_y >= 0)
    {
        jugador_y = jugador_y - ancho_bloque;
        lienzo.remove(objeto_jugador);
        imagen_jugador();
    }
};
function abajo()
{
    if (jugador_y < 460)
    {
        jugador_y = jugador_y + ancho_bloque;
        lienzo.remove(objeto_jugador);
        imagen_jugador();
    }
}