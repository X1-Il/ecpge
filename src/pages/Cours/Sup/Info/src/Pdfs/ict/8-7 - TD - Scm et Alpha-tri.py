'''8 - Tris'''

## 8-7 - TD - Scm et Alpha-tri

# Création d'une liste à trier

n = 10
import random
LL = [random.randint(1,n) for i in range(n)]
print("Liste à trier: ",LL)

# Tri par fusion de scm

def scm(s):
    L_scm = []
    Taille = len(s)
    Ind_1 = 0
    for i in range(Taille-1):
        if s[i] > s[i+1]:
            Ind_2 = i
            L_scm.append([Ind_1,Ind_2])
            Ind_1 = Ind_2 + 1
    L_scm.append([Ind_1,Taille-1])
    return L_scm

def f_fusion_ordonnee(L1,L2): # Version un peu plus courte qui vide L1 et L2
    Fusion = []
    Taille_1 = len(L1)
    Taille_2 = len(L2)
    i1 = 0
    i2 = 0
    while len(L1)>0 and len(L2)>0:
        if L1[0] < L2[0]:
            Terme = L1.pop(0)
            Fusion.append(Terme)
        else:
            Terme = L2.pop(0)
            Fusion.append(Terme)
    Fusion += L1 + L2 # L'une des 2 est vide
    return Fusion

def tri_local(s,scm1,scm2): # Version qui fusionne non en place et remplace dans S
    d1,f1 = scm1
    d2,f2 = scm2
    L1 = s[d1:f1+1]
    L2 = s[d2:f2+1]
    Fusion = f_fusion_ordonnee(L1,L2)
    s[d1:f2+1] = Fusion

def fusion_ordonnee_ep(L,i,j,k): # [i,j[ et [j,k[
    i1 = i
    i2 = j
    while i1 < j and i2 < k:
        if L[i2] < L[i1]:
            t = L.pop(i2)
            L.insert(i1,t)
            i2 += 1
            j += 1
        i1 += 1

def tri_local(s,scm1,scm2): # Version qui fait la fusion ordonnée en place
    d1,f1 = scm1
    d2,f2 = scm2
    fusion_ordonnee_ep(s,d1,d2,f2+1) # [d1,d2[ soit [d1,f1] et  [d2,f2+1[ donc [d2,f2]

def Fusion_2_dernieres_scm(s,Liste_scm):
    scm2 = Liste_scm.pop()
    scm1 = Liste_scm.pop()
    tri_local(s,scm1,scm2)
    scm12 = [scm1[0],scm2[1]]
    Liste_scm.append(scm12)

def tri_scm(s):
    Liste_scm = scm(s)
    while len(Liste_scm) > 1:
        Fusion_2_dernieres_scm(s,Liste_scm)

L = LL.copy()
tri_scm(L)
print(L," - scm")

# Algorithme alpha-tri

def yz(P):
    scm2 = P.pop()
    scm1 = P.pop()
    d1,f1 = scm1
    d2,f2 = scm2
    y = f1 - d1 + 1
    z = f2 - d2 + 1
    P.append(scm1)
    P.append(scm2)
    return y,z

def Reduction(s,P):
    if len(P) > 1:
        y,z = yz(P)
        while y < 2*z and len(P) > 1:
            Fusion_2_dernieres_scm(s,P)
            if len(P) > 1:
                y,z = yz(P)

def alpha_tri(s):
    P = []
    Liste_scm = scm(s)
    while len(Liste_scm) > 0:
        scm_Ajoutee = Liste_scm.pop(0)
        P.append(scm_Ajoutee)
        Reduction(s,P)
    tri_scm(s)

L = LL.copy()
alpha_tri(L)
print(L," - alpha_tri")

## Alpha-Tri - Fonctions commentées

def Reduction_com(s,P):
    if len(P) > 1:
        y,z = yz(P)
        while y < 2*z and len(P) > 1:
            print("Fusion              : ",P,s)
            Fusion_2_dernieres_scm(s,P)
            print("Résultat            : ",P,s)
            if len(P) > 1:
                y,z = yz(P)

def alpha_tri_com(s):
    P = []
    Liste_scm = scm(s)
    print("Liste à trier       : ",s)
    while len(Liste_scm) > 0:
        scm_Ajoutee = Liste_scm.pop(0)
        P.append(scm_Ajoutee)
        print("Etat avant réduction: ",P,s)
        Reduction_com(s,P)
        print("Etat après réduction: ",P,s)
    print("Tri scm             : ",s)
    tri_scm(s)
    print("Liste triée         : ",s)

s = [3,4,8,11,1,5,2,7,9,0,10,0]
alpha_tri_com(s)
