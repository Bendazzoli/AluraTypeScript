declare var $: any;

abstract class View<T>{

    protected _elemento: any;

    constructor(selector: string){
        this._elemento = $(selector);
    }

    update(model: T): void{
        this._elemento.html(this.template(model));
    }

    abstract template(model: T): string;
}