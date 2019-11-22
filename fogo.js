const coresCubo = [{ "r": 0, "g": 0, "b": 255 }, { "r": 255, "g": 120, "b": 5 }, { "r": 0, "g": 255, "b": 0 }, { "r": 255, "g": 0, "b": 0 }, { "r": 255, "g": 255, "b": 255 }, { "r": 255, "g": 255, "b": 0 }]
//                              blue 0                   orange 1                    gren 2                       red 3                           white 4                        yellow 5
const WiDTH = 3
const HEIGTH = 3
const cubo = {}

function main() {
    criaFace()
}

function criaFace() { //cria o vetor
    cubo.front = createMatriz(0)
    cubo.left = createMatriz(1)
    cubo.back = createMatriz(2)
    cubo.rigth = createMatriz(3)
    cubo.top = createMatriz(4)
    cubo.botton = createMatriz(5)

    console.log(cubo)
    renderizaCubo()
}

function setaCubo(){
    cubo.front[0] = [1,0,5]
    cubo.front[1] = [1,0,1]
    cubo.front[2] = [3,2,3]

    cubo.left[0] = [3,3,2]
    cubo.left[1] = [2,1,1]
    cubo.left[2] = [0,1,0]

    cubo.back[0] = [1,0,1]
    cubo.back[1] = [5,2,4]
    cubo.back[2] = [3,3,4]

    cubo.rigth[0] = [0,5,4]
    cubo.rigth[1] = [3,3,0]
    cubo.rigth[2] = [2,0,4]

    cubo.top[0] = [5,5,5]
    cubo.top[1] = [2,4,5]
    cubo.top[2] = [2,3,2]

    cubo.botton[0] = [2,4,5]
    cubo.botton[1] = [4,5,4]
    cubo.botton[2] = [0,2,4]

    renderizaCubo()
    console.log(cubo)
}

function createMatriz(color) {
    let mt = new Array()
    for (let i = 0; i < WiDTH; i++) {
        mt[i] = new Array()
        for (let j = 0; j < HEIGTH; j++) {
            mt[i][j] = color
        }
    }
    return mt
}

function renderizaCubo() {  //cria tabela

    let html = '<div class="container">'

    html += '<table cellpadding = 0 cellspacing = 0>'
    for (let colum = 0; colum < HEIGTH; colum++) {
        html += '<tr>'

        for (let row = 0; row < WiDTH; row++) {
            const pixelIndex = row + (WiDTH * colum) + 1
            const colorPixel = cubo.top[colum][row]
            const cor = coresCubo[colorPixel]
            const corString = `${cor.r},${cor.g},${cor.b}`
            html += `<td class="pixel" style=" background-color: rgb(${corString})">`
            html += pixelIndex
            html += '</td>'
        }

        html += '<tr>'
    }
    html += '</table>'

    html += '<div class="containercenter">'

    html += '<table cellpadding = 0 cellspacing = 0>'
    for (let colum = 0; colum < HEIGTH; colum++) {
        html += '<tr>'

        for (let row = 0; row < WiDTH; row++) {
            const pixelIndex = row + (WiDTH * colum) + 1
            const colorPixel = cubo.rigth[colum][row]
            const cor = coresCubo[colorPixel]
            const corString = `${cor.r},${cor.g},${cor.b}`
            html += `<td class="pixel" style=" background-color: rgb(${corString})">`
            html += pixelIndex
            html += '</td>'
        }

        html += '<tr>'
    }
    html += '</table>'

    html += '<table cellpadding = 0 cellspacing = 0>'
    for (let colum = 0; colum < HEIGTH; colum++) {
        html += '<tr>'

        for (let row = 0; row < WiDTH; row++) {
            const pixelIndex = row + (WiDTH * colum) + 1
            const colorPixel = cubo.front[colum][row]
            const cor = coresCubo[colorPixel]
            const corString = `${cor.r},${cor.g},${cor.b}`
            html += `<td class="pixel" style=" background-color: rgb(${corString})">`
            html += pixelIndex
            html += '</td>'
        }

        html += '<tr>'
    }
    html += '</table>'
    html += '<table cellpadding = 0 cellspacing = 0>'
    for (let colum = 0; colum < HEIGTH; colum++) {
        html += '<tr>'

        for (let row = 0; row < WiDTH; row++) {
            const pixelIndex = row + (WiDTH * colum) + 1
            const colorPixel = cubo.left[colum][row]
            const cor = coresCubo[colorPixel]
            const corString = `${cor.r},${cor.g},${cor.b}`
            html += `<td class="pixel" style=" background-color: rgb(${corString})">`
            html += pixelIndex
            html += '</td>'
        }

        html += '<tr>'
    }
    html += '</table>'
    html += '</div>'
    html += '<table cellpadding = 0 cellspacing = 0>'
    for (let colum = 0; colum < HEIGTH; colum++) {
        html += '<tr>'

        for (let row = 0; row < WiDTH; row++) {
            const pixelIndex = row + (WiDTH * colum) + 1
            const colorPixel = cubo.botton[colum][row]
            const cor = coresCubo[colorPixel]
            const corString = `${cor.r},${cor.g},${cor.b}`
            html += `<td class="pixel" style=" background-color: rgb(${corString})">`
            html += pixelIndex
            html += '</td>'
        }

        html += '<tr>'
    }
    html += '</table>'

    html += '<table cellpadding = 0 cellspacing = 0>'
    for (let colum = 0; colum < HEIGTH; colum++) {
        html += '<tr>'

        for (let row = 0; row < WiDTH; row++) {
            const pixelIndex = row + (WiDTH * colum) + 1
            const colorPixel = cubo.back[colum][row]
            const cor = coresCubo[colorPixel]
            const corString = `${cor.r},${cor.g},${cor.b}`
            html += `<td class="pixel" style=" background-color: rgb(${corString})">`
            html += pixelIndex
            html += '</td>'
        }

        html += '<tr>'
    }
    html += '</table>'

    html+= '</div>'

    document.querySelector('#fogoTabela').innerHTML = html
}

main()