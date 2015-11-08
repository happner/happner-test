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
action('controller.spawnMinions', {
    count: 1,
    // name: 'optional', // WARNING: does not protect against name duplicates

    type: 'mesh',    // 'mesh' or 'client' (see bin/minion_*)
    script: 'name', // runs scripts/mesh_{name} or scripts/client_{name} 
                   // depending on type

    endpoint: 'secure', // connect to 'bin/secure' or 'bin/insecure'
    // user: { // if endpoint: 'secure'
    //   username: 'guest',
    //   password: '',
    // },
});
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
