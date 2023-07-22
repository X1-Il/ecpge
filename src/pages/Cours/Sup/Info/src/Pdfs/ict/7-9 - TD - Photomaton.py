''' 7 - Matrices de pixels et images'''

'''Dossier partagé images: https://www.dropbox.com/sh/nfjlhuk4s146bov/AADla6VSfFFP7_ZZH8LNXWF-a?dl=0'''

## 7-9 - Photomaton

# Import des librairies

import matplotlib.pyplot as plt
plt.close('all')
import numpy as np

# Définition des fonctions

def f_Affiche(image):
    plt.figure()
    plt.imshow(image)
    plt.axis('off')
    plt.show()

def f_Photomaton(Im,L,C):
    Nl,Nc,Ras = np.shape(Im)
    New_l = Nl*L
    New_c = Nc*C
    Res = 255*np.ones([New_l,New_c,3],dtype='uint8')
    for l in range(Nl):
        for c in range(Nc):
            Pix = Im[l,c]
            for iL in range(L):
                for iC in range(C):
                    Ligne = l+Nl*iL
                    Colonne = c+Nc*iC
                    Res[Ligne,Colonne] = Pix
    return Res

# Image source

Image = plt.imread("Image.bmp")
Image = Image[:,:,:3]
np.save('Image',Image)
f_Affiche(Image)

# Réalisation du montage

L = 4
C = 3
Image_Photomaton = f_Photomaton(Image,L,C)
f_Affiche(Image_Photomaton)

# Sauvegarde résultat

plt.imsave("Image_Photomaton.bmp",Image_Photomaton)
np.save('Image_Photomaton',Image_Photomaton)

## Version avec Slices non attendue mais plus rapide

def f_Photomaton_Slices(Im,L,C):
    Nl,Nc,Ras = np.shape(Im)
    New_l = Nl*L
    New_c = Nc*C
    Res = 255*np.ones([New_l,New_c,3],dtype='uint8')
    for iL in range(L):
        for iC in range(C):
            L_deb = Nl*iL
            L_fin = Nl*(iL+1)
            C_deb = Nc*iC
            C_fin = Nc*(iC+1)
            Res[L_deb:L_fin,C_deb:C_fin] = Im
    return Res

Image_Photomaton_Slices = f_Photomaton_Slices(Image,L,C)
f_Affiche(Image_Photomaton_Slices)