# durable function example repo

## dependencies
- [pm2](https://pm2.keymetrics.io/)
- azure cli
- azure function utils

## to start local dev
assuming you're logged into azure via cli
```
pm2 start ecosystem.config.js
```

## Todo
- build full workflow
- - grab csv
- - validate
- - transform
- - push to new location