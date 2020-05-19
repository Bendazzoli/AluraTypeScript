class NegociacoesView extends View {
    template(model) {
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
                    `;
        }).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table>        
        `;
    }
}
