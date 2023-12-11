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

Os testes ocorreram todos como o esperado, foram realizado durante e ao final da implementação das funcionalidades e apresentaram o resultado desejado. Detre os pontos fortes foi analisado a implementação correta e coesa das funcionalidades práticas, e dentre os pontos fracos a ausência de funcionalidades mais complexas. É de interesse do grupo seguir adiante com mais implementações e dar ainda mais vida ao projeto.
Além dos casos de teste citados acima, a conexão com API e JSON server também ocorreu corretamente, trazendo os dados de imagens para alguns cartões da aplicação


# Testes de Usabilidade

Testes de usabilidade CT01, CT02, CT03 e CT04. Respectivamente assosciados aos requisitos RF001 e RF002, RF-003 e RF-004, RF-007, RF011.

## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que se interessou pela plataforma Events Now e deseja criar uma nova conta e acessa-la para conhecer mais. |
| 2             | Você é um usuário que precisa encontrar um serviço de buffet para seu evento e não tem necessidade em ver outras opções. |
| 3             | Você é uma pessoa que encontrou um serviço agradável e deseja entrar em contato com o fornecedor para receber mais informações e o valor do orçamento.|

## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que se interessou pela plataforma Events Now e deseja criar uma nova conta e acessa-la para conhecer mais

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 42.52 segundos                  |
| 2       | SIM             | 5                    | 31.24 segundos                  |
| 3       | SIM             | 5                    | 38.12 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5               | 37.29 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 18.13 segundos |


    Comentários dos usuários: 
    Achei o site extremamente prático e intuitivo. 
    Não tive dificuldades de realizar o cadastro, foi bem simples e rápido.
    Consegui realizar facilmente o cadastro na plataforma, não encontrei problemas




Cenário 2: Você é um usuário que precisa encontrar um serviço de buffet para seu evento e não tem necessidade em ver outras opções

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 6.34 segundos                          |
| 2       | SIM             | 4                    | 7.23 segundos                          |
| 3       | NÃO             | 2                    | ----                          |
| 4       | SIM             | 5                    | 5.43 segundos                          |
|  |  |  |  |
| **Média**     | 75%           | 4             | 6.33 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 4.57 segundos |


    Comentários dos usuários: 
    O serviço é simples de ser encontrado e o site fácil de se utilizar é fácil de acessar.
    Consegui encontrar tranquilamente o serviço desjeado, porém senti a falta de mais opções de filtros na hora da pesquisa.
    Não consegui encontrar o serviço que estava buscando, escrevi bufet na caixa e não apresentou resultado.
    Achei o filtro simples, prático e intuitivo, nada a pontuar.




## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



