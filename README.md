# rentalx
Projeto desenvolvido ao decorrer do curso de Nodejs Ignite - Rocketseat

# Cadastro de carro

**RF** 
Deve ser possível cadastrar um novo carro.
Deve ser possível listar todas as categorias


**RN** 
Não deve ser possível cadastrar um carro com uma placa já existente.
Não deve ser possível alterar a placa de um carro já cadastrado.
O Carro deve ser cadastrado, por padrão com disponibilidade.
Somente um usuário administrador pode realizar o cadastro.

# Listagem de carros

**RF** 
Deve ser possível listar todos os carros disponiveis.
Deve ser possível listar todos os carros disponiveis pelo noma da categoria.
Deve ser possível listar todos os carros disponiveis pelo noma da marca.
Deve ser possível listar todos os carros disponiveis pelo noma do carro.

**RN** 
O usuário não precisa estar logado no sistema.


# Cadastro de Especificação no carro

**RF** 
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.

**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.


# Cadastro de imagens do carro

**RF** 
Deve ser possível cadastrar a imagem do carro.
Deve ser possível listar todos os carros.

**RNF**
Utilizar o multer para o upload dos arquivos.

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro dever um usuários administrador.

# Alugel de carro

**RF**
Deve ser possivel cadastrar um alugel.

**RN** 
O alugel deve ter duração mínima de 24 horas.
Não deve ser possivel cadastrar um novo alugel caso já exista um aberto para um novo usuário.
Não deve ser possivel cadastrar um novo alugel caso já exista um aberto um mesmo carro.

