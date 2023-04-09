let biografias = [
    {
        nome: "Ada Lovelace",
        imagem: "assets/img/ada-lovelace.png",
        descricao: "Augusta Ada Byron King, Condessa de Lovelace (nascida Byron, 10 de dezembro de 1815 — 27 de novembro de 1852), atualmente conhecida como Ada Lovelace, foi uma matemática e escritora inglesa. Hoje é reconhecida principalmente por ter escrito o primeiro algoritmo para ser processado por uma máquina, a máquina analítica de Charles Babbage. Durante o período em que esteve envolvida com o projeto de Babbage, ela desenvolveu os algoritmos que permitiriam à máquina computar os valores de funções matemáticas, além de publicar uma coleção de notas sobre a máquina analítica. Por esse trabalho é considerada a primeira programadora de toda a história.",
        saibaMais: "https://pt.wikipedia.org/wiki/Ada_Lovelace - Para saber mais clique aqui"
    },

    {
        nome: "Mary Kenneth Keller",
        imagem: "assets/img/mary-kenneth-keller.jpg",
        descricao: "Mary Kenneth Keller, mais conhecida como Irmã Mary Kenneth Keller, (Cleveland, 17 de dezembro de 1913, Dubuque, 10 de janeiro de 1985), foi uma importante freira e cientista da computação. Em 7 de junho de 1965, junto de Irving Tang da Universidade Washington em St. Louis, se tornaram os primeiros doutores na área no país, além de ser a primeira mulher a receber um doutorado na área.Keller ganhou a titulação na Universidade do Wisconsin-Madison. Sua tese chama-se Inferência indutiva em padrões gerados por computador (Inductive Inference on Computer Generated Patterns). Teve importante participação na criação da linguagem de programação BASIC, fundou um departameno de ciências da computação na unversidade de Clarke em Iowa e foi autora de quatro livros referência na área.Sempre defendeu a inclusão e o envolvimento de mulheres na ciência da computação.",
        saibaMais: "https://pt.wikipedia.org/wiki/Grace_Hopper - Para saber mais clique aqui"
    },

    {
        nome: "Grace Hopper",
        imagem: "assets/img/grace-hopper.jpg",
        descricao: "Grace Murray Hopper (Nova Iorque, 9 de dezembro de 1906 — Condado de Arlington, 1 de janeiro de 1992) foi almirante e analista de sistemas da Marinha dos Estados Unidos nas décadas de 1940 e 1950, criadora da linguagem de programação de alto nível Flow-Matic (em desuso) — base para a criação do COBOL — e uma das primeiras programadoras do computador Harvard Mark I em 1944. É de autoria de Hopper o termo 'bug' usado para designar uma falha num código fonte, isso porque ao tentar encontrar o problema em seu computador percebeu que havia um inseto morto causando o problema. Desde 1994 é realizado em sua homenagem o congresso Grace Hopper Celebration of Women in Computing, que celebra os feitos das mulheres no mundo da computação.",
        saibaMais: "https://pt.wikipedia.org/wiki/Grace_Hopper - Para saber mais clique aqui"
    },

    {
        nome: "Carol Shaw",
        imagem: "assets/img/carol-shaw.jpg",
        descricao: "Carol Shaw (Palo Alto, 1955) é uma engenheira computacional estadunidense, notória por ser a primeira mulher desenvolvedora de jogos eletrônicos no mundo. Foi contratada pela Atari, lançou o primeiro jogo desenvolvido por uma mulher, que consistia a base do jogo da velha chamado de 3D Tic-Tac-Toe. Mais tarde, já como funcionária da Activision, programou o River Raid, seu game de maior sucesso. Até hoje serve como inspiração para mulheres na indústria dos games.",
        saibaMais: "https://pt.wikipedia.org/wiki/Carol_Shaw - Para saber mais clique aqui"
    },

    {
        nome: "Hedy Lamarr",
        imagem: "assets/img/Hedy-Lamarr.jpg",
        descricao: "Hedy Lamarr, nome artístico de Hedwig Eva Maria Kiesler (Vienna, 9 de novembro de 1914 — Altamonte Springs, 19 de janeiro de 2000), foi uma atriz e inventora austríaca radicada no Estados Unidos. Em 28 anos de carreira, participou de mais de 30 filmes e fez uma importante contribuição tecnológica durante a Segunda Guerra Mundial, uma co-invenção, com o compositor George Antheil, um sistema de comunicações para as Forças Armadas dos Estados Unidos que serviu de base para a atual telefonia celular. Em reconhecimento do valor de seu trabalho e da importância da tecnologia por ela inventada, seu nome foi postumamente inserido no National Inventors Hall of Fame em 2014. A ideia do aparelho de frequência serviu de base para COFDM usada em conexões de Wi-Fi e CDMA, usada em telefones celulares. Também foi criado de um aparelho de interferência em rádio para despistar radares nazistas, durante a Segunda Guerra.",
        saibaMais: "https://pt.wikipedia.org/wiki/Hedy_Lamarr - Para saber mais clique aqui",
    },

    {
        nome: "Margaret Hamilton",
        imagem: "assets/img/margaret-hamilton.jpg",
        descricao: "Margaret Heafield Hamilton (Paoli, Indiana, 17 de agosto de 1936) é uma cientista da computação, engenheira de software e empresária estadunidense. Foi diretora da Divisão de Software no Laboratório de Instrumentação do MIT, que desenvolveu o programa de voo usado no projeto Apollo 11, a primeira missão tripulada à Lua. O software de Hamilton impediu que o pouso na Lua fosse abortado. Margaret publicou mais de 130 artigos, atas e relatórios relacionados aos 60 projetos e seis programas importantes nos quais ela esteve envolvida. Em 22 de novembro de 2016 foi premiada com a Medalha Presidencial da Liberdade pelo presidente dos Estados Unidos Barack Obama, honraria recebida por seu trabalho sobre o desenvolvimento do software de voo a bordo das missões Apollo da NASA",
        saibaMais: "https://pt.wikipedia.org/wiki/Margaret_Hamilton_(cientista_da_computa%C3%A7%C3%A3o) - Para saber mais clique aqui",
    },
];

function carregaDescricao() {

    let content = document.getElementById("content")

    for (let bio in biografias) {
        content.innerHTML += 
        '<div class="card">' + 
        '<img src="' + 
        biografias[bio].imagem + 
        '"/>' + 
        "<details>" + 
        "<summary>" + 
        biografias[bio].nome + 
        "</summary>" + 
        '<p>' + 
        biografias[bio].descricao + 
        '</p>' + 
        '<a>' + 
        biografias[bio].saibaMais + 
        '</a>' + 
        '</details>' + 
        '</div>';
    }    
}

const ordered = biografias.sort((a, b) => a.nome.localeCompare(b.nome));

carregaDescricao();