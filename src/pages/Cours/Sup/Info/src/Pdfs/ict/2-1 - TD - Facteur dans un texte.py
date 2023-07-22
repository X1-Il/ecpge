'''2 - Algorithmes à boucles imbriquées'''

## 2-1 - Facteurs dans un texte

# Question 1 - Les indices

'''
Il faut faire varier i de 0 à T-M (faire donc un range(0,T-M+1) )
sous_mot= texte[i:i+M] permet alors d'avoir le sous-mot de texte qui se trouve à la position i et a la même longueur que mot
Remarque: pour la fonction 1, on peut ne pas tenir compte de T-M+1, car:
- appeler L[1:10] sur L='abc' ne renvoie pas d'erreur et donne 'bc'
- le test entre mots de tailles différences ne renverra pas d'erreurs
'''

# Question 2 - Recherche_motif_1

def Recherche_motif_1(mot,texte):
    '''Etant donnés un mot et un texte, renvoie True si mot est présent, False sinon, slice autorisé'''
    T = len(texte)
    M = len(mot)
    for i in range(T-M+1):
        sous_mot = texte[i:i+M]
        if mot == sous_mot:
            return True
    return False

test = Recherche_motif_1('ard','il est tard')
print(test)
test = Recherche_motif_1([1,3,5],[15,-12,1,3,5,19,23])
print(test)
test = Recherche_motif_1([1,3,5],[1,2,3,4,5])
print(test)

# Question 3 - Recherche_motif_2

def Recherche_motif_2(mot,texte): # Avec deux boucles for
    '''Etant donnés un mot et un texte, renvoie True si mot est présent, False sinon, slice non autorisé'''
    T = len(texte)
    M = len(mot)
    for i in range(T-M+1):
        est_present = True
        for im in range(M):
            it = i+im
            if texte[it] != mot[im]:
                est_present = False
        if est_present:
            return True
    return False

def Recherche_motif_2(mot,texte): # Version identique à la précédente où on compte le nombre de bonnes lettres
    T = len(texte)
    M = len(mot)
    for i in range(T-M+1):
        Nb_OK = 0
        for im in range(M): # Indice dans le mot
            it = i+im # Indice dans le texte
            if texte[it] == mot[im]:
                Nb_OK += 1
        if Nb_OK == M:
            return True
    return False

'''
Remarque sur la complexité: dans le cas de deux boucles for sans break, la complexité sera en O(M*T) tout le temps
'''

test = Recherche_motif_2('ard','il est tard')
print(test)
test = Recherche_motif_2([1,3,5],[15,-12,1,3,5,19,23])
print(test)
test = Recherche_motif_2([1,3,5],[1,2,3,4,5])
print(test)

def Recherche_motif_2(mot,texte): # Avec une boucle for et une boucle while
    T = len(texte)
    M = len(mot)
    for i in range(T-M+1):
        im = 0  # Indice pour parcourir les lettres du mot
        while im < M and texte[i+im] == mot[im]: # Ordre des tests important, si vous les inversez, mot[im] causera un bug quand on a fini de trouver tout le mot mot
            im += 1
        # im est le nombre de lettres identiques trouvées
        if im == M: # Le mot est présent si on a trouvé M lettres identiques
            return True
    else:
        return False

def Recherche_motif_2(mot,texte): # Avec une boucle for et une boucle while - Une condition en moins dans while et indentation du if
    T = len(texte)
    M = len(mot)
    for i in range(T-M+1):
        im = 0
        while texte[i+im] == mot[im]:
            im += 1
            if im == M: # Si on a trouvé les M on sort
                return True
    else:
        return False

'''
Remarque sur la complexité: dans le cas d'un for et d'un while, la complexité sera en O(M*T) si le mot recherché est présent partout, et en O(M) uniquement, si le mot n'est pas présent. C'est donc plus intéressant que deux for. Raison ? Pourquoi comparer les lettres suivantes si dès la première, il n'y a pas concordance ?
'''

test = Recherche_motif_2('ard','il est tard')
print(test)
test = Recherche_motif_2([1,3,5],[15,-12,1,3,5,19,23])
print(test)
test = Recherche_motif_2([1,3,5],[1,2,3,4,5])
print(test)

'''
Il est possible d'améliorer les versions avec 2 boucles for pour obtenir une complexité en O(T) avec un break pour arrêter la seconde boucle
'''

def Recherche_motif_2(mot,texte): # Version identique à la précédente où on compte le nombre de bonnes lettres
    T = len(texte)
    M = len(mot)
    for i in range(T-M+1):
        j = 0
        Nb_OK = 0
        for im in range(M): # Indice dans le mot
            it = i+im # Indice dans le texte
            if texte[it] == mot[im]:
                Nb_OK += 1
            else:
                break
        if Nb_OK == M:
            return True
    return False

# Question 4

def Positions_motif(mot, texte):
    '''Etant donnés un mot et un texte, renvoie la liste des positions de mot dans le texte, la liste vide est renvoyée si le mot est absent'''
    T = len(texte)
    M = len(mot)
    L = []
    for i in range(T-M+1):
        sous_mot = texte[i:i+M]
        if mot == sous_mot:
            L.append(i)
    return L

# Question 5

extrait = """Anton Voyl n'arrivait pas à dormir. Il alluma. Son Jaz marquait
 minuit vingt. Il poussa un profond soupir, s'assit dans son lit,
 s'appuyant sur son polochon. Il prit un roman, il l'ouvrit, il lut;
 mais il n'y saisissait qu'un imbroglio confus, il butait à tout instant
 sur un mot dont il ignorait la signification.\n Il abandonna son roman
 sur son lit. Il alla à son lavabo; il mouilla un gant qu'il passa sur
 son front, sur son cou.\n Son pouls battait trop fort. Il avait chaud.
 Il ouvrit son vasistas, scruta la nuit. Il faisait doux. Un bruit
 indistinct montait du faubourg. Un carillon, plus lourd qu'un glas, plus
 sourd qu'un tocsin, plus profond qu'un bourdon, non loin, sonna trois
 coups. Du canal Saint-Martin, un clapotis plaintif signalait un chaland
 qui passait. Sur l'abattant du vasistas, un animal au thorax indigo, à
 l'aiguillon safran, ni un cafard, ni un charançon, mais plutôt un
 artison, s'avançait, traînant un brin d'alfa. Il s'approcha, voulant
 l'aplatir d'un coup vif, mais l'animal prit son vol, disparaissant dans
 la nuit avant qu'il ait pu l'assaillir."""

test = Positions_motif('son', extrait)
print(test)
print(len(test))
''' 'son' apparait 11 fois'''
test = Positions_motif('envol', extrait)
print(test)
