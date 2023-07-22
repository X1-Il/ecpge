''' 7 - Matrices de pixels et images'''

'''Dossier partagé images: https://www.dropbox.com/sh/gd5mfkeekvru8m5/AABqWN0DuZ8ApSq3IH60JJDya?dl=0'''

## 7-3 - Transformations

# Ouverture et affichage de l'image du sujet

import matplotlib.pyplot as plt
plt.close('all')
def f_Affiche(fig,image):
    plt.figure(fig)
    plt.imshow(image)
    plt.axis('off')
    plt.show()

Image = plt.imread("Image.bmp")
Image = Image[:,:,:3]
f_Affiche(0,Image)

## Rotation 1

def f_Prod_MV(M,V):
    Res = []
    for l in range(len(M)):
        Comp = 0
        Ligne = M[l]
        for c in range(len(Ligne)):
            Comp += Ligne[c]*V[c]
        Res.append(Comp)
    return Res

''' Vérifications
M = [[1,2],[3,4]]
V = [5,6]
print(f_Prod_MV(M,V))
'''

from math import cos,sin,pi
def f_Rotation(V,Alpha_d):
    Alpha_r = Alpha_d*pi/180
    M = [[cos(Alpha_r),-sin(Alpha_r)],[sin(Alpha_r),cos(Alpha_r)]]
    Res = f_Prod_MV(M,V)
    return Res

''' Vérifications
V = [1,1]
Alpha_d = 45
print(f_Rotation(V,Alpha_d))
'''

import numpy as np
from math import pi
def f_Rot1(image,C,Alpha_d):
    lc,cc = C
    Nl,Nc,Ras = np.shape(image)
    Im_Rot = 255*np.ones([Nl,Nc,3],dtype='uint8')
    for l in range(Nl):
        for c in range(Nc):
            CP = [l-lc,c-cc]
            a,b = f_Rotation(CP,Alpha_d)
            lp = lc + int(round(a,0)) # Arrondi à l'entier le plus proche avec round
            cp = cc + int(round(b,0)) # Arrondi à l'entier le plus proche avec round
            Cond_L = (0 <= lp <= Nl-1)
            Cond_C = (0 <= cp <= Nc-1)
            if Cond_L and Cond_C:
                Im_Rot[lp,cp] = image[l,c]
    return Im_Rot

print('Rotation 1')

C = [50,50]
Alpha_d = 45
Image_Rot1 = f_Rot1(Image,C,Alpha_d)
f_Affiche(1,Image_Rot1)

## Rotation 2

def f_Rot2(image,C,Alpha_d):
    lc,cc = C
    Nl,Nc,Ras = np.shape(image)
    Im_Rot = 255*np.ones([Nl,Nc,3],dtype='uint8')
    for lp in range(Nl):
        for cp in range(Nc):
            CPp = [lp-lc,cp-cc]
            a,b = f_Rotation(CPp,-Alpha_d)
            l = lc + int(round(a,0)) # Arrondi à l'entier le plus proche avec round
            c = cc + int(round(b,0)) # Arrondi à l'entier le plus proche avec round
            Cond_L = (0 <= l <= Nl-1)
            Cond_C = (0 <= c <= Nc-1)
            if Cond_L and Cond_C:
                Im_Rot[lp,cp] = image[l,c]
    return Im_Rot

print('Rotation 2')

C = [50,50]
Alpha_d = 45
Image_Rot2 = f_Rot2(Image,C,Alpha_d)
f_Affiche(2,Image_Rot2)

## Réduction 1

'''On crée une image en gardant une ligne toutes les nl lignes et une colonne toutes les nc colonnes, en gardant la première'''

def f_Red1_L(image,nl):
    Nl,Nc,Ras = np.shape(image)
    Im_Red = []
    for l in range(0,Nl,nl):
        Ligne = []
        for c in range(Nc):
            Pixel = image[l,c]
            Ligne.append(Pixel)
        Im_Red.append(Ligne)
    Im_Red = np.array(Im_Red,dtype='uint8')
    return Im_Red

