'''ITC2 - 2 - Dictionnaires et programmation dynamique'''

'''2-7 - Distance de Levenshtein'''

## Méthode non demandée de 1965

def lev_rec_mots(M1,M2):
    N1 = len(M1)
    N2 = len(M2)
    if min(N1,N2)==0:
        return max(N1,N2)
    elif M1[0]==M2[0]:
        return lev_rec_mots(M1[1:],M2[1:])
    else:
        l1 = lev_rec_mots(M1[1:],M2[1:])
        l2 = lev_rec_mots(M1,M2[1:])
        l3 = lev_rec_mots(M1[1:],M2)
        return 1 + min(l1,l2,l3)

def lev_rec_mots_mem(M1,M2):
    def rec(M1,M2):
        if (M1,M2) in dico:
            return dico[(M1,M2)]
        else:
            N1,N2 = len(M1),len(M2)
            if min(N1,N2)==0:
                res = max(N1,N2)
                dico[(M1,M2)] = res
                return res
            elif M1[0]==M2[0]:
                res = rec(M1[1:],M2[1:])
                dico[(M1,M2)] = res
                return res
            else:
                l1 = rec(M1[1:],M2[1:])
                l2 = rec(M1,M2[1:])
                l3 = rec(M1[1:],M2)
                res = 1 + min(l1,l2,l3)
                dico[(M1,M2)] = res
                return res
    dico = {}
    res = rec(M1,M2)
    return dico

## Méthode en programmation dynamique

# Question 1 - Remplissage de la table

'''
  j 0 1 2 3 4 5
i     C H I E N
0   0 1 2 3 4 5
1 N 1 1 2 3 4 4
2 I 2 2 2 2 3 4
3 C 3 2 3 3 3 4
4 H 4 3 2 3 4 4
5 E 5 4 3 3 3 4
'''

## Programmation de l’algorithme itératif

# Question 2 - Levenstein

def lev(M1,M2):
    dico = {}
    N1,N2 = len(M1),len(M2)
    for i in range(N1+1):
        dico[(i,0)] = i
    for j in range(1,N2+1): # 0 inutile
        dico[(0,j)] = j
    for i in range(1,N1+1):
        for j in range(1,N2+1):
            il,jl = i-1,j-1
            if M1[il]==M2[jl]:
                dico[(i,j)] = dico[(i-1,j-1)]
            else:
                d1 = dico[(i-1,j-1)]
                d2 = dico[(i  ,j-1)]
                d3 = dico[(i-1,j  )]
                dico[(i,j)] = 1 + min(d1,d2,d3)
    return dico

M1 = "denis"
M2 = "demie"
dico = lev(M1,M2)
res = dico[(5,5)]
print(res)

M1 = "niche"
M2 = "chien"
dico = lev(M1,M2)
res = dico[(5,5)]
print(res)

# Question 3 - Complexité

'''
(N1+1)*(N2+1)
O(N1*N2)
'''

# Question 4 - matrice

import numpy as np
def matrice(f,M1,M2):
    dico = f(M1,M2)
    N1,N2 = len(M1),len(M2)
    A = np.inf*np.ones([N1+1,N2+1])
    for i,j in dico:
        A[i,j] = dico[(i,j)]
    return A

M1 = "niche"
M2 = "chien"
A = matrice(lev,M1,M2)
print(A)

'''
[[0. 1. 2. 3. 4. 5.]
 [1. 1. 2. 3. 4. 4.]
 [2. 2. 2. 2. 3. 4.]
 [3. 2. 3. 3. 3. 4.]
 [4. 3. 2. 3. 4. 4.]
 [5. 4. 3. 3. 3. 4.]]
'''

## Programmation de l’algorithme récursif

# Question 5 - lev_rec_ij

def lev_rec_ij(i,j,M1,M2):
    if min(i,j)==0:
        return max(i,j)
    elif M1[i-1]==M2[j-1]:
        return lev_rec_ij(i-1,j-1,M1,M2)
    else:
        l1 = lev_rec_ij(i-1,j-1,M1,M2)
        l2 = lev_rec_ij(i  ,j-1,M1,M2)
        l3 = lev_rec_ij(i-1,j  ,M1,M2)
        return 1 + min(l1,l2,l3)

M1 = "niche"
M2 = "chien"
test = lev_rec_ij(len(M1),len(M2),M1,M2) # 4
print(test)

