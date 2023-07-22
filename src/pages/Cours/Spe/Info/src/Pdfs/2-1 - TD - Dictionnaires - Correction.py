'''ITC2 - 2 - Dictionnaires et programmation dynamique'''

'''2-1 - Dictionnaires'''

## Exercice 1

dico = {i:i%3 for i in range(10)}
print(dico)

# Question 1 - dico_inverse

def dico_inverse(dico):
    dico_rev = {}
    for cle in dico:
        val = dico[cle]
        if val not in dico_rev:
            dico_rev[val] = [cle]
        else:
            dico_rev[val].append(cle)
    return dico_rev

res = dico_inverse(dico)
print(res)

def dico_inverse(dico): # Autre version
    dico_rev = {}
    for val in dico.values():
        dico_rev[val] = []
    for cle in dico:
        val = dico[cle]
        dico_rev[val].append(cle)
    return dico_rev

res = dico_inverse(dico)
print(res)

## Exercice 2 - Comptage

from random import randint as rd
n = 10
L = [rd(-100,100) for _ in range(n)]

# Question 1 - minmax

def minmax(L):
    tmin = L[0]
    tmax = L[0]
    for t in L:
        if t < tmin:
            tmin = t
        if t > tmax:
            tmax = t
    return tmin,tmax

Min,Max = minmax(L)
print('Min:',Min)
print('Max:',Max)

# Question 1 - occurences_1

def occurences_1(L):
    Min,Max = minmax(L)
    dico = {i:0 for i in range(Min,Max+1)}
    for e in L:
            dico[e] += 1
    return dico

res = occurences_1(L)
print(res)

# Question 2 - tri_1

def tri_1(L):
    Lt = []
    dico = occurences_1(L)
    for cle in dico:
        val = dico[cle]
        Lt += [cle]*val
    return Lt

L_triee = tri_1(L)
print(L_triee)

# Question 3 - occurences_2

def occurences_2(L):
    dico = {}
    for e in L:
        if e in dico:
            dico[e] += 1
        else:
            dico[e] = 1
    return dico

res = occurences_2(L)
print(res)

# Question 4 - tri_2

def tri_2(L):
    Lt = []
    dico = occurences_2(L)
    Min,Max = minmax(L)
    for i in range(Min,Max+1):
        if i in dico:
            occ = dico[i]
            Lt += occ*[i]
    return Lt

L_triee = tri_2(L)
print(L_triee)

## Exercice 3 - Chemin

Dico = {(0, 0): 'RAS', (0, 1): [0, 0], (0, 2): [0, 1], (1, 2): [0, 2], (2, 2): [1, 2], (3, 2): [2, 2], (3, 3): [3, 2], (3, 4): [3, 3], (4, 4): [3, 4], (5, 4): [4, 4], (5, 3): [5, 4], (5, 2): [5, 3], (5, 1): [5, 2], (6, 1): [5, 1], (7, 1): [6, 1], (8, 1): [7, 1], (9, 1): [8, 1], (9, 2): [9, 1], (9, 3): [9, 2], (9, 4): [9, 3], (9, 5): [9, 4], (9, 6): [9, 5], (8, 6): [9, 6], (8, 7): [8, 6], (8, 8): [8, 7], (7, 8): [8, 8], (6, 8): [7, 8], (6, 7): [6, 8], (5, 7): [6, 7], (4, 7): [5, 7], (4, 8): [4, 7], (4, 9): [4, 8], (3, 9): [4, 9]}

# Question 1 - Liste des états

Arrivee = [3,9]
Etat = tuple(Arrivee)
Res = []
while Etat != 'RAS':
    Etat = Dico[tuple(Etat)]
    if Etat != 'RAS':
        Res.append(Etat)

Res.reverse()
for e in Res:
    print(e)

# Question 2 - Reconstruction du chemin

import numpy as np
Plateau = np.zeros([10,10])

for e in Res:
    L,C = e
    Plateau[L,C] = 1

import matplotlib.pyplot as plt
plt.close('all')
plt.figure(1)
plt.spy(Plateau)
plt.show()