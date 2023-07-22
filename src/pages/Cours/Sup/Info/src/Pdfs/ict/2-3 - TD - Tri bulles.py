'''2 - Algorithmes à boucles imbriquées'''

## 2-3 - Tri bulles

# Création d'une liste à trier

n = 10
import random
L = [random.randint(1,n) for i in range(n)]
print(L," - Liste à trier")

# Question 1 - Parcours_1

def Parcours_1(L):
    Var = 0
    n = len(L)
    for i in range(n-1):
        if L[i]>L[i+1]:
            L[i],L[i+1]=L[i+1],L[i]
            Var = 1
    return Var

# Question 2 - Tri_bulle_1

def Tri_bulle_1(L):
    Var = 1
    while Var == 1:
        Var = Parcours_1(L)

L1 = L.copy()
Tri_bulle_1(L1)
print(L1," - Tri bulle 1")

# Question 3 - keme parcours

L1 = L.copy()
n = len(L1)
for i in range(n):
    Parcours_1(L1)
    print("Parcours ",i+1," ",L1)

# Question 4 - Parcours_2

def Parcours_2(L,k):
    Var = 0
    n = len(L)
    for i in range(n-k):
        if L[i]>L[i+1]:
            L[i],L[i+1]=L[i+1],L[i]
            Var = 1
    return Var

# Question 5 - Tri_bulle_2

def Tri_bulle_2(L):
    n = len(L)
    for k in range(1,n): # k ieme parcours
        Var = Parcours_2(L,k)
        if Var == 0:
            break

L2 = L.copy()
Tri_bulle_2(L2)
print(L2," - Tri bulle 2")

Verif = L1==L2
print("Vérification L1==L2: ",Verif)

# Question 6 - Efficacités

'''Tri_bulle_1 réalise entre 1 et n-1 parcours de L entre et traite n-1 termes à chaque fois: O(n) à O(n²)'''
'''Tri_bulle_2 traite n-1 fois une portion de L de n-1 à 2 termes O(n²)'''

import time

n = 10000
L = [random.randint(1,n) for i in range(n)]

L1 = L.copy()
Tic = time.perf_counter()
Tri_bulle_1(L1)
Toc = time.perf_counter()
Tps_1 = Toc - Tic
print("Temps 1: ",Tps_1)

L2 = L.copy()
Tic = time.perf_counter()
Tri_bulle_2(L2)
Toc = time.perf_counter()
Tps_2 = Toc - Tic
print("Temps 2: ",Tps_2)

Verif = L1==L2
print("Vérification: ",Verif)

print('''On remarque des temps d'éxécution comparable sur une liste quelconque, car on est pas loin du pire des cas de la fonction 1''')

n = 10000
L = [1 for i in range(n)]

L1 = L.copy()
Tic = time.perf_counter()
Tri_bulle_1(L1)
Toc = time.perf_counter()
Tps_1 = Toc - Tic
print("Temps 1: ",Tps_1)

L2 = L.copy()
Tic = time.perf_counter()
Tri_bulle_2(L2)
Toc = time.perf_counter()
Tps_2 = Toc - Tic
print("Temps 2: ",Tps_2)

Verif = L1==L2
print("Vérification: ",Verif)

print('''Avec L déjà triée, on voit clairement le bénéfice de la fonction 1 car on se place dans le meilleur des cas''')

# Question 7

'''
Oh que oui, il suffit que le plus petit des termes de la liste soit tout à droite
'''