'''2 - Algorithmes à boucles imbriquées'''

## 2-2 Valeurs proches dans un tableau

## Exercice 1 - Calcul de sommes doubles

# Question 1 - somme_double_1

def somme_double_1(n):
    '''calcule la somme des i^j pour i,j dans [1,n]'''
    s = 0
    for i in range(1,n+1):
        for j in range(1,n+1):
            s += i**j
    return s

print(somme_double_1(5))
'''5699'''

# Question 2 - somme_double_2

def somme_double_2(n):
    '''calcule les somme des i/j pour i,j dans un triangle'''
    s1 = 0
    for i in range(1,n+1):
        for j in range(i,n+1):
            s1 += i/j
    s2 = 0
    for j in range(1,n+1):
        for i in range(1,j+1):
            s2 += i/j
    return s1,s2

print(somme_double_2(5))
'''10.0,10.000000000000002'''

##Exercice 2 : deux valeurs plus proches dans un tableau

import numpy as np
def Deux_plus_proches_valeurs(L):
    """Etant donnée une liste de nombres L, renvoie une liste contenant les deux plus proches valeurs"""
    assert len(L) >= 2 # On s'assure qu'on a au moins 2 éléments
    dist = np.inf
    for i in range(len(L)): # Pour chaque terme Ti
        Ti = L[i]
        for j in range(len(L)): # On parcourt la liste complète des termes Tj
            Tj = L[j]
            if i != j: # En excluant le terme lui même évidemment
                d_ij = abs(Tj-Ti)
                if d_ij <= dist:
                    dist = d_ij
                    plus_proches = [Ti,Tj]
    return plus_proches

'''
Amélioration possible: ne pas recomparer avec les termes précédents, soit
for j in range(i+1,len(L)):
'''
L = [-1,3,5,2,6,8,11]
rep = Deux_plus_proches_valeurs(L)
print(rep)

# Question 2 - Comportement

'''
La fonction proposée ci-dessus renvoie le premier couple trouvé à cause du test <
En mettant <=, on aura le dernier
'''