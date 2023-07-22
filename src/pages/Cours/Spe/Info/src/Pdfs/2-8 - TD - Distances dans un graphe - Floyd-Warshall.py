''' 2 - Dictionnaires et programmation dynamique'''

## 2-8 - Distances dans un graphe - Floyd-Warshall

## Exercice 1: Algorithme basé sur des matrices

## Initialisation

# Question 1 - graphe

from numpy import inf
import numpy as np
L0 = [0,3,8,inf,-4]
L1 = [inf,0,inf,1,7]
L2 = [inf,4,0,inf,inf]
L3 = [2,inf,-5,0,inf]
L4 = [inf,inf,inf,6,0]
G = [L0,L1,L2,L3,L4]
G = np.array(G)

# Question 2- inter

def inter(G):
    n = G.shape[0]
    I = np.zeros([n,n])
    for i in range(n):
        for j in range(n):
            if G[i,j] == 0 or G[i,j] == inf:
                I[i,j] = inf
            else:
                I[i,j] = i
    return I

I = inter(G)

## Floyd-Warshall

# Question 3 - FW

def FW(G,I):
    W = G.copy()
    n = W.shape[0]
    for k in range(1,n+1):
        for i in range(n):
            for j in range(n):
                dp = d1 = W[i,j]
                d2 = W[i,k-1] + W[k-1,j]
                d = min(d1,d2)
                if d != dp: # Si distance modifiée - cf remarque
                    W[i,j] = d
                    I[i,j] = k-1
                    if i==j:
                        assert d >= 0,"Cycle de poids négatif"
    return W

''' Remarque
Ne pas écrire d == d2, sinon si d=d1=d2, il y a mise à jour de la diagonale de I (pas grave), mais aussi en présence de cycles de poids nul (cf. dans la suite)
-
'''

W = FW(G,I)
print(W)
print(I)

# Question 4 - complexité

'''
O(n^3)
'''

## Remontée des chemins

# Question 5 - Essai

L0 = [0,inf,1,inf,inf]
L1 = [inf,0,inf,inf,inf]
L2 = [inf,inf,0,inf,1]
L3 = [inf,1,inf,0,inf]
L4 = [inf,inf,inf,1,0]
GG = [L0,L1,L2,L3,L4]
GG = np.array(G)
II = inter(GG)
WW = FW(GG,II)

'''
P
array([[inf,  4.,  0.,  4.,  2.],
       [inf, inf, inf, inf, inf],
       [inf,  4., inf,  4.,  2.],
       [inf,  3., inf, inf, inf],
       [inf,  3., inf,  4., inf]])

0->1: 4
Soit 0-4 et 4-1
Oups, il y a 2 et 3 en intermédiaires

0->4 donne 2 soit 0-2-4
4->1 donne 3 soit 4-3-1

On peut alors vérifier que 0->2, 2->4, 4->3 et 3->1 sont chemins les plus courts dans W, on peut s'arrêter
Ne pas vérifier que ce sont des arcs, ce n'est pas pour cela qu'ils sont empruntés.

on remarque bien que c'est un intermédiaire, mais pas forcément un voisin direct. On programmera chemin en conséquence

'''

# Question 6 - chemin

def chemin(i,j,G,I,W):
    if G[i,j] == W[i,j]:
        return [i,j]
    else:
        s = int(I[i,j]) # int pour être un indice d'array
        L_is = chemin(i,s,G,I,W)
        L_sj = chemin(s,j,G,I,W)
        L_is.pop()
        return L_is + L_sj

# Question 7 - dc et application

def dc(dep,arr,G,I,W):
    Distance = W[dep,arr]
    print('Distance '+str(dep)+"->"+str(arr)+":",Distance)
    Chemin = chemin(dep,arr,G,I,W)
    print(Chemin)

dc(2,0,G,I,W)
dc(0,2,G,I,W)
dc(1,4,G,I,W)
dc(4,1,G,I,W)

# Etude de tous les chemins possibles

def tsch(G,I,W):
    n = W.shape[0]
    for i in range(n):
        for j in range(n):
            dc(i,j,G,I,W)
            dc(j,i,G,I,W)

tsch(G,I,W)

## Autour des cycles de poids nuls

L0 = [0,1,inf,1,inf]
L1 = [inf,0,1,inf,inf]
L2 = [inf,inf,0,inf,inf]
L3 = [inf,inf,inf,0,-2]
L4 = [1,inf,inf,inf,0]
Gc = [L0,L1,L2,L3,L4]
Gc = np.array(Gc)
Ic = inter(Gc)
Wc = FW(Gc,Ic)
dc(0,1,Gc,Ic,Wc)

