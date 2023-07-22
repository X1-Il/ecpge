'''8 - Tris'''

## 8-2 - TD - Tri par sélection

# Création d'une liste à trier

n = 10
import random
LL = [random.randint(1,n) for i in range(n)]
print("Liste à trier: ",LL)

# Question 1 - Minimum

def Ind_min(L,i): # Indice du premier minimum (pour stabilité) après i inclus
    im = i
    m = L[i]
    for k in range(im,len(L)):
        t = L[k]
        if t < m: # Premier minimum avec < (et non <=)
            m = t
            im = k
    return im

# Question 2 - Tri sélection

def f_tri_selection(L):
    for i in range(len(L)-1): # Inutile de traiter le dernier
        im = Ind_min(L,i)
        L[i],L[im] = L[im],L[i]

L1 = LL.copy()
f_tri_selection(L1)
print(L1," - Sélection")

# Question 3 - Tri sélection récursif

def tri_selection_rec(L,i=0):
    if i >= len(L)-1: # Le dernier est plus grand que les autres
        return
    else:
        Ind = Ind_min(L,i) #1
        L[i],L[Ind]=L[Ind],L[i]
        tri_selection_rec(L,i+1) #2

#1 Inclure i car si pas d'échange, Ind doit être égal à i
#2 Il est important de rappeler L entière pour échanger en place

L2 = LL.copy()
tri_selection_rec(L2)
print(L2," - Sélection recursif")
print("Même résultat ? ",L1==L2)

# Question 4

L3 = [4,1,2,3,1.0]
print(L3," - A trier")
f_tri_selection(L3)
print(L3," - Premier min")

def Ind_min(L,i):
    im = i
    m = L[i]
    for k in range(im,len(L)):
        t = L[k]
        if t <= m: # Dernier minimum
            m = t
            im = k
    return im

L3 = [4,1,2,3,1.0]
f_tri_selection(L3)
print(L3," - Dernier min")

'''
Il faut bien garder le premier minimum dans notre algorihme qui traite la liste de gauche à droite afin que le tri soit stable
'''