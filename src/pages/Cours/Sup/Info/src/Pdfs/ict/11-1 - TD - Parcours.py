''' 11 - Bases des graphes'''

## 11-0 - Parcours

## Création du réseau

# Données

Ligne_1 = ['A','B','C','D','E']
Ligne_2 = ['F','G','A','H','I','M']
Ligne_3 = ['F','J','K','L','C','M']
Lignes = [Ligne_1,Ligne_2,Ligne_3]

Segments_1 = [[1,1],[1,1],[1,1],[1,1]]
Segments_2 = [[1,1],[1,1],[1,1],[1,1],[1,1]]
Segments_3 = [[1,1],[1,1],[1,1],[1,1],[1,1]]
Segments = [Segments_1,Segments_2,Segments_3]

# Création des stations

def f_Stations():
    Res = []
    for l in Lignes:
        for s in l:
            if not (s in Res):
                Res.append(s)
    Nb = len(Res)
    return Res,Nb

Stations,Nb = f_Stations()
print(Stations)

# Création du graphe

def f_S1_Vers_S2(S1,S2):
    NL = len(Lignes)
    for Ind_L in range(NL):
        L = Lignes[Ind_L]
        if (S1 in L) and (S2 in L):
            Ind_1 = L.index(S1)
            Ind_2 = L.index(S2)
            Delta = Ind_2 - Ind_1
            if Delta == 1:
                return True,Ind_L,Ind_1
    return False,None,None

def f_Complete_Mat(Mat,i,j):
    S1 = Stations[i]
    S2 = Stations[j]
    Condition,Ind_L,Ind_S1 = f_S1_Vers_S2(S1,S2)
    if Condition:
        Mat[i,j] = Segments[Ind_L][Ind_S1][0]
        Mat[j,i] = Segments[Ind_L][Ind_S1][1]

import numpy as np
def f_Graphe():
    NS = len(Stations)
    Mat = np.zeros([NS,NS],int)
    for i in range(NS):
        for j in range(NS):
            f_Complete_Mat(Mat,i,j)
    return Mat

Graphe = f_Graphe()
print(Graphe)

## Préliminaires

def f_Voisins(S):
    Voisins = []
    iS = Stations.index(S)
    for v in Stations:
        Iv = Stations.index(v)
        d = Graphe[iS,Iv]
        if d > 0:
            Voisins.append(v)
    return Voisins

Essai = f_Voisins('F')
print(Essai)
Essai = f_Voisins('C')
print(Essai)

## Parcours en largeur

# Librairies

from collections import deque

# Parcours sans distances

f = deque()
Depart = 'F'
Visite = [Depart]
f.append(Depart)
while len(f) != 0:
    S = f.popleft()
    Voisins = f_Voisins(S)
    for v in Voisins:
        if v not in Visite:
            f.append(v)
            Visite.append(v)

print(Visite)

# Parcours avec distances

f = deque()
Depart = 'F'
Visite = [Depart]
Distances = {Depart:0} ###
f.append(Depart)
while len(f) != 0:
    S = f.popleft()
    Voisins = f_Voisins(S)
    for v in Voisins:
        if v not in Visite:
            f.append(v)
            Visite.append(v)
            Distances[v] = Distances[S] + 1 ###

print(Stations)
print(Distances)

'''
L'utilisation d'un compteur ne peut fonctionner car il faudrait ne pas incrémenter le compteur à chaque itération
'''

# remarque: Parcours pile

f = deque()
Depart = 'F'
Visite = [Depart]
f.append(Depart)
while len(f) != 0:
    S = f.pop() # popleft devient pop
    Voisins = f_Voisins(S)
    for v in Voisins:
        if v not in Visite:
            f.append(v)
            Visite.append(v)

print(Visite)

'''
On remarque qu'il traite tous les voisins avant de descendre en profondeur, c'est n'est donc pas un parcours en profondeur qui lui, dès qu'il trouve un voisin, le traite immédiatement
'''

## Parcours en profondeur récursif

# Mise en place

Visite = []

def Explorer(S):
    Visite.append(S)
    Voisins = f_Voisins(S)
    for v in Voisins:
        if v not in Visite:
            Explorer(v)

for S in Stations:
    if S not in Visite:
        Explorer(S)

print(Visite)

## Appel d'un seul Explorer depuis un départ

Visite = []
Depart = 'F'
Explorer(Depart)
print(Visite)

'''
Le graphe étant non orienté connexe, on obtient la liste de toutes les stations.
'''


Segments_1 = [[1,1],[1,1],[0,1],[1,1]]
Segments = [Segments_1,Segments_2,Segments_3]
Graphe = f_Graphe()

'''
On a fermé le chemin de C à D, le graphe est orienté
D et E ne devraient plus être accessibles
'''

Visite = []
Depart = 'F'
Explorer(Depart)
print(Visite)

'''
On obtient la liste des stations accessibles depuis F
'''