def FW_cycles(G,I):
    W = G.copy()
    n = W.shape[0]
    for k in range(1,n+1):
        for i in range(n):
            for j in range(n):
                dp = d1 = W[i,j]
                d2 = W[i,k-1] + W[k-1,j]
                d = min(d1,d2)
                if d == d2: # Erreur ici
                    W[i,j] = d
                    I[i,j] = k-1
                    if i==j:
                        assert d >= 0,"Cycle de poids négatif"
    return W

Ic = inter(Gc)
Wc = FW_cycles(Gc,Ic)
print("Mêmes matrices W ?")
print(Wc==FW(Gc,Ic))
print(Ic)

## Exercice 2: Algorithme avec dictionnaires et programmation dynamique

## Programmation de l’algorithme itératif

# Question 1 - FW_dico

def FW_dico(G):
    D = {}
    n = W.shape[0]
    for k in range(n+1):
        for i in range(n):
            for j in range(n):
                if k==0:
                    d = G[i,j]
                else:
                    d_i_j = D[(i,j,k-1)]
                    d_i_km1 = D[(i,k-1,k-1)]
                    d_km1_j = D[(k-1,j,k-1)]
                    d_i_km1_j = d_i_km1 + d_km1_j
                    d = min(d_i_j,d_i_km1_j)
                    if i==j:
                        assert d >= 0,"Cycle de poids négatif"
                D[(i,j,k)] = d
    return D

def FW_dico_WI(G): # Version avec Dico_I
    DW = {}
    DI = {}
    n = W.shape[0]
    for k in range(n+1):
        for i in range(n):
            for j in range(n):
                if k==0:
                    d = G[i,j]
                    if G[i,j] == 0 or G[i,j] == inf:
                        DI[(i,j)] = inf
                    else:
                        DI[(i,j)] = i
                else:
                    d_i_j = DW[(i,j,k-1)]
                    d_i_km1 = DW[(i,k-1,k-1)]
                    d_km1_j = DW[(k-1,j,k-1)]
                    d_i_km1_j = d_i_km1 + d_km1_j
                    d = min(d_i_j,d_i_km1_j)
                    if i==j:
                        assert d >= 0,"Cycle de poids négatif"
                    if d != d_i_j: # Si distance modifiée
                        DI[(i,j)] = k-1
                DW[(i,j,k)] = d
    return DW,DI

dico_W = FW_dico(G)

# Question 2 - dico2mat

def dico2mat(dico,n,k):
    A = np.zeros([n,n])
    for i in range(n):
        for j in range(n):
            A[i,j] = dico[(i,j,k)]
    return A

W5 = dico2mat(dico_W,5,5)
print(W5)
print("W5==W:")
print(W5==W)

## Programmation de l’algorithme récursif

# Question 3 - FW_rec

def FW_rec(G,i,j,k):
    if k==0:
        d = G[i,j]
    else:
        d_i_j = FW_rec(G,i,j,k-1)
        d_i_km1 = FW_rec(G,i,k-1,k-1)
        d_km1_j = FW_rec(G,k-1,j,k-1)
        d_i_km1_j = d_i_km1 + d_km1_j
        d = min(d_i_j,d_i_km1_j)
    return d

''' résultat attendu
[[ 0.  1. -3.  2. -4.]
 [ 3.  0. -4.  1. -1.]
 [ 7.  4.  0.  5.  3.]
 [ 2. -1. -5.  0. -2.]
 [ 8.  5.  1.  6.  0.]]
'''

test = FW_rec(G,0,3,5)
print(test)

# Question 4 - FW_dico_rec

def FW_dico_rec(G):
    def rec(i,j,k):
        if (i,j,k) in D:
            return D[(i,j,k)]
        else:
            if k==0:
                d = G[i,j]
            else:
                d_i_j = rec(i,j,k-1)
                d_i_km1 = rec(i,k-1,k-1)
                d_km1_j = rec(k-1,j,k-1)
                d_i_km1_j = d_i_km1 + d_km1_j
                d = min(d_i_j,d_i_km1_j)
                if i==j:
                    assert d >= 0,"Cycle de poids négatif"
            D[(i,j,k)] = d
            return d
    D = {}
    n = G.shape[0]
    k = n
    for i in range(n):
        for j in range(n):
            D[(i,j,k)] = rec(i,j,k)
    return D

