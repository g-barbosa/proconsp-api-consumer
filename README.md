# proconsp-api-consumer

[![npm version](https://img.shields.io/npm/v/proconsp-api-consumer.svg)](https://www.npmjs.com/package/proconsp-api-consumer)
[![build status](https://travis-ci.org/g-barbosa/proconsp-api-consumer.svg)](https://travis-ci.com/g-barbosa/proconsp-api-consumer)

Módulo do Node.js para fazer consultas de reclamações na API do PROCON de SP

### Para instalar este módulo 

```
$ npm i proconsp-api-consumer
```

## Como conseguir o token para a API

* [Crie uma conta na APILIB](https://apilib.prefeitura.sp.gov.br/store/site/pages/sign-up.jag)
* [Se inscreva na API do PROCON](https://apilib.prefeitura.sp.gov.br/store/apis/info?name=PROCON&version=v1&provider=admin)
* Siga as instruções do site para conseguir seu TOKEN

## Como fazer consultas

Setando o token da api do procon:

```js
const { PROCONAPI } = require('proconsp-api-consumer')

var api = new PROCONAPI('SEU_TOKEN_AQUI')

```

Realizando a chamada:

```js
  var resultSomenteAno = await api.GetComplaints(2019) // Retorna 20 resultados, do mais antigo para o mais atual
  var resultAnoLimite = await api.GetComplaints(2019, 5) // Retorna 5 resultados, do mais antigo para o mais atual
  var resultAnoLimitePagina = await api.GetComplaints(2019, 5, 2) // Retorna 5 resultados, a partir da página 2. Do mais antigo para o mais atual
```

Retorno esperado:

```jason
{
  total: 745,
  data: [
    {
      'Entrada da reclamação': '03/01/2019',
      'Região': 'SUL',
      'Razão Social': 'blablablablabla',
      'Área': 'Alimentos',
      'Motivo de baixa no Backoffice': 'blablablablabla'
    },
    ...
  ]
}
```