def f_Red1_C(image,nc):
    Nl,Nc,Ras = np.shape(image)
    Im_Red = []
    for l in range(Nl):
        Ligne = []
        for c in range(0,Nc,nc):
            Pixel = image[l,c]
            Ligne.append(Pixel)
        Im_Red.append(Ligne)
    Im_Red = np.array(Im_Red,dtype='uint8')
    return Im_Red

print('Réduction 1')

nl,nc = 5,5
Image_Red1_L = f_Red1_L(Image,nl)
f_Affiche(3,Image_Red1_L)

Image_Red1_C = f_Red1_C(Image,nc)
f_Affiche(4,Image_Red1_C)

Image_Red1_LC = f_Red1_C(Image_Red1_L,nc)
f_Affiche(5,Image_Red1_LC)

## Réduction 2

'''On crée une image par prise de la moyenne par blocs de dimensions n*n sur l'image originale'''

def f_Mat_LC(image,L,C,k):
    Mat_LC = []
    for l in range(L-k,L+k+1):
        Ligne = []
        for c in range(C-k,C+k+1):
            Pix = image[l,c]
            Ligne.append(Pix)
        Mat_LC.append(Ligne)
    return Mat_LC

''' Vérifications
print(f_Mat_LC(Image,10,10,1))
'''

def f_Moyenne(M): # M liste de listes nxn
    SR,SG,SB = 0,0,0 # Crée des int32 - Pas de problèmes d'overflow car SR += R donne un int32 en faisant int32+int8
    n = len(M)
    for l in range(n):
        Ligne = M[l]
        for c in range(n):
            R,G,B  = Ligne[c]
            SR += R # Pas d'overflow int32
            SG += G # Pas d'overflow int32
            SB += B # Pas d'overflow int32
    Npix = n*n
    Rm = SR / Npix
    Gm = SG / Npix
    Bm = SB / Npix
    Moy = [Rm,Gm,Bm]
    return Moy

''' Vérifications
print(f_Moyenne(f_Mat_LC(Image,10,10,1)))
'''

def f_Red2(image,n): # n impair
    assert (n%2)==1,"n pair - Erreur"
    Nl,Nc,Ras = np.shape(image)
    Im_Red = []
    k = n//2
    for l in range(k,Nl-k,n):
        Ligne = []
        for c in range(k,Nc-k,n):
            Mat_LC = f_Mat_LC(image,l,c,k)
            Pixel = f_Moyenne(Mat_LC)
            Ligne.append(Pixel)
        Im_Red.append(Ligne)
    Im_Red = np.array(Im_Red,dtype='uint8')
    return Im_Red

print('Réduction 2')

n = 5 # Impair nécessaire
Image_Red2 = f_Red2(Image,n)
f_Affiche(6,Image_Red2)

## Agrandissement

'''
ll = l*(Nl-1)/(Nl_New-1)
cc = c*(Nc-1)/(Nc_New-1)
'''

def f_Ag(image,n,fonction):
    Nl,Nc,Ras = np.shape(image)
    Nl_New = n*(Nl-1)+Nl
    Nc_New = n*(Nc-1)+Nc
    # Remarque: Nl_New Nc_New Pas évident donc donné - On peut mettre ce que l'on veut ça marche
    Im_Ag = 255*np.ones([Nl_New,Nc_New,3],dtype='uint8')
    for l in range(Nl_New):
        Ligne = []
        for c in range(Nc_New):
            ll = l*(Nl-1)/(Nl_New-1) # Pas évident, donc expliqué
            cc = c*(Nc-1)/(Nc_New-1) # Pas évident, donc expliqué
            Pixel = fonction(image,ll,cc)
            Im_Ag[l,c] = Pixel
    return Im_Ag

## Agrandissement 1

'''Agrandissement x n, soit ajout de n-1 lignes/colonnes entre chaque ligne et colonne par plus proches voisins'''

def f1(image,l,c):
    dl = l - int(l)
    if 0.5 < dl <= 1:
        L = int(l) + 1
    else: # 0 <= dl <= 0.5: # Priorité Haut
        L = int(l)
    dc = c - int(c)
    if 0.5 < dc <= 1:
        C = int(c) + 1
    else: # 0 <= dc <= 0.5: # Priorité Droite
        C = int(c)
    Pixel = image[L,C]
    return Pixel

''' Vérifications
print(f1(Image,0,0))
print(f1(Image,1,1))
print(f1(Image,0.5,0.5))
print(f1(Image,0.51,0.51))
'''

