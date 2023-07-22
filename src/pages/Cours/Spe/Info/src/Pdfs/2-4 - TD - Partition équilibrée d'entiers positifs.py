'''ITC2 - 2 - Dictionnaires et programmation dynamique'''

'''2-4 - Partition équilibrée d'entiers positifs'''

## Algorithme par force brute

# Question 1 - explore

def explore(E):
    n = len(E)
    res = [[]]
    for i in range(n):
        x = E[i]
        S = []
        for s in res:
            ss = s + [x]
            S.append(ss)
        res += S
    return res

E = [2,5,10]
Exp = explore(E)
print(Exp)

# Question 2 - Complexité

'''
La taille de res vaut 1, puis 2, puis 4, puis 8 etc
Taille de res à l'itération i: 2^(i-1)
On fait donc n pour i de 0 à n-1 boucles ayant chacune 2^i calculs
2^0 + 2^1 + 2^2 + ... + 2^(n-1)
Soit O(2^n)
'''

# Question 3 - sommes

def sommes(Exp):
    Ls = []
    for i in range(len(Exp)):
        expi = Exp[i]
        s = sum(expi)
        Ls.append([s,i])
    Ls.sort()
    return Ls

Ls = sommes(Exp)
print(Ls)

# Question 4 - solution

def solution(Ls,Smax):
    n = len(Ls)-1
    for i in range(n,-1,-1):
        s,ind = Ls[i]
        if s<=Smax:
            break
    return ind,s

# Quetion 5 - Application

E = [75,69,43,90,110,58,62,72,86,25]
Exp = explore(E)
Ls = sommes(Exp)
Smax = sum(E)//2
ind,s = solution(Ls,Smax)
F = Exp[ind]
print(F,s)

''' Remarque
sort trie de manière lexicographique
Elle trie Ls par la somme d'abord, puis pour les mêmes sommes, par l'indice
explore crée les listes par ordre de nombre de termes croissant
En parcourant la liste Ls depuis la fin, solution renverra pour une même somme, l'indice le plus grand (parcours en arrière), donc la partition F de plus grand nombre de termes.
'''

## Programmation de l’algorithme itératif

# Question 6 - dico

def PEEP_it(E):
    D = {}
    S = sum(E)
    ni = len(E)
    nj = int(S/2)
    for i in range(ni+1):
        D[(i,0)] = True
    for j in range(1,nj+1):
        D[(0,j)] = False
    for i in range(1,ni+1):
        for j in range(1,nj+1):
            c1 = D[(i-1,j)]
            e = E[i-1]
            c2 = (j >= e) and D[(i-1,j-e)] # Ordre important
            D[(i,j)] = c1 or c2
    return D

E = [21,3,6,15,12]
dico = PEEP_it(E)

# Question 7 - matrice

import numpy as np
def matrice(f,E):
    S = sum(E)
    ni = len(E)
    nj = int(S/2)
    dico = f(E)
    A = np.zeros([ni+1,nj+1])
    for i,j in dico:
        A[i,j] = dico[(i,j)] # True mettra 1 et False 0
    return A

E = [21,3,6,15,12]
A = matrice(PEEP_it,E)

# Question 8 - Complexité

'''
On crée une table de taille (n+1)*(S+1)
O(n*S)
'''

# Question 9 - Affichage

from matplotlib import pyplot as plt
plt.close('all')
def Spy(fig,M):
    plt.figure(fig)
    plt.spy(M)
    plt.show()

E = [21,3,6,15,12]
A = matrice(PEEP_it,E)
Spy(1,A)

# Question 10 - S_max

'''
Idéalement, il faudrait voir si dico[n,S] est True, alors il y a une solution parfaite.
On parcours la ligne du bas de la matrice, et on trouve la plus grande valeur S=j atteignable avec n termes - Dernier True sur cette ligne
'''

def S_max(E):
    dico = PEEP_it(E)
    S = sum(E)
    ni = len(E)
    nj = int(S/2)
    for j in range(nj,-1,-1):
        if dico[(ni,j)]:
            return j

'''
Il y a au moins un True à la dernièer ligne, à la colonne du premier élement de E
'''

E = [21,3,6,15,12]
test = S_max(E)
print(test)

## Programmation de l’algorithme récursif

# Question 11 - PEEP_rec_ij

def PEEP_rec_ij(i,j,E):
    if j==0:
        return True
    elif i==0: # Forcément, j n'est pas nul
        return False
    else:
        c1 = PEEP_rec_ij(i-1,j,E)
        e = E[i-1]
        c2 = (j >= e) and PEEP_rec_ij(i-1,j-e,E)
        return (c1 or c2)

E = [21,3,6,15,12]
test = PEEP_rec_ij(0,21,E) # False
print(test)
test = PEEP_rec_ij(1,21,E) # True
print(test)

