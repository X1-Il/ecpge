''' 7 - Matrices de pixels et images'''

'''Dossier partagé images: https://www.dropbox.com/sh/ny3h351pb6ridet/AABhkEKqAVXdYjqN1QmPpDWQa?dl=0'''

## 7-2 - Détection de contours

# Import des librairies

import matplotlib.pyplot as plt
import numpy as np

# Définition des fonctions

def f_Affiche(image):
    plt.figure()
    plt.imshow(image)
    plt.axis('off')
    plt.show()
    plt.pause(0.00001)

def f_Nuances_de_gris(im,kR,kG,kB):
    Nl,Nc = im.shape[0:2]
    IM_NG = np.copy(im)
    for c in range(Nc):
        for l in range(Nl):
            R,G,B = im[l,c]
            Nuance = kR * R + kG * G + kB * B
            IM_NG[l,c] = [Nuance,Nuance,Nuance]
    return IM_NG

def f_Ecart(M):
    Nl,Nc = M.shape[0:2]
    Centre = Nl//2
    Px = M[Centre,Centre] # Px peut rester entier, la différnece avec un float donne un float
    S = 0
    for c in range(Nc):
        for l in range(Nl):
            Val = float(M[l,c]) # Sinon, overflow uint8
            Ec = abs(Val-Px) # L'overflow se rencontre ici
            S += Ec
    Taille = Nc*Nl - 1
    Ecart = S / Taille
    return Ecart

''' Test écart
M = np.array([[100,100,100],[100,200,100],[100,100,100]],dtype="uint8")
print(f_Ecart(M))
'''

def f_Contour(im,Crit):
    Nl,Nc = im.shape[0:2]
    IM_Ctr = np.copy(im)
    for c in range(1,Nc-1):
        for l in range(1,Nl-1):
            Im_Loc = im[l-1:l+2,c-1:c+2,:]
            Mat_Loc = Im_Loc[:,:,0]
            Ecart = f_Ecart(Mat_Loc)
            if Ecart > Crit:
                Val = 0 # Noir
            else:
                Val = 255 # Blanc
            IM_Ctr[l,c] = [Val,Val,Val]
    return IM_Ctr

# Réinitialisation des images

plt.close('all')

# Import des images et sauvegarde pour élèves

Image = plt.imread("Image.bmp")
Image = Image[:,:,:3]

np.save("Image",Image)

# Affichage de l'image

f_Affiche(Image)

# Nuances de gris

kR,kG,kB = 0.33,0.33,0.34
Image_NG = f_Nuances_de_gris(Image,kR,kG,kB)
f_Affiche(Image_NG)

# Contour

Crit = 7 # Plus il est grand, moins il y a de contours
Image_Ctr = f_Contour(Image_NG,Crit)
f_Affiche(Image_Ctr)

# Sauvegarde

plt.imsave("0 NG.bmp",Image_NG)
plt.imsave("0 NG_CTR.bmp",Image_Ctr)

# Convolution

def f_Normalisation(K):
    S = np.sum(K)
    if S != 0:
        K_Norm = K/S
    else:
        K_Norm = K
    return K_Norm

def f_Conv_Loc(M,K):
    R,G,B = 0,0,0
    n = K.shape[0]
    for l in range(n):
        for c in range(n):
            tk = K[l,c]
            RM,GM,BM = M[l,c]
            R += tk*RM
            G += tk*GM
            B += tk*BM
    R,G,B = int(R),int(G),int(B)
    R,G,B = max(min(R,255),0),max(min(G,255),0),max(min(B,255),0)
    return [R,G,B]

def f_Conv_Loc(M,K): # Version tirant profit des arrays
    M_R = M[:,:,0]
    M_G = M[:,:,1]
    M_B = M[:,:,2]
    Prod_R = K*M_R
    Prod_G = K*M_G
    Prod_B = K*M_B
    Somme_R = np.sum(Prod_R)
    Somme_G = np.sum(Prod_G)
    Somme_B = np.sum(Prod_B)
    R = int(Somme_R)
    G = int(Somme_G)
    B = int(Somme_B)
    R = max(min(R,255),0)
    G = max(min(G,255),0)
    B = max(min(B,255),0)
    return [R,G,B]

def f_Conv_Loc(M,K): # Version tirant profit des arrays optimisée
    def f_RGB(i):
        M_RGB = M[:,:,i]
        Prod = K*M_RGB
        Somme = np.sum(Prod)
        RGB = int(Somme)
        RGB = max(min(RGB,255),0)
        return RGB
    R = f_RGB(0)
    G = f_RGB(1)
    B = f_RGB(2)
    return [R,G,B]

def f_Convolution(im,K):
    Nl,Nc = im.shape[0:2]
    Dim_K = K.shape[0]
    k = Dim_K//2
    K_Norm = f_Normalisation(K)
    Im_Conv = np.copy(im)
    for c in range(k,Nc-k):
        for l in range(k,Nl-k):
            Im_Loc = im[l-k:l+k+1,c-k:c+k+1]
            Im_Conv_Loc = f_Conv_Loc(Im_Loc,K_Norm)
            Im_Conv[l,c] = Im_Conv_Loc #1
    return Im_Conv

#1: Risque d'Overflow: J'ai fait attention à ne pas renvoyer de nombre hors de [0,255] dans Conv_Loc'''

