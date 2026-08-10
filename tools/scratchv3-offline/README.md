# Scratch 3 offline

Cette commande permet de lancer une version offline de Scratch 3. Une fois la commande lancée, Scratch est alors disponible
à l'adresse http://localhost:9999.

```sh
tar -xvzf scratch_v3.tgz && cd scratch && python3 -m http.server 9999
```