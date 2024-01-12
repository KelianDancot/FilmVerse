# FilmVerse

# Comment accéder à FilmVerse ?

Ouvrez votre navigateur web préféré.

Dans la barre d'adresse du navigateur, saisissez l'URL du site FilmVerse (https://s4-8019.nuage-peda.fr/FilmVerse/).

# Comment utiliser FilmVerse ?

Pour utiliser l'application Web FilmVerse, rien de plus simple ! Utilisez la barre de recherche située en haut à gauche pour rechercher le film que vous souhaitez (il doit contenir au moins un des mots du titre du film). La recherche se fait par le titre du film, donc n'essayez pas de saisir le nom d'un acteur !

Le site affiche actuellement le titre ainsi que la moyenne d'évaluation du film. Si vous souhaitez obtenir plus d'informations, survolez les films avec votre souris pour obtenir le nom du ou des réalisateur(s), la date de sortie du film et le synopsis !

# Comment j'ai réaliser FilmVerse ?

Pour réaliser ce projet, j'ai tout d'abord utilisé un template pour le design appelé "photolio".

![alt text](https://media.discordapp.net/attachments/990649587956056165/1111629478146363422/Capture_decran_2023-05-25_135312.png?width=1365&height=671)

J'ai conservé les couleurs ainsi que les styles de certains éléments.

Ensuite, j'ai créé mon compte sur le site de TMDB et j'ai récupéré la clé d'API et l'URL de base utilisés pour toutes les requêtes à l'API.

Ensuite, j'ai commencé par définir une URL par défaut pour récupérer les derniers films sortis et les afficher sur la page d'accueil.

![alt text](https://media.discordapp.net/attachments/990649587956056165/1111631678104940594/image.png?width=581&height=671)

Ensuite, j'ai veillé à ce que toutes les informations demandées dans le sujet soient disponibles lors de l'affichage des films ou en survolant la souris dessus.

![alt text](https://media.discordapp.net/attachments/990649587956056165/1111633694977970236/image.png)

Enfin, j'ai veillé à ce que la barre de recherche fonctionne correctement.

![alt text](https://media.discordapp.net/attachments/990649587956056165/1111634288773955685/image.png?width=1365&height=671)

# Quelles sont les problèmes rencontrés ?

Le principal problème rencontré a été de réaliser la requête pour obtenir le réalisateur. 

Celui-ci n'était pas directement indiqué dans la documentation, il a donc fallu effectuer une requête sur les personnes participant au film, puis filtrer les résultats pour ne conserver que les personnes faisant partie de l'équipe de réalisation ("crew") et ayant pour "job" "Director". 

C'est probablement la seule chose qui m'a pris plus de temps que les autres. 

Heureusement, j'ai trouvé une discussion avec une personne également embarrassée comme moi :

![alt text](https://media.discordapp.net/attachments/990649587956056165/1111629478897135636/Capture_decran_2023-05-26_094823.png?width=1440&height=511)
