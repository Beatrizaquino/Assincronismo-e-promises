let aceito = true //false

console.log('Pedir uber')

const promessa = new Promise ((resolve,reject) => {
  if(aceito){
    return resolve('Pedido aceito!')
  }

  return reject('Pedido negado!')
})

console.log('Aguardando')

promessa
  .then(result => console.log(result))
  .catch(erro => console.log(erro)) //captura de erro - esse só é chamado quando um reject  é acisonado
  .finally(() => console.log('Finalizado'))