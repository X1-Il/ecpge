'''ITC2 - 2 - Dictionnaires et programmation dynamique'''

'''2-5 - Ordonnancement de tâches pondérées'''

## Algorithme par force brute

# Question 1 - explore

def explore(Lp,Lv):
    assert len(Lp)==len(Lv),'Erreur de tailles de listes'
    n = len(Lp)
    res = [[]]
    for i in range(n):
        pi,vi = Lp[i],Lv[i]
        x = [pi,vi]
        S = []
        for s in res:
            ss = s + [x]
            S.append(ss)
        res += S
    return res

Lp = [2,5,3]
Lv = [1,2,3]
Exp = explore(Lp,Lv)
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
    '''Exp étant une liste [[[a,b],...],[[],...]...], somme renvoie une liste [[Sa,Sb,i],[]...] de la somme des a et des b de chaque sous liste Exp[i]'''
    Ls = []
    for i in range(len(Exp)):
        expi = Exp[i]
        Lp = [expi[i][0] for i in range(len(expi))]
        Lv = [expi[i][1] for i in range(len(expi))]
        p = sum(Lp)
        v = sum(Lv)
        Ls.append([p,v,i])
    Ls.sort()
    return Ls

Ls = sommes(Exp)
print(Ls)

# Question 4 - sort

'''
sort trie de manière lexicographique
Elle trie Ls par le poids d'abord, puis pour les mêmes poids, par la valeur, et enfin pour les mêmes valeurs par l'indice
explore crée les listes par ordre de nombre de termes croissant
En parcourant la liste Ls depuis la fin, solution renverra pour pour le premier poids ok, la plus grande somme, et pour la même somme, le plus grand nombre d'éléments.
'''

# Question 5 - solution

def solution(Ls,Pmax):
    n = len(Ls)-1
    for i in range(n,-1,-1):
        p,v,ind = Ls[i]
        if p<=Pmax:
            break
    return ind,p,v

# Question 6 - Application

Lp = [2,5,2,1,1,7]
Lv = [10,30,20,10,5,30]
Exp = explore(Lp,Lv)
Ls = sommes(Exp)
Pmax = 10
ind,p,v = solution(Ls,Pmax)
F = Exp[ind]
print("Solution",F)
print("Poids: ",p)
print("Valeur: ",v)

## Programmation de l’algorithme itératif

# Question 7 - dico

def OTP_it(Lp,Lv,Pmax):
    D = {}
    ni = len(Lp)
    nj = Pmax
    for j in range(nj+1):
        D[(0,j)] = 0
    for i in range(1,ni+1):
        for j in range(nj+1):
            c1 = D[(i-1,j)]
            p,v = Lp[i-1],Lv[i-1]
            if j >= p:
                c2 = D[(i-1,j-p)] + v
                D[(i,j)] = max(c1,c2)
            else:
                D[(i,j)] = c1
    return D

Lp = [2,5,2]
Lv = [1,2,3]
Pmax = 5
dico = OTP_it(Lp,Lv,Pmax)

# Question 8 - matrice

import numpy as np
def matrice(f,Lp,Lv,Pmax):
    ni = len(Lp)
    nj = Pmax
    dico = f(Lp,Lv,Pmax)
    A = np.inf*np.ones([ni+1,nj+1])
    for i,j in dico:
        A[i,j] = dico[(i,j)]
    return A

Lp = [2,5,2]
Lv = [1,2,3]
Pmax = 5
A = matrice(OTP_it,Lp,Lv,Pmax)
print(A)

# Question 9 - Complexité

'''
On crée une table de taille (n+1)*(Pmax+1)
O(n*Pmax)
'''

## Programmation de l’algorithme récursif

# Question 10 - OTP_rec_ij

def OTP_rec_ij(i,j,Lp,Lv,Pmax):
    if i==0:
        return 0
    else:
        c1 = OTP_rec_ij(i-1,j,Lp,Lv,Pmax)
        p,v = Lp[i-1],Lv[i-1]
        if j >= p:
            c2 = OTP_rec_ij(i-1,j-p,Lp,Lv,Pmax) + v
            return max(c1,c2)
        else:
            return c1

Lp = [2,5,2]
Lv = [1,2,3]
Pmax = 5
test = OTP_rec_ij(1,2,Lp,Lv,Pmax) # 1
print(test)
test = OTP_rec_ij(3,5,Lp,Lv,Pmax) # 4
print(test)

# Question 11 - Complexité

'''
Pire des cas: tous les poids sont des 1 (e=1)
On aura deux auto appels au rang n-1
Il faut imaginer l'arbre obtenu
         22
    12       11
  02  01   01  00
  On sera en O(2^n)
'''

# Question 12 - OTP_rec_mem

def OTP_rec_mem(Lp,Lv,Pmax):
    def rec(i,j,Lp,Lv,Pmax):
        if (i,j) in dico:
            return dico[(i,j)]
        else:
            if i==0:
                res = 0
                dico[(i,j)] = res
                return res
            else:
                c1 = rec(i-1,j,Lp,Lv,Pmax)
                p,v = Lp[i-1],Lv[i-1]
                if j >= p:
                    c2 = rec(i-1,j-p,Lp,Lv,Pmax) + v
                    res = max(c1,c2)
                    dico[(i,j)] = res
                    return res
                else:
                    res = c1
                    dico[(i,j)] = res
                    return res
    dico = {}
    ni = len(Lp)
    nj = Pmax
    rec(ni,nj,Lp,Lv,Pmax)
    return dico

Lp = [2,5,2]
Lv = [1,2,3]
Pmax = 5
A = matrice(OTP_rec_mem,Lp,Lv,Pmax)
print(A)

'''
[[ 0.  0. inf  0. inf  0.]
 [ 0. inf inf  1. inf  1.]
 [inf inf inf  1. inf  2.]
 [inf inf inf inf inf  4.]]

 La version récursive mémoïsée ne calcul pas tout :)
'''

## Etapes intermédiaires

# Question 14 - OTP

def OTP(Lp,Lv,Pmax):
    dico = OTP_it(Lp,Lv,Pmax)
    i = len(Lp)
    j = Pmax
    F = []
    while i>0:
        c1 = dico[(i-1,j)]
        p,v = Lp[i-1],Lv[i-1]
        if j >= p:
            c2 = dico[(i-1,j-p)] + v
            if c1 == max(c1,c2):
                i -= 1
            else: # c2 == max(c1,c2)
                F.append([p,v])
                i -= 1
                j -= p
        else:
            i -= 1
    return F

Lp = [2,5,2]
Lv = [1,2,3]
Pmax = 5
F = OTP(Lp,Lv,Pmax)
print(F)

## Application

Lp = [490,5,15000,1,194,722,9564,200,3567,4587,3250,752]
Lv = [300,700,2700,500,1200,400,2000,100,200,350,8000,100]
Pmax = 15000
F = OTP(Lp,Lv,Pmax)
print(F)
N = len(F)
print("Nombre d'objets:",N)
Ls = sommes([F]) # Penser aux crochets
P,V,i = Ls[0] # Penser à extraire la première liste
print('Poids total:',P)
print('Valeur totale:',V)
