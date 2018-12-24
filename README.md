# README

## Sobre o Sistema

Timetracking é o desafio full-stack da mywork.

Esse sistema de controle de ponto consiste em uma página onde um funcionário realiza checkin, para isso ele digita um comentário (entrada, saída, almoço etc), permite que acessemos sua localização (logitude e latitude) e clica no botão Checkin.

A página principal(index) contém um lista com o registro dos checkins do usuário, com os mais recentes no topo. Todos registros tem a opção de mostrar um mapa com a localização do usuário no momento do checkin.

Todas as páginas tem um relógio que atualiza a cada segundo e a data atual (formato mm/dd/yyyy). Lembrando que o relógio está programado no BRST (UTC - 02).

## Configurações
* Download do Rails, Ruby, Bundler e Sqlite podem ser feitos em : [Rails Installer](http://www.railsinstaller.org/)

* Para migrar o banco de dados, entre no diretório *timetracking* pelo git e digite o seguinte código:
```
bin/rails db:migrate RAILS_ENV=development 
```
* Para executar, digite no diretório timetracking:
```
rails s
```
Lembrando que o sistema está disponível em localhost:3000


* Ruby version: 2.3.3

## Sobre o desenvolvimento
* Criação de um databse para os checkins, cada checkin tem os atributos typeCheckin, longitude, latitude e created_at.
* Utilização de Bootstrap no design. Adicionei atráves do link para o website do Bootstrap, logo, a estilização só funciona online, caso queira o design offline, faça o download no site oficial do bootstrap, insira em app/assets/stylesheets, e chame-o em app/views/layouts/application.html.erb para fazer efeito.
* As funções para data e hora foram feitas separadamente em javascript.
* A geolocalização é solicitada assim que o usuário entrar na página para realizar o checkin, isso para acelerar a captura das coordenadas enquanto ele ainda não escreve o comentário, pois dependemos da velocidade da conexão para tal.
* Existe a validação dos campos no próprio servidor (app/models/checkin.rb) e por javascript, impedindo o envio de dados inadequados.
* Inverti a ordem da lista dos checkins em app/controllers/checkins_controller.rb, ordenando por data (created_at DESC).
