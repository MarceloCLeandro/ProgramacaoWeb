function exibirMenu() {
    $.ajax({
        url: "menu.xml",
        success: function (xml) {
            $(xml).find("opcao").each(function () {
                var link = '<a href="index.html">' + $(this).attr("link") + " -" + $(this).text() + '</a><br>';
                $("#menu").append(link);
            });
        },
        error: function () {
            alert("Mensagem de erro.");
        }
    });
}

var xmlDoc;

function exibirMenu() {
    carregarXML();

    var listaCompras = xmlDoc.getElementsByTagName("opcao");
    alert(listaCompras.length);

    const menu = document.getElementById("menu");

    for (var i = 0; i < listaCompras.length; i++) {
        var link =
            menu.innerHTML += link;
    }

};

function carregarXML() {
    if (navigator.appName != "Microsoft Internet Explorer") {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "dados/menu.xml", false);
        xmlHttp.send(null);

        xmlDoc = xmlHttp.responseXML;
    }
    else {
        var xmlHttp = new ActiveXObject("Microsoft.XMLDOM");
        xmlHttp.async = "false";
        xmlHttp.load("dados/menu.xml");
    }

}






function AddCarrinho(produto, valor, posicao) {
    localStorage.setItem("produto" + posicao, produto);
    localStorage.setItem("posicao" + posicao);
    valor = valor + produto;
    localStorage.setItem("valor" + posicao, valor);
    alert("Produto adicionado ao carrinho!");
}

$(function () {
    exibirCompras();
});

function exibirCompras() {
    $.getJSON("dados/listaCompras.json", function (data) {
        var total = data.produtos.length;

        for (var i = 0; i < total; i++) {
            var novaDiv = `<div class = "bordas"> ${data.produtos[i].nome} - Valor R$ ${data.produtos[i].valor}</div>`
            $("#compras").append(novaDiv);
        }
    });
}

