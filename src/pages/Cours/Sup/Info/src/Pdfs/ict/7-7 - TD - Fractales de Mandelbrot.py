''' 7 - Matrices de pixels et images'''

## 7-7 - Fractales de Mandelbrot

## Code de gestion d'images

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

## TP - Fractales de Mandelbrot - Noir et blanc

Seuil = 3
''' Le seuil modifie l'exécution de la suite - Prendre un seuil à 2 permet à la suite de reconverger, par exemple en partant du point -5 - Il faut donc faire attention à ce que l'on fait - Avec 3, ça passe... - On peut prendre plus'''

def Suite_Mandelbrot(n,c,z0):
    if n == 0:
        return z0
    else:
        z = Suite_Mandelbrot(n-1,c,z0)
        Z = z**2 + c
        if abs(Z) >= Seuil:
            Z = Seuil
        return Z

def Couleur_Pixel(l_pix,c_pix):
    x,y = Coordonnees_Pixel(l_pix,c_pix)
    c = complex(x,y)
    N_max = 50
    z0 = 0
    Res = Suite_Mandelbrot(N_max,c,z0)
    if Res == Seuil:
        Image[l_pix,c_pix] = [255,255,255]
    else:
        Image[l_pix,c_pix] = [0,0,0]

def Fractale_Mandelbrot():
    Ntot = Nb_Lignes*Nb_Colonnes
    for Ligne in range(Nb_Lignes):
        for Colonne in range(Nb_Colonnes):
            Pas = Ligne*Nb_Colonnes + Colonne + 1
            Pct = round(Pas/Ntot*100,2)
            #print(Pct," %") # Prend du temps !
            Couleur_Pixel(Ligne,Colonne)

Fractale_Mandelbrot()

# Affichage du résultat

f_affiche(Image)

# Sauvegarde de l'image

Nom_Image = "Image_" + str(Nb_Colonnes) + "x" + str(Nb_Lignes) + "_N&B"
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

## TP - Fractales de Mandelbrot - Couleurs ext

Seuil = 3

def Suite_Mandelbrot(n,c,z0):
    if n == 0:
        return z0,n
    else:
        z,N = Suite_Mandelbrot(n-1,c,z0)
        Z = z**2 + c
        if abs(Z) < Seuil:
            N = n
        else:
            Z = Seuil
        return Z,N

def Couleur_Pixel(l_pix,c_pix):
    x,y = Coordonnees_Pixel(l_pix,c_pix)
    c = complex(x,y)
    N_max = 50
    z0 = 0
    Res,N = Suite_Mandelbrot(N_max,c,z0)
    if N == N_max:
        Image[l_pix,c_pix] = [255,255,255]
    else:
        Image[l_pix,c_pix] = [0,0,0]

def Couleur_Pixel(l_pix,c_pix):
    x,y = Coordonnees_Pixel(l_pix,c_pix)
    c = complex(x,y)
    N_max = 50
    z0 = 0
    Res,N = Suite_Mandelbrot(N_max,c,z0)
    if N == N_max:
        Image[l_pix,c_pix] = [255,255,255]
    else:
        Image[l_pix,c_pix] = Arc_En_Ciel(N,N_max)

def Fractale_Mandelbrot():
    for Ligne in range(Nb_Lignes):
        for Colonne in range(Nb_Colonnes):
            Couleur_Pixel(Ligne,Colonne)

Fractale_Mandelbrot()

# Affichage du résultat

f_affiche(Image)

# Sauvegarde de l'image

Nom_Image = "Image_" + str(Nb_Colonnes) + "x" + str(Nb_Lignes) + "_Ext"
np.save(Nom_Image,Image) # Sauvegarde sous forme d'array npy
plt.imsave(Nom_Image + ".bmp",Image) # Sauvegarde sous format bmp

## TP - Fractales de Mandelbrot - Couleurs ext + int

Seuil = 3

def Suite_Mandelbrot(n,c,z0):
    if n == 0:
        return z0,n
    else:
        z,N = Suite_Mandelbrot(n-1,c,z0)
        Z = z**2 + c
        if abs(Z) < Seuil:
            N = n
        else:
            Z = Seuil
        return Z,N

def Couleur_Pixel(l_pix,c_pix):
    x,y = Coordonnees_Pixel(l_pix,c_pix)
    c = complex(x,y)
    N_max = 50
    z0 = 0
    Res,N = Suite_Mandelbrot(N_max,c,z0)
    Res = abs(Res)
    if N == N_max:
        Image[l_pix,c_pix] = Arc_En_Ciel(Res,Seuil)
    else:
        Image[l_pix,c_pix] = Arc_En_Ciel(N,N_max)

def Fractale_Mandelbrot():
    for Ligne in range(Nb_Lignes):
        for Colonne in range(Nb_Colonnes):
            Couleur_Pixel(Ligne,Colonne)

Fractale_Mandelbrot()

# Affichage du résultat

f_affiche(Image)

# Sauvegarde de l'image

Nom_Image = "Image_" + str(Nb_Colonnes) + "x" + str(Nb_Lignes) + "_Ext+Int"
np.save(Nom_Image,Image) # Sauvegarde sous forme d'array npy
plt.imsave(Nom_Image + ".bmp",Image) # Sauvegarde sous format bmp