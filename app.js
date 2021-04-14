let form = document.querySelector('form')
let btnEnviar = document.querySelector('button[name=btnEnviar]')
let sectionOutput = document.querySelector('.output')
btnEnviar.addEventListener('click',imprimirDados)

function imprimirDados(){
    let dados = `
        <p>
            <strong>Nome:</strong>${form.nome.value}
        </p>
        <p>
            <strong>Comentário:</strong>${form.comentario.value}
        </p>
        <p>
            <strong>Escolaridade</strong>${form.escolaridade.value}
        </p>
        <p>
            <strong>CPF:</strong>${form.cpf.value}
        </p>
        <p>
            <strong>Data de Nacimento:</strong>${form.dataNascimento.value}
        </p>
    ` 
    sectionOutput.innerHTML = dados
    form.style.display="none"
}








