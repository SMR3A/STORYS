const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
 button.addEventListener('click', function(){
    const atual = document.querySelectorAll('.ativo');
    const proximoPasso = 'passo-' + this.getAtributte('data-proximo')

    atual.classListe.remove('.ativo')
    document.getElementById(proximoPasso).classList.add('ativo');
 })

})