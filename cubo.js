const coresCubo = [{ "r": 0, "g": 0, "b": 255 }, { "r": 255, "g": 120, "b": 5 }, { "r": 0, "g": 255, "b": 0 }, { "r": 255, "g": 0, "b": 0 }, { "r": 255, "g": 255, "b": 255 }, { "r": 255, "g": 255, "b": 0 }]
//                              blue 0                   orange 1                    gren 2                       red 3                           white 4                        yellow 5
const WiDTH = 3
const HEIGTH = 3
const cubo = {}
let cont = new Array()

function main() {
    criaFace()
    createMoves()
}

function criaFace() { //cria o vetor
    cubo.front = createMatriz(0)
    cubo.left = createMatriz(1)
    cubo.back = createMatriz(2)
    cubo.rigth = createMatriz(3)
    cubo.top = createMatriz(4)
    cubo.botton = createMatriz(5)

    for (let i = 0; i < 4; i++) {
        cont[i] = 0
    }

    renderizaCubo()
}

function setaCubo() {
    cubo.front[0] = [1, 0, 5]
    cubo.front[1] = [1, 0, 1]
    cubo.front[2] = [3, 2, 3]

    cubo.left[0] = [3, 3, 2]
    cubo.left[1] = [2, 1, 1]
    cubo.left[2] = [0, 1, 0]

    cubo.back[0] = [4, 3, 3]
    cubo.back[1] = [4, 2, 5]
    cubo.back[2] = [1, 0, 1]

    cubo.rigth[0] = [0, 5, 4]
    cubo.rigth[1] = [3, 3, 0]
    cubo.rigth[2] = [1, 0, 4]

    cubo.top[0] = [5, 5, 5]
    cubo.top[1] = [2, 4, 5]
    cubo.top[2] = [2, 3, 2]

    cubo.botton[0] = [2, 4, 5]
    cubo.botton[1] = [4, 5, 4]
    cubo.botton[2] = [0, 2, 4]

    renderizaCubo()
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

function createMoves() {
    cubo.topLeft = () => {
        const move = {}
        move.top = createMatriz(0)
        let top = cubo.top

        move.front = cubo.front[0]
        move.left = cubo.left[0]
        move.back = cubo.back[2]
        move.rigth = cubo.rigth[0]

        cubo.back[2] = move.rigth.reverse()
        cubo.rigth[0] = move.front
        cubo.front[0] = move.left
        if (cont[0] % 4 !== 0) {
            cubo.left[0] = move.back
            cont[0]++
        } else {
            cubo.left[0] = move.back.reverse()
        }

        for (let i = 0; i < HEIGTH; i++) {
            for (let j = 0; j < WiDTH; j++) {
                move.top[i][j] = top[2 - j][i]
            }
        }

        cubo.top = move.top

        renderizaCubo()
    }

    cubo.topRigth = () => {
        const move = {}
        move.top = createMatriz(0)
        let top = cubo.top

        move.front = cubo.front[0]
        move.left = cubo.left[0]
        move.back = cubo.back[2]
        move.rigth = cubo.rigth[0]

        cubo.front[0] = move.rigth
        cubo.left[0] = move.front
        cubo.back[2] = move.left.reverse()
        if (cont[1] % 4 !== 0) {
            cubo.rigth[0] = move.back
            cont[1]++
        } else {
            cubo.rigth[0] = move.back.reverse()
        }

        for (let i = 0; i < HEIGTH; i++) {
            for (let j = 0; j < WiDTH; j++) {
                move.top[i][j] = top[j][2-i]
            }
        }

        cubo.top = move.top

        renderizaCubo()
    }

    cubo.leftTop = () => {
        const move = {}
        move.left = createMatriz(0)
        let left = cubo.left

        move.front = new Array()
        for (let i = 0; i < HEIGTH; i++) {
            move.front.push(cubo.front[i][2])
        }

        move.top = new Array()
        for (let i = 0; i < HEIGTH; i++) {
            move.top.push(cubo.top[i][2])
        }

        move.back = new Array()
        for (let i = 0; i < HEIGTH; i++) {
            move.back.push(cubo.back[i][2])
        }

        move.botton = new Array()
        for (let i = 0; i < HEIGTH; i++) {
            move.botton.push(cubo.botton[i][2])
        }

        for (let i = 0; i < HEIGTH; i++) {
            cubo.top[i][2] = move.front[i]
        }

        for (let i = 0; i < HEIGTH; i++) {
            cubo.back[i][2] = move.top[i]
        }

        for (let i = 0; i < HEIGTH; i++) {
            cubo.botton[i][2] = move.back[i]
        }

        for (let i = 0; i < HEIGTH; i++) {
            cubo.front[i][2] = move.botton[i]
        }

        for (let i = 0; i < HEIGTH; i++) {
            for (let j = 0; j < WiDTH; j++) {
                move.left[i][j] = left[2 - j][i]
            }
        }

        cubo.left = move.left

        renderizaCubo()
    }

    cubo.leftBotton = () =>{
        const move = {}
        move.left = createMatriz(0)
        let left = cubo.left

        move.front = new Array()
        for (let i = 0; i < HEIGTH; i++) {
            move.front.push(cubo.front[i][2])
        }

        move.top = new Array()
        for (let i = 0; i < HEIGTH; i++) {
            move.top.push(cubo.top[i][2])
        }

        move.back = new Array()
        for (let i = 0; i < HEIGTH; i++) {
            move.back.push(cubo.back[i][2])
        }

        move.botton = new Array()
        for (let i = 0; i < HEIGTH; i++) {
            move.botton.push(cubo.botton[i][2])
        }

        for (let i = 0; i < HEIGTH; i++) {
            cubo.top[i][2] = move.back[i]
        }

        for (let i = 0; i < HEIGTH; i++) {
            cubo.back[i][2] = move.botton[i]
        }

        for (let i = 0; i < HEIGTH; i++) {
            cubo.botton[i][2] = move.front[i]
        }

        for (let i = 0; i < HEIGTH; i++) {
            cubo.front[i][2] = move.top[i]
        }

        for (let i = 0; i < HEIGTH; i++) {
            for (let j = 0; j < WiDTH; j++) {
                move.left[i][j] = left[j][2-i]
            }
        }

        cubo.left = move.left

        renderizaCubo()
    }

    cubo.bottonRigth = () => {
        const move = {}
        move.botton = createMatriz(0)
        let botton = cubo.botton

        move.front = cubo.front[2]
        move.left = cubo.left[2]
        move.back = cubo.back[0]
        move.rigth = cubo.rigth[2]

        cubo.front[2] = move.rigth
        cubo.left[2] = move.front
        cubo.back[0] = move.left.reverse()
        if (cont[2] % 4 !== 0) {
            cubo.rigth[2] = move.back
            cont[2]++
        } else {
            cubo.rigth[2] = move.back.reverse()
        }

        for (let i = 0; i < HEIGTH; i++) {
            for (let j = 0; j < WiDTH; j++) {
                move.botton[i][j] = botton[2-j][i]
            }
        }

        cubo.botton = move.botton

        renderizaCubo()
    }

    cubo.bottonLeft = () => {
        const move = {}
        move.botton = createMatriz(0)
        let botton = cubo.botton

        move.front = cubo.front[2]
        move.left = cubo.left[2]
        move.back = cubo.back[0]
        move.rigth = cubo.rigth[2]

        cubo.back[0] = move.rigth.reverse()
        cubo.rigth[2] = move.front
        cubo.front[2] = move.left
        if (cont[3] % 4 !== 0) {
            cubo.left[2] = move.back
            cont[3]++
        } else {
            cubo.left[2] = move.back.reverse()
        }

        for (let i = 0; i < HEIGTH; i++) {
            for (let j = 0; j < WiDTH; j++) {
                move.botton[i][j] = botton[j][2 - i]
            }
        }

        cubo.botton = move.botton

        renderizaCubo()
    }

    cubo.rigthBotton = () => {
        const move = {}
        move.rigth = createMatriz(0)
        let rigth = cubo.rigth

        move.front = new Array()
        for (let i = 0; i < HEIGTH; i++) {
            move.front.push(cubo.front[i][0])
        }

        move.top = new Array()
        for (let i = 0; i < HEIGTH; i++) {
            move.top.push(cubo.top[i][0])
        }

        move.back = new Array()
        for (let i = 0; i < HEIGTH; i++) {
            move.back.push(cubo.back[i][0])
        }

        move.botton = new Array()
        for (let i = 0; i < HEIGTH; i++) {
            move.botton.push(cubo.botton[i][0])
        }

        for (let i = 0; i < HEIGTH; i++) {
            cubo.top[i][0] = move.back[i]
        }

        for (let i = 0; i < HEIGTH; i++) {
            cubo.back[i][0] = move.botton[i]
        }

        for (let i = 0; i < HEIGTH; i++) {
            cubo.botton[i][0] = move.front[i]
        }

        for (let i = 0; i < HEIGTH; i++) {
            cubo.front[i][0] = move.top[i]
        }

        for (let i = 0; i < HEIGTH; i++) {
            for (let j = 0; j < WiDTH; j++) {
                move.rigth[i][j] = rigth[2 - j][i]
            }
        }

        cubo.rigth = move.rigth

        renderizaCubo()
    }

    cubo.rigthTop = () => {
        const move = {}
        move.rigth = createMatriz(0)
        let rigth = cubo.rigth

        move.front = new Array()
        for (let i = 0; i < HEIGTH; i++) {
            move.front.push(cubo.front[i][0])
        }

        move.top = new Array()
        for (let i = 0; i < HEIGTH; i++) {
            move.top.push(cubo.top[i][0])
        }

        move.back = new Array()
        for (let i = 0; i < HEIGTH; i++) {
            move.back.push(cubo.back[i][0])
        }

        move.botton = new Array()
        for (let i = 0; i < HEIGTH; i++) {
            move.botton.push(cubo.botton[i][0])
        }

        for (let i = 0; i < HEIGTH; i++) {
            cubo.top[i][0] = move.front[i]
        }

        for (let i = 0; i < HEIGTH; i++) {
            cubo.back[i][0] = move.top[i]
        }

        for (let i = 0; i < HEIGTH; i++) {
            cubo.botton[i][0] = move.back[i]
        }

        for (let i = 0; i < HEIGTH; i++) {
            cubo.front[i][0] = move.botton[i]
        }

        for (let i = 0; i < HEIGTH; i++) {
            for (let j = 0; j < WiDTH; j++) {
                move.rigth[i][j] = rigth[j][2-i]
            }
        }

        cubo.rigth = move.rigth

        renderizaCubo()
    }

    cubo.frontBotton = () => {
        const move = {}
        move.front = createMatriz(0)
        let front = cubo.front


        move.botton = cubo.botton[0]


        move.top = cubo.top[2]

        move.left = new Array()
        for (let i = 0; i < HEIGTH; i++) {
            move.left.push(cubo.left[i][0])
        }

        move.rigth = new Array()
        for (let i = 0; i < HEIGTH; i++) {
            move.rigth.push(cubo.rigth[i][2])
        }

        cubo.top[2] = move.left
        for (let i = 0; i < HEIGTH; i++) {
            cubo.rigth[i][2] = move.top[2 - i]
        }
        
        cubo.botton[0] = move.rigth

        for (let i = 0; i < HEIGTH; i++) {
            cubo.left[i][0] = move.botton[2-i]
        }

        for (let i = 0; i < HEIGTH; i++) {
            for (let j = 0; j < WiDTH; j++) {
                move.front[i][j] = front[j][2 - i]
            }
        }

        cubo.front = move.front

        renderizaCubo()
    }

    cubo.frontTop = () => {
        const move = {}
        move.front = createMatriz(0)
        let front = cubo.front


        move.botton = cubo.botton[0]


        move.top = cubo.top[2]

        move.left = new Array()
        for (let i = 0; i < HEIGTH; i++) {
            move.left.push(cubo.left[i][0])
        }

        move.rigth = new Array()
        for (let i = 0; i < HEIGTH; i++) {
            move.rigth.push(cubo.rigth[i][2])
        }

        cubo.top[2] = move.rigth.reverse()
        for (let i = 0; i < HEIGTH; i++) {
            cubo.rigth[i][2] = move.botton[i]
        }
        
        cubo.botton[0] = move.left.reverse()

        for (let i = 0; i < HEIGTH; i++) {
            cubo.left[i][0] = move.top[i]
        }

        for (let i = 0; i < HEIGTH; i++) {
            for (let j = 0; j < WiDTH; j++) {
                move.front[i][j] = front[2-j][i]
            }
        }

        cubo.front = move.front

        renderizaCubo()
    }

    cubo.backTop = () => {
        const move = {}
        move.back = createMatriz(0)
        let back = cubo.back


        move.botton = cubo.botton[2]

        move.top = cubo.top[0]

        move.left = new Array()
        for (let i = 0; i < HEIGTH; i++) {
            move.left.push(cubo.left[i][2])
        }

        move.rigth = new Array()
        for (let i = 0; i < HEIGTH; i++) {
            move.rigth.push(cubo.rigth[i][0])
        }

        cubo.top[0] = move.rigth.reverse()

        for (let i = 0; i < HEIGTH; i++) {
            cubo.rigth[i][0] = move.botton[i]
        }
        
        cubo.botton[2] = move.left.reverse()

        for (let i = 0; i < HEIGTH; i++) {
            cubo.left[i][2] = move.top[i]
        }

        for (let i = 0; i < HEIGTH; i++) {
            for (let j = 0; j < WiDTH; j++) {
                move.back[i][j] = back[2 - j][i]
            }
        }

        cubo.back = move.back

        renderizaCubo()
    }

    cubo.backBotton = () => {
        const move = {}
        move.back = createMatriz(0)
        let back = cubo.back


        move.botton = cubo.botton[2]

        move.top = cubo.top[0]

        move.left = new Array()
        for (let i = 0; i < HEIGTH; i++) {
            move.left.push(cubo.left[i][2])
        }

        move.rigth = new Array()
        for (let i = 0; i < HEIGTH; i++) {
            move.rigth.push(cubo.rigth[i][0])
        }

        cubo.top[0] = move.left

        for (let i = 0; i < HEIGTH; i++) {
            cubo.rigth[i][0] = move.top[2-i]
        }
        
        cubo.botton[2] = move.rigth

        for (let i = 0; i < HEIGTH; i++) {
            cubo.left[i][2] = move.botton[2-i]
        }

        for (let i = 0; i < HEIGTH; i++) {
            for (let j = 0; j < WiDTH; j++) {
                move.back[i][j] = back[2-j][i]
            }
        }

        cubo.back = move.back

        renderizaCubo()
    }

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

    html += '</div>'

    document.querySelector('#fogoTabela').innerHTML = html
}

main()