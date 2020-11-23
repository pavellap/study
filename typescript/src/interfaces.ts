interface Rectangle {
    readonly id: number,
    // optional parameter
    color?: string,
    size: {
        height: number,
        width: number,
    }
}

const first: Rectangle = {
    id: 1,
    size: {
        width: 10,
        height: 20
    },
};

first.color = "#123fff";

const second: Rectangle = {
    id: 2,
    color: "#fdb123",
    size: {
        width: 1,
        height: 2,
    }
};

// forcely cast third to Rectangle type
const third = {} as Rectangle;


// inheritance

interface Area extends Rectangle{
    getArea: () => number;
    getName: (name: string) => string;
}

const fourth: Area = {
    id: 10,
    size: {
        width: 100,
        height: 2.5
    },
    getArea() : number {
        return this.size.width * this.size.height
    },
    getName(name) : string {
        return `Hello, I am ${name}`
    }
};

fourth.getArea();