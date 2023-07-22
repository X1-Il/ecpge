'''8 - Tris'''

## 8-6 - TD - Tri radix

# Création d'une liste à trier

n = 10
import random
LL = [random.randint(1,n) for i in range(n)]
print("Liste à trier: ",LL)

# Question 1 - Convertir_Liste

def Convertir_Liste(n,m):
    Chaine = str(n)
    Liste = list(Chaine)
    Manque = m - len(Liste)
    Res = [0]*Manque + Liste
    Res = [int(t) for t in Res]
    return Res

# Question 2 - Convertir_Entier

def Convertir_Entier(L):
    n = len(L)
    Res = 0
    for i in range(n):
        Pui = n - i - 1
        t = L[i]
        Res += t * 10**Pui
    return Res

# Question 3 - Calcul_m

from math import log,ceil

def Calcul_m(L):
    max = L[0]
    for t in L:
        if t > max:
            max = t
    m = 1
    while max >= 10:
        max /= 10
        m += 1
    return m

# Question 4 - Etape(L,i,A)

def Etape(L,i,A): # O(n)
    D = []
    # Initialisation du dénombrement
    for _ in range(len(A)): # O(len(A))
        D.append([])
        # Nécessaire pour éviter que ce soit n fois la même liste
    # Dénombrement
    for l in L: # O(n) à O(n*len(A))
        e = l[i]
        Ind = A.index(e) # O(1) à O(len(A))
        D[Ind] += [l]
    Lt = []
    # Reconstruction dans l'ordre
    for Liste in D: # O(n)
        for l in Liste:
            Lt.append(l)
    return Lt

# Question 5 - Complexité de Etape

'''
Dans tous les cas: O(k*n)=O(n) avec n le nombre de listes de L, soit e nombre d'entiers à trier dans notre cas
'''

# Question 6 - tri_radix

def tri_radix(L):
    m = Calcul_m(L)
    LL = []
    # Conversion avec liste auxiliaire
    for t in L:
        tt = Convertir_Liste(t,m)
        LL.append(tt)
    # Tri
    for i in range(m):
        ind = m - i - 1
        LL = Etape(LL,ind,A)
    # Conversion avec liste auxiliaire
    Res = []
    for t in LL:
        Ent = Convertir_Entier(t)
        Res.append(Ent)
    return Res

A = [0,1,2,3,4,5,6,7,8,9]

# Question 7 - Complexité de tri_radix

'''
Appelons c la complexité du tri utilisé, coit O(n)
La complexité du tri radix est en 0(m*c)=O(n)
'''