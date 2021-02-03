abstract class WorkingAbstractClass {
    abstract test(): void;
}

class SomeClass extends WorkingAbstractClass {
    test(): void {
        console.log('ok!');
    }
}

export abstract class AbstractClassIsWorkingToo {
    abstract test(): void;
}

export default abstract class NotWorkingAbstractClass {
    abstract test(): void;
}
