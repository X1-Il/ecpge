'''8 - Tris'''

## 8-3 - TD - Tri fusion

# Création d'une liste à trier

n = 10
import random
LL = [random.randint(1,n) for i in range(n)]
print("Liste à trier: ",LL)

# Question 1 - f_fusion_ordonnee_1

def f_fusion_ordonnee_1(L1,L2):
    Fusion = []
    Taille_1 = len(L1)
    Taille_2 = len(L2)
    i1 = 0
    i2 = 0
    while i1 < Taille_1 and i2 < Taille_2:
        Terme_1 = L1[i1]
        Terme_2 = L2[i2]
        if Terme_1 <= Terme_2: # <= permet la stabilité
            Fusion.append(Terme_1)
            i1 += 1
        else:
            Fusion.append(Terme_2)
            i2 += 1
    Reste = L1[i1:] + L2[i2:]
    Fusion += Reste
    return Fusion

def f_fusion_ordonnee_1(L1,L2): # Version un peu plus courte qui vide L1 et L2 - Ce n'est pas bien car pop(O) est en O(n)
    Fusion = []
    Taille_1 = len(L1)
    Taille_2 = len(L2)
    i1 = 0
    i2 = 0
    while len(L1)>0 and len(L2)>0:
        if L1[0] <= L2[0]: # <= permet la stabilité
            Terme = L1.pop(0)
            Fusion.append(Terme)
        else:
            Terme = L2.pop(0)
            Fusion.append(Terme)
    Fusion += L1 + L2 # L'une des 2 est vide
    return Fusion

'''On peut envisager plein de versions différentes, par exemple insertion des termes de L1 dans L2 ou insertion des termes de L2 dans L1. Et pour ces insertions, cela peut être deux boucles for, un for et un while, des while etc... Avec les for, penser à mettre des break. A chaque fois, on peut descendre ou remonter les listes lors des parcours... Je ne mettrai pas ici les codes associés
'''

# Question 2 - f_tri_fusion

def f_tri_fusion(L):
    Nb_Termes = len(L)
    if Nb_Termes == 1:
        return L
    if Nb_Termes > 1:
        Ind_Milieu = Nb_Termes//2
        L1 = L[0:Ind_Milieu]
        L2 = L[Ind_Milieu:Nb_Termes]
        L1_Triee = f_tri_fusion(L1)
        L2_Triee = f_tri_fusion(L2)
        Fusion = f_fusion_ordonnee_1(L1_Triee,L2_Triee)
        return Fusion

L = f_tri_fusion(LL)
print(L," - Fusion aux")

# Question 3 - f_fusion_ordonnee_2

def f_fusion_ordonnee_2(L1,L2): # Version récursive
    ' Attention, si L trop longue, on dépasse 1000 appels récursifs successifs...'
    if len(L1)*len(L2) == 0:
        return L1 + L2
    else:
        if L1[0] <= L2[0]: # <= permet la stabilité
            Terme = L1[0]
            Reste_L1 = L1[1:]
            Reste_L2 = L2
        else:
            Terme = L2[0]
            Reste_L1 = L1
            Reste_L2 = L2[1:]
        Fusion_Reste = f_fusion_ordonnee_2(Reste_L1,Reste_L2)
        return [Terme] + Fusion_Reste

# Question 4 - Stabilité

'''Il faut l'inégalité <= dans f_fusion_ordonnee_1 et 2 afin de privilégier les termes de gauche dans L1 lorsqu'il y a égalité'''

# Question 5 - f_fusion_ordonnee_ep

def fusion_ordonnee_ep(L,i,j,k): # [i,j[ et [j,k[
    i1 = i
    i2 = j
    while i1 < j and i2 < k:
        if L[i2] < L[i1]: # < permet la stabilité
            t = L.pop(i2)
            L.insert(i1,t)
            i2 += 1
            j += 1
        i1 += 1

L = [1,4,8,9,10,2,4,5,9,11]
fusion_ordonnee_ep(L,0,5,10)
print("ep ijk bis: ",L)

# Question 6 - tri_fusion_ep

def tri_fusion_ep(L):
    def rec(L,i,j): # j exclus
        Nb = j - i
        if Nb == 1:
            return
        else:
            m = (i+j)//2
            rec(L,i,m)
            rec(L,m,j)
            fusion_ordonnee_ep(L,i,m,j)
    rec(L,0,len(L))

L = LL.copy()
tri_fusion_ep(L)
print(L," - Fusion en place")

# Question 7 - Stabilité

'''Il faut l'inégalité stricte dans fusion_ordonnee_ep afin de laisser à droite, les termes égaux, lorsqu'ils sont descendus'''

# Question 8 - fusion_ordonnee_ep_bis

def fusion_ordonnee_ep_bis(L,i,j,k):
    for l in range(j,k):
        while (l-1 >= i) and (L[l] < L[l-1]):
            """< au lieu de <= permet la stabilité"""
            L[l],L[l-1] = L[l-1],L[l]
            l -= 1

L = [1,4,8,9,10,2,4,5,9,11]
fusion_ordonnee_ep_bis(L,0,5,10)
print("ep ijk bis: ",L)
