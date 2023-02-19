import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 10, 100);
negociacao.quantidade = 20; // os atributos estão protegidos usando apenas JS

const negociacao2 = new Negociacao(new Date(), 10);
console.log(negociacao2.volume); // no entanto, ainda existem brechas, como conseguir instanciar um objeto sem todos os atributos

// além disso, os erros somente são apresentados em RunTime,
// o que aumenta em muito o risco de algum bug passar despercebido
// para a fase de produção ou até mesmo de distribuição.