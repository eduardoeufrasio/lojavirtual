const formFiltro = document.querySelector('.filtro-form');
const inputMin = document.querySelector('#filtro-min');
const inputMax = document.querySelector('#filtro-max');
const produtosLista = document.querySelectorAll('.produtos li');

formFiltro.addEventListener('submit', function(event) {
	event.preventDefault();

	const precoMin = parseFloat(inputMin.value);
	const precoMax = parseFloat(inputMax.value);

	for (let i = 0; i < produtosLista.length; i++) {
		const produto = produtosLista[i];
		const precoTexto = produto.querySelector('.preco').textContent;
		const preco = parseFloat(precoTexto.replace('R$ ', '').replace('.', '').replace(',', '.'));

		if (preco < precoMin || preco > precoMax) {
			produto.style.display = 'none';
		} else {
			produto.style.display = 'block';
		}
	}
});
    