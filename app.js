/*let clientesComVolumeRusso = ["Leticia", "Gabriela", "Mharia", "Juliana"] // criou um array 

console.dir (clientes)// mostra as alterações que foram feitas 
console.log(clientes[2])


// para trocar um que esteja na sequencia sem mudar dentro da variavel 
 clientes[2] = "Eduarda"
// // a cliente maria foi substituida na sequencia pela clientes eduarda 
// //a contagem de posições dentro do array começa  a partir do zero
// //para adicionar itens 
 clientes.push("Karen")
console.dir(clientes) */

let clientesComVolumeRusso = new Array() // foi criado um array porem vazio 
clientesComVolumeRusso.push("Geovana") // incluindo clientes nesse array 
clientesComVolumeRusso.push("Carol")
clientesComVolumeRusso.push("Dafiny")
clientesComVolumeRusso.push("Patricia")
clientesComVolumeRusso.push("Daniela")

console.dir(clientesComVolumeRusso)

// criou uma lista
document.getElementById("conteudo").innerHTML = "<ul>"

document.getElementById("conteudo").innerHTML += "<li>" + clientesComVolumeRusso[0] + "<li>"
 // document.getElementById("conteudo").innerHTML = clientesComVolumeRusso[2]
 // se eu repito o codigo substitui o comando de cima se quiser manter o anterior e adicionar um novo precisa de +=
 document.getElementById("conteudo").innerHTML +=  "<li>" + clientesComVolumeRusso[1] + "<li>"
 document.getElementById("conteudo").innerHTML +=  "<li>" + clientesComVolumeRusso[2] + "<li>"
 document.getElementById("conteudo").innerHTML +=  "<li>" + clientesComVolumeRusso[3] + "<li>"
 document.getElementById("conteudo").innerHTML +=  "<li>" + clientesComVolumeRusso[4] + "<li>"

 document.getElementById("conteudo").innerHTML += "<li>"



