''' 3 - Intelligence artificielle'''

'''3-3 - Jeu de Babylone'''

## Exercice 1 - Jeu de Babylone

## Lister les coups possibles

# Question 1 - Etat de x

'''
Situation 1: x=[[0,1],[0,1],[1,1],[1,1]]
Situation 2: x=[[0,2],[1,1],[1,1]]
'''

# Question 2 - empile

def empile(x,i,j):
    LXij = []
    ci,hi = x[i]
    cj,hj = x[j]
    if ci==cj or hi==hj:
        reste = x[:i]+x[i+1:j]+x[j+1:]
        pij = [ci,hi+hj] # i sur j
        X = reste + [pij]
        X.sort()
        LXij.append(X)
        if ci!=cj: # si couleur différente
            pji = [cj,hi+hj] # j sur i
            X = reste + [pji]
            X.sort()
            LXij.append(X)
    return LXij

'''
x = [[0,1],[0,1],[1,1],[1,1]]
test = empile(x,0,1)
print(test)
x = [[0,1],[0,1],[1,1],[1,1]]
test = empile(x,0,3)
print(test)
x = [[0,2],[1,1],[1,1]]
test = empile(x,0,1)
print(test)
'''

''' Résultat
[[[0, 2], [1, 1], [1, 1]]]
[[[0, 1], [0, 2], [1, 1]], [[0, 1], [1, 1], [1, 2]]]
[]
'''

# Question 3 - coups

def coups(x):
    LX = []
    for i in range(len(x)):
        for j in range(i+1,len(x)):
            LXij = empile(x,i,j)
            for X in LXij:
                if X not in LX: # Différentes
                    LX.append(X)
    return LX

'''
x = [[0,2],[0,3],[1,1],[1,2]]
test = coups(x)
print(test)
x = [[0,1],[0,1],[1,1],[1,1]]
test = coups(x)
print(test)
'''

''' Résultat
[[[0, 5], [1, 1], [1, 2]], [[0, 3], [0, 4], [1, 1]], [[0, 3], [1, 1], [1, 4]], [[0, 2], [0, 3], [1, 3]]]
[[[0, 2], [1, 1], [1, 1]], [[0, 1], [0, 2], [1, 1]], [[0, 1], [1, 1], [1, 2]], [[0, 1], [0, 1], [1, 2]]]
'''

'''
J'ai vérifié: sans sort dans empile, les élèves ne trouveront pas le même résultat que moi
'''

## Création du graphe du jeu

# Question 4 - init

def init(C,N):
    x0 = []
    for c in range(C):
        for _ in range(N):
            x0.append([c,1])
    x0.sort() # Inutile compte tenu de ma programmation avec c croissant
    return x0

'''
test = init(3,4)
print(test)
'''

'''Résultat
[[0, 1], [0, 1], [0, 1], [0, 1], [1, 1], [1, 1], [1, 1], [1, 1], [2, 1], [2, 1], [2, 1], [2, 1]]
'''

# Question 5 - Tuple

def Tuple(L):
    if L==[]:
        return ()
    elif type(L[0])!=list:
        return tuple(L)
    else:
        Res = []
        for l in L:
            Res.append(Tuple(l))
        return tuple(Res)

'''
L = [[[1,2],[3,4,5],[[6]]]]
test = Tuple(L)
print(test)
'''

''' Résultat
(((1, 2), (3, 4, 5), ((6,),)),)
'''

# Question 6 - graphe

from collections import deque

def graphe(C,N):
    x0 = init(C,N)
    G = {}
    file = deque()
    file.append(x0)
    while len(file) != 0:
        x = file.popleft()
        Cle = Tuple(x)
        Lc = coups(x)
        Valeur = Lc
        G[Cle] = Valeur
        for c in Lc:
            if Tuple(c) not in G:
                file.append(c)
    return G

C,N = 2,2
Graphe = graphe(C,N)

'''
print(Graphe)
'''

''' Résultat
{((0, 1), (0, 1), (1, 1), (1, 1)): [[[0, 2], [1, 1], [1, 1]], [[0, 1], [0, 2], [1, 1]], [[0, 1], [1, 1], [1, 2]], [[0, 1], [0, 1], [1, 2]]], ((0, 2), (1, 1), (1, 1)): [[[0, 2], [1, 2]]], ((0, 1), (0, 2), (1, 1)): [[[0, 3], [1, 1]], [[0, 2], [0, 2]], [[0, 2], [1, 2]]], ((0, 1), (1, 1), (1, 2)): [[[0, 2], [1, 2]], [[1, 2], [1, 2]], [[0, 1], [1, 3]]], ((0, 1), (0, 1), (1, 2)): [[[0, 2], [1, 2]]], ((0, 2), (1, 2)): [[[0, 4]], [[1, 4]]], ((0, 3), (1, 1)): [], ((0, 2), (0, 2)): [[[0, 4]]], ((1, 2), (1, 2)): [[[1, 4]]], ((0, 1), (1, 3)): [], ((0, 4),): [], ((1, 4),): []}
'''