def f_Convolution(im,K): # Le tout en une fonction simple
    Nl,Nc = im.shape[0:2]
    Dim_K = K.shape[0]
    k = Dim_K//2
    S = np.sum(K)
    if S != 0:
        K = K/S
    Im_Conv = np.copy(im)
    for c in range(k,Nc-k):
        for l in range(k,Nl-k):
            Im_Loc = im[l-k:l+k+1,c-k:c+k+1]
            R,G,B = 0,0,0
            n = K.shape[0]
            for ll in range(n):
                for cc in range(n):
                    tk = K[ll,cc]
                    RM,GM,BM = Im_Loc[ll,cc]
                    R += tk*RM
                    G += tk*GM
                    B += tk*BM
            R,G,B = int(R),int(G),int(B)
            R,G,B = max(min(R,255),0),max(min(G,255),0),max(min(B,255),0)
            Im_Conv[l,c] = R,G,B
    return Im_Conv

def f_Convolution(im,K): # Le tout en une fonction tirant profit des array et optimisée
    Nl,Nc = im.shape[0:2]
    Dim_K = K.shape[0]
    k = Dim_K//2
    S = np.sum(K)
    if S != 0:
        K = K/S
    Im_Conv = np.copy(im)
    for c in range(k,Nc-k):
        for l in range(k,Nl-k):
            Im_Loc = im[l-k:l+k+1,c-k:c+k+1]
            R,G,B = 0,0,0
            def f_RGB(i):
                M_RGB = Im_Loc[:,:,i]
                Prod = K*M_RGB
                Somme = np.sum(Prod)
                RGB = int(Somme)
                RGB = max(min(RGB,255),0)
                return RGB
            R = f_RGB(0)
            G = f_RGB(1)
            B = f_RGB(2)
            Im_Conv[l,c] = R,G,B
    return Im_Conv

K = (1/9)*np.array([[1,1,1],[1,1,1],[1,1,1]]) # Moyenneur

# Application 1: Floutage de l'image NG + CTR

Image_NG_Flou = f_Convolution(Image_NG,K)
f_Affiche(Image_NG_Flou)
Image_NG_Flou_CTR = f_Contour(Image_NG_Flou,Crit)
f_Affiche(Image_NG_Flou_CTR)

plt.imsave("1 NG_Flou.bmp",Image_NG_Flou)
plt.imsave("1 NG_Flou_CTR.bmp",Image_NG_Flou_CTR)

# Application 2: Floutage de l'image en couleur + Mise en NG + CTR

Image_Flou = f_Convolution(Image,K)
f_Affiche(Image_Flou)
Image_NG_Flou = f_Nuances_de_gris(Image_Flou,kR,kG,kB)
f_Affiche(Image_NG_Flou)
Image_NG_Flou_CTR = f_Contour(Image_NG_Flou,Crit)
f_Affiche(Image_NG_Flou_CTR)

plt.imsave("2 Flou.bmp",Image_Flou)
plt.imsave("2 Flou_NG.bmp",Image_NG_Flou)
plt.imsave("2 Flou_NG_CTR.bmp",Image_NG_Flou_CTR)

## Application de la convolution

## Moyenneur

Nom = "Conv1 Moyenneur.bmp"
K = (1/9)*np.array([[1,1,1],[1,1,1],[1,1,1]])
Image_Conv = f_Convolution(Image,K)
f_Affiche(Image_Conv)
plt.imsave(Nom,Image_Conv)

## Repoussage

Nom = "Conv2 Repoussage.bmp"
K = np.array([[-2,-1,0],[-1,1,1],[0,1,2]])
Image_Conv = f_Convolution(Image,K)
f_Affiche(Image_Conv)
plt.imsave(Nom,Image_Conv)

## Laplacien

Nom = "Conv3 Laplacien.bmp"
K = np.array([[0,1,0],[1,-4,1],[0,1,0]])
Image_Conv = f_Convolution(Image,K)
f_Affiche(Image_Conv)
plt.imsave(Nom,Image_Conv)

## Laplacien amplifié

def f_Amplification(im,k):
    '''On supprime la normalisation, f_Conv_Loc limitera les valeurs à 255 '''
    Nl,Nc = im.shape[0:2]
    Dim_K = K.shape[0]
    k = Dim_K//2
    #K_Norm = f_Normalisation(K)
    Im_Conv = np.copy(im)
    for c in range(k,Nc-k):
        for l in range(k,Nl-k):
            Im_Loc = im[l-k:l+k+1,c-k:c+k+1]
            Im_Conv_Loc = f_Conv_Loc(Im_Loc,K)
            Im_Conv[l,c] = Im_Conv_Loc #1
    return Im_Conv

Nom = "Conv3 Laplacien Amp.bmp"
k = 5
K = k*np.zeros([3,3])
K[1,1] = k # Multiplie  par k la valeur au centre
# np.shape ne s'adapte pas à K=k ou K=[k] et je n'ai pas envie de complexifier le sujet - Je passe donc par une matrice
Image_Conv = f_Amplification(Image_Conv,K)

f_Affiche(Image_Conv)
plt.imsave(Nom,Image_Conv)

## Réhausseur

Nom = "Conv4 Réhausseur.bmp"
K = np.array([[0,-1,0],[-1,5,-1],[0,-1,0]])
Image_Conv = f_Convolution(Image,K)
f_Affiche(Image_Conv)
plt.imsave(Nom,Image_Conv)

## Gaussien 3x3

Nom = "Conv5 Gaussien 3x3.bmp"
L = [[1],[2],[1]] # Gaussien 3x3
A = np.array(L)
K = np.dot(A,A.T)
Image_Conv = f_Convolution(Image,K)
f_Affiche(Image_Conv)
plt.imsave(Nom,Image_Conv)

## Gaussien 5x5

Nom = "Conv6 Gaussien 5x5.bmp"
L = [[1],[4],[6],[4],[1]] # Gaussien 5x5
A = np.array(L)
K = np.dot(A,A.T)
Image_Conv = f_Convolution(Image,K)
f_Affiche(Image_Conv)
plt.imsave(Nom,Image_Conv)