import {MensagemView, NegociacoesView} from '../views/index';
import {Negociacoes, Negociacao} from '../models/index';

export class NegociacaoController{

    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#NegociacoesView');
    private _mensagemView = new MensagemView('#MensagemView');

    constructor(){
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event): void{
        event.preventDefault();

        let dataNegociacao = new Date(this._inputData.val().replace(/-/g, ','));

        if(!this._ehDiaUtil(dataNegociacao)){
            this._mensagemView.update("Informar somente um dia útil para data de negociação.");
        }

        const negociacao = new Negociacao(
            dataNegociacao,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );
        
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso!");
    }

    private _ehDiaUtil(data: Date){
        return data.getDay() != DiaDaSemana.Sabado &&
               data.getDay() != DiaDaSemana.Domingo;
    }
}

enum DiaDaSemana{
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}