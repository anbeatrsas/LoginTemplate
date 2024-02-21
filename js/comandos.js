function validaNome(event){

    var nome = $("#nome").val();
    var regex = /[^(A-Za-z\u00C0-\u00FF )]+/i;

    nome = nome.replace(regex, '');

    $("#nome").val(nome);
    $("#nome").focus();

}