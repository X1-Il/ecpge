'''4 - Algorithmes dichotomiques'''

## 4-1 - Recherche dans un tableau trié

N = 100
import random
L = [0]
for i in range(1,N):
    Terme = L[i-1] + random.randint(1,5)
    L.append(Terme)
print(L)

Ind_x = random.randint(0,N-1)
x = L[Ind_x]

# Questions 123 - recherche_simple

def recherche_simple(x,L): # O(n) tout le temps
    Res = False
    for i in range(len(L)):
        if L[i] == x:
            Res = True
    return Res

Resultat = recherche_simple(x,L)
print('Ex10Q1: ',Resultat)

def recherche_simple(x,L): # O(1) à O(n)
    for i in range(len(L)):
        if L[i] == x:
            return True
    return False

Resultat = recherche_simple(x,L)
print('Ex10Q1: ',Resultat)

def recherche_simple(x,L): # O(1) à O(n)
    Res = False
    for i in range(len(L)):
        if L[i] == x:
            Res = True
            break
    return Res

Resultat = recherche_simple(x,L)
print('Ex10Q1: ',Resultat)

def recherche_simple(x,L): # O(1) à O(n)
    N = len(L)
    i = 0
    while i <= N-1 and L[i] != x: # ordre des tests important
        i += 1
    Res = True
    if i == N:
        Res = False
    return Res

Resultat = recherche_simple(x,L)
print('Ex10Q1: ',Resultat)

# Question 4 - recherche_dicho

def recherche_dicho(x,L): # Complexité en o(ln(n)) dans le pire des cas
    if len(L)==0:
        return False
    ig = 0
    id = len(L)-1
    while ig <= id: # Ne pas mettre != car possible id<ig
        im = (ig+id)//2
        Tm = L[im]
        if Tm == x: # Plus simple en traitant ce cas
            return True
        elif x >= Tm: # Droite
            ig = im+1 # Bien exclure im
        else: # Gauche
            id = im-1 # Bien exclure im
    return False

Resultat = recherche_dicho(x,L)
print('Ex10Q4: ',Resultat)

# Question 5 - Vérification

LL = [1,2,3]
xx = 1
print(recherche_dicho(xx,LL))
xx = 2
print(recherche_dicho(xx,LL))
xx = 3
print(recherche_dicho(xx,LL))
xx = 4
print(recherche_dicho(xx,LL))

# Question 6 - sort

L = [1, 9, 5, 4, 7]
L.sort()
print(L)
'''Trie la liste L par ordre croissant'''

# Question 7 -

from math import floor,log

def recherche_dicho_it(x,L): # Complexité en o(ln(n)) dans le pire des cas
    if len(L)==0:
        return False
    Log = floor(log(len(L),2))
    ig = 0
    id = len(L)-1
    it = 0
    while ig <= id: # Ne pas mettre != car possible id<ig
        it += 1
        im = (ig+id)//2
        Tm = L[im]
        if Tm == x:
            return True,it,Log
        elif x >= Tm:
            ig = im+1
        else:
            id = im-1
    return False,it,Log

# Question 8

import random as rd
for n in range(2,6):
    N = 10**n
    L = [rd.randint(0,100*N) for k in range(N)]
    L.sort()
    x = -1
    test = recherche_dicho_it(x,L)
    print(test)
'''
[False, 7, 6]
[False, 10, 9]
[False, 13, 13]
[False, 17, 16]

'''

# Question 9

'''
 -1 étant absent de la liste, on résout N/(2**nb) = 1
Le nombre d'itération est de l'ordre de log_2(N).
'''

# Question 10 - Meilleur et pire des cas

'''
Meilleur des cas: O(1)
Pire des cas: O(ln(n))
'''

# Question 11 - test

def test(f):
    Res = []

    # 1: L est vide
    L = []
    x = 1
    Res.append(f(x,L)==False)

    # 2: len(L) pair - x dans L - 1° terme
    L = [1,2,3,4]
    x = 1
    Res.append(f(x,L)==True)
    # 3: len(L) pair - x dans L - Dernier terme
    L = [1,2,3,4]
    x = 4
    Res.append(f(x,L)==True)
    # 4: len(L) pair - x dans L - Dedans
    L = [1,2,3,4]
    x = 2
    Res.append(f(x,L)==True)

    # 5: len(L) impair - x dans L - 1° terme
    L = [1,2,4]
    x = 1
    Res.append(f(x,L)==True)
    # 6: len(L) impair - x dans L - Dernier terme
    L = [1,2,4]
    x = 4
    Res.append(f(x,L)==True)
    # 7: len(L) impair - x dans L - Dedans
    L = [1,2,4]
    x = 2
    Res.append(f(x,L)==True)

    # 8: len(L) pair - x n'est pas dans L - Avant
    L = [1,2,3,4]
    x = -1
    Res.append(f(x,L)==False)
    # 9: len(L) pair - x n'est pas dans L - Après
    L = [1,2,3,4]
    x = 5
    Res.append(f(x,L)==False)
    # 10: len(L) pair - x n'est pas dans L - Dedans
    L = [1,2,3,4]
    x = 2.5
    Res.append(f(x,L)==False)

    # 11: len(L) impair - x n'est pas dans L - Avant
    L = [1,2,4]
    x = -1
    Res.append(f(x,L)==False)
    # 12: len(L) impair - x n'est pas dans L - Après
    L = [1,2,4]
    x = 5
    Res.append(f(x,L)==False)
    # 13: len(L) impair - x n'est pas dans L - Dedans
    L = [1,2,4]
    x = 2.5
    Res.append(f(x,L)==False)

    print(Res) # Permet d'identifier le lieu du bug
    return Res == [True]*13

# Question 12 - Vérification

Res = test(recherche_dicho)
print('La fonction est correcte ?',Res)

## Annexe

"""Voici des versions de la fonction de recherche qui fonctionnent et qui évitent ig>id à la fin"""

# Version avec un min et un max

def recherche_dicho_bis(x,L):
    if len(L)==0:
        return False
    ig = 0
    id = len(L)-1
    while ig < id: # Test != ou <
        im = (ig+id)//2 # ou im = (ig+id+1)//2
        Tm = L[im]
        if Tm == x:
            return Tm == x
        elif x >= Tm:
            ig = min(id,im+1)
        else:
            id = max(ig,im-1)
    return L[ig]==x # ig=id

Res = test(recherche_dicho_bis)
print('Annexe V1 ?',Res)

# Version milieu gauche et id = im

def recherche_dicho_bis(x,L):
    if len(L)==0:
        return False
    ig = 0
    id = len(L)-1
    while ig < id:
        im = (ig+id)//2
        Tm = L[im]
        if Tm == x:
            return True
        elif x >= Tm:
            ig = im+1
        else:
            id = im
    return L[ig]==x # ig=id

Res = test(recherche_dicho_bis)
print('Annexe V2 ?',Res)

# Version milieu droite et ig = im

def recherche_dicho_bis(x,L):
    if len(L)==0:
        return False
    ig = 0
    id = len(L)-1
    while ig < id:
        im = (ig+id+1)//2
        Tm = L[im]
        if Tm == x:
            return True
        elif x >= Tm:
            ig = im
        else:
            id = im-1
    return L[ig]==x # ig=id

Res = test(recherche_dicho_bis)
print('Annexe V3 ?',Res)