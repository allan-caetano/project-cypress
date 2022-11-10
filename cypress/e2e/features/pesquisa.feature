Feature: Pesquisar no sistema de Teste WEB

  @CT-01
  Scenario: Visualizar a Pesquisar no site
    Given Acesso ao site
    When faço a autenticação "Allanssssssssss"
    Then vejo a mensagem de alerta
  @CT-02
  Scenario: Visualizar a Pesquisar no site user correto
    Given Acesso ao site
    When faço a autenticação "Allan"
    Then vejo a mensagem de alerta
