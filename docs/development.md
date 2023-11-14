# Programação de Funcionalidades

Instruções de acesso para as funcionalidades atuais do projeto

- Login: /src/flogin.html; /src/fsenha.html
- Cadastro: /src/fcadastro.html
- Página inicial: /src/index.html
- Acessar conta: /src/conta.html
- Acessar conta fornecedor: /src/conta-fornecedor.html
- Tela de pesquisa: /src/pesquisa.html
- Tela de serviços: /src/servico.html
- Funcionalidade chat pop-up: /src/servico.html -> Botão "Solicitar Orçamento"


## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais


|ID     | Descrição do Requisito  | Prioridade | Artefato Criado |
|-------|-----------------------------------------|----| ----|
|RF.001  | Registro de Fornecedores de Serviços de Eventos| ALTA | flogin.html, fcadastro.html, fsenha.html |
|RF.002  | Registro de Consumidores Interessados em Contratar Serviços de Evento | ALTA | flogin.html, fcadastro.html, fsenha.html |
|RF.003  | Autenticação de Usuários por Meio de Login e Senha | ALTA | flogin.html, fcadastro.html, fsenha.html |
|RF.004  | Opção de Recuperação de Senha | ALTA | flogin.html, fcadastro.html, fsenha.html |
|RF.005  | Perfil de Usuário para Fornecedores com Informações de Contato e Descrição de Serviços| ALTA | conta.html  |
|RF.006  | Perfil de Usuário para Consumidores com Informações Pessoais | ALTA | conta.html |
|RF.007  | Possibilidade de Pesquisa de Serviços por Categoria(Filtro)| ALTA | pesquisa.html |
|RF.009  | Opção de Upload de Fotos de Trabalhos Anteriores para Fornecedores | ALTA | servico.html  |
|RF.010  | Avaliação e Classificação de Fornecedores Pelos Consumidores| ALTA | servico.html  |
|RF.011  | Opção de Comentários e Feedback para Serviços Prestados| ALTA |servico.html  |
|RF.012  | Sistema de Reservas de Serviços por Data e Localidade| ALTA | servico.html  |
|RF.016  | Painel de Controle para Fornecedores Gerenciarem Suas Reservas| MÉDIA | conta-fornecedor.html  |
|RF.018  | Chat ou Sistema de Mensagens Internas para Comunicação entre Consumidores e Fornecedores| ALTA | conta-fornecedor.html |
|RF.019  | Calendário para Acompanhamento de Eventos Agendados| MÉDIA | conta.html  |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  | Prioridade |
|-------|-------------------------|----|
|RNF-001  | O sistema deve ser responsivo para rodar em um dispositivos móvel| MÉDIA |  
|RNF-006  | Velocidade de Carregamento Rápido | ALTA |  
|RNF-009  | Interface de Usuário Intuitiva e Simples | ALTA | 


### Requisitos ainda não implementados 

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-008  | Inclusão de Preços para Cada Serviço| MÉDIA |
|RF-013  | Integração com Diferentes Meios de Pagamento para Processamento de Transações Financeiras| MÉDIA |
|RF-014  | Geração de Recibos e Comprovantes de Pagamento| BAIXA |
|RF-015  | Notificações por E-mail ou Mensagem para Confirmação de Reservas|
|RF-017  | Permissão para Atualização de Informações de Perfil| BAIXA |
|RF-020  | Opção de Compartilhar Detalhes do Evento com Convidados ou Clientes| BAIXA |
|RF-021  | Integração com Redes Sociais para Compartilhamento de Serviços| MÉDIA | 
|RF-022  | Opção de Cancelamento de Reservas com Regras Claras de Reembolso| ALTA |
|RF-023  | Suporte para Atender a Diferentes Mercados(IDIOMAS REGIÕES)| BAIXA |
|RF-024  | Integração com Sistema de Geolocalização para Sugestões Baseadas na Localização do Usuário| ALTA |
|RF-025  |Relatório business: Emitir um relatório de tarefas no mês, que inclui dados e atividades do perfil profissional | BAIXA |
|RF-026  |Emitir um relatório de organização do evento para o cliente | MÉDIA |
|RF-027  | Oferecer descontos e ofertas de fornecedores complementares para completar o evento| BAIXA |
|RF-028  |Fornecer associação entre os fornecedores| BAIXA |
|RF-029  | Fornecer cadastro de participantes da festa| BAIXA |
|RF-030  | Fornecer convite padrão individual| BAIXA|
|RF-031  | Ranking de eventos| BAIXA |


### Requisitos não Funcionais

## Login
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Login          | Numero (Inteiro)  | Identificador de usuário                  | joaopedro123                                   |
| Senha          | Texto             | Senha de acesso                           | 12837Tzc#                                      |

## Dados de usuário
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| CPF            | Numero (Inteiro)  | CPF do usuário                            | 15347588216                                    |
| Telefone       | Numero (Inteiro)  | Telefone da conta                         | 31985783951                                    |
| Email          | Texto             | Email do usuario                          | emailteste@gmail.com                           |
| Endereço       | Texto             | Endereço do usuário                       | Avenida Afonso de Melo, 127                    |

## Dados de contrato
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| ID             | Numero (Inteiro)  | ID do contrato registrado                 | 68391                                          |
| Data           | Date              | Data da prestação do serviço              | 07-11-2023                                     |
| Valor          | Numero (Double)   | Valor do serviço                          | 2999.90                                        |
