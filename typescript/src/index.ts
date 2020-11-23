const a: Number = 5;
console.log(a);

class Figure {
    private height: number;
    private width: number;
    private readonly name: string;
    private static copiesCounter: number = 0;
    constructor(name: string, width: number, height: number, description?: string) {
        this.name = name;
        this.width = width;
        this.height = height;
        Figure.copiesCounter++;
    }
    get getName() : string {
        return this.name;
    }
    get copies() : number {
        return Figure.copiesCounter;
    }
    static get copies() : number {
        return this.copiesCounter;
    }
}

const First = new Figure("Hi, I am Rect", 10, 20);
const Second = new Figure("Hi, I second", 10, 20);
const Third = new Figure("Hi, I third", 10, 20);

console.log(First.copies);
console.log(Third.copies);
console.log(Figure.copies);