# Définition des positions pour la suite

Pos_0 = [[0,1],[0,1],[1,1],[1,1]]
Pos_1a = [[0,2],[1,1],[1,1]]
Pos_1b = [[0,1],[0,2],[1,1]]
Pos_1c = [[0,1],[1,1],[1,2]]
Pos_1d = [[0,1],[0,1],[1,2]]
Pos_2a = [[0,2],[1,2]]
Pos_2b = [[0,3],[1,1]]
Pos_2c = [[0,2],[0,2]]
Pos_2d = [[1,2],[1,2]]
Pos_2e = [[0,1],[1,3]]
Pos_3a = [[0,4]]
Pos_3b = [[1,4]]

# Question 7 - N1 et N2

N1 = len(Graphe)
N2 = sum([len(Graphe[x]) for x in Graphe])

'''
print("Sommets:",N1)
print("Arêtes:",N2)
'''

''' Résultat
Sommets: 12
Arêtes: 16
'''

# Question 8 - Remplissage du tableau

from time import perf_counter as tps

C,N = 2,2 # A modifier pour chaque cas
tic = tps()
Graphe = graphe(C,N)
toc = tps()
T = toc - tic

print("Pour C = "+str(C)+" et N = "+str(N))
Nb_Sommets = len(Graphe) # N1
print("Sommets:",Nb_Sommets)
Nb_Aretes = sum([len(Graphe[x]) for x in Graphe]) # N2
print("Arêtes:",Nb_Aretes)
print("Temps (s):",T)

''' Résultat
Pour C = 2 et N = 2
Sommets: 12
Arêtes: 16
Temps (s): 8.039999966058531e-05

Bilan disponible dans le corrigé pdf
'''

## Graphe biparti

# Question 9 - sommets_12

def sommets_12(G,C,N):
    S1 = []
    S2 = []
    n = N*C
    for e in G:
        if len(e)%2 == n%2:
            S1.append(e)
        else:
            S2.append(e)
    return tuple(S1),tuple(S2) # S1 et S2 déjà Tuples, donc Tuples inutile

# Question 10 - Création des sommets S1 et S2

C,N = 2,2
Graphe = graphe(C,N)
S1,S2 = sommets_12(Graphe,C,N)

'''
print("Sommets S1:",S1)
print("Sommets S2:",S2)
'''

''' Résultat
Sommets S1: (((0, 1), (0, 1), (1, 1), (1, 1)), ((0, 2), (1, 2)), ((0, 3), (1, 1)), ((0, 2), (0, 2)), ((1, 2), (1, 2)), ((0, 1), (1, 3)))
Sommets S2: (((0, 2), (1, 1), (1, 1)), ((0, 1), (0, 2), (1, 1)), ((0, 1), (1, 1), (1, 2)), ((0, 1), (0, 1), (1, 2)), ((0, 4),), ((1, 4),))
Soit:
S1: 0 2a 2b 2c 2d 2e
S2:  1a 1b 1c 1d 3a 3b
'''

## Les parties

# Question 11 - Une partie

C,N = 2,2
Graphe = graphe(C,N)
x0 = init(C,N)
Depart = x0
succ = x0
Joueur = 1
print("Joueur:",Joueur)
print("Jeu:",succ)
L_succ = Graphe[Tuple(succ)]
while len(L_succ)>0:
    if len(L_succ) > 0:
        succ = L_succ[0]
        Joueur = 3 - Joueur
        print("Joueur:",Joueur)
        print("Jeu:",succ)
        L_succ = Graphe[Tuple(succ)]

''' Résultat
Joueur: 1
Jeu: [[0, 1], [0, 1], [1, 1], [1, 1]]
Joueur: 2
Jeu: [[0, 2], [1, 1], [1, 1]]
Joueur: 1
Jeu: [[0, 2], [1, 2]]
Joueur: 2
Jeu: [[0, 4]]
Le joueur 2 a gagné
Cela correspond à 0 - 1a - 2a - 3a
'''

## Détermination des positions gagnantes

# Question 12 - Positions gagnantes sur le schéma

'''
Positions
2b 2e 3a 3b pas gagnantes car pas de successeurs
2a 2c 2d gagnantes car au moins un successeur n'est pas gagnant
1a et 1d pas gagnant car tous les successeurs sont gagnants (2a)
1b gagnant car au moins un successeur pas gagnant (2b)
1c gagnant car au moins un successeur pas gagnant (2e)
0 gagnant car au moins un successeur pas gagnant (1a et 1d)

Finalement, les positions gagnantes sont:
0 1b 1c 2a 2c 2d
'''

