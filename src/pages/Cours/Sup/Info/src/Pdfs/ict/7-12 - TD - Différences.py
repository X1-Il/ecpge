## Imports

from matplotlib import pyplot as plt
plt.close('all')
import numpy as np # Pour les sauvegardes npy

## Affichage des images

def Affiche(fig,image):
    plt.figure(fig)
    plt.imshow(image)
    plt.axis('off')
    plt.show()
    plt.pause(0.00001)

Image_1 = plt.imread("Image 1.bmp")
Image_1 = Image_1[:,:,:3]
Affiche(1,Image_1)
np.save("Image 1",Image_1)

Image_2 = plt.imread("Image 2.bmp")
Image_2 = Image_2[:,:,:3]
Affiche(2,Image_2)
np.save("Image 2",Image_2)

## Détection des différences

def Ecart(P1,P2):
    R1,G1,B1 = P1
    R2,G2,B2 = P2
    R1,G1,B1 = float(R1),float(G1),float(B1) # Eviter l'overflow
    R2,G2,B2 = float(R2),float(G2),float(B2) # Eviter l'overflow
    DR,DG,DB = abs(R2-R1),abs(G2-G1),abs(B2-B1)
    DR,DG,DB = int(DR),int(DG),int(DB)
    return [DR,DG,DB]

def Difference(im1,im2):
    Res = im1.copy()
    Nl,Nc = im1.shape[0:2]
    for c in range(Nc):
        for l in range(Nl):
            P1,P2 = im1[l,c],im2[l,c]
            Pix = Ecart(P1,P2)
            Res[l,c] = Pix
    return Res

Image_Diff = Difference(Image_1,Image_2)
Affiche(3,Image_Diff)
plt.savefig("Image_Diff.png")

## Différence en nuances de gris

from math import sqrt
def Norme(P):
    s = 0
    for c in P:
        s += c**2
    s = sqrt(s)
    return s

def NG(im):
    Res = im.copy()
    Nl,Nc = im.shape[0:2]
    for c in range(Nc):
        for l in range(Nl):
            Pix = im[l,c]
            N = Norme(Pix)
            N = min(N,255)
            Res[l,c] = [N,N,N]
    return Res

Image_NG = NG(Image_Diff)
Affiche(4,Image_NG)
plt.savefig("Image_NG.png")

## Différences en noir et blancs

def NB(im,S):
    Res = im.copy()
    Nl,Nc = im.shape[0:2]
    for c in range(Nc):
        for l in range(Nl):
            N = im[l,c,0]
            if N <= S:
                Res[l,c] = [0,0,0]
            else:
                Res[l,c] = [255,255,255]
    return Res

S = 150
Image_NB = NB(Image_NG,S)
Affiche(5,Image_NB)
plt.savefig("Image_NB.png")

## Affichage des différences en rouge

def Rouge(im,im_nb):
    Res = im.copy()
    Nl,Nc = im.shape[0:2]
    for c in range(Nc):
        for l in range(Nl):
            N = im_nb[l,c,0]
            if N == 255:
                Res[l,c] = [255,0,0]
    return Res

Image_Rouge = Rouge(Image_1,Image_NB)
Affiche(6,Image_Rouge)
plt.savefig("Image_Rouge.png")

## Amélioration du temps de traitement

'''Il ne faut évidemment pas appeler les 4 fonctions précédentes'''

def Analyse(im1,im2,S):
    Res = im1.copy()
    Nl,Nc = im1.shape[0:2]
    for c in range(Nc):
        for l in range(Nl):
            P1,P2 = im1[l,c],im2[l,c]
            Pix = Ecart(P1,P2)
            N = Norme(Pix)
            N = min(N,255)
            if N > S:
                Res[l,c] = [255,0,0]
    return Res

S = 150
Image_Rouge = Analyse(Image_1,Image_2,S)
Affiche(7,Image_Rouge)

## 7 différences

# Ouverture

Diff_1 = plt.imread("Diff 1.bmp")
Diff_1 = Diff_1[:,:,:3]
Affiche(11,Diff_1)
np.save("Diff 1",Diff_1)

Diff_2 = plt.imread("Diff 2.bmp")
Diff_2 = Diff_2[:,:,:3]
Affiche(12,Diff_2)
np.save("Diff 2",Diff_2)

# Avec Analyse

S = 100
Diff_Rouge = Analyse(Diff_1,Diff_2,S)
Affiche(13,Diff_Rouge)

# Par étapes comme avant

Diff_Diff = Difference(Diff_1,Diff_2)
Affiche(14,Diff_Diff)
plt.savefig("Diff_Diff.png")

Diff_NG = NG(Diff_Diff)
Affiche(15,Diff_NG)
plt.savefig("Diff_NG.png")

S = 100
Diff_NB = NB(Diff_Diff,S)
Affiche(16,Diff_NB)
plt.savefig("Diff_NB.png")

Diff_Rouge = Rouge(Diff_1,Diff_NB)
Affiche(17,Diff_Rouge)
plt.savefig("Diff_Rouge.png")

