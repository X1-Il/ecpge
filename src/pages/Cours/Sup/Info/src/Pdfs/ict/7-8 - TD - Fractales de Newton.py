''' 7 - Matrices de pixels et images'''

## 7-8 - Fractales de Newton

## Code de gestion d'images

# Import des librairies

import numpy as np
import matplotlib.pyplot as plt
plt.close('all')
from math import sqrt

# Fonction d'affichage d'une image

def f_affiche(image):
    plt.figure()
    plt.imshow(image)
    plt.axis('off')
    plt.show()
    plt.pause(0.00001)

# Données

X_Min = -1.5
X_Max = 1.5
Y_Min = -1.5
Y_Max = 1.5
Nb_Colonnes = 500 # Valeur à modifier

# Création d'une image vierge

Nb_Lignes = int(((Y_Max - Y_Min) / (X_Max - X_Min)) * Nb_Colonnes)
Image_Liste = []
Image = np.zeros((Nb_Lignes,Nb_Colonnes,3),dtype=np.uint8)

## Pixels / Coordonnées

def Echelle(u,u_min,u_max,v_min,v_max):
    a = (v_max - v_min) / (u_max - u_min)
    b = v_max - a * u_max
    v = a * u + b
    return v

def Coordonnees_Pixel(l_pix,c_pix):
    X = Echelle(c_pix,0,Nb_Colonnes-1,X_Min,X_Max)
    Y = Echelle(l_pix,0,Nb_Lignes-1,Y_Max,Y_Min)
    return X,Y

## Newton et fonctions

def Newton(f,fp,x0,Crit):
    i = 0
    Delta = Crit
    x = x0
    while Delta >= Crit :
        i += 1
        x_prec = x
        if fp(x)!= 0:
            x = x - f(x)/fp(x)
            Delta = abs(x - x_prec)
        else: # non convergence
            ''' Les élèves passent par là s'ils oublient le -1 dans la fonction Coordonnees_Pixel - C'est quand même un cas particulier à traiter'''
            return x,999999999
    return x,i

def f(x):
    return x**3-1

def fp(x):
    return 3*x**2

def Convergence_Newton(x,y):
    Crit = 1e-6
    x0 = complex(x,y)
    Sol,N_Iter = Newton(f,fp,x0,Crit)
    return Sol,N_Iter

## TP - Fractales de Newton

def Couleur_Pixel(l_pix,c_pix):
    Sol_1 = 1
    Sol_2 = complex(-1/2,sqrt(3)/2)
    Sol_3 = complex(-1/2,-sqrt(3)/2)
    Seuil = 1e-6
    x,y = Coordonnees_Pixel(l_pix,c_pix)
    c = complex(x,y)
    Res,N_Iter = Convergence_Newton(x,y)
    if abs(Res - Sol_1) < Seuil:
        Image[l_pix,c_pix] = [255,0,0]
    elif abs(Res - Sol_2) < Seuil:
        Image[l_pix,c_pix] = [0,255,0]
    elif abs(Res - Sol_3) < Seuil:
        Image[l_pix,c_pix] = [0,0,255]
    else: # Non convergence
         Image[l_pix,c_pix] = [255,255,255]

def Fractale_Newton():
    for Ligne in range(Nb_Lignes):
        for Colonne in range(Nb_Colonnes):
            Couleur_Pixel(Ligne,Colonne)

Fractale_Newton()

# Affichage du résultat

f_affiche(Image)

# Sauvegarde de l'image

Nom_Image = "Image_" + str(Nb_Colonnes) + "x" + str(Nb_Lignes)
np.save(Nom_Image,Image) # Sauvegarde sous forme d'array npy
plt.imsave(Nom_Image + ".bmp",Image) # Sauvegarde sous format bmp

## Arc en ciel

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

## TP - Fractales de Newton - Feu

def Couleur_Pixel_Feu(l_pix,c_pix):
    Sol_1 = 1
    Sol_2 = complex(-1/2,sqrt(3)/2)
    Sol_3 = complex(-1/2,-sqrt(3)/2)
    Seuil = 1e-6
    x,y = Coordonnees_Pixel(l_pix,c_pix)
    c = complex(x,y)
    Res,N_Iter = Convergence_Newton(x,y)
    Col = Arc_En_Ciel(N_Iter,100)
    Image[l_pix,c_pix] = Col

def Fractale_Newton_Feu():
    for Ligne in range(Nb_Lignes):
        for Colonne in range(Nb_Colonnes):
            Couleur_Pixel_Feu(Ligne,Colonne)

Fractale_Newton_Feu()

# Affichage du résultat

f_affiche(Image)

# Sauvegarde de l'image

Nom_Image = "Image_" + str(Nb_Colonnes) + "x" + str(Nb_Lignes) + "_Feu"
np.save(Nom_Image,Image) # Sauvegarde sous forme d'array npy
plt.imsave(Nom_Image + ".bmp",Image) # Sauvegarde sous format bmp