# Question 13 - est_gagante

'''
Version 1: On vérifie que tous les successeurs sont gagnants
Pour gagner du temps, on s'arrêt dès qu'un successeur pas gagnant a été trouvé
'''

def est_gagante(G,x): # x liste ou Tuple
    L_succ = G[Tuple(x)]
    if len(L_succ) == 0:
        return False # Non gagnant
    else: # Tous les successeurs sont gagnants
        Tous_Gagnants = True
        for succ in L_succ: # succ est une liste
            Tous_Gagnants = Tous_Gagnants and est_gagante(G,succ)
            if Tous_Gagnants == False: # gagne du temps
                break  # Position gagnante
        return not(Tous_Gagnants) # Position pas gagnante

'''
Version 2: On cherche un successeur pas gagnant
Cela revient au même, mais c'est rédigé un peu autrement
'''

def est_gagante(G,x): # x liste ou Tuple
    L_succ = G[Tuple(x)]
    if len(L_succ) == 0:
        return False # Pas gagnant
    else: # Aucun successeur pas gagnant
        Res = False
        for succ in L_succ: # succ est une liste
            if not est_gagante(G,succ): # Un pas gagnant trouvé
                Res = True # Position gagnante
                break # Gagne du temps
        return Res

'''
L_Pos = [Pos_0,Pos_1a,Pos_1b,Pos_1c,Pos_1d,Pos_2a,Pos_2b,Pos_2c,Pos_2d,Pos_2e,Pos_3a,Pos_3b]
L_Pos_Nom = ["0","1a","1b","1c","1d","2a","2b","2c","2d","2e","3a","3b"]
for i in range(len(L_Pos)):
    Pos = L_Pos[i]
    Nom = L_Pos_Nom[i]
    print(Nom + ":",est_gagante(Graphe,Pos))
'''

''' Résultat
0: True
1a: False
1b: True
1c: True
1d: False
2a: True
2b: False
2c: True
2d: True
2e: False
3a: False
3b: False
'''

# Question 14 - dico_gagnant

def dico_gagnant(G):
    dico = {}
    for x in G:
        dico[x] = est_gagante(G,x)
    return dico

C,N = 2,2
Graphe = graphe(C,N)
x0 = init(C,N)
dico_g = dico_gagnant(Graphe)
Statut_x0 = dico_g[Tuple(x0)]
print("Le joueur 1 dispose d'une position gagante ?",Statut_x0)

''' Résultat
Le joueur 1 dispose d'une position gagante ? True
'''

# Question 15 - dico_gagnant_opt

def dico_gagant_opt(G):
    def rec(G,x): # Programmé pour que x soit un Tuple (*)
        if x in dico: # Nouveau
            # print('mémo')
            return dico[x] # Nouveau
        else: # Nouveau
            if len(x) == 0:
                dico[x] = False # Nouveau
                return False
            else:
                L_succ = G[x]
                Res = False
                for succ in L_succ:
                    if not rec(G,Tuple(succ)): # (*) x est un Tuple
                        Res = True
                        break
                dico[x] = Res # Nouveau
                return Res
    dico = {}
    for x in G:
        dico[x] = rec(G,x) # x est un Tuple
    return dico

''' Erreurs à ne pas commettre
Oublier de remplacer est_gagante par rec
Chercher x in dico avec x une liste au lieu d'être un Tuple
Oublier de mettre un dico[x]= au return False intermédiaire
'''

dico_g_opt = dico_gagant_opt(Graphe)

'''
test = dico_g==dico_g_opt
print('Dictionnaires identiques ?',test)
'''

''' Résultat
Dictionnaires identiques ? True
'''

# Question 16 - Temps d'exécution

C,N = 3,3
Graphe = graphe(C,N)

tic = tps()
dico_gagnant(Graphe)
toc = tps()
T1 = toc - tic
tic = tps()
dico_gagant_opt(Graphe)
toc = tps()
T2 = toc - tic
Rapport = T1/T2
print("Pour C = "+str(C)+" et N = "+str(N))
print("Temps non optimisé (s):",T1)
print("Temps optimisé (s):",T2)
print("Temps divisé par:",round(Rapport,2),":)")

'''
Pour C = 3 et N = 3
Temps non optimisé (s): 0.049233700000002045
Temps optimisé (s): 0.0050749000000109845
Temps divisé par: 9.7 :)

Pour C = 3 et N = 4
Temps non optimisé (s): 1.978249899999355
Temps optimisé (s): 0.03185489999850688
Temps divisé par: 62.1 :)
'''

# Pour la suite

dico_gagnant = dico_gagant_opt

