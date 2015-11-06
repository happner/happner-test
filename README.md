# happner-test

Create test swarm and report.

#### Run Local

```
# sudo npm install foreman --global

nf start -j Procfile.test1.happner.net
nf start -j Procfile.test2.happner.net

# OR

nf start
```


#### Login

Local: [https://localhost:50000](http://localhost:50000)<br/>
Deployed: [https://test1.happner.net](https://test1.happner.net)<br/>

__in browser javascript console__

```javascript
localStorage.username = 'username';
localStorage.password = 'password';
```

...then refresh page


#### Deploy

__update live configs__
```
npm run-script get-config
# EDIT
npm run-script put-config
rm .env.test1.*
```

__deploy__
```
npm run-script deploy
```
