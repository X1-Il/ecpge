''' 7 - Matrices de pixels et images'''

## 7-7 - Fractales de Mandelbrot

# Import des librairies

import numpy as np
import matplotlib.pyplot as plt
plt.close('all')

# Fonction d'affichage d'une image

def f_affiche(image):
    plt.figure()
    plt.imshow(image)
    plt.axis('off')
    plt.show()
    plt.pause(0.00001)

# Données

X_Min = -2.35
X_Max = 0.85
Y_Min = -1.2
Y_Max = 1.2
Nb_Colonnes = 500 # Valeur à modifier

# Création d'une image vierge

Nb_Lignes = int(((Y_Max - Y_Min) / (X_Max - X_Min)) * Nb_Colonnes)
Image_Liste = []
Image = np.zeros((Nb_Lignes,Nb_Colonnes,3),dtype=np.uint8)

# Programme du TP à compléter



# Affichage et sauvegarde du résultat

f_affiche(Image)
plt.imsave("Resultat.png",Image)

''' Si bug de la sauvegarde:'''
# plt.imsave("Resultat",Image) # Sans extension
# plt.imsave("Resultat.bmp",Image) # Possible format bmp selon les ordinateurs

## Arc en ciel pour la suite

def Arc_En_Ciel(N,N_max):
    x = int(Echelle(N,0,N_max,0,1530))
    # Couleur rouge R
    if x <= 255:
        R = 255
    elif 255 <= x <= 510:
        R = 510 - x
    elif 510 <= x <= 1020:
        R = 0
    elif 1020 <= x <= 1275:
        R = x - 1020
    elif 1275 <= x :
        R = 255
    # Couleur verte G
    if x <= 255:
        G = max(0,x)
    elif 255 <= x <= 765:
        G = 255
    elif 765 <= x <= 1020:
        G = 1020 - x
    elif 1020 <= x :
        G = 0
    # Couleur bleue B
    if x <= 510:
        B = 0
    elif 510 <= x <= 765:
        B = x - 510
    elif 765 <= x <= 1275:
        B = 255
    elif 1275 <= x :
        B = max(0,1530 - x)
    return [R,G,B]