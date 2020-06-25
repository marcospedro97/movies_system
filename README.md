#Movies System
======================================================================

###Running
---------------------------------------------------------------------------------------------------------------------------
Para executar este projeto você irá precisar ter instalado na máquina o nodejs e json-server
antes de iniciar execute o json-server com o comando **json-server --watch ./db.json --port 3333** após o json-server ser iniciado basta executar npm start e aguardar o navegador abrir a janela com o projeto em execução na url [https://localhost:3000/]
A organização do sistema de arquivos é feita baseada nas páginas presentes no projeto, cada página pode ser encontrada dentro da pasta src assim como uma pasta chamada hooks que contém os helpers usados no projeto, sejam eles de requests, sejam partials utilizadas em mais de uma página, as páginas e partials possuem arquivos sass próprio para lidar com estilização individual das páginas.

###A experiência de criação do projeto
---------------------------------------------------------------------------------------------------------------------------
Eu nunca tinha usado o sass antes, ele resolveu problemas que eu não sabia que tinha, acabou sendo uma ferramenta muito agradável de usar durante o projeto tornando o arquivo de estilos mais facilmente legível e com menos ponto e vírgula, isso realmente tornou o processo mais simples evitando erros de typo.
Eu aprendi a usar React sem um uso muito intensivo de hooks, mas quando comecei a usá-los realmente vi uma mudança positiva no meu uso da biblioteca, eles deixam o code smells muito melhor no projeto em geral quando comparados às classes.
Ainda tenho muito espaço para melhorar nas boas práticas de código, alguma das opções que eu fiz durante o projeto nesse aspecto estão mais relacionadas a práticas adotadas em outras linguagens e frameworks e não específicas do React em si, portanto acho que preciso de mais contato com isso para melhorar.