## Etude des positons gagnantes au départ

# Question 17 - Remplissage du tableau

print("Joueur disposant d'une position gagante au départ: ")

Cmax = 3
Nmax = 3

Titre = "  N="
for N in range(1,Nmax+1):
    Titre += str(N) + " "
print(Titre)

for C in range(1,Cmax+1):
    Ligne = 'C=' + str(C) + " "
    for N in range(1,Nmax+1):
        G = graphe(C,N)
        x0 = init(C,N)
        dico_g = dico_gagnant(G)
        Statut_x0 = dico_g[Tuple(x0)]
        if Statut_x0:
            Ligne += '1 '
        else:
            Ligne += '2 '
    print(Ligne)

''' Résultats
  N=1 2 3 4
C=1 2 1 2 1
C=2 1 1 2 2
C=3 1 2 1 1

  N=1 2
C=1 2 1
C=2 1 1
C=3 1 2
C=4 1 1

Soit par reconstruction
  N=1 2 3 4
C=1 2 1 2 1
C=2 1 1 2 2
C=3 1 2 1 1
C=4 1 1
'''

## Calcul des attracteurs

# Question 18 - init_attracteurs

def init_attracteurs(G,S1):
    d1 = {cle:False for cle in G}
    d2 = {cle:False for cle in G}
    for x in G: # x Tuple
        L_succ = G[Tuple(x)]
        if len(L_succ) == 0: # sans successeurs
            if x in S1: # de S1 contenant des Tuples
                d2[x] = True
            else:
                d1[x] = True
    return d1,d2

C,N = 2,2
Graphe = graphe(C,N)
S1,S2 = sommets_12(Graphe,C,N)
dA1,dA2 = init_attracteurs(Graphe,S1)

'''
print(dA1)
print(dA2)
'''

''' Résultat
{((0, 1), (0, 1), (1, 1), (1, 1)): False, ((0, 2), (1, 1), (1, 1)): False, ((0, 1), (0, 2), (1, 1)): False, ((0, 1), (1, 1), (1, 2)): False, ((0, 1), (0, 1), (1, 2)): False, ((0, 2), (1, 2)): False, ((0, 3), (1, 1)): False, ((0, 2), (0, 2)): False, ((1, 2), (1, 2)): False, ((0, 1), (1, 3)): False, ((0, 4),): True, ((1, 4),): True}
{((0, 1), (0, 1), (1, 1), (1, 1)): False, ((0, 2), (1, 1), (1, 1)): False, ((0, 1), (0, 2), (1, 1)): False, ((0, 1), (1, 1), (1, 2)): False, ((0, 1), (0, 1), (1, 2)): False, ((0, 2), (1, 2)): False, ((0, 3), (1, 1)): True, ((0, 2), (0, 2)): False, ((1, 2), (1, 2)): False, ((0, 1), (1, 3)): True, ((0, 4),): False, ((1, 4),): False}
'''

# Question 19 - cond_1

def cond_1(G,di,x):
    '''Renvoie True si au moins un successeur de x est True dans di'''
    L_succ = G[Tuple(x)]
    for succ in L_succ:
        if di[Tuple(succ)] == True:
            return True
    return False

'''
test = cond_1(Graphe,dA1,Pos_2a)
print(test)
test = cond_1(Graphe,dA1,Pos_2b)
print(test)
test = cond_1(Graphe,dA1,Pos_2c)
print(test)
test = cond_1(Graphe,dA1,Pos_2d)
print(test)
test = cond_1(Graphe,dA1,Pos_2e)
print(test)

test = cond_1(Graphe,dA2,Pos_1a)
print(test)
test = cond_1(Graphe,dA2,Pos_1b)
print(test)
test = cond_1(Graphe,dA2,Pos_1c)
print(test)
test = cond_1(Graphe,dA2,Pos_1d,)
print(test)

test = cond_1(Graphe,dA2,Pos_2a)
print(test)
test = cond_1(Graphe,dA2,Pos_2b)
print(test)
test = cond_1(Graphe,dA2,Pos_2c)
print(test)
test = cond_1(Graphe,dA2,Pos_2d)
print(test)
test = cond_1(Graphe,dA2,Pos_2e)
print(test)

test = cond_1(Graphe,dA1,Pos_1a)
print(test)
test = cond_1(Graphe,dA1,Pos_1b)
print(test)
test = cond_1(Graphe,dA1,Pos_1c)
print(test)
test = cond_1(Graphe,dA1,Pos_1d)
print(test)
'''