print('Agrandissement 1')

n = 5
Image_Ag1 = f_Ag(Image,n,f1)
f_Affiche(7,Image_Ag1)

## Agrandissement 2

'''Agrandissement x n, soit ajout de n-1 lignes/colonnes entre chaque ligne et colonne par interpolation bilinéaire'''

def f_Prod_VV(V1,V2):
    Res = 0
    for i in range(len(V1)):
        Res += V1[i]*V2[i]
    return Res

def f2(image,l,c): # traiter les cas bas droite
    Nl,Nc,Ras = np.shape(image)
    if l == Nl-1 and c == Nc-1: # Bas Droite
        l = int(l) # y penser
        c = int(c) # y penser
        Res = image[l,c]
    elif l == Nl-1: # Bas sans être à droite
        c13 = int(c)
        c24 = int(c)+1
        l = int(l) # y penser
        P3 = image[l,c13]
        P4 = image[l,c24]
        Res = (P3*(c24-c) + P4*(c-c13))/(c24-c13)
    elif c == Nc-1: # Droite sans être en bas
        l12 = int(l)
        l34 = int(l)+1
        c = int(c) # y penser
        P2 = image[l12,c]
        P4 = image[l34,c]
        Res = (P2*(l34-l) + P4*(l-l12))/(l34-l12)
    else:
        l12 = int(l)
        l34 = int(l)+1
        c13 = int(c)
        c24 = int(c)+1
        P1 = image[l12,c13]
        P2 = image[l12,c24]
        P3 = image[l34,c13]
        P4 = image[l34,c24]
        Cst = 1/((l34-l12)*(c24-c13))
        Vl = [l34-l,l-l12]
        Mat = [[P1,P2],[P3,P4]]
        Vc = [c24-c,c-c13]
        Res = f_Prod_MV(Mat,Vc)
        Res = f_Prod_VV(Vl,Res)
        Res = Res*Cst # cf remarque
    Pixel = [int(t) for t in Res]
    return Pixel

'''
Remarque pour un cas très improbable que j'ai recontré mais pas grave en pratique car ll et cc sont des flottants à l'appel de f2.
J'ai eu un problème à l'appel de f2(Image,0,0) et ayant écrit Res *= Cst
Cela bug:
- A l'appel de f2(...,0,0), Res contient des uint8
- A l'appel de f2(...,0.0,0.0), Res contient des float64
Eh bien, le Res *= essaye de mettre dans Res le résultat du produitn qui doitêtre du même type... Essayer A = np.array([1],dtype='uint8') puis A *= 1.0 qui ne marche pas alors que A *= 1 fonctionne
En mettant Res = Res*Cst, le résultat est converti et stocké sans problèmes dans une nouvelle variable res qui écrase l'ancienne...
'''

''' Vérifications
print(f2(Image,Nl-1,Nc-1))
print(f2(Image,10,Nc-1))
print(f2(Image,Nl-1,10))
print(f2(Image,0.5,0.5))
print(f2(Image,0,0))
'''

print('Agrandissement 2')

n = 5
Image_Ag2 = f_Ag(Image,n,f2)
f_Affiche(8,Image_Ag2)

# Pour aller plus loin

# Matrice du cours

Rouge = [255,0,0]
Vert = [0,255,0]
Bleu = [0,0,255]
Noir = [0,0,0]
Blanc = [255,255,255]
Ex = [[Rouge,Rouge,Noir,Bleu],[Rouge,Rouge,Noir,Bleu],[Vert,Vert,Blanc,Vert],[Vert,Vert,Blanc,Vert]]
Ex = np.array(Ex)
n = 4
f_Affiche(9,Ex)
Image_Ex = f_Ag(Ex,n,f2)
f_Affiche(10,Image_Ex)

# Essai joli

Rouge = [255,0,0]
Vert = [0,255,0]
Bleu = [0,0,255]
Jaune = [255,255,0]
Ex = [[Rouge,Vert],[Bleu,Jaune]]
Ex = np.array(Ex)
n = 100
f_Affiche(11,Ex)
Image_Ex = f_Ag(Ex,n,f2)
f_Affiche(12,Image_Ex)
