'''ITC2 - 2 - Dictionnaires et programmation dynamique'''

'''2-6 - Plus longue sous-suite commune'''

## Algorithme par force brute

# Question 1 - sous_suites_k

def sous_suites_k(m,k):
    n = len(m)
    if n < k or k == 0:
        return [['',0]]
    elif k == 1:
        return [[m[i],i] for i in range(n)]
    else:
        res = []
        L_Mkm1 = sous_suites_k(m,k-1)
        for Mkm1,ind in L_Mkm1:
            for i in range(ind+1,n):
                Mk = Mkm1+m[i]
                res.append([Mk,i])
        return res

# Question 2 - extraction

def extraction(L):
    res = []
    for Mk,_ in L:
        res.append(Mk)
    return res

m = 'abcde'
k = 3
test = sous_suites_k(m,k)
test = extraction(test)
print(test)
print('Nb:',len(test))

# Question 3 - sous_suites

def sous_suites(m):
    n = len(m)
    res = []
    for k in range(n+1):
        L_mk = sous_suites_k(m,k)
        res += extraction(L_mk)
    return res

m = 'abcde'
test = sous_suites(m)
print(test)

# Question 4 - Nombre de sous-suites

print('Nb:',len(test))

'''
2^n
'''

# Question 5 - communes

def communes(m1,m2):
    SS1 = sous_suites(m1)
    SS2 = sous_suites(m2)
    res = []
    for l1 in SS1:
        if l1 in SS2:
            res.append(l1)
    return res

m1 = 'lbzhrgmauvto'
m2 = 'atbcrqkjarvmo'
test = communes(m1,m2)
print('Communes:',test)

# Question 6 - La plus longue

def plus_longue(m1,m2):
    com = communes(m1,m2)
    return com[-1]

'''Elles sont classées par longueur, donc'''

Plus_Longue = plus_longue(m1,m2)
print('Plus longue:',Plus_Longue)

# Question 7 - Complexité

'''
Soient n1 et n2 les tailles des deux chaines de caractères
SSi à une taille de 2^ni, cela coûte donc 2^ni pour les créer
On va alors chercher si pour tous les termes de SS1, s'ils sont dans SS2
Dans le pire des cas donc:
2^(n1)+2^(n2)+2^(n1)*2^(n2)
2^(n1+n2)
'''

## Présentation de la méthode améliorée

# Question 8 - Tableau

'''
  j 0 1 2 3 4 5
i     C H I E N
0   0 0 0 0 0 0
1 N 0 0 0 0 0 1
2 I 0 0 0 1 1 1
3 C 0 1 1 1 1 1
4 H 0 1 2 2 2 2
5 E 0 1 2 2 3 3
'''

## Programmation de l’algorithme itératif

# Question 9 - PLSC_dico

def PLSC_it(m1,m2):
    D = {}
    n1 = len(m1)
    n2 = len(m2)
    for i in range(n1+1):
        D[(i,0)] = 0
    for j in range(1,n2+1):
        D[(0,j)] = 0
    for i in range(1,n1+1):
        for j in range(1,n2+1):
            if m1[i-1] == m2[j-1]:
                D[(i,j)] = 1 + D[(i-1,j-1)]
            else:
                D[(i,j)] = max(D[(i-1,j)],D[(i,j-1)])
    return D

m1 = 'niche'
m2 = 'chien'
dico = PLSC_it(m1,m2)
print(dico)

'''
{(0, 0): 0, (1, 0): 0, (2, 0): 0, (3, 0): 0, (4, 0): 0, (5, 0): 0, (0, 1): 0, (0, 2): 0, (0, 3): 0, (0, 4): 0, (0, 5): 0, (1, 1): 0, (1, 2): 0, (1, 3): 0, (1, 4): 0, (1, 5): 1, (2, 1): 0, (2, 2): 0, (2, 3): 1, (2, 4): 1, (2, 5): 1, (3, 1): 1, (3, 2): 1, (3, 3): 1, (3, 4): 1, (3, 5): 1, (4, 1): 1, (4, 2): 2, (4, 3): 2, (4, 4): 2, (4, 5): 2, (5, 1): 1, (5, 2): 2, (5, 3): 2, (5, 4): 3, (5, 5): 3}
'''

# Question 10 - Complexité

'''
On passe une seule fois par chaque case
O((n+1)*(m+1))
O(n*m)
'''

# Question 11 - matrice

import numpy as np
def matrice(f,m1,m2):
    dico = f(m1,m2)
    n1,n2 = len(m1),len(m2)
    A = np.inf*np.ones([n1+1,n2+1])
    for i,j in dico:
        A[i,j] = dico[(i,j)]
    return A