''' Résultat
True  : de 2a, 1 peut mener à A1 (3a et 3b)
False : de 2b, 1 ne mène pas à A1
True  : de 2c, 1 peut mener à A1 (3a)
True  : de 2d, 1 peut mener à A1 (3b)
False : de 2e, 1 ne mène pas à A1

False : de 1a, 2 ne mène pas à A2
True  : de 1b, 2 peut mener à A2 (2b)
True  : de 1c, 2 peut mener à A2 (2e)
False : de 1d, 2 ne mène pas à A2

False : aucun successeur dans les sommets verts initialisés
False : aucun successeur dans les sommets verts initialisés
False : aucun successeur dans les sommets verts initialisés
False : aucun successeur dans les sommets verts initialisés
False : aucun successeur dans les sommets verts initialisés

False : aucun successeur dans les sommets violets initialisés
False : aucun successeur dans les sommets violets initialisés
False : aucun successeur dans les sommets violets initialisés
False : aucun successeur dans les sommets violets initialisés
'''

# Question 20 - cond_2

def cond_2(G,di,x):
    '''Renvoie True si tous les successeurs de x sont True dans di'''
    L_succ = G[Tuple(x)]
    if len(L_succ) == 0:
        return False
    else:
        Res = True
        for succ in L_succ:
            Res = Res and di[Tuple(succ)]
        return Res

'''
test = cond_2(Graphe,dA1,Pos_2a)
print(test)
test = cond_2(Graphe,dA1,Pos_2b)
print(test)
test = cond_2(Graphe,dA1,Pos_2c)
print(test)
test = cond_2(Graphe,dA1,Pos_2d)
print(test)
test = cond_2(Graphe,dA1,Pos_2e)
print(test)

test = cond_2(Graphe,dA2,Pos_1a)
print(test)
test = cond_2(Graphe,dA2,Pos_1b)
print(test)
test = cond_2(Graphe,dA2,Pos_1c)
print(test)
test = cond_2(Graphe,dA2,Pos_1d)
print(test)

test = cond_2(Graphe,dA2,Pos_2a)
print(test)
test = cond_2(Graphe,dA2,Pos_2b)
print(test)
test = cond_2(Graphe,dA2,Pos_2c)
print(test)
test = cond_2(Graphe,dA2,Pos_2d)
print(test)
test = cond_2(Graphe,dA2,Pos_2e)
print(test)

test = cond_2(Graphe,dA1,Pos_1a)
print(test)
test = cond_2(Graphe,dA1,Pos_1b)
print(test)
test = cond_2(Graphe,dA1,Pos_1c)
print(test)
test = cond_2(Graphe,dA1,Pos_1d)
print(test)
'''

''' Résultat
True  : de 2a, 1 mène forcément à A1 (3a et 3b)
False : de 2b, 1 ne mène pas à A1 (mène nulle part)
True  : de 2c, 1 mène forcément à A1 (3a)
True  : de 2d, 1 mène forcément à A1 (3b)
False : de 2e, 1 ne mène pas à A1 (mène nulle part)

False : de 1a, 2 ne mène pas que à A2
False : de 1b, 2 ne mène pas que à A2
False : de 1c, 2 ne mène pas que à A2
False : de 1d, 2 ne mène pas que à A2

False : aucun successeur dans les sommets verts initialisés
False : aucun successeur dans les sommets verts initialisés
False : aucun successeur dans les sommets verts initialisés
False : aucun successeur dans les sommets verts initialisés
False : aucun successeur dans les sommets verts initialisés

False : aucun successeur dans les sommets violets initialisés
False : aucun successeur dans les sommets violets initialisés
False : aucun successeur dans les sommets violets initialisés
False : aucun successeur dans les sommets violets initialisés
'''

# Question 21 - attracteurs_it

def attracteurs_it(G,di,Si):
    Changement = False
    for x in G:
        if di[x] == False:
            if x in Si:
                Cond = cond_1(G,di,x)
            else:
                Cond = cond_2(G,di,x)
            di[x] = Cond
            Changement = Changement or Cond
    return Changement

# Question 22 - attracteurs_Ji

def attracteurs_Ji(G,di,Si):
    Changement = True
    while Changement:
        Changement = attracteurs_it(G,di,Si)

# Question 23 - attracteurs

def attracteurs(G,C,N):
    S1,S2 = sommets_12(G,C,N)
    dA1,dA2 = init_attracteurs(G,S1)
    attracteurs_Ji(G,dA1,S1)
    attracteurs_Ji(G,dA2,S2)
    return dA1,dA2

C,N = 2,2
Graphe = graphe(C,N)
dA1,dA2 = attracteurs(Graphe,C,N)

'''
print(dA1)
print(dA2)
'''

