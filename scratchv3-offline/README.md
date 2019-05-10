# Scratch 3 offline

Cette commande permet de lancer une version offline de Scratch 3. Une fois la commande lancée, Scratch est alors disponible
à l'adresse http://localhost:9999.

```
tar -xvzf scratch.tgz && cd scratch && python -m SimpleHTTPServer 9999
```