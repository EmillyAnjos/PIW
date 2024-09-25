# :checkered_flag: LOJA DE ROUPAS
Um site que vende produtos usados, mais especificamente produtos no tema gótico e geek.

## :technologist: Membros da equipe

- Emilly dos Anjos - 537384

## :people_holding_hands: Papéis ou tipos de usuário da aplicação

1. Usuário não registrado (visitante)
  - pode ver os detalhes do produto
  - pode navegar pelas categorias e os produtos nelas
    
2. Usuário registrado
  - pode fazer tudo o que o visitante faz
  - concluir uma compra
  - adicionar, excluir um objeto do seu carrinho
  - pode administrar o perfil
    
3. Administrador (vendedor)
   - Pode fazer tudo o que o usuario cadastrado faz
   - pode adicionar, excluir e editar produtos 
   - pode cancelar, confirmar ou excluir pedidos 
  
> Tenha em mente que obrigatoriamente a aplicação deve possuir funcionalidades acessíveis a todos os tipos de usuário e outra funcionalidades restritas a certos tipos de usuários.

## :spiral_calendar: Entidades ou tabelas do sistema
* usuario
  - nome, senha,ID,
* produto
  -nome, descrição,ID, preço, categoria
* carrinho
  - produtos, preço, id, 
* adm
  - adicionar, remover e editar produtos CRUD
## :triangular_flag_on_post:	 Principais funcionalidades da aplicação
1. navegação de produtos
   - filtrar produtos (categoria), adicionar no carrinho e pesquisar sobre eles
2. tela de perfil do usuario
   - mudar senha, sair ou entrar na conta, cadastra-se, acesso ao carrinho, pedidos
3. tela de perfil do administrador ( vendedor)
   - tem tudo que tem na tela do usuario
   - gerenciar loja (perfil da loja)
6. loja(Lista de produtos do usuario) 
   - adicionar, escluir ou editar/precificar produtos
   - administrar as categorias dos produtos
   - administrar envios (aceitar ou recusar) 

:warning::warning::warning: As informações a seguir devem ser enviadas juntamente com a versão final do projeto. :warning::warning::warning:


----

## :desktop_computer: Tecnologias e frameworks utilizados

**Frontend:**

Lista as tecnologias, frameworks e bibliotecas utilizados.

**Backend:**

Lista as tecnologias, frameworks e bibliotecas utilizados.


## :shipit: Operações implementadas para cada entidade da aplicação


| Entidade| Criação | Leitura | Atualização | Remoção |
| --- | --- | --- | --- | --- |
| Entidade 1 | X |  X  |  | X |
| Entidade 2 | X |    |  X | X |
| Entidade 3 | X |    |  |  |

> Lembre-se que é necessário implementar o CRUD de pelo menos duas entidades.

## :neckbeard: Rotas da API REST utilizadas

| Método HTTP | URL |
| --- | --- |
| GET | api/entidade1/|
| POST | api/entidade2 |

