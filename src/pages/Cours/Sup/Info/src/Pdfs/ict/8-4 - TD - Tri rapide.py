'''8 - Tris'''

## 8-4 - TD - Tri rapide

# Création d'une liste à trier

n = 10
import random
LL = [random.randint(1,n) for i in range(n)]
print("Liste à trier: ",LL)

## Exercice 1 - Tri rapide

def f_combine(Listes):
    L = []
    for i in range(len(Listes)):
        L = L + Listes[i]
    return L

def f_divise(L):
    Nb_Termes = len(L)
    Pivot = L[0]
    L1 = []
    L2 = []
    for i in range(1,Nb_Termes): # Rq: bien partir de 1 sinon pvt sera remis
        Terme = L[i]
        if Terme < Pivot: # < pour stabilité
            L1.append(Terme)
        else:
            L2.append(Terme)
    return [L1,[Pivot],L2]

def f_tri_rapide_aux(L): # Si boucle, vérifier rq divise
    Nb_Termes = len(L)
    if Nb_Termes == 0:
        return []
    else:
        L1,L_Pvt,L2 = f_divise(L)
        L1_Triee = f_tri_rapide_aux(L1)
        L2_Triee = f_tri_rapide_aux(L2)
        Combinaison = f_combine([L1_Triee,L_Pvt,L2_Triee])
        return Combinaison

L = f_tri_rapide_aux(LL)
print(L," - Rapide aux")

'''
Pour obtenir la stabilité de ce tri, il faut mettre dans Divise les termes égaux au pivot dans la liste de droite L2
'''

Lstab = [1,2,3,1.0] # Il faut tomber sur un pivot, donc autant mettre un des 3 en premier
Lstab_Triee = f_tri_rapide_aux(Lstab)
print(Lstab_Triee," Stabilité [1,2,3,1.0]")

# Tri rapide en place

def f_tri_rapide_loc(L,i,j): # On a forcément Nb_Termes j - i + 1 > 1 donc pas besoin de tester
    Pivot = L[i]
    p = i
    q = i
    for k in range(i+1,j+1): # indice j inclus
        if L[k] < Pivot: # < pour stabilité mais pas suffisant
            q += 1
            L[q],L[k] = L[k],L[q]
    L[p],L[q] = L[q],L[p]
    return q

def f_tri_rapide_en_place_rec(L,i,j):
    Nb_Termes_ij = j - i + 1
    if Nb_Termes_ij > 1: # ie. j-i > 0 Cf remarque
        q = f_tri_rapide_loc(L,i,j)
        Ind_L1_1 = i
        Ind_L1_2 = q - 1
        f_tri_rapide_en_place_rec(L,Ind_L1_1,Ind_L1_2)
        Ind_L2_1 = q + 1
        Ind_L2_2 = j
        f_tri_rapide_en_place_rec(L,Ind_L2_1,Ind_L2_2)

# Attention, j peut valoir i-1 ou i valoir j+1, donc Nb_Termes_ij peut être nul - Faire un cas de base i==j ou Nb_Termes_ij==1 n'est pas suffisant, il faut une inégalité

def f_tri_rapide_en_place_rec(L,i,j): # Avec cas de base clair
    Nb_Termes_ij = j - i + 1
    if Nb_Termes_ij <= 1: # ie. j-i <= 0 Cf remarque
        return
    else:
        q = f_tri_rapide_loc(L,i,j)
        Ind_L1_1 = i
        Ind_L1_2 = q - 1
        f_tri_rapide_en_place_rec(L,Ind_L1_1,Ind_L1_2)
        Ind_L2_1 = q + 1
        Ind_L2_2 = j
        f_tri_rapide_en_place_rec(L,Ind_L2_1,Ind_L2_2)

def f_tri_rapide_en_place(L):
    Ind_1 = 0
    Ind_2 = len(L) - 1
    f_tri_rapide_en_place_rec(L,Ind_1,Ind_2)

L = LL.copy()
f_tri_rapide_en_place(L)
print(L," - Rapide en place")

'''Discussion sur la stabilité'''

'''
Pour obtenir la stabilité de ce tri, il faut déjà que les exaequo au pivot dans tri_rapide_loc soient laissés à leur place, ce que j'ai fait
'''

Lstab = [1,2,3,1.0] # Il faut tomber sur un pivot, donc autant mettre un des 3 en premier
f_tri_rapide_en_place(Lstab)
print(Lstab," Stabilité [1,2,3,1.0]")

'''
Mais cela ne suffit pas, comme vu dans le cours, il ne faut pas réaliser d'échanges mais une descente des valeurs à déplacer dans tri_rapide_loc
'''

Lstab = [2,7.0,7,1] # Il faut tomber sur un pivot, donc autant mettre un des 3 en premier
f_tri_rapide_en_place(Lstab)
print(Lstab," Stabilité [2,7.0,7,1]")

