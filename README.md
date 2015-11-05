# happner-test

Create test swarm and report.

#### Login

[https://test1.happner.net](https://test1.happner.net)

__in browser javascript console__

```javascript
localStorage.username = 'username';
localStorage.password = 'password';
```

...then refresh page


#### Deploy

__updates to live configs__
```
scp test@test1.happner.net:test1.happner.net.live/.env.test1.happner.net .
# EDIT
scp .env.test1.happner.net test@test1.happner.net:test1.happner.net.live/
```
```
scp test@test2.happner.net:test2.happner.net.live/.env.test2.happner.net .
# EDIT
scp .env.test2.happner.net test@test2.happner.net:test2.happner.net.live/
```



__observe__
ssh test@test1.happner.net tail -f /var/log/test1.happner.net/*
ssh test@test2.happner.net tail -f /var/log/test2.happner.net/*

__perform__
git push test@test1.happner.net:test1.happner.net.git master
git push test@test2.happner.net:test2.happner.net.git master