# Question 6 - Complexité

'''
La fonction s'auto appel 3 fois au rang n-1
O(3^n)
'''

# Question 7 - lev_rec_mem

def lev_rec_mem(M1,M2):
    def rec(i,j,M1,M2):
        if (i,j) in dico:
            return dico[(i,j)]
        else:
            if min(i,j)==0:
                res = max(i,j)
                dico[(i,j)] = res
                return res
            elif M1[i-1]==M2[j-1]:
                res = rec(i-1,j-1,M1,M2)
                dico[(i,j)] = res
                return res
            else:
                c1 = rec(i-1,j-1,M1,M2)
                c2 = rec(i  ,j-1,M1,M2)
                c3 = rec(i-1,j  ,M1,M2)
                res = 1 + min(c1,c2,c3)
                dico[(i,j)] = res
                return res
    dico = {}
    res = rec(len(M1),len(M2),M1,M2)
    return dico

M1 = "oui"
M2 = "non"
A = matrice(lev_rec_mem,M1,M2)
print(A)

M1 = "niche"
M2 = "chien"
A = matrice(lev_rec_mem,M1,M2)
print(A)

M1 = "science"
M2 = "science"
A = matrice(lev_rec_mem,M1,M2)
print(A)

M1 = "abbbb"
M2 = "bbbb"
A = matrice(lev_rec_mem,M1,M2)
print(A)

M1 = "bbbb"
M2 = "abbbb"
A = matrice(lev_rec_mem,M1,M2)
print(A)

'''
Dès que des lettres sont identiques, toutes les cases ne sont pas évaluées
'''

## Applications

# Question 8 - creation_Lm

def creation_Lm():
    fichier = open('2-7 - TD - Dictionnaire.txt','r')
    Dictionnaire = []
    for ligne in fichier:
        ligne = ligne.strip()
        Dictionnaire.append(ligne)
    fichier.close()
    return Dictionnaire

Lm = creation_Lm()
# Sela utilisé de manière globale dans la suite

# Question 9 - proches

def proches(M,k):
    Lp = []
    for m in Lm:
        dico = lev_rec_mem(M,m)
        di = dico[len(M),len(m)]
        if di <= k:
            Lp.append(m)
    return Lp

# Question 10 - Prénom

mot = 'denis'
test = proches(mot,1)
print(mot,test)

''' Résultat
denis ['denis', 'dents', 'devis']
'''

# Question 11 - Correction

def corrige(M):
    k = 0
    Liste = proches(mot,k)
    while len(Liste)==0:
        k += 1
        Liste = proches(mot,k)
    return Liste,k

# Question 12 - Correction

mot = 'hydrolique'
test,k = corrige(mot)
print(k,mot,test)

''' Résultat
3 hydrolique ['hydraulique']
'''

## Etapes intermédiaires

# Question 13 - sub

def sub(M,i,t):
    Deb = M[:i]
    Fin = M[i+1:]
    return Deb + t + Fin

# Question 14 - ins

def ins(M,i,t):
    Deb = M[:i]
    Fin = M[i:]
    return Deb + t + Fin

# Question 15 - sup

def sup(M,i):
    Deb = M[:i]
    Fin = M[i+1:]
    return Deb + Fin

# Question 16 - transformation

def transformation(M1,M2):
    dico = lev(M1,M2)
    i,j,M,LM = len(M1),len(M2),M2,[M2]
    while i>0 or j>0:
        il,jl = i-1,j-1
        l1,l2 = M1[il],M2[jl]
        if i==0: # Horizontal
            M = sup(M,jl)
            j -= 1
            LM.append(M)
        elif j==0: # Vertical
            M = ins(M,j,l1)
            i -= 1
            LM.append(M)
        else:
            if l1 == l2 : # Diagonale
                i,j = i-1,j-1
            else:
                if dico[(i,j)] == dico[(i-1,j-1)] + 1: # Diagonale
                    M = sub(M,jl,l1)
                    i,j = i-1,j-1
                elif dico[(i,j)] == dico[(i-1,j)] + 1: # Vertical
                    M = ins(M,j,l1)
                    i -= 1
                elif dico[(i,j)] == dico[(i,j-1)] + 1: # Horizontal
                    M = sup(M,jl)
                    j -= 1
                LM.append(M)
    LM.reverse()
    return LM

# Question 17 - Application

