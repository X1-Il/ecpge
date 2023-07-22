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

