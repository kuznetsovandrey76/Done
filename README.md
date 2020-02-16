Вход в личный кабинет BEGET
`ssh -i id_rsa akuznetsov@akuznetsov.beget.tech`
`cd andreykuznetsov.ru/`


Структура andreykuznetsov.ru/
``` js
Done/
    node_modules/ (npm i)
    views/
    tmp/
        restart.txt (пустой)
    app.js
    .env
    package.json 
public_html/
    css/ 
    js/
    img/
publiс/ (LINK на public_html)
.htaccess
```


`mkdir -p Done/tmp`
`ln -s public_html public`


.htaccess
``` js
PassengerNodejs /home/a/akuznetsov/.local/bin/node
PassengerAppRoot /home/a/akuznetsov/andreykuznetsov.ru/Done
PassengerAppType node
PassengerStartupFile app.js
```

`touch tmp/restart.txt`
При изменении или добавлении кода также требуется выполнять данную команду, чтобы увидеть изменения на сайте.

``` sql
create table msgs(
    id int auto_increment,
    msg text not null,
    date DATETIME not null,
    primary key (id)
);
```

HELP 
`https://beget.com/ru/articles/webapp_nodejs`

.env
``` js
HOST=akuznetsov.beget.tech
DB=
PASS=
// user == database в app.js
// user: process.env.DB,
// database: process.env.DB,
```