# Question 12 - Complexité

'''
Pire des cas: tous les éléments sont des 1 (e=1)
On aura deux auto appels au rang n-1
Il faut imaginer l'arbre obtenu
         22
    12       11
  02  01   01  00
  On sera en O(2^n)
'''

# Question 13 - PEEP_rec_mem

def PEEP_rec_mem(E):
    def rec(i,j,E):
        if (i,j) in dico:
            return dico[(i,j)]
        else:
            if j==0:
                res = True
            elif i==0: # Forcément, j n'est pas nul
                res = False
            else:
                c1 = rec(i-1,j,E)
                e = E[i-1]
                c2 = (j >= e) and rec(i-1,j-e,E)
                res = (c1 or c2)
            dico[(i,j)] = res
            return res
    dico = {}
    S,ni,nj = sum(E),len(E),len(E)//2
    for i in range(ni+1):
        for j in range(nj+1):
            rec(i,j,E)
    return dico

E = [21,3,6,15,12]
A = matrice(PEEP_rec_mem,E)
Spy(2,A)

# Question 14 - PEEP_rec_mem_opt

'''
On ne parcoure que la dernière ligne de droite à gauche jusqu'à obtenir un True
'''

def PEEP_rec_mem_opt(E):
    def rec(i,j,E):
        if (i,j) in dico:
            return dico[(i,j)]
        else:
            if j==0:
                res = True
                dico[(i,j)] = res
                return res
            elif i==0: # Forcément, j n'est pas nul
                res = False
                dico[(i,j)] = res
                return res
            else:
                c1 = rec(i-1,j,E)
                e = E[i-1]
                c2 = (j >= e) and rec(i-1,j-e,E)
                res = (c1 or c2)
                dico[(i,j)] = res
                return res
    dico = {}
    S = sum(E)
    ni = len(E)
    nj = int(S/2)
    i = ni
    j = nj
    while not rec(i,j,E):
        j -= 1
    return dico

E = [21,3,6,15,12]
A = matrice(PEEP_rec_mem_opt,E)
Spy(3,A)

## Etapes intermédiaires

# Question 15 - PEEP

def PEEP(E):
    F = []
    G = []
    dico = PEEP_it(E)
    i = len(E)
    j = S_max(E)
    while i>0 or j>0:
        c1 = dico[(i-1,j)]
        e = E[i-1]
        c2 = (j >= e) and dico[(i-1,j-e)]
        if c1:
            i -= 1
            G.append(e)
        else: # donc c2
            i -= 1
            j -= e
            F.append(e)
    return F,G

E = [21,3,6,15,12]
F,G = PEEP(E)
print(F)
print(G)

## Application 1

L_Pds = [75,69,43,90,110,58,62,72,86,25]
P_tot = sum(L_Pds)
print('Poids total:',P_tot)
Res = S_max(L_Pds)
print("Poids trouvé:",Res)
Possible = (Res == P_tot//2)
print("Solution parfaite ?",Possible)
F,G = PEEP(L_Pds)
print(F,sum(F))
print(G,sum(G))

## Application 2

def ap2_PEEP_it(E,S): # Ajout de S - Suppression de la ligne S=
    D = {}
    ni = len(E)
    nj = S # Modification
    for i in range(ni+1):
        D[(i,0)] = True
    for j in range(1,nj+1):
        D[(0,j)] = False
    for i in range(1,ni+1):
        for j in range(1,nj+1):
            c1 = D[(i-1,j)]
            e = E[i-1]
            c2 = (j >= e) and D[(i-1,j-e)]
            D[(i,j)] = c1 or c2
    return D

def ap2_S_max(E,S): # Ajout de S - Suppression de la ligne S=
    dico = ap2_PEEP_it(E,S) # Ajout de S
    ni = len(E)
    nj = S # Modification
    for j in range(nj,-1,-1):
        if dico[(ni,j)]:
            return j

def ap2_PEEP(E,S): # S et j'enlève G inutile partout
    F = []
    G = []
    dico = ap2_PEEP_it(E,S) # S
    i = len(E)
    j = ap2_S_max(E,S) # S
    while i>0 or j>0:
        c1 = dico[(i-1,j)]
        e = E[i-1]
        c2 = (j >= e) and dico[(i-1,j-e)]
        if c1:
            i -= 1
            G.append(e)
        else: # donc c2
            i -= 1
            j -= e
            F.append(e)
    return F,G

L_Prix = [17,15,12,19,18,13,7,9]
Argent = 70
Dep = ap2_S_max(L_Prix,Argent)
print('Dépense',Dep)
print("Solution parfaite ?",Dep==Argent)
F,_ = ap2_PEEP(L_Prix,Argent)
print(F,sum(F))