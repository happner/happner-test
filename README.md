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

#### Actions

__in browser javascript console__

```
// stop minions
action('controller.killMinions');
action('controller.killMinion', '__name__');

// start minions (spread across available marshals)
action('controller.spawnMinions', {count: 1});

// spawn 10 minions as mesh nodes (full config complement)
var spawnMeshes = {
  count: 10,
  type: 'mesh',
  endpoint: 'secure'  // connects to 'bin/secure' or 'bin/insecure'
  config: 'default',  // see configs/minion_{name}.js
  script: 'default',  // see scripts/mesh_{name}.js
  user: {
    username: 'guest',
    password: '',
  }
}

action('controller.spawnMinions', spawnMeshes);

// spawn 10 minions as mesh clients (full config complement)
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
