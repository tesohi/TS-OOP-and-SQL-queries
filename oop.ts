//helper functions

function randomInt(min: number, max: number): number {
    let randNumber = Math.random() * (max - min + 1) + min;
    return Math.floor(randNumber);
}

/* Тривиальная реализация вычисления факториала */
function getFactorial(n: number): number {
    if (n === 1) {
        return 1;
    }
    return n * getFactorial(n - 1);
}

function quickSort(array: number[]): number[] {
    if (array.length < 2) {
        return array;
    }

    const pivotIndex: number = Math.floor(array.length / 2);
    const pivot: number = array[pivotIndex];

    const less: number[] = [];
    const more: number[] = [];

    for (let i = 0; i < array.length; i++) {
        if (i == pivotIndex) {
            continue;
        }

        if (array[i] < pivot) {
            less.push(array[i]);
        } else {
            more.push(array[i]);
        }
    }

    return [
        ...quickSort(less),
        pivot,
        ...quickSort(more),
    ]
}

function bubbleSort(array: number[]): number[] {
    if (array.length < 2) {
        return array;
    }

    let sorted: number[] = [...array];

    for (let i = 0; i < sorted.length; i++) {
        for (let j = 0; j < sorted.length - i - 1; j++) {
            if (sorted[j] > sorted[j + 1]) {
                let temp: number = sorted[j];
                sorted[j] = sorted[j + 1];
                sorted[j + 1] = temp;
            }
        }
    }

    return sorted;
}

//======================


abstract class AClass {
    protected Numbers: number[] = [];

    constructor(n: number) {
        this.fill(n);
    }

    private fill(length: number): void {
        for (let i = 0; i < length; i++) {
            this.Numbers.push(randomInt(1, 15));
        }
    }

    /* 
        Во время обдумывания задания была идея сделать метод factorial более оптимизированным:
        так как в данной синтетической задаче на вход всегда приходит сортированный массив, то можно
        вычислять последующие бОльшие элементы массива на основе вычисленных меньших элементов.
        Однако решил создать простой метод с тривиальным вычислением факториала рекурсией, так как такой
        код проще и лучше читается, а также задача напрямую не ставит цель оптимизировать скорость работы кода
    */
    protected factorial(array: number[]): number[] {
        return array.map(elem => {
            return getFactorial(elem);
        })
    }

    abstract sort(): number[];
}
//=======================


class Class1 extends AClass {
    constructor(n: number) {
        super(n);
    }

    sort(): number[] {
        this.Numbers = quickSort(this.Numbers);
        const factorials: number[] = this.factorial(this.Numbers);

        return factorials;
    }
}
//=======================


class Class2 extends AClass {
    constructor(n: number) {
        super(n);
    }

    sort(): number[] {
        this.Numbers = bubbleSort(this.Numbers);
        const factorials: number[] = this.factorial(this.Numbers);

        return factorials;
    }
}