M1 = "niche"
M2 = "chien"
M = transformation(M1,M2)
print(M)

''' Résultat
['chien', 'nchien', 'nichien', 'nichen', 'niche']
'''

M1 = "oui"
M2 = "non"
M = transformation(M1,M2)
print(M)

''' Résultat
['oui', 'nui', 'noi', 'non']
'''

## Une autre approche

# Question 18 - lev_rec_mem_bis

def lev_rec_mem_bis(M1,M2):
    def rec(M1,M2):
        N1,N2 = len(M1),len(M2)
        i,j = T1-N1,T2-N2
        if (i,j) in dico:
            return dico[(i,j)]
        else:
            if min(N1,N2)==0:
                res = max(N1,N2)
                dico[(i,j)] = res
                return res
            elif M1[0]==M2[0]:
                res = rec(M1[1:],M2[1:])
                dico[(i,j)] = res
                return res
            else:
                c1 = rec(M1[1:],M2[1:])
                c2 = rec(M1,M2[1:])
                c3 = rec(M1[1:],M2)
                res = 1 + min(c1,c2,c3)
                dico[(i,j)] = res
                return res
    dico = {}
    T1,T2 = len(M1),len(M2)
    res = rec(M1,M2)
    return dico

M1 = "oui"
M2 = "non"
dico = lev_rec_mem_bis(M1,M2)
print(dico)
A = matrice(lev_rec_mem_bis,M1,M2)
print(A)

'''
[[ 3.  2. inf inf]
 [ 3.  2.  2.  2.]
 [ 3.  2.  1.  1.]
 [ 3.  2.  1.  0.]]
'''

# Question 19 - lev_bis

def lev_bis(M1,M2):
    dico = {}
    N1,N2 = len(M1),len(M2)
    for i in range(N1,-1,-1):
        for j in range(N2,-1,-1):
            if i < N1 and j < N2 and M1[i] == M2[j]:
                dico[(i,j)] = dico[(i+1,j+1)]
            else:
                if i==N1 and j==N2:
                    dico[(i,j)] = 0
                elif i == N1:
                    c1 = dico[(i,j+1)]
                    dico[(i,j)] = 1 + c1
                elif j == N2:
                    c2 = dico[(i+1,j)]
                    dico[(i,j)] = 1 + c2
                else:
                    c1 = dico[(i  ,j+1)]
                    c2 = dico[(i+1,j  )]
                    c3 = dico[(i+1,j+1)]
                    dico[(i,j)] = 1 +  min(c1,c2,c3)
    return dico

M1 = "oui"
M2 = "non"
A = matrice(lev_bis,M1,M2)
print(A)

'''
[[3. 2. 3. 3.]
 [3. 2. 2. 2.]
 [3. 2. 1. 1.]
 [3. 2. 1. 0.]]
'''

# Question 20 - transformation_rec

def transformation_bis(M1,M2):
    dico = lev_rec_mem_bis(M1,M2)
    i,j,M,LM = 0,0,M1,[M1]
    il = i
    while i<len(M1) or j<len(M2):
        if i==len(M1): # Horizontal
            l2 = M2[j]
            M = ins(M,il,l2)
            j += 1
            il += 1
            LM.append(M)
        elif j==len(M2): # Vertical
            M = sup(M,il)
            i += 1
            LM.append(M)
        else:
            l1,l2 = M1[i],M2[j]
            if l1 == l2 : # Diagonale
                i,j = i+1,j+1
                il += 1
            else:
                if dico[(i,j)] == dico[(i+1,j+1)] + 1: # Diagonale
                    M = sub(M,il,l2)
                    i,j = i+1,j+1
                    il += 1
                elif dico[(i,j)] == dico[(i+1,j)] + 1: # Vertical
                    M = sup(M,il)
                    i += 1
                elif dico[(i,j)] == dico[(i,j+1)] + 1: # Horizontal
                    M = ins(M,il,l2)
                    j += 1
                    il += 1
                LM.append(M)
    return LM

M1 = "oui"
M2 = "non"
test = transformation_bis(M1,M2)
print(test)

M1 = "niche"
M2 = "chien"
test = transformation_bis(M1,M2)
print(test)

M1 = "science"
M2 = "science"
test = transformation_bis(M1,M2)
print(test)

## Remarque

A = matrice(lev,'oui','non')
B = matrice(lev_bis,'oui','non')
C = A+B
print(C)