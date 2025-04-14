# Communication between microservices
```
course-orders/
│
├── checkout/                      # Microserviço de checkout
│   ├── prisma/                    # Migrations e schema do Prisma
│   │   └── schema.prisma
│   ├── src/
│   │   ├── modules/               # Casos de uso e regras de negócio
│   │   ├── routes/                # Rotas da API
│   │   ├── services/              # Lógica externa ou integração (ex: payment API)
│   │   ├── database/              # Instância Prisma
│   │   ├── app.ts                 # Configuração do app (Express)
│   │   └── server.ts              # Start do servidor
│   ├── tests/                     # Testes com Jest
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── tsconfig.json
│   └── package.json
│
├── payment/                       # Microserviço de payment
│   ├── prisma/
│   │   └── schema.prisma
│   ├── src/
│   │   ├── modules/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── database/
│   │   ├── app.ts
│   │   └── server.ts
│   ├── tests/
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── tsconfig.json
│   └── package.json
│
└── docker-compose.yml            # Compose raiz para orquestrar tudo (serviços + banco)

```


-----
reference: [Implementando a comunicação entre Microservices: Síncrona vs. Assíncrona - RodrigoBranas](https://youtu.be/kgRMPN96Lns?list=PLQCmSnNFVYnStflA1V__q6_9yC8_nV2ra)