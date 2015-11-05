# happner-test

Create test swarm and report.

#### Deploy

__observe__
ssh test@test1.happner.net tail -f /var/log/test1.happner.net/*
ssh test@test2.happner.net tail -f /var/log/test2.happner.net/*

__perform__
git push test@test1.happner.net:test1.happner.net.git master
git push test@test2.happner.net:test2.happner.net.git master