''' Résultat
{((0, 1), (0, 1), (1, 1), (1, 1)): True, ((0, 2), (1, 1), (1, 1)): True, ((0, 1), (0, 2), (1, 1)): False, ((0, 1), (1, 1), (1, 2)): False, ((0, 1), (0, 1), (1, 2)): True, ((0, 2), (1, 2)): True, ((0, 3), (1, 1)): False, ((0, 2), (0, 2)): True, ((1, 2), (1, 2)): True, ((0, 1), (1, 3)): False, ((0, 4),): True, ((1, 4),): True}
Sont à True: 0 1a 1d 2a 2c 2d 3a 3b

{((0, 1), (0, 1), (1, 1), (1, 1)): False, ((0, 2), (1, 1), (1, 1)): False, ((0, 1), (0, 2), (1, 1)): True, ((0, 1), (1, 1), (1, 2)): True, ((0, 1), (0, 1), (1, 2)): False, ((0, 2), (1, 2)): False, ((0, 3), (1, 1)): True, ((0, 2), (0, 2)): False, ((1, 2), (1, 2)): False, ((0, 1), (1, 3)): True, ((0, 4),): False, ((1, 4),): False}
Sont à True: 1b 1c 2b 2e
'''

# Question 24 - dico_gagant_att

def dico_gagant_att(G,C,N):
    S1,S2 = sommets_12(G,C,N)
    d1,d2 = attracteurs(G,C,N)
    dico = {}
    for x in G:
        if x in S1 and d1[x]:
            dico[x] = True
        elif x in S2 and d2[x]:
            dico[x] = True
        else:
            dico[x] = False
    return dico

C,N = 2,2
Graphe = graphe(C,N)
dico_g_att = dico_gagant_att(Graphe,C,N)
dico_g = dico_gagnant(Graphe)
test = dico_g==dico_g_att

'''
print('Dictionnaires identiques ?',test)
'''

''' Résultat
Dictionnaires identiques ? True
'''

## Stratégie optimale

# Question 25 - strategie_opt

from random import randint as rd

def strategie_opt(G,dg,x):
    L_succ = G[Tuple(x)]
    if len(L_succ) == 0:
        Choix=[]
    else:
        L_Choix = []
        for succ in L_succ:
            if not dg[Tuple(succ)]:
                L_Choix.append(succ)
        if len(L_Choix) == 0:
            L_Choix = L_succ
        ind = rd(0,len(L_Choix)-1)
        Choix = L_Choix[ind]
    return Choix

C=N=2
G = graphe(C,N)
dg = dico_gagnant(G)

'''
x0 = init(C,N)
for _ in range(5):
    test = strategie_opt(G,dg,x0)
    print(test)
'''

''' Résultat
On arrive sur les deux positions
[[0, 1], [0, 1], [1, 2]] # 1d
[[0, 2], [1, 1], [1, 1]] # 1a
On ne tombe jamais sur 1b
'''

'''
x0 = init(C,N)
for _ in range(10):
    test = strategie_opt(G,dg,x0)
    bool = (test==Pos_1a) or (test==Pos_1d)
    print(bool)
'''

''' Résultat
True
True
True
True
True
True
True
True
True
True
'''

# Question 26 - strategies_opt

def strategies_opt(G,dg):
    dico_s = {}
    for x in G: # x Tuple
        dico_s[x] = strategie_opt(G,dg,x)
    return dico_s

C=N=2
G = graphe(C,N)
dico_g = dico_gagnant(G)
st_opt = strategies_opt(G,dico_g)

'''
print(st_opt)
'''

''' Résultat
{((0, 1), (0, 1), (1, 1), (1, 1)): [[0, 2], [1, 1], [1, 1]], ((0, 2), (1, 1), (1, 1)): [[0, 2], [1, 2]], ((0, 1), (0, 2), (1, 1)): [[0, 3], [1, 1]], ((0, 1), (1, 1), (1, 2)): [[0, 1], [1, 3]], ((0, 1), (0, 1), (1, 2)): [[0, 2], [1, 2]], ((0, 2), (1, 2)): [[1, 4]], ((0, 3), (1, 1)): [], ((0, 2), (0, 2)): [[0, 4]], ((1, 2), (1, 2)): [[1, 4]], ((0, 1), (1, 3)): [], ((0, 4),): [], ((1, 4),): []}
'''

## Simulation de jeu en IA

# Question 27 - Simulation d'un jeu

def jeu(C,N):
    G = graphe(C,N)
    x0 = init(C,N)
    dico_g = dico_gagnant(G) # pour afficher le joueur qui gagne en théorie
    Statut_x0 = dico_g[Tuple(x0)]
    if Statut_x0:
        print("Le joueur 1 dispose d'une position gagnante")
    else:
        print("Le joueur 2 dispose d'une position gagnante")
    st_opt = strategies_opt(G,dico_g)
    j = 1
    print('Départ:',x0)
    x = x0
    while len(x) > 0:
        x = st_opt[Tuple(x)]
        j = (3-j)%2
        print('Joueur:',j+1)
        print(x)
    print('a perdu')

