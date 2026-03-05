# Exercices avec Thymio et l'interface VPL 3

## Introduction
Bienvenue dans les exercices Thymio VPL 3. Ces ateliers vous permettront de découvrir la programmation visuelle avec le robot Thymio.

## Prérequis
- Robot Thymio II
- Logiciel Thymio Suite avec l'editeur VPL 3
- Clé Thymio connecté

## Contenu des exercices
- [ ] Exercice 1 : Avancer
- [ ] Exercice 2 : Diriger
- [ ] Exercice 3 : Me suivre
- [ ] Exercice 4 : Parcours d’obstacles

## Introduction

Présenter à tout le groupe [la présentation suivante](presentation.pdf).
- Montrer le robot en action
- Présentez l'interface VPL 3
- Expliquer la notion d'action et évènement
- Expliquer comment executer le code sur le robot
- Présentez l'organisation des ateliers

## Exercice 1 : Avancer

### Présentation

Permet de découvrir le fonctionnement avec une première action sur le bouton flèche vers le haut, faire avancer le robot, changer la couleur du robot et jouer une musique.

/!\ Ne pas oublier de mettre une action d'arrêt.

### Instructions

Si Flèche vers le haut
Alors
      Avancer tout droit
      Changer la couleur du robot
      Jouer une musique

Si Robot sur le dos
Alors
      Arrêter le robot
      Supprimer la couleur

### Solution

[Solution de l'exercice 1](exercice1.vpl3)

## Exercice 2 : Diriger

### Présentation

On va utiliser tout les boutons de direction pour faire avancer le robot dans différentes directions.

### Instructions

Si Flèche vers le haut
Alors       Avancer tout droit
Si Flèche vers le bas
Alors      Reculer
Si Flèche vers la gauche
Alors      Tourner à gauche
Si Flèche vers la droite
Alors      Tourner à droite
Si Robot sur le dos
Alors      Arrêter le robot

### Solution

[Solution de l'exercice 2](exercice2.vpl3)

## Exercice 3 : Me suivre

### Présentation
On va utiliser les capteurs de proximité pour faire suivre le robot.
Avec la main, on peut faire suivre le robot en approchant la main du capteur de proximité. Le robot va suivre la main dans la direction où elle se trouve.

Si la main est devant le robot, il avance. Si la main est à gauche, il tourne à gauche. Si la main est à droite, il tourne à droite. Si la main est derrière, il recule.

Si pas de main, le robot s'arrête.

### Instructions

Utilisation du capteur :
lorsqu’il détecte un obstacle devant (main), il se dirige vers l’obstacle.

On peut ainsi diriger notre robot en utilisant ses mains. 

Si pas d'obstacle, alors arrêter le robot

### Solution
[Solution de l'exercice 3](exercice3.vpl3)

## Exercice 4 : Parcours d’obstacles
### Présentation
On va faire un parcours d’obstacles avec le robot. Le robot doit avancer tout droit,
mais s’il détecte un obstacle devant, il doit contourner l'obstacle.

Commencer par créer un parcours d’obstacles avec deux murs parallèles (des cartons, des livres, etc.).
Ajouter des obstacles sur le parcours (plots, ou constructions en lego).
Le robot doit avancer tout droit, mais s’il détecte un obstacle devant, il doit contourner l'obstacle.
Il n'y a pas de solution unique pour cet exercice, il faut laisser les enfants trouver leur propre solution.
Il est intéressant de faire plusieurs essais pour trouver la solution qui fonctionne le mieux.

### Instructions

But : le robot doit parcourir automatiquement un parcours en évitant les obstacles, il doit donc avancer tout seul. 
Si on détecte un obstacle, on tourne pour l’éviter (réfléchir à quel sens !)
Sinon on avance si l’espace est libre devant.
Utiliser un bouton pour commencer à avancer et pour arrêter.

Bonus: si on détecte un obstacle, on peut faire reculer le robot en tournant, démarrer un minuteur. Quand le minuteur est terminé, on avance à nouveau tout droit.

Bonus 2 : Utilisez un état pour activer ou désactiver les actions du robot. Par exemple, on peut utiliser un bouton pour activer le mode "parcours d'obstacles" et un autre bouton pour désactiver ce mode. Lorsque le mode est activé, le robot doit suivre les instructions pour éviter les obstacles. Lorsque le mode est désactivé, le robot doit s'arrêter.

### Solution

- [Solution de l'exercice 4](exercice4.vpl3)
- [Solution de l'exercice 4 : reculer](exercice4bis.vpl3)
- [Solution de l'exercice 4 : bonus](exercice5.vpl3)


## Ressources
- [Documentation officielle Thymio](https://www.thymio.org/)

---

*Dernière mise à jour : 2024*