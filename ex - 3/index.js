const produto = {
	nome: "zé cueca",
	preco: 6,
	desconto:10
}

function clone(object) {
   return {...object}
}

const  cloneproduto = clone(produto);
cloneproduto.nome = "zé calcinha";

console.log(produto);
console.log(cloneproduto)