# Question 28 - Utilisation du jeu

''' A exécuter plusieurs fois
jeu(2,2) # Joueur 1 gagne
jeu(3,3) # Joueur 1 gagne
jeu(2,3) # Joueur 2 gagne
jeu(3,2) # Joueur 2 gagne
'''

'''
Dans tous les cas, le joueur disposant d'une position gagnante au départ gagne le jeu
'''

## Heuristique et Min_max

# Question 29 - Heuristique

def h(x,bool): # bool = True si le joueur joue, False si adversaire
    Lc = coups(x)
    if len(Lc) == 0:
        if bool: # Le joueur a perdu
            return -1
        else: # L'adversaire a perdu, donc le joueur a gagné
            return 1
    else:
        return 0

'''
test = h(Pos_0,True)
print(test)
test = h(Pos_1a,False)
print(test)
test = h(Pos_2b,True)
print(test)
test = h(Pos_3a,False)
print(test)
'''

''' Résultat
0
0
-1
1
'''

# Question 30 - Min_max

def min_max(x,p,bool):
    Lc = coups(x)
    if len(Lc)==0 or p==0:
        return h(x,bool)
    else:
        Lh = []
        if bool: # Coup du joueur
            for c in Lc:
                Min_max = min_max(c,p-1,False)
                Lh.append(Min_max)
            return max(Lh)
        else: # Coup de l'adversaire
            for c in Lc:
                Min_max = min_max(c,p-1,True)
                Lh.append(Min_max)
            return min(Lh)

'''
test = min_max(Pos_0,1,True)
print(test)
test = min_max(Pos_0,2,True)
print(test)
test = min_max(Pos_0,3,True)
print(test)

test = min_max(Pos_1a,2,True)
print(test)
test = min_max(Pos_1b,2,True)
print(test)
test = min_max(Pos_1c,2,True)
print(test)
test = min_max(Pos_1d,2,True)
print(test)
'''

''' Résultats
0
0
1

-1
1
1
-1
'''

# Question 31 # Résultats de min-max à la profondeur max

# Tableau des résultats

print("Joueur disposant d'une position gagante au départ: ")

Cmax = 3
Nmax = 3

Titre = "  N="
for N in range(1,Nmax+1):
    Titre += str(N) + " "
print(Titre)

for C in range(1,Cmax+1):
    Ligne = 'C=' + str(C) + " "
    for N in range(1,Nmax+1):
        x0 = init(C,N)
        test = min_max(x0,C*N,True) # On pourrait mettre C*N-1
        Ligne += str(test) + ' '
    print(Ligne)

''' Résultat
  N=1 2 3
C=1 -1 1 -1
C=2 1 1 -1
C=3 1 -1 1

On va trouver les positions gagnantes au départ :)
'''

# Tableau des positions gagnantes au départ

print("Joueur disposant d'une position gagante au départ: ")

Cmax = 3
Nmax = 3

Titre = "  N="
for N in range(1,Nmax+1):
    Titre += str(N) + " "
print(Titre)

for C in range(1,Cmax+1):
    Ligne = 'C=' + str(C) + " "
    for N in range(1,Nmax+1):
        x0 = init(C,N)
        test = min_max(x0,C*N,True) # On pourrait mettre C*N-1
        if test==1:
            Ligne += '1 '
        elif test==-1: # Normalement obligatoire si !=1
            Ligne += '2 '
    print(Ligne)

''' Résultat
  N=1 2 3
C=1 2 1 2
C=2 1 1 2
C=3 1 2 1
'''

# Question 32 - Mémoïsation

def min_max_opt(x,p,bool):
    def rec(x,p,bool): # x liste ou tuple
        if Tuple(x) in dico:
            return dico[Tuple(x)]
        else:
            Lc = coups(x)
            if len(Lc)==0 or p==0:
                res = h(x,bool)
                dico[Tuple(x)] = res
                return res
            else:
                Lh = []
                if bool: # Coup du joueur
                    for c in Lc:
                        Min_max = rec(c,p-1,False)
                        Lh.append(Min_max)
                    res = max(Lh)
                    dico[Tuple(x)] = res
                    return res
                else: # Coup de l'adversaire
                    for c in Lc:
                        Min_max = rec(c,p-1,True)
                        Lh.append(Min_max)
                    res = min(Lh)
                    dico[Tuple(x)] = res
                    return res
    dico = {}
    return rec(x,p,bool)

C,N = 3,3
Graphe = graphe(C,N)
x0 = init(C,N)

