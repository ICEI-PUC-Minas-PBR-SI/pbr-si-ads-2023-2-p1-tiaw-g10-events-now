# Teste de Software

Testes de software CT01, CT02, CT03 e CT04. Respectivamente assosciados aos requisitos RF001 e RF002, RF-003 e RF-004, RF-007, RF011.

## Plano de Testes de Software

**Caso de Teste** | **CT01 - Criar conta**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome, email, senha e confirmação de senha e clica no botão "Cadastrar".<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.
**Requisitos associados** | RF-001, RF-002
**Resultado esperado** | Confirmar cadastro, enviar dados para API e seguir para tela de login
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Acessar conta**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa seu email e senha. A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br> 3) A aplicação direciona o usuário para a tela inicial.
**Requisitos associados** | RF-003, RF-004
**Resultado esperado** | Acessar a aplicação
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Filtrar serviços**
 :--------------: | ------------
**Procedimento**  | 1) Usuário digita na pesquisa o nome do serviço desejado.
**Requisitos associados** | RF-007
**Resultado esperado** | Ocultar os serviços que não batem com o filtro
**Dados de entrada** | Inserção do serviço desejado na caixa do filtro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT04 - Solicitar orçamento**
 :--------------: | ------------
**Procedimento**  | 1) Usuário digita na caixa de texto o que deseja saber sobre o serviço.
**Requisitos associados** | RF-011
**Resultado esperado** | Retornar o sucesso no envio da mensagem.
**Dados de entrada** | Inserção da pergunta na caixa do orçamento
**Resultado obtido** | Sucesso.

## Registro dos Testes de Software

|*Caso de Teste*                                 |*CT-01 - Criar uma conta*                                         |
|---|---|
|Requisito Associado | RF.001	Registro de Fornecedores de Serviços de Eventos	ALTA	flogin.html, fcadastro.html, fsenha.html
|Requisito Associado | RF.002	Registro de Consumidores Interessados em Contratar Serviços de Evento|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1EXPbsaJHE-1HGu7Cq6SLj9Bwgnj2_52Y/view?usp=sharing | 


|*Caso de Teste*                                 |*CT-02 - Efetuar Login (usuário autenticado)*                                         |
|---|---|
|Requisito Associado | RF.003	Autenticação de Usuários por Meio de Login e Senha |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1G2JY3Dq9vSh_BHlOXGuf32Yhem8CdAvH/view?usp=sharing | 

|*Caso de Teste*                                 |*CT-03 - Filtro de serviços*                                         |
|---|---|
|Requisito Associado | RF.007	Possibilidade de Pesquisa de Serviços por Categoria(Filtro) |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1FclnPimDSgkDuTiFQ6mrF9W4h6AOdNa3/view?usp=sharing | 

|*Caso de Teste*                                 |*CT-04 - Solicitar orçamento*                                         |
|---|---|
|Requisito Associado | RF.011	Opção de Comentários e Feedback para Serviços Prestados |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1dKjTwRYIcBNpv5zTZvPMwr_6OUfKjCvm/view?usp=sharing | 


## Avaliação dos Testes de Software

Os testes ocorreram todos como o esperado, foram realizado durante e ao final da implementação das funcionalidades e apresentaram o resultado desejado. Além dos casos de teste citados acima, a conexão com API e JSON server também ocorreu corretamente, trazendo os dados de imagens para alguns cartões da aplicação


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.




Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 5                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.




## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



