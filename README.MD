# Informações importantes:

    - Este Projeto foi criado inteiramente utilizando Typescript.
    - Tanto na API quanto no front, foram utilziadas variáveis ambiente. Portanto, lembre-se de criar os arquivos .env para cada um.
    - No projeto front-end, foi utilizado o package manager 'VITE'. Portanto, a forma de utilização das variaveis ambiente não são consistentes nos dois projetos. Enquanto no front, a forma de se chamar as variaveis é
    - import.meta.env.VARIAVEL
    - No projeto back-end as variáveis ambientes são chamadas como:
    - process.env.VARIAVEL

# Variáveis Ambiente front-end:

    - import.meta.env.VITE_APP_API_URL (usada como url base para conexão com a api utilizando o axios)
    - import.meta.env.VITE_APP_API_ITEMS=/users/session/items (seta o path para o retorno de todos os itens)

# Variáveis Ambiente back-end:

    - DEV_DB_USER_NAME  (username)
    - DEV_DB_PASS   (db password)
    - DEV_DB_NAME   (db name)
    - DEV_DB_HOST   (db host)
    - DEV_DB_PORT   (db porta)
    - DEV_TOK_SEC   (jws secret)

# Iniciando a API:

    - utilizar o script 'yarn build' localizado no package.json
    - Os arquivos TS serão transpilados para .JS e toda a conexão com o banco, através do sequelize-cli poderá ser feita.
    - yarn sequelize db:create para criar o novo banco
    - yarn sequelize db:migrate para criar as tabelas no banco de dados.
