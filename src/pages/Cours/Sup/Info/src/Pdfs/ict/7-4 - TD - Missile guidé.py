''' 7 - Matrices de pixels et images'''

'''Dossier partagé images: https://www.dropbox.com/sh/hsej9uxo7v8bxrz/AABZI0I0LMHMbMgnOwxqvk8va?dl=0'''

## 7-4 - Missile guidé

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

def f_Nuances_de_gris(im):
    Dim_Y,Dim_X = im.shape[0:2]
    IM_NG = np.copy(im)
    for x in range(Dim_X):
        for y in range(Dim_Y):
            R,G,B = im[y,x]
            kR = 0.5
            kG = 0.4
            kB = 0.1
            Nuance = kR * R + kG * G + kB * B
            IM_NG[y,x] = [Nuance,Nuance,Nuance]
    return IM_NG

def f_Monochrome(im):
    Dim_Y,Dim_X = im.shape[0:2]
    IM_Mono = np.copy(im)
    for x in range(Dim_X):
        for y in range(Dim_Y):
            Px = im[y,x]
            Nuance = Px[0]
            if Nuance < 127:
                Val = 0 # Noir
            else:
                Val = 255 # Blanc
            Px_New = [Val,Val,Val]
            IM_Mono[y,x] = Px_New
    return IM_Mono

def f_NB(im,kR,kG,kB,S): # Non demandé - Non utilisé
    Nl,Nc = im.shape[0:2]
    IM_NG = np.copy(im)
    for c in range(Nc):
        for l in range(Nl):
            R,G,B = im[l,c]
            Nuance = kR * R + kG * G + kB * B
            if Nuance < S:
                NB = 0
            else:
                NB = 255
            # NB = Nuance # Pour la voir en nuances de gris
            IM_NG[l,c] = [NB,NB,NB]
    return IM_NG

def f_Mat(im):
    Dim_Y,Dim_X = im.shape[0:2]
    Mat = np.zeros([Dim_Y,Dim_X])
    for x in range(Dim_X):
        for y in range(Dim_Y):
            Px = im[y,x]
            R = Px[0]
            Mat[y,x] = R
    return Mat

def f_CDG(Mat):
    Dim_Y,Dim_X = Mat.shape[0:2]
    Somme_X = 0
    Somme_Y = 0
    Nb_Pix = 0
    for x in range(Dim_X):
        for y in range(Dim_Y):
            Poids = Mat[y,x] / 255
            Somme_X += Poids * x
            Somme_Y += Poids * y
            Nb_Pix += Poids
    X = Somme_X / Nb_Pix
    Y = Somme_Y / Nb_Pix
    return X,Y

def f_Ajoute_CDG(im,X,Y,N): # Attention si au bord !
    X = int(round(X,0))
    Y = int(round(Y,0))
    Dim_Y,Dim_Y = Image.shape[0:2]
    Ligne_Min = max(Y - N,0)
    Ligne_Max = min(Y + N + 1,Dim_Y)
    Colonne_Min = max(X - N,0)
    Colonne_Max = min(X + N + 1,Dim_Y)
    IM_CDG = np.copy(im)
    for y in range(Ligne_Min,Ligne_Max):
        for x in range(Colonne_Min,Colonne_Max):
            IM_CDG[y,x] = [255,0,0]
    return IM_CDG

def f_ecarts(im,X,Y):
    Dim_Y,Dim_X = Image.shape[0:2]
    Ligne_Med = Dim_Y / 2
    Colone_Med = Dim_X / 2
    Dx = X - Colone_Med
    Dy = -(Y - Ligne_Med)
    return Dx,Dy

# Réinitialisation des images

plt.close('all')

# Import des images

Image = plt.imread("Image.bmp")
Image = Image[:,:,:3]

np.save('Image',Image)

# Affichage de l'image

f_Affiche(Image)

# Nuances de gris

Image_Nuance_Gris = f_Nuances_de_gris(Image)
f_Affiche(Image_Nuance_Gris)

# Monochrome

Image_Monochrome = f_Monochrome(Image_Nuance_Gris)
f_Affiche(Image_Monochrome)

# Centre de gravité

Matrice = f_Mat(Image_Nuance_Gris)
X,Y = f_CDG(Matrice)
print('CDG: ',X,Y)
Image_CDG = f_Ajoute_CDG(Image,X,Y,10)
f_Affiche(Image_CDG)

# Calcul écart pour asservissement

Dx,Dy = f_ecarts(Image,X,Y)
print('Ecarts: ',Dx,Dy)

## Mode rapide

def f_Resolution_Rapide(im):
    Dim_X,Dim_Y,RAS = np.shape(im)
    Somme_X = 0
    Somme_Y = 0
    Nb_Pix = 0
    for x in range(Dim_X):
        for y in range(Dim_Y):
            R,G,B = im[y,x]
            kR = 0.5
            kG = 0.4
            kB = 0.1
            Nuance = kR * R + kG * G + kB * B
            if Nuance < 127:
                Val = 0
            else:
                Val = 255
            Poids = Val / 255
            Somme_X += Poids * x
            Somme_Y += Poids * y
            Nb_Pix += Poids
    X = Somme_X / Nb_Pix
    Y = Somme_Y / Nb_Pix
    Ligne_Med = Dim_Y / 2
    Colone_Med = Dim_X / 2
    Dx = X - Colone_Med
    Dy = -(Y - Ligne_Med)
    return X,Y,Dx,Dy

# Complexité en O(Dim_X*Dim_Y) - Il faut réduire la taille des images ! Par exemple, moyenner les pixels par zonnes carrées