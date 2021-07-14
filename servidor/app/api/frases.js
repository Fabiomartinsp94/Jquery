var api = {};

var frases = [
	{_id: 0, texto:'Não adianta fugir disso, fugir da realidade. Tem que deixar de ser um país de maricas', tempo: 15 },
	{_id: 1, texto:'Morte, invalidez, anomalia. Esta é a vacina que o Dória queria obrigar a todos os paulistanos tomá-la. O Presidente disse que a vacina jamais poderia ser obrigatória. Mais uma que Jair Bolsonaro ganha',tempo: 25 },
	{_id: 2, texto:'Quanto a repouso, isso é particular meu. Eu não sei ficar parado. Vou ficar despachando por vídeo conferência', tempo: 15 },
	{_id: 3, texto:'E daí? Lamento. Quer que eu faça o quê? Eu sou Messias, mas não faço milagre', tempo: 15 },
	{_id: 4, texto:'Essa é uma realidade, o vírus tá aí. Vamos ter que enfrentá-lo, mas enfrentar como homem, porra. Não como um moleque. Vamos enfrentar o vírus com a realidade. É a vida. Tomos nós iremos morrer um dia', tempo: 25 },
	{_id: 5, texto:'Pelo meu histórico de atleta, caso fosse contaminado pelo vírus, não precisaria me preocupar, nada sentiria ou seria acometido, quando muito, de uma gripezinha ou resfriadinho, como bem disse aquele conhecido médico, daquela conhecida televisão', tempo: 30 },
	{_id: 6, texto:'em a questão do coronavírus também que, no meu entender, está superdimensionado', tempo: 15 },
	{_id: 7, texto:'Morreram poucos. A PM tinha que ter matado mil', tempo: 10 },
	{_id: 8, texto:'Foram quatro homens. A quinta eu dei uma fraquejada, e veio uma mulher', tempo: 17},
	{_id: 9, texto:'Existem três jeitos de desenvolver software. O jeito certo, o jeito errado e o meu jeito, que é igual o jeito errado só que mais rápido.', tempo: 20},

	];

api.lista = function(req, res) {

	setTimeout(function(){
		if(req.query.id) return res.json(frases[req.query.id]);

		res.json(frases);
	},1500);

};

module.exports = api;
