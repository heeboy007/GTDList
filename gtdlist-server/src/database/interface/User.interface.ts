
function SomeDec(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {

}

interface UserInterface {

    @SomeDec
    createUser(): void;

}