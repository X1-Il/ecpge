''' 11 - Bases des graphes'''

## 11-2 - Dijkstra

## Création du réseau

# Données

Ligne_1 = ['A','B','C','D','E']
Ligne_2 = ['F','G','A','H','I','M']
Ligne_3 = ['F','J','K','L','C','M']
Lignes = [Ligne_1,Ligne_2,Ligne_3]

Segments_1 = [[2,2],[4,4],[3,3],[4,4]]
Segments_2 = [[2,2],[3,3],[1,1],[1,1],[1,1]]
Segments_3 = [[3,3],[3,3],[1,1],[3,3],[1,1]]
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

## Dijkstra

## Initialisation

Depart = 'F'
Arrivee = 'C'
Distances = [np.inf]*Nb
i_Dep = Stations.index(Depart)
Distances[i_Dep] = 0
Provenances = [0]*Nb
S = Depart
iS = Stations.index(S)
Reste = Stations.copy()

## Itérations

it = 0
while S!=Arrivee and len(Reste) > 0 and Distances[iS] != np.inf:
    it += 1
    # S ← Station parmi Reste ayant la distance minimum dans Distances
    S = Reste[0]
    iS = Stations.index(S)
    Min = Distances[iS]
    for s in Reste:
        i = Stations.index(s)
        d = Distances[i]
        if d < Min:
            Min = d
            S = s
            iS = i
    print(S)
    # Mise à jour de Reste
    Reste.remove(S)
    # Voisins ← Liste des stations de Reste voisines de S
    Voisins = []
    for r in Reste:
        Ib = Stations.index(r)
        d = Graphe[iS,Ib]
        if d > 0:
            Voisins.append(r)
    # Traitement des voisins
    for V in Voisins:
        iV = Stations.index(V)
        D_S_V = Distances[iS] + Graphe[iS,iV]
        D_V = Distances[iV]
        if D_S_V < D_V:
            Distances[iV] = D_S_V
            Provenances[iV] = S

print(Distances)
print(Provenances)

## Traitement final C

i_Arr = Stations.index(Arrivee)
Dst = Distances[i_Arr]
print(Dst)

if Dst==np.inf:
    print("Pas de chemin possible")
else:
    p = Arrivee
    Chemin = [p]
    while p != Depart:
        i = Stations.index(p)
        p = Provenances[i]
        Chemin.append(p)
    Chemin.reverse()
    print(Chemin)
