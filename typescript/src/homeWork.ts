//task1

function concat(a: string, b: string): string {
  return a + b;
}

console.log(concat('Hello ', 'World'));




//task2

type obj = {
  howIDoIt: string;
  simeArray: Array<string | number>
}

interface IMyHomeInterface {
  howIDoIt: string;
  simeArray: Array<string | number>;
  withData: Array<obj>;
}

const MyHometask: IMyHomeInterface = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}




//task3

interface MyArray<T> {
  [N: number]: T;
    reduce<U>(fn:(acc: T, value: T) => U, initialValue: U): U
}


const a: MyArray<number> = [1,2,3];
const initialValue = 0;

const b = a.reduce((acc, value) => acc + value, initialValue);
console.log(b)





//task4

interface IHomeTask {
  data: string;
  numbericData: number;
  date: Date;
  externalData: {
    basis: number;
    value: string;
  }
}

type MyPartial<T> = {
  [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}

const homeTask: MyPartial<IHomeTask> = {
  externalData: {
    value: 'win',
  }
}
