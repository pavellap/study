// @ts-ignore
function sum(a: number, b: number): number {
    return a + b;
}

interface Position2D {
    x: number | null,
    y: number | null,
}

interface Position3D extends Position2D{
    z: number | null
}

// Function Declaration (Like in C++)
function position(): Position2D
function position(): Position3D


// does not work for current ts version and linter ;(
function position(first: number, second: number) {
    return {
        x: first,
        y: second
    }
}

function position(first: number, second: number, third: number | null) {
    return {
        x: first,
        y: second,
        z: third
    }
}
