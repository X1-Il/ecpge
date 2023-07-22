'''5 - Fonctions récursives'''

## 5-0 - Entrainement

## Exercice 1 - Une suite

def un(n):
    if n==0:
        return 1
    else:
        return un(n-1)/2+1

print(un(10))

## Exercice 2 - Minimum

# Question 1

def min_rec(L): # O(n)
    # print("Coucou 1")
    if len(L)==1:
        return L[0]
    else:
        T0 = L[0]
        Reste = L[1:]
        Min_Reste = min_rec(Reste)
        if T0 < Min_Reste:
            return T0
        else:
            return Min_Reste

from random import randint as rand
L = [rand(1,100) for i in range(100)]
print('Min Python: ',min(L))
print('Min Rec: ',min_rec(L))

# Autres versions moins bien

def min_rec_pas_bien(L): # O(n) ou O(2^n)
    # print('Coucou 2')
    if len(L)==1:
        return L[0]
    else:
        T0 = L[0]
        Reste = L[1:]
        if T0 < min_rec_pas_bien(Reste):
            return T0
        else:
            return min_rec_pas_bien(Reste)

def min_rec_pas_bien_bis(L): # Version avec pop, copie nécessaire - La copie coûte n^2 en espace (stocke une liste de n termes à chaque étape), et est en O(n) pour la copie en temps
    LL = L.copy()
    if len(L)==1:
        return L[0]
    else:
        if LL[0] < LL[1]:
            LL.pop(1) # Modifie L
        else:
            LL.pop(0) # Modifie L
        return min_rec_pas_bien_bis(LL)
