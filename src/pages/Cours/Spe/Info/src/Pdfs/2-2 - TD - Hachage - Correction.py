'''ITC2 - 2 - Dictionnaires et programmation dynamique'''

'''2-2 - Hachage'''

## Ecercice 1 - Hachage

# Question 1 - Essais de hash()

a = 1 # Entier
print(hash(a))

a = 1.0 # Flottant
print(hash(a))

a = True # Booléen
print(hash(a))

a = (1,2) # Tuple
print(hash(a))

a = '1' # Chaine de caractères
print(hash(a))

'''Non hachables
a = [1,2] # Liste
print(hash(a))

import numpy as np
a = np.array([1,2]) # Array
print(hash(a))

a = {} # Dictionnaire
print(hash(a))
'''

# Question 2

import sys
sys.hash_info
M = sys.hash_info.modulus
print(M)

N = 2**64 - 1

print("Rapport:",N/M)

'''
Le rapport vaut environ 8
'''

P = 2**61 - 1
print("Rapport:",P/M)

# Question 3 -

def h(n,k):
    return n%k

k = 10
TH = [0]*k
TD = [[None,0]]

# Question 4 - ajout

'''

insere(22,'vingt-deux')
insere(24,'vingt-quatre')

0	0
1	0
2	1
3	3
4	8
5	4
6	0
7	0
8	0
9	0

0	None 8
1	12	douze	        2
2	32	trente-deux	    5
3	43	quarante-trois	6
4	55	cinquante-cinq	0
5	42	quarante-deux	7
6	53	cinquante-trois	0
7	22	vingt-deux	    0
8	24	vingt-quatre    0

'''

# Question 5 - insere

def insere(cle,val):
    ih = h(cle,k)
    id = TH[ih] # ind 1° [cle,val,iL] dans debordement
    L = [cle,val,0]
    Pos = TD[0][1]
    if id==0:
        TH[ih] = Pos + 1
        TD.append(L)
        TD[0][1] += 1
    else:
        while id != 0:
            id_prec = id
            c,_,id = TD[id]
            if cle==c:
                TD[id_prec][1] = val
                return
        TD.append(L)
        TD[id_prec][2] = Pos + 1
        TD[0][1] += 1

# Question 6 - Insertion

insere(12,'douze')
insere(32,'trente deux')
insere(43,'quarante trois')
insere(55,'cinquante cinq')
insere(42,'quarante deux')
insere(53,'quarante') # Oups
insere(53,'cinquante trois')

print(TH)
print(TD)

# Question 7 - recherche

def recherche(cle):
    ih = h(cle,k)
    id = TH[ih]
    while TD[id][0] != None:
        c,v,id = TD[id]
        if cle == c:
            return v

print(recherche(53))
print(recherche(12))
print(recherche(43))
print(recherche(42))
print(recherche(10))

# Question 8 - complexité

'''
Les n nombres seront répartis en k familles d'environ n/k éléments. Après un calcul de hachage à coût constant, la complexité sera de n/k
'''

# Question 9 - supprime

k = 10
TH = [0]*k
TD = [[None,0]]
insere(12,'douze')
insere(32,'trente deux')
insere(43,'quarante trois')
insere(55,'cinquante cinq')
insere(42,'quarante deux')
insere(53,'cinquante trois')

def supprime(cle):
    if recherche(cle) != None: # Appartient
        ih = h(cle,k)
        id = TH[ih]
        Lid = [id] # Stockage pour mise à jour TD
        c,v,id = TD[id]
        Lid.append(id)
        # Trouver l'indice dans TD de la suppression à réaliser
        while cle != c:
            c,v,id = TD[id]
            Lid.append(id)
        id = Lid[-2]
        # Mettre à jour hachage si 1° id supprimé
        '''à mettre avant la mise à jour globale'''
        if TH[ih] == id:
            id_suiv = TD[id][2]
            TH[ih] = id_suiv
        # Mettre à jour hachage globalement
        for i in range(k): # k global
            if TH[i] > id:
                TH[i] -= 1
        # Mettre à jour TD globalement
        T_TD = TD[0][1]
        for i in range(1,T_TD):
            _,_,idi = TD[i]
            if idi > id:
                TD[i][2] -= 1
        # Mettre à jour spécifiquement des valeurs
        '''On fait quelque chose si Lid a au moins 3 valeurs'''
        if len(Lid) >= 3:
            idp = Lid[-3]
            id_new = TD[id][2]
            TD[idp][2] = id_new
        # Supprimer l'entrée du dico
        TD.pop(id)
        TD[0][1] -= 1

print(TH)
print(TD)
supprime(12)
print(TH)
print(TD)
supprime(55)
print(TH)
print(TD)

## Exercice 2 - Complexité

# Question 1

N = 1000
Dico = {i:i for i in range(1,N+1)}

# Question 2

print(1,hash(1))
print(500,hash(500))
print(1000,hash(1000))

'''
Le hash des entiers concernés donne l'entier.
Les 1000 nombres sont donc décomposés en 1000 familles dans le dictionnaire.
L'accès à un nombre est en O(1)
'''

# Question 3

from time import perf_counter as tps

def Etude(N):
    Dico = {i:i for i in range(1,N+1)}

    print("N:",N)

    tic = tps()
    N in Dico
    toc = tps()
    T1 = toc - tic
    print('T1',T1)

    tic = tps()
    N in Dico.keys()
    toc = tps()
    T2 = toc - tic
    print('T2',T2)

    L = list(Dico.keys())
    tic = tps()
    N in L
    toc = tps()
    T3 = toc - tic
    print('T3',T3)

    return T1,T3

LN = []
LT1 = []
LT3 = []
for p in range(3,8):
    N = int(10**(p))
    LN.append(N)
    T1,T3 = Etude(N)
    LT1.append(T1)
    LT3.append(T3)

from matplotlib import pyplot as plt
plt.close('all')
def Affiche(fig,Lx,Ly):
    plt.figure(fig)
    plt.plot(Lx,Ly,'o')
    plt.show()

Affiche(1,LN,LT1)
Affiche(2,LN,LT3)

'''
Remarque: quand j'étudie le rapport (T3/N)/T1, qui devrait être une constante proche de 1, on est plutôt à 1/50 à 1/100, à méditer
'''

# Question 4 - Le pire des cas

'''
Si toutes les clés ont la même valeur de hachage, la complexité devient O(n)
'''

# Question 5 - in Dico

'''
O(1) pour la recherche dans le dictionnaire
'''

# Question 6 - Etude d'accès

from time import perf_counter as tps # Si besoin

dic1 = {1:1}
dic2 = {1.0:1}
L = [1]

LR13 = []
LR23 = []

for _ in range(10000000): # Pour X tests
    tic = tps()
    dic1[1]
    toc = tps()
    T1 = toc - tic
    tic = tps()
    dic2[1.0]
    toc = tps()
    T2 = toc - tic
    tic = tps()
    L[0]
    toc = tps()
    T3 = toc - tic
    R13 = T1/T3
    R23 = T2/T3
    LR13.append(R13)
    LR23.append(R23)

print('Rapport moy (in dic/in L) entier:',sum(LR13)/len(LR13))
print('Rapport moy (in dic/in L) float:',sum(LR23)/len(LR23))

''' Résultat
1.15 pour une clé entière 1
1.45 pour une clé flottante 1.0
On voit que la fonctin de hashage consomme un peu de temps
'''