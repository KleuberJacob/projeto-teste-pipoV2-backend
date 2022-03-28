# Projeto de Teste PipoV2

## Requisitos
>*  NodeJS.
>*  MySQL.
>*  Editor de código (VS Code, Sublime Text ou similar).

## Instalação
1. Clone Repo - https://github.com/KleuberJacob/projeto-teste-pipoV2-backend.git
2. npm install 

## Primeiros Passos
1. Criar banco de dados. 
2. Configurar .env(variáveis de ambiente) com suas credenciais de acesso ao banco.

## Criando dados base no banco de dados
1. Rodar os comandos SQL via terminal ou SGBD(Workbench) para inserção dos dados base do projeto.
2.  USE "nome do seu banco de dados criado"; <br>
    INSERT INTO plain_types (name, createdAt, updatedAt) <br>
      VALUES ( "Plano de Saúde", "2022-03-28 12:00:00", "2022-03-28 12:00:00"); <br>
    INSERT INTO plain_types (name, createdAt, updatedAt) <br>
      VALUES ( "Plano Odontológico", "2022-03-28 13:00:00", "2022-03-28 13:00:00"); <br>
    INSERT INTO plain_types (name, createdAt, updatedAt) 	<br>
      VALUES ( "Plano de Saúde Mental", "2022-03-28 14:00:00", "2022-03-28 14:00:00"); <br>
3.  USE "nome do seu banco de dados criado"; <br>
    INSERT INTO plains (name, plain_type, createdAt, updatedAt) <br>
	  VALUES ( "Plano de Saúde Norte Europa", 1, "2022-03-28 12:00:00", "2022-03-28 12:00:00"); <br>
    INSERT INTO plains (name, plain_type, createdAt, updatedAt) <br>
	  VALUES ( "Plano de Saúde Pampulha Intermédica", 1, "2022-03-28 15:00:00", "2022-03-28 15:00:00"); <br>
    INSERT INTO plains (name, plain_type, createdAt, updatedAt) <br>
	  VALUES ( "Plano Odontológico Dental Sorriso", 2,  "2022-03-28 15:00:00", "2022-03-28 15:00:00"); <br>
    INSERT INTO plains (name, plain_type, createdAt, updatedAt) <br>
	  VALUES ( "Plano de Saúde Mental Mente Sã Corpo São", 3,  "2022-03-28 15:00:00", "2022-03-28 15:00:00"); <br>
4.  USE "nome do seu banco de dados criado"; <br>
    INSERT INTO companies (name, cnpj, health_plain, dental_plain, health_mental_plain, createdAt, updatedAt) <br>
	  VALUES ( "Acme Co.", "91.850.880/0001-40", 1, 3, null, "2022-03-28 12:00:00", "2022-03-28 12:00:00"); <br>
    INSERT INTO companies (name, cnpj, health_plain, dental_plain, health_mental_plain, createdAt, updatedAt) <br>
	  VALUES ( "Tio Patinhas Bank", "13.517.041/0001-00", 2, 3, 4, "2022-03-28 13:00:00", "2022-03-28 13:00:00") <br>
5.  USE "nome do seu banco de dados criado"; <br>
    INSERT INTO companies_x_plains (id_company, id_plain, createdAt, updatedAt) <br>
	  VALUES ( 1, 1, "2022-03-28 12:00:00", "2022-03-28 12:00:00"); <br>
    INSERT INTO companies_x_plains (id_company, id_plain, createdAt, updatedAt) <br>
	  VALUES ( 1, 3, "2022-03-28 13:00:00", "2022-03-28 13:00:00"); <br>
    INSERT INTO companies_x_plains (id_company, id_plain, createdAt, updatedAt) <br>
	  VALUES ( 2, 2, "2022-03-28 14:00:00", "2022-03-28 14:00:00");<br>
    INSERT INTO companies_x_plains (id_company, id_plain, createdAt, updatedAt) <br>
	  VALUES ( 2, 3, "2022-03-28 15:00:00", "2022-03-28 15:00:00");<br>
    INSERT INTO companies_x_plains (id_company, id_plain, createdAt, updatedAt) <br>
	  VALUES ( 2, 4, "2022-03-28 16:00:00", "2022-03-28 16:00:00");<br>
    
## Dar comando via terminal do editor para iniciar o backend do projeto
>* npm start

## Rotas
>* GET Todas as Empresas => http://localhost:3001/companies
>* GET Planos da Empresa => http://localhost:3001/company/:id/plains
>* GET Colaboradores da Empresa => http://localhost:3001/company/:id/employees
>* POST Novo Colaborador na Empresa => http://localhost:3001/new/employee
>* DELETE Colaborador da Empresa => http://localhost:3001/employee/:id