def f_tri_loc_stable(L,i,j): # On a forcément Nb_Termes j - i + 1 > 1 donc pas besoin de tester
    Pivot = L[i]
    p = i
    q = i
    for k in range(i+1,j+1): # indice j inclus
        if L[k] < Pivot:
            q += 1
            Terme = L.pop(k)
            L.insert(q,Terme)
    L[p],L[q] = L[q],L[p]
    return q

def f_tri_en_place_rec_stable(L,i,j):
    Nb_Termes_ij = j - i + 1
    if Nb_Termes_ij > 1:
        q = f_tri_loc_stable(L,i,j)
        Ind_L1_1 = i
        Ind_L1_2 = q - 1
        f_tri_en_place_rec_stable(L,Ind_L1_1,Ind_L1_2)
        Ind_L2_1 = q + 1
        Ind_L2_2 = j
        f_tri_en_place_rec_stable(L,Ind_L2_1,Ind_L2_2)

def f_tri_en_place_stable(L):
    Ind_1 = 0
    Ind_2 = len(L) - 1
    f_tri_en_place_rec_stable(L,Ind_1,Ind_2)

Lstab = [2,7.0,7,1] # Il faut tomber sur un pivot, donc autant mettre un des 3 en premier
f_tri_en_place_stable(Lstab)
print(Lstab," Stabilité [2,7.0,7,1]")

'''MAIS attention: insert, pop ou une fonction dédiée, sont en O(n), ce qui conduit à ce tri d'être en O(n^3) dans le pire des cas'''

## Exercice 2 - Tri rapide non récursif

# Récupération de la fonction de tri rapide local

def f_tri_rapide_loc(L,i,j): # j inclus
    Pivot = L[i]
    p = i
    q = i
    for k in range(i+1,j+1):
        if L[k] < Pivot:
            q += 1
            L[q],L[k] = L[k],L[q]
    L[p],L[q] = L[q],L[p]
    return q

def f_tri_rapide_non_rec(L): # Version qui ajoute que si nécessaire dans Pile
    Elem = [0,len(L)-1]
    Pile = [Elem]
    while Pile != []:
        Elem = Pile.pop() # Zone à trier
        i,j = Elem
        p = f_tri_rapide_loc(L,i,j)
        L_ind_1 = [i,p-1]
        Nb1 = (p-1) - i + 1 # Nb termes 1
        L_ind_2 = [p+1,j]
        Nb2 = j - (p+1) + 1 # Nb termes 2
        if Nb1 >= 2:
            Pile.append(L_ind_1)
        if Nb2 >= 2:
            Pile.append(L_ind_2)

L = LL.copy()
f_tri_rapide_non_rec(L)
print(L," - Rapide non rec")

def f_tri_rapide_non_rec(L): # Version qui traite que si nécessaire dans Pile
    Elem = [0,len(L)-1]
    Pile = [Elem]
    while Pile != []:
        Elem = Pile.pop() # Zone à trier
        i,j = Elem
        Nb = j - i + 1
        if Nb >= 2:
            p = f_tri_rapide_loc(L,i,j)
            L_ind_1 = [i,p-1]
            L_ind_2 = [p+1,j]
            Pile.append(L_ind_1)
            Pile.append(L_ind_2)

L = LL.copy()
f_tri_rapide_non_rec(L)
print(L," - Rapide non rec")

## Exercice 3 - Médiane

def f_mediane_normale(L):
    L_Triee = f_tri_rapide_en_place(L)
    Ind_Med = len(L)//2
    Mediane = L[Ind_Med]
    return Mediane

L = [4,1,7,2,6,3,5]
print('Médiane normale de ',L)
Med_L = f_mediane_normale(L)
print(Med_L)
print("L après: ",L)

def f_mediane_rec(L,i,j,m):
    q = f_tri_rapide_loc(L,i,j)
    if q == m: # Tous les termes deviennent une fois pivot
        return L[m]
    else:
        if q > m:
            Ind_G = i
            Ind_D = q - 1
        else:
            Ind_G = q + 1
            Ind_D = j
        Mediane = f_mediane_rec(L,Ind_G,Ind_D,m)
        # J'ai mis du temps à voir qu'il fallait retourner mediane pour chaque itération...
        return Mediane

def f_mediane_rapide(L):
    Ind_Med = len(L)//2
    Ind_G = 0
    Ind_D = len(L)-1
    Mediane = f_mediane_rec(L,Ind_G,Ind_D,Ind_Med)
    return Mediane

L = [4,1,7,2,6,3,5]
print('Médiane rapide de ',L)
Med_L = f_mediane_rapide(L)
print(Med_L)
print("L après: ",L)