m1 = 'niche'
m2 = 'chien'
A = matrice(PLSC_it,m1,m2)
print(A)

'''
[[0. 0. 0. 0. 0. 0.]
 [0. 0. 0. 0. 0. 1.]
 [0. 0. 0. 1. 1. 1.]
 [0. 1. 1. 1. 1. 1.]
 [0. 1. 2. 2. 2. 2.]
 [0. 1. 2. 2. 3. 3.]]
'''

## Programmation de l’algorithme récursif

# Question 12 - PLSC_rec_ij

def PLSC_rec_ij(i,j,m1,m2):
    if i*j == 0:
        return 0
    else:
        if m1[i-1]==m2[j-1]:
            return PLSC_rec_ij(i-1,j-1,m1,m2) + 1
        else:
            c1 = PLSC_rec_ij(i-1,j  ,m1,m2)
            c2 = PLSC_rec_ij(i  ,j-1,m1,m2)
            return max(c1,c2)

m1 = 'niche'
m2 = 'chien'
test = PLSC_rec_ij(len(m1),len(m2),m1,m2)
print(test)

# Question 13 - Complexité

'''
2 auto appels au rang n-1
2^n
'''

# Question 14 - PLSC_rec_mem

def PLSC_rec_mem(m1,m2):
    def rec(i,j,m1,m2):
        if (i,j) in dico:
            return dico[(i,j)]
        else:
            if i*j == 0:
                res = 0
                dico[(i,j)] = res
                return res
            else:
                if m1[i-1]==m2[j-1]:
                    res = rec(i-1,j-1,m1,m2) + 1
                    dico[(i,j)] = res
                    return res
                else:
                    c1 = rec(i-1,j  ,m1,m2)
                    c2 = rec(i  ,j-1,m1,m2)
                    res = max(c1,c2)
                    dico[(i,j)] = res
                    return res
    dico = {}
    rec(len(m1),len(m2),m1,m2)
    return dico

m1 = 'niche'
m2 = 'chien'
test = PLSC_rec_mem(m1,m2)
print(test)

'''
{(0, 4): 0, (1, 5): 1, (0, 3): 0, (0, 2): 0, (0, 1): 0, (1, 0): 0, (1, 1): 0, (1, 2): 0, (1, 3): 0, (1, 4): 0, (2, 3): 1, (2, 4): 1, (2, 5): 1, (2, 0): 0, (2, 1): 0, (2, 2): 0, (3, 1): 1, (3, 2): 1, (3, 3): 1, (3, 4): 1, (3, 5): 1, (4, 2): 2, (4, 3): 2, (4, 4): 2, (4, 5): 2, (5, 4): 3, (5, 5): 3}
'''

A = matrice(PLSC_rec_mem,m1,m2)
print(A)

'''
[[inf  0.  0.  0.  0. inf]
 [ 0.  0.  0.  0.  0.  1.]
 [ 0.  0.  0.  1.  1.  1.]
 [inf  1.  1.  1.  1.  1.]
 [inf inf  2.  2.  2.  2.]
 [inf inf inf inf  3.  3.]]

 On remarque que la version récursive mémoïsée ne calcule pas tous les termes
'''

## Etapes intermédiaires

def PLSC(m1,m2):
    D = PLSC_rec_mem(m1,m2)
    i,j = len(m1),len(m2)
    PLSC_rev = ''
    while i > 0 and j > 0:
        il,jl = i-1,j-1
        xi,yj = m1[il],m2[jl]
        if xi==yj:
            i -= 1
            j -= 1
            PLSC_rev += xi
        else:
            if D[(i,j-1)] == D[(i-1,j)]:
                i -= 1 # Déplacement horizontal
                # j -= 1 # Déplacement vertical possible, pas les deux
            elif D[(i,j-1)] < D[(i-1,j)]:
                i -= 1
            else: # D[(i,j-1)] > D[(i-1,j)]
                j -= 1
    PLSC = ''
    for i in range(len(PLSC_rev)-1,-1,-1):
        PLSC += PLSC_rev[i]
    return PLSC

m1 = 'niche'
m2 = 'chien'
test = PLSC(m1,m2)
print(test)

# Ajout de -

def Tirets(m1,m2,PLSC):
    M1,M2 = '',''
    i1 = i2 = 0
    for l in PLSC:
        while m1[i1] != l:
            M1 += '-'
            i1 += 1
        while m2[i2] != l:
            M2 += '-'
            i2 += 1
        M1 += l
        M2 += l
        i1 += 1
        i2 += 1
    return M1,M2

M1,M2 = Tirets(m1,m2,test)
print(M1)
print(M2)
