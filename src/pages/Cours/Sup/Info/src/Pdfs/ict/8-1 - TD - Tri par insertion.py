'''8 - Tris'''

## 8-1 - TD - Tri par insertion

# Création d'une liste à trier

n = 10
import random
LL = [random.randint(1,n) for i in range(n)]
print("Liste à trier: ",LL)

# Question 1

def f_deplace_terme(L,i):
    while (i-1 >= 0) and (L[i] < L[i-1]):
        print(i)
        """< au lieu de <= dans L[i] < L[i-1] permet la stabilité"""
        L[i],L[i-1] = L[i-1],L[i]
        i -= 1

'''Remarque: avec le test (L[i] < L[i-1]) and (i-1 >= 0), il va tester L[-1] soit le dernier... avant de dire que i-1>=0 est false, ce qui n'est pas grave mais pas très logique'''

# Question 2

def f_insertion(L,Val): # Insertion de Val dans L afin que L soit triée
    L.append(Val)
    Nb_Termes = len(L)
    Ind_Terme = Nb_Termes - 1
    f_deplace_terme(L,Ind_Terme)

def f_insertion_bis(L,Val): # Version non attendue avec une boucle for n'utilisant pas f_deplace_terme
    for i in range(len(L)):
        if L[i] > Val: # > pour insertion à droite ie stabilité
            L.insert(i,Val) # Avant L[i]
            break
    else:
        L.append(Val)

# Question 3 - Tri insertion avec listes auxiliaires

def f_tri_insertion_aux(L):
    L_Aux = []
    Nb_Termes = len(L)
    for i in range(Nb_Termes):
        Val = L[i]
        f_insertion(L_Aux,Val)
    return L_Aux

L = f_tri_insertion_aux(LL)
print(L," - Insertion aux")

# Question 4 - Tri insertion en place

def f_tri_insertion_en_place(L):
    Nb_Termes = len(L)
    for i in range(Nb_Termes):
        f_deplace_terme(L,i)

L = LL.copy()
f_tri_insertion_en_place(L)
print(L," - Insertion en place")

# Question 5 - Stabilité

S = f_tri_insertion_aux([3,2,1,1.0])
print(S," pour [3,2,1,1.0] aux")
S = [3,2,1,1.0]
f_tri_insertion_en_place(S)
print(S," pour [3,2,1,1.0] en place")

'''On observe que 1 et 1.0 respectent bien l'ordre initial, mes tris sont des tris stables
Dans la fonction deplace_terme, si on met l'inégalité L[i] <= L[i-1], le tri est non stable
'''

# Question 6 - Tri récursif

def f_tri_insertion_aux_rec(L): # Avec insertion
    if len(L)==0:
        return L
    else:
        Lg = L[:-1]
        t = L[-1]
        Lgt = f_tri_insertion_aux_rec(Lg)
        f_insertion(Lgt,t)
        return Lgt

L = f_tri_insertion_aux_rec(LL)
print(L," - Insertion rec aux")
