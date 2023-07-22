'''8 - Tris'''

## 8-5 - TD - Tri par comptage

# Création d'une liste à trier

n = 10
import random
LL = [random.randint(1,n) for i in range(n)]
print("Liste à trier: ",LL)

# Question 1 - Max

def Max(L): # O(n)
    m = L[0]
    for t in L:
        if t > m:
            m = t
    return m

# Question 2 - Denombre

def Denombre(L,m): # O(n)
    n = len(L)
    Res = [0]*(m+1)
    for i in range(n):
        Terme = L[i]
        Res[Terme] += 1 # Rq
    return Res

# Ne fonctionne que parce que L est une liste d'entiers positifs - Sinon cf tri radix avec un alphabet

# Question 3 - Construction

def Construction(L): # O(n)
    Res = []
    n = len(L)
    for i in range(n):
        Entier = i
        Nb = L[i]
        Res += [Entier] * Nb
    return Res

# Question 4 - f_tri_comptage

def f_tri_comptage(L): # O(3n)
    Res = []
    if len(L) >= 1:
        m = Max(L)
        Liste_Presents = Denombre(L,m)
        Res = Construction(Liste_Presents)
    return Res

L = LL.copy()
L_tri = f_tri_comptage(L)
print(L_tri," - Comptage")

# Question 5 - f_tri_comptage_stable

def f_tri_comptage_stable(L):
    n = len(L)
    Res = []
    if n >= 1:
        m = Max(L)
        L_elem =[[] for _ in range(m+1)]
        for i in range(n):
            Terme = L[i]
            Ind = int(Terme) # Pour utiliser des flottants et étudier la stabilité
            L_elem[Ind].append(Terme)
        for elem in L_elem:
            Res += elem
    return Res

L = [3,3.0,1.0,1,5]
L_tri = f_tri_comptage_stable(L)
print(L_tri," - Comptage")