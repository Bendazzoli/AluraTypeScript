class NegociacoesView{

    private _elemento: Element;

    constructor(selector: string){
        this._elemento = document.querySelector(selector);
    }

    update(model: Negociacoes): void{
        this._elemento.innerHTML = this.template(model);
    }

    template(model: Negociacoes): string{
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.paraArray().map(neg => {
                    return `
                        <tr>
                            <td>${neg.data.getDate()}/${(neg.data.getMonth() + 1)}/${neg.data.getFullYear()}</td>
                            <td>${neg.quantidade}</td>
                            <td>${neg.valor}</td>
                            <td>${neg.volume}</td>
                        </tr>
                    `
                }).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table>        
        `;
    }
}