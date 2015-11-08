# happner-test

Create test swarm and report.

#### Run Local

```
# sudo npm install foreman --global

nf start -j Procfile.test1.happner.net
nf start -j Procfile.test2.happner.net

# OR (all together)

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

#### Actions

__in browser javascript console__

##### stop minions

```javascript
action('controller.killMinions');
action('controller.killMinion', '__name__');
```


##### start minions (spreads across all available marshals)

```javascript
action('controller.spawnMinions', {count: 10});
```

##### start minions as mesh nodes (full config complement)

```javascript
var spawnMeshes = {
  count: 10,
  type: 'mesh',
  endpoint: 'secure'  // connects to 'bin/secure' or 'bin/insecure'
  config: 'default',  // see configs/minion_{name}.js
  script: 'default',  // see scripts/mesh_{name}.js
  user: {
    username: 'guest',
    password: '',
  },
  // stderr: true, // outstreams from minion(s) output on mashal's console/log
  // stdout: true, // ssh test@test2.happner.net tail -f /var/log/test2.happner.net/marshal-1.log
}

action('controller.spawnMinions', spawnMeshes);
```

##### start minions as mesh clients (full config complement)

```javascript
var spawnAsClients = {
  count: 10,
  type: 'client',
  endpoint: 'insecure', // connects to 'bin/secure' or 'bin/insecure'
  script: 'default'     // see scripts/client_{name}.js
}

action('controller.spawnMinions', spawnAsClients);
```

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


__manage__
```
# start|stop|restart

ssh test@test2.happner.net sudo restart test2.happner.net
ssh test@test2.happner.net sudo restart test2.happner.net

# logs

ssh test@test1.happner.net tail -f /var/log/test1.happner.net/*
ssh test@test2.happner.net tail -f /var/log/test2.happner.net/*

# homes

test@test1.happner.net:test1.happner.net.live/
test@test2.happner.net:test2.happner.net.live/

```