tic = tps()
min_max(x0,C*N,True)
toc = tps()
T1 = toc - tic
tic = tps()
min_max_opt(x0,C*N,True)
toc = tps()
T2 = toc - tic
Rapport = T1/T2
print("Pour C = "+str(C)+" et N = "+str(N))
print("Temps non optimisé (s):",T1)
print("Temps optimisé (s):",T2)
print("Temps divisé par:",round(Rapport,2),":)")

''' Résultat
Pour C = 3 et N = 3
Temps non optimisé (s): 2.3268505999999434
Temps optimisé (s): 0.0484791999999743
Temps divisé par: 48.0 :)
'''

# Pour la suite, tant qu'à faire

min_max = min_max_opt

# Tableau des résultats avec optimisation en allant jusqu'à N=C=4

print("Joueur disposant d'une position gagante au départ: ")

Cmax = 4
Nmax = 4

Titre = "  N="
for N in range(1,Nmax+1):
    Titre += str(N) + " "
print(Titre)

for C in range(1,Cmax+1):
    Ligne = 'C=' + str(C) + " "
    for N in range(1,Nmax+1):
        x0 = init(C,N)
        test = min_max(x0,C*N,True) # On pourrait mettre C*N-1
        if test==1:
            Ligne += '1 '
        elif test==-1: # Normalement obligatoire si !=1
            Ligne += '2 '
    print(Ligne)

''' Résultat
  N=1 2 3 4
C=1 2 1 2 1
C=2 1 1 2 2
C=3 1 2 1 1
C=4 1 1 2 1
'''

# Question 33 - Choix

def choix_ind_max(L):
    Max = max(L)
    L_ind = []
    for i in range(len(L)):
        if L[i]==Max:
            L_ind.append(i)
    i = rd(0,len(L_ind)-1)
    Ind = L_ind[i]
    return Ind

'''
L = [2,1,2,1]
for _ in range(4):
    test = choix_ind_max(L)
    print(test)
'''

'''
L = [2,1,2,1]
for _ in range(10):
    test = choix_ind_max(L)
    bool = (test == 0) or (test == 2)
    print(bool)
'''

''' Résultat
True
True
True
True
True
True
True
True
True
True
'''

# Question 34 - strategies_h

def strategie_h(x,p):
    Lc = coups(x)
    if len(Lc) == 0:
        Choix=[]
    else:
        if p==0: # Choix aléatoire
            ind = rd(0,len(Lc)-1)
        else:
            Lm = []
            for c in Lc:
                Min_max = min_max(c,p-1,False) # Penser à mettre False
                Lm.append(Min_max)
            ind = choix_ind_max(Lm)
        Choix = Lc[ind]
    return Choix

'''
test = strategie_h(Pos_0,1)
print(test)

test = strategie_h(Pos_0,2)
print(test)

test = strategie_h(Pos_1b,2)
print(test)

test = strategie_h(Pos_1c,2)
print(test)
'''

''' Résultats
Doit donner 1a 1b 1c 1d
[[0, 2], [1, 1], [1, 1]] 1a
[[0, 1], [0, 2], [1, 1]] 1b
[[0, 1], [1, 1], [1, 2]] 1c
[[0, 1], [0, 1], [1, 2]] 1d

Doit donner 1a 1d
[[0, 2], [1, 1], [1, 1]] 1a
[[0, 1], [0, 1], [1, 2]] 1d

Doit donner 2b
[[0, 3], [1, 1]] 2b

Doit donner 2e
[[0, 1], [1, 3]] 2e
'''

'''
for _ in range(20):
    test = strategie_h(Pos_0,1)
    bool = (test==Pos_1a) or (test==Pos_1b) or (test==Pos_1c) or (test==Pos_1d)
    print(bool)
'''

'''
for _ in range(20):
    test = strategie_h(Pos_0,2)
    bool = (test==Pos_1a) or (test==Pos_1d)
    print(bool)
'''

'''
for _ in range(20):
    test = strategie_h(Pos_1b,2)
    bool = (test==Pos_2b)
    print(bool)
'''

'''
for _ in range(20):
    test = strategie_h(Pos_1c,2)
    bool = (test==Pos_2e)
    print(bool)
'''

# Question 35 - Jeu

def jeu_h(C,N,p):
    x0 = init(C,N)
    j = 1
    print('Départ:',x0)
    x = x0
    while len(x) > 0:
        x = strategie_h(x,p)
        j = (3-j)%2
        print('Joueur:',j+1)
        print(x)
    print('a perdu')

# Question 36 - Utilisation du jeu

jeu_h(2,2,2) # joueur 1 gagnant

'''
Pour avoir utilisé l'algorithme pour
jeu_h(C,N,C*N)
Ainsi, on explore tout le graphe
La solution est toujours au bénéfice du joueur ayant une position gagnante au départ
L'avantage de cet algorithme est qu'il ne demande pas de RAM en excès qui nous bloquait pour créer le graphe
'''