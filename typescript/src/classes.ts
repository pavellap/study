class TypeScript {
    readonly version: string;

    constructor(version: string) {
        this.version = version;
    }
}

class LinkedListNode<T> {
    private next: LinkedListNode<T | null> | null = null;
    constructor(readonly item: T) {};
    set setNext(item: T) {
        this.next = new LinkedListNode<T>(item);
    }
    get getValue(): T {
        return this.item
    }
}

class LinkedList<T> {
    readonly root: LinkedListNode<T>;
    private length: number;
    private currentItem: LinkedListNode<T>;
    constructor(baseItem: T) {
        this.root = new LinkedListNode(baseItem);
        this.currentItem = this.root;
        this.length = 1;
    }

    add(item: T) {
        this.currentItem.setNext = item;
        this.currentItem = new LinkedListNode<T>(item);
        this.length++;
    }
    getCurrentItemValue() : T {
        return this.currentItem.getValue
    }
    get getLength(): number {
        return this.length;
    }
}

const linklist = new LinkedList<string>('first');
console.log(linklist);
linklist.add('second');
console.log(linklist);