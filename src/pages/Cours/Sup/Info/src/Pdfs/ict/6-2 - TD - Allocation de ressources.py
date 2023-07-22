'''6 - Algorithmes glouton'''

## 6-2 - Allocation d'une ressource

# Question 1 - Generation

from random import randint,uniform

def Generation(Debut,Fin,Duree_max,Nb):
    Res = []
    for i in range(Nb):
        Di = randint(Debut,Fin-1) # Fin-1 pour avoir au moins 1 j de durée
        Reste = Fin - Di
        Reste = min(Reste,Duree_max)
        Duree = randint(1,Reste)
        Fi = Di + Duree
        Col = [uniform(0,1),uniform(0,1),uniform(0,1)]
        ind = i+1
        R = [Di,Fi,ind,Col]
        Res.append(R)
    return Res

# Question 2 - Affichage

from matplotlib import pyplot as plt
plt.close('all')

def Affiche(fig,LR,Type,Ordre):
    plt.figure(fig)
    n = len(LR)
    for i in range(n):
        R = LR[i]
        x1,x2,ind,Col = R
        if Ordre == 1:
            y = i+1
        else:
            y = ind
        plt.plot([x1,x2],[y,y],Type,color=Col,linewidth=3)
    plt.xticks([i for i in range(Debut,Fin+1)])
    plt.yticks([i+1 for i in range(Nb)])
    plt.show()

Debut = 10
Fin = 20
Nb = 20
Res = Generation(Debut,Fin,3,Nb)
Affiche(0,Res,'-',0)

# Question 3 - Etude de sorted

L = [[1,3],[1,2],[0,2],[3,3]]
L1 = sorted(L)
L2 = sorted(L,key=lambda x:x[0])
L3 = sorted(L,key=lambda x:x[1])

'''
L1: L est triée dans l'ordre de ses éléments, le premier, puis le second si les premiers sont identiques
L2: L est triée uniquepent par son premier élément sans traitement de la suite
L3: L est triée uniquepent par son deuxième élément sans traitement du premier
'''

# Question 4 - Tri_fin

def Tri_fin(LR):
    LR_Tri = sorted(LR,key=lambda x:x[1])
    return LR_Tri

Debut = 0
Fin = 20
Duree_max = 4
Nb = 20
Res = Generation(Debut,Fin,3,Nb)
Res_Tri = Tri_fin(Res)
Affiche(10,Res,'-',0)
Affiche(11,Res,'-',1)
Affiche(12,Res_Tri,'-',0)
Affiche(13,Res_Tri,'-',1)

# Question 5 - Résolution

def Resolution(LR_Tri): # Initialisation de Fin_prec
    Res = []
    Res_0 = LR_Tri[0]
    Fin_prec = Res_0[0] # Eviter 0
    for R in LR_Tri:
        D,F,_,_ = R
        if D >= Fin_prec:
            Res.append(R)
            Fin_prec = F
    return Res

def Resolution(LR_Tri): # traitement de la première Res dans le for avec if
    Res = []
    for i in range(len(LR_Tri)):
        R = LR_Tri[i]
        D,F,_,_ = R
        if i==0:
            Res.append(R)
            Fin_prec = F
        else:
            if D >= Fin_prec:
                Res.append(R)
                Fin_prec = F
    return Res

# Question 6 - Application

Debut = 0
Fin = 20
Duree_max = 4
Nb = 20
Reservations = Generation(Debut,Fin,Duree_max,Nb)
Affiche(1,Reservations,':',0)
Reservations_Tri = Tri_fin(Reservations)
Solution = Resolution(Reservations_Tri)
Affiche(1,Solution,'-',0)
Affiche(2,Solution,'-',1)
Affiche(3,Reservations_Tri,'-',1)

## Fonctions de tri

'''Sans utiliser sort, on peut utiliser ces fonctions pour trier par insertion la liste selon leur 2° élément'''

def Tri_k(LR,k):
    j = len(LR)-1
    R = LR[j]
    R_Prec = LR[j-1]
    while j > 0 and R[k] < R_Prec[k]:
        LR[j],LR[j-1] = LR[j-1],LR[j]
        j -= 1
        R = LR[j]
        R_Prec = LR[j-1]

def Tri_fin(LR):
    Res = []
    for R in LR:
        Res.append(R)
        Tri_k(Res,1)
    return Res