def FW_dico_rec_WI(G): # Version avec Dico_I
    def rec(i,j,k):
        if (i,j,k) in DW:
            return DW[(i,j,k)]
        else:
            if k==0:
                d = G[i,j]
                if G[i,j] == 0 or G[i,j] == inf:
                    DI[(i,j)] = inf
                else:
                    DI[(i,j)] = i
            else:
                d_i_j = rec(i,j,k-1)
                d_i_km1 = rec(i,k-1,k-1)
                d_km1_j = rec(k-1,j,k-1)
                d_i_km1_j = d_i_km1 + d_km1_j
                d = min(d_i_j,d_i_km1_j)
                if i==j:
                    assert d >= 0,"Cycle de poids négatif"
                if d != d_i_j: # Si distance modifiée
                    DI[(i,j)] = k-1
            DW[(i,j,k)] = d
            return d
    DW = {}
    DI = {}
    n = G.shape[0]
    k = n
    for i in range(n):
        for j in range(n):
            DW[(i,j,k)] = rec(i,j,k)
    return DW,DI

dico_W = FW_dico_rec(G)
W5 = dico2mat(dico_W,5,5)
print(W5)
print("W5==W:")
print(W5==W)

## Etapes intermédiaires

# Question 5 - chemin_dico

def chemin_dico(D,i,j,k):
    if k==0:
        if D[(i,j,k)]==inf:
            return []
        else:
            return [i,j]
    else:
        if D[(i,j,k)] == D[(i,j,k-1)]:
            return chemin_dico(D,i,j,k-1)
        else:
            L_i_km1 = chemin_dico(D,i,k-1,k) # cf. rq.
            L_km1_j = chemin_dico(D,k-1,j,k) # cf. rq.
            L_i_km1.pop()
            L_i_j = L_i_km1 + L_km1_j
            return L_i_j

''' Remarques
On peut mettre n au lieu de k dans L_i_km1 et L_km1_j, mais c'est inutile.
Les chemins impossibles sont infinis dès le départ, et le restent, on renvoie [] tout le long et les chemins sont bien vides
Il ne peut pas arriver sur inf autrement que par successions de inf. Les autres appels veulent dire qu'un chemin existe
'''

C00 = chemin_dico(dico_W,0,0,5)
print(C00)
C20 = chemin_dico(dico_W,2,0,5)
print(C20)
C02 = chemin_dico(dico_W,0,2,5)
print(C02)
C14 = chemin_dico(dico_W,1,4,5)
print(C14)
C41 = chemin_dico(dico_W,4,1,5)
print(C41)

dico_Wc = FW_dico_rec(Gc)
Cp21 = chemin_dico(dico_Wc,2,1,5)
print(Cp21)

# Question 6 - case_I

def case_I(D,i,j,k):
    if k==0:
        if D[(i,j,k)]==0 or D[(i,j,k)]==inf:
            return inf
        else:
            return i
    else:
        if D[(i,j,k)] == D[(i,j,k-1)]:
            return case_I(D,i,j,k-1)
        else:
            return k-1

''' Résultat attendu
array([[inf,  4.,  4.,  4.,  0.],
       [ 3., inf,  3.,  1.,  3.],
       [ 3.,  2., inf,  1.,  3.],
       [ 3.,  2.,  3., inf,  0.],
       [ 3.,  3.,  3.,  4., inf]])
'''

Ca00 = case_I(dico_W,0,0,5)
print(Ca00)
Ca12 = case_I(dico_W,1,2,5)
print(Ca12)

# Question 7 - inter_dico

'''
En cours de modification, la mémoïsation est inutile
'''

def inter_dico(DW,n):
    def rec(D,i,j,k):
        if k==0:
            if D[(i,j,k)]==0 or D[(i,j,k)]==inf:
                res = inf
            else:
                res = i
        else:
            if D[(i,j,k)] == D[(i,j,k-1)]:
                res = rec(D,i,j,k-1)
            else:
                res = k-1
        return res
    DI = {}
    for i in range(n):
        for j in range(n):
            DI[(i,j,n)] = rec(DW,i,j,n)
    return DI

'''
Je mets n dans le dico pour pouvoir réutiliser dico2mat
Il est inutile de mémoïser cette fonction, on ne repasse pas plusieurs fois par la même situation
'''

dico_I = inter_dico(dico_W,5)
Ir = dico2mat(dico_I,5,5)
print(Ir)
print("Ir==I:")
print(Ir==I)

## Exercice 3: Application métro

# Création du réseau

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
    Mat = np.inf*np.ones([NS,NS])
    for i in range(NS):
        for j in range(NS):
            if i==j:
                Mat[i,j] = 0
            else:
                f_Complete_Mat(Mat,i,j)
    return Mat

Graphe = f_Graphe()
print(Graphe)

# Question 1 - Application

G = Graphe
I = inter(G)
W = FW(G,I)

Sdep = 'F'
dep = Stations.index(Sdep)
Sarr = 'C'
arr = Stations.index(Sarr)

Distance = W[dep,arr]
print('Distance:',Distance)

Chemin = chemin(dep,arr,G,I,W)
SChemin = []
for i in Chemin:
    SChemin.append(Stations[i])
print(SChemin)
