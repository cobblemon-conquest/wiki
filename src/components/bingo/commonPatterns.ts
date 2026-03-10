import type { BingoPattern } from './bingoEngine'

export const lHorizontalPattern: BingoPattern = {
    id: 'line-horizontal',
    name: 'Línea Horizontal',
    preview: [0, 1, 2, 3, 4],
    lines: [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24],
    ],
}

export const lVerticalPattern: BingoPattern = {
    id: 'line-vertical',
    name: 'Línea Vertical',
    preview: [0, 5, 10, 15, 20],
    lines: [
        [0, 5, 10, 15, 20],
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24],
    ],
}

export const donutBigPattern: BingoPattern = {
    id: 'donut-big',
    name: 'Donut Grande',
    preview: [0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 19, 20, 21, 22, 23, 24],
    lines: [[0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 19, 20, 21, 22, 23, 24]],
}

export const donutSmallPattern: BingoPattern = {
    id: 'donut-small',
    name: 'Donut Pequeno',
    preview: [6, 7, 8, 11, 13, 16, 17, 18],
    lines: [
        [0, 1, 2, 5, 7, 10, 11, 12],
        [1, 2, 3, 6, 8, 11, 12, 13],
        [2, 3, 4, 7, 9, 12, 13, 14],
        [5, 6, 7, 10, 12, 15, 16, 17],
        [6, 7, 8, 11, 13, 16, 17, 18],
        [7, 8, 9, 12, 14, 17, 18, 19],
        [10, 11, 12, 15, 17, 20, 21, 22],
        [11, 12, 13, 16, 18, 21, 22, 23],
        [12, 13, 14, 17, 19, 22, 23, 24],
    ],
}

export const xPattern: BingoPattern = {
    id: 'x-pattern',
    name: 'X',
    preview: [0, 4, 6, 8, 12, 16, 18, 20, 24],
    lines: [[0, 4, 6, 8, 12, 16, 18, 20, 24]],
}

export const plusPattern: BingoPattern = {
    id: '+-pattern',
    name: '+',
    preview: [2, 7, 10, 11, 12, 13, 14, 17, 22],
    lines: [[2, 7, 10, 11, 12, 13, 14, 17, 22]],
}

export const squarePattern: BingoPattern = {
    id: 'square',
    name: 'Cuadrado',
    preview: [0, 1, 5, 6],
    lines: [
        [0, 1, 5, 6], [1, 2, 6, 7], [2, 3, 7, 8], [3, 4, 8, 9],
        [5, 6, 10, 11], [6, 7, 11, 12], [7, 8, 12, 13], [8, 9, 13, 14],
        [10, 11, 15, 16], [11, 12, 16, 17], [12, 13, 17, 18], [13, 14, 18, 19],
        [15, 16, 20, 21], [16, 17, 21, 22], [17, 18, 22, 23], [18, 19, 23, 24],
    ],
}

export const bingoPattern: BingoPattern = {
    id: 'bingo',
    name: 'Bingo',
    preview: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    lines: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]],
}

export const commonPatterns: BingoPattern[] = [
    lHorizontalPattern,
    lVerticalPattern,
    donutBigPattern,
    donutSmallPattern,
    xPattern,
    plusPattern,
    squarePattern,
    bingoPattern,
]
