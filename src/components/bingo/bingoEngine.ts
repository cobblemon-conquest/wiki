export type BingoGoal = {
    name: string
    icon: string
}

export type BingoPattern = {
    id: string
    name: string
    preview: number[]
    lines: number[][]
}

export type BingoConfig = {
    goals: BingoGoal[]
    patterns: BingoPattern[]
}

export type BingoLineType = 'horizontal' | 'vertical' | 'diagonal'

const DEFAULT_GRID_SIZE = 5
const DEFAULT_TOTAL_CELLS = DEFAULT_GRID_SIZE * DEFAULT_GRID_SIZE

export const defaultGoals: BingoGoal[] = [
    { name: 'Objetivo 1', icon: '🐉' },
    { name: 'Objetivo 2', icon: '⚔️' },
    { name: 'Objetivo 3', icon: '🛡️' },
    { name: 'Objetivo 4', icon: '💎' },
    { name: 'Objetivo 5', icon: '🔥' },
    { name: 'Objetivo 1', icon: '🐉' },
    { name: 'Objetivo 2', icon: '⚔️' },
    { name: 'Objetivo 3', icon: '🛡️' },
    { name: 'Objetivo 4', icon: '💎' },
    { name: 'Objetivo 5', icon: '🔥' },
    { name: 'Objetivo 1', icon: '🐉' },
    { name: 'Objetivo 2', icon: '⚔️' },
    { name: 'Objetivo 3', icon: '🛡️' },
    { name: 'Objetivo 4', icon: '💎' },
    { name: 'Objetivo 5', icon: '🔥' },
    { name: 'Objetivo 1', icon: '🐉' },
    { name: 'Objetivo 2', icon: '⚔️' },
    { name: 'Objetivo 3', icon: '🛡️' },
    { name: 'Objetivo 4', icon: '💎' },
    { name: 'Objetivo 5', icon: '🔥' },
    { name: 'Objetivo 1', icon: '🐉' },
    { name: 'Objetivo 2', icon: '⚔️' },
    { name: 'Objetivo 3', icon: '🛡️' },
    { name: 'Objetivo 4', icon: '💎' },
    { name: 'Objetivo 5', icon: '🔥' },
]

const allCellIndexes = Array.from({ length: DEFAULT_TOTAL_CELLS }, (_, i) => i)

const buildHorizontalLines = (gridSize: number): number[][] =>
    Array.from({ length: gridSize }, (_, row) =>
        Array.from({ length: gridSize }, (_, col) => row * gridSize + col),
    )

const buildVerticalLines = (gridSize: number): number[][] =>
    Array.from({ length: gridSize }, (_, col) =>
        Array.from({ length: gridSize }, (_, row) => row * gridSize + col),
    )

const buildDiagonalLines = (gridSize: number): number[][] => {
    const mainDiagonal = Array.from({ length: gridSize }, (_, i) => i * (gridSize + 1))
    const inverseDiagonal = Array.from({ length: gridSize }, (_, i) => (i + 1) * (gridSize - 1))

    return [mainDiagonal, inverseDiagonal]
}

export const buildLineWinConditions = (gridSize: number, lineTypes: BingoLineType[] = ['horizontal', 'vertical', 'diagonal']): number[][] => {
    const uniqueLineTypes = Array.from(new Set(lineTypes))
    const lines: number[][] = []

    if (uniqueLineTypes.includes('horizontal')) {
        lines.push(...buildHorizontalLines(gridSize))
    }

    if (uniqueLineTypes.includes('vertical')) {
        lines.push(...buildVerticalLines(gridSize))
    }

    if (uniqueLineTypes.includes('diagonal')) {
        lines.push(...buildDiagonalLines(gridSize))
    }

    return lines
}

export const defaultPatterns: BingoPattern[] = [
    {
        id: 'bingo',
        name: 'Bingo',
        preview: allCellIndexes,
        lines: [allCellIndexes],
    },
    {
        id: 'linea-horizontal',
        name: 'Linea Horizontal',
        preview: [0, 1, 2, 3, 4],
        lines: buildLineWinConditions(DEFAULT_GRID_SIZE, ['horizontal']),
    },
    {
        id: 'linea-vertical',
        name: 'Linea Vertical',
        preview: [0, 5, 10, 15, 20],
        lines: buildLineWinConditions(DEFAULT_GRID_SIZE, ['vertical']),
    },
    {
        id: 'linea-diagonal',
        name: 'Linea Diagonal',
        preview: [0, 6, 12, 18, 24],
        lines: buildLineWinConditions(DEFAULT_GRID_SIZE, ['diagonal']),
    },
    {
        id: 'linea',
        name: 'Linea (Combinada)',
        preview: [0, 1, 2, 3, 4],
        lines: buildLineWinConditions(DEFAULT_GRID_SIZE, ['horizontal', 'vertical', 'diagonal']),
    },
]

export const defaultBingoConfig: BingoConfig = {
    goals: defaultGoals,
    patterns: defaultPatterns,
}

export class BingoEngine {
    private readonly selected = new Set<number>()
    private readonly patternsById: Map<string, BingoPattern>
    private readonly totalCells: number

    constructor(private readonly config: BingoConfig) {
        this.totalCells = config.goals.length
        const availablePatterns = config.patterns
        this.patternsById = new Map(availablePatterns.map((pattern) => [pattern.id, pattern]))
    }

    toggleCell(index: number): void {
        if (index < 0 || index >= this.totalCells) {
            return
        }

        if (this.selected.has(index)) {
            this.selected.delete(index)
            return
        }

        this.selected.add(index)
    }

    isCellSelected(index: number): boolean {
        return this.selected.has(index)
    }

    clearSelection(): void {
        this.selected.clear()
    }

    getPatternProgress(patternId: string): { completed: boolean; completedLines: number; totalLines: number } {
        const pattern = this.patternsById.get(patternId)

        if (!pattern) {
            return { completed: false, completedLines: 0, totalLines: 0 }
        }

        const completedLines = pattern.lines.filter((line) => line.every((index) => this.selected.has(index))).length

        return {
            completed: completedLines > 0,
            completedLines,
            totalLines: pattern.lines.length,
        }
    }
}

export const createBingoEngine = (config: BingoConfig): BingoEngine => new BingoEngine(config)