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

#### Minion Scripts

Minions (of type) run scripts (by name) from `scripts/{type}_{name}.js`.

##### Types of minion.

__mesh__ - minion has a `Mesh` connected uptree<br/>
__client__ - minion has a `MeshClient` connected uptree<br/>
__none__ - minion has neither of the above<br/>

Note: Minions of type __mesh__ start their `Mesh` with a named config from `configs/minion_{name}.js`

See [Actions](#actions) below for how to start specified minions/configs/scripts.<br>
See `scripts/*`, `configs/minion_*.js`


#### Master Scripts

The master can run scripts that configure a situation and spawn minion/scripts into it.

See [Actions on Master](#actions-on-master)<br/>
See `scripts/master_*.js`


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

(control from browser)

__in browser javascript console__

##### stop minions

```javascript
action('controller.killMinions');
action('controller.killMinion', '__name__');
```


##### start minions (spread across all available marshals)

```javascript
action('controller.spawnMinions', 10);
```

##### start minions as mesh nodes (full config complement)

```javascript
var spawnMesh = {
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

action('controller.spawnMinions', 10, spawnMesh);
```

##### start minions as mesh clients (full config complement)

```javascript
var spawnAsClients = {
  type: 'client',
  endpoint: 'insecure', // connects to 'bin/secure' or 'bin/insecure'
  script: 'default'     // see scripts/client_{name}.js
}

action('controller.spawnMinions', 10, spawnAsClient);
```

#### Actions on Master

(control from browser)

__in browser javascript console__

##### start a master script

```javascript
action('controller.runScript', 'example', {opts: 1});
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

ssh test@test1.happner.net sudo restart test1.happner.net
ssh test@test2.happner.net sudo restart test2.happner.net

# logs

ssh test@test1.happner.net tail -f /var/log/test1.happner.net/*
ssh test@test2.happner.net tail -f /var/log/test2.happner.net/*

# homes

test@test1.happner.net:test1.happner.net.live/
test@test2.happner.net:test2.happner.net.live/

```