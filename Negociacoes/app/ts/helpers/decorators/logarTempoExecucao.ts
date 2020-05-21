export function logarTempoExecucao(){

    //TARGET: Estância no qual o decorator do metodo foi colocado.
    //PROPERTYKEY: Vai me dar o nome do método como STRING de onde meu decorator está sendo colocado.
    //DESCRIPTOR: Sabe tudo sobre o método que está sendo chamado e, me permite sobrescrever ele.
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        const metodoOriginal = descriptor.value;
        
        descriptor.value = function(...args: any[]){
            console.log('-----------------------');
            console.log(`Parametros passados para o metodo ${propertyKey}: ${JSON.stringify(args)}`);

            const t1 = performance.now();

            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();

            console.log(`O retorno do método ${propertyKey} é ${JSON.stringify(retorno)}`);
            console.log(`O metodo ${propertyKey} demorou ${t2 - t1}ms.`);

            return retorno;
        }
        return descriptor;
    }
}