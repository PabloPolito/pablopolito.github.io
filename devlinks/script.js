function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")

    if(html.classList.contains("light")) {
        img.setAttribute("src","./assets/profile-dark.png")
        img.setAttribute("alt","Imagem Avatar Pablo Polito Fundo Preto")
    } else {
        img.setAttribute("src","./assets/profile-white.png")
        img.setAttribute("alt","Imagem Avatar Pablo Polito Fundo Branco")
    }
}