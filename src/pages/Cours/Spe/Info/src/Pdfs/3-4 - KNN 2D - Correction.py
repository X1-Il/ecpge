''' 3 - Intelligence artificielle'''

'''3-4 - KNN 2D'''

## 3-4 - KNN 2D

## Création de données

# Question 1 - Mise en place des données

Nl = 100
Nc = 100
Ng = 5 # Nombre de groupes
Nppg = 10 # Nombre de points par groupes
dlc = 5 #  Répartition sur les lignes des groupes

from random import randint as rdi
LG = [] # Liste des groupes
LP = [] # Liste de tous les points
LNG = [] # Numéros de groupe de chaque point
LC = []
for g in range(Ng):
    G = []
    Lc = rdi(dlc,Nl-dlc)
    Cc = rdi(dlc,Nc-dlc)
    for p in range(Nppg):
        ll = dlc-1
        L = Lc + rdi(-ll,ll)
        C = Cc + rdi(-ll,ll)
        Pt = [L,C]
        LP.append(Pt)
        G.append(Pt)
        LNG.append(g)
    LC.append([rdi(0,255),rdi(0,255),rdi(0,255)])
    LG.append(G)

## Initialisation de l’image

# Question 2 - affiche

from matplotlib import pyplot as plt
plt.close('all')
def Affiche(fig,image):
    plt.figure(fig)
    plt.imshow(image)
    plt.axis('off')
    plt.show()
    plt.pause(0.00001)

# Question 3 - Remplissage de l'image

import numpy as np
image = 255*np.ones((Nl,Nc,3),dtype=np.uint8)
for i in range(Ng):
    G = LG[i]
    Col = LC[i]
    for l,c in G:
        image[l,c] = Col

Affiche(0,image)
#plt.savefig("Images\\0.png") # Créer dossier Images

## Fonctions KNN

# Question 4 - Distance_uv

def Distance_uv(u,v):
    n = len(u)
    Dst = 0
    for i in range(n):
        di = u[i]-v[i]
        Dst += di**2
    Dst = Dst**(1/2)
    return Dst

# Question 5 - Distance

def Distance(u,Lv):
    Ld = []
    for i in range(len(Lv)):
        v = Lv[i]
        Dst = Distance_uv(v,u)
        Res = [Dst,i]
        Ld.append(Res)
    return Ld

# Question 6 - Proches

def Proches(u,Lv,k):
    Ld = Distance(u,Lv)
    Ld.sort()
    Res = Ld[:k]
    return Res

# Question 7 - Max_Occurences

def Max_Occurences(L,n):
    Occ = [0 for _ in range(n)]
    for t in L:
        Occ[t] += 1
    Max = max(Occ)
    for t in L:
        if Occ[t]==Max:
            return t

## Identification de la famille d’appartenance

# Question 8 - Famille

def Famille(Pix,k):
    Res = Proches(Pix,LP,k)
    L_ind = [Res[i][1] for i in range(k)]
    L_fam = [LNG[ind] for ind in L_ind]
    fam = Max_Occurences(L_fam,Ng)
    return fam

## Changement des couleurs de l'image

# Question 9 - Couleur_Pix

def Couleur_Pix(Pix,k,im):
    F = Famille(Pix,k)
    l,c = Pix
    Col = LC[F]
    im[l,c] = Col

# Question 10 - Image_k

def Image_k(k):
    imk = image.copy()
    for l in range(Nl):
        for c in range(Nc):
            Pix = [l,c]
            Couleur_Pix(Pix,k,imk)
    return imk

# Question 11 - Utilisation

for k in range(1,6):
    im_k = Image_k(k)
    Affiche(k,im_k)
    #plt.savefig("Images\\"+str(k)+".png") # Créer dossier Images
