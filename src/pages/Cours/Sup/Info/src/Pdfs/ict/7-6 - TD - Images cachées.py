''' 7 - Matrices de pixels et images'''

'''Dossier partagé images: https://www.dropbox.com/sh/spv4wtp848m4ici/AABhcy72lWWZuUiSV7d1h-kba?dl=0'''

## 7-6 - Images cachées

# Import des librairies

import matplotlib.pyplot as plt
plt.close('all')
import numpy as np

# Définition des fonctions

def f_Affiche(image): # Affichage d'une image
    plt.figure()
    plt.imshow(image)
    plt.axis('off')
    plt.show()
    plt.pause(0.00001)

Image_Test = np.load("Image_Test.npy")
f_Affiche(Image_Test)

## Activité 1 – Travail sur les bits des nombres binaires

def f_Forts(Nb):
    '''Définition du nombre permettant de récupérer les Nb bits de poids forts d'un entier'''
    Forts = 0
    for i in range(Nb):
        Forts = Forts + 2**(8-1-i)
    return Forts

print(f_Forts(0))
print(f_Forts(1))
print(f_Forts(4))
print(f_Forts(7))
print(f_Forts(8))

def f_Faibles(Nb):
    '''Définition du nombre permettant de récupérer les Nb bits de poids faible d'un entier'''
    Faibles = 0
    for i in range(Nb):
        Faibles = Faibles + 2**i
    return Faibles

print(f_Faibles(0))
print(f_Faibles(1))
print(f_Faibles(4))
print(f_Faibles(7))
print(f_Faibles(8))

## Activité 2 – Récupération des n bits de poids forts ou faibles des entiers R, G et B d’un pixel d’une image

def f_RGB_Faibles(Px,n):
    '''Récupération des n bits de poids faible des RGB d'un pixel'''
    Faibles = f_Faibles(n)
    R,G,B = Px
    R_Faibles = R&Faibles
    G_Faibles = G&Faibles
    B_Faibles = B&Faibles
    RGB_Faibles = [R_Faibles,G_Faibles,B_Faibles]
    return RGB_Faibles

print(f_RGB_Faibles([100,121,157],0))
print(f_RGB_Faibles([100,121,157],1))
print(f_RGB_Faibles([100,121,157],4))
print(f_RGB_Faibles([100,121,157],7))
print(f_RGB_Faibles([100,121,157],8))

def f_RGB_Forts(Px,n):
    '''Récupération des n bits de poids fort des RGB  d'un pixel'''
    Forts = f_Forts(n)
    R,G,B = Px
    R_Forts = R&Forts
    G_Forts = G&Forts
    B_Forts = B&Forts
    RGB_Forts = [R_Forts,G_Forts,B_Forts]
    return RGB_Forts

print(f_RGB_Forts([100,121,157],0))
print(f_RGB_Forts([100,121,157],1))
print(f_RGB_Forts([100,121,157],4))
print(f_RGB_Forts([100,121,157],7))
print(f_RGB_Forts([100,121,157],8))

## Activité 3 – Affichage des seuls bits de poids faibles ou forts d’une image

def f_ImBitsFortsForts_n(im,n):
    ''' Création d'une image sur n bits forts par utilisation des n bits forts d'une image im en bits faibles'''
    Im_Forts = np.copy(im)
    Nl,Nc = im.shape[0:2]
    for c in range(Nc):
        for l in range(Nl):
            Px = im[l,c]
            RGB_Forts = f_RGB_Forts(Px,n)
            Im_Forts[l,c] = RGB_Forts
    return Im_Forts

Im_4_Forts = f_ImBitsFortsForts_n(Image_Test,4)
f_Affiche(Im_4_Forts)
plt.imsave("Res_4_Forts.bmp",Im_4_Forts)

Im_2_Forts = f_ImBitsFortsForts_n(Image_Test,2)
f_Affiche(Im_2_Forts)
plt.imsave("Res_2_Forts.bmp",Im_2_Forts)

def f_ImBitsFaiblesFaibles_n(im,n):
    '''Création d'une image sur n bits faibles par utilisation des n bits faibles d'une image im en bits faibles'''
    Im_Faibles = np.copy(im)
    Nl,Nc = im.shape[0:2]
    for c in range(Nc):
        for l in range(Nl):
            Px = im[l,c]
            RGB_Faibles = f_RGB_Faibles(Px,n)
            Im_Faibles[l,c] = RGB_Faibles
    return Im_Faibles

Im_4_Faibles = f_ImBitsFaiblesFaibles_n(Image_Test,4)
f_Affiche(Im_4_Faibles)
plt.imsave("Res_4_Faibles.bmp",Im_4_Faibles)

## Activité 4 – Création d’images par utilisation des 4 bits de poids faibles ou forts d’une autre image

def f_PxFaiblesForts(Px):
    Px_New = np.array([0,0,0],dtype="uint8")
    Px_New[0] = Px[0]<<4
    Px_New[1] = Px[1]<<4
    Px_New[2] = Px[2]<<4
    return Px_New

print(f_PxFaiblesForts([255,0,127]))

def f_PxFortsFaibles(Px):
    Px_New = np.array([0,0,0],dtype="uint8")
    Px_New[0] = Px[0]>>4
    Px_New[1] = Px[1]>>4
    Px_New[2] = Px[2]>>4
    return Px_New

print(f_PxFortsFaibles([255,0,127]))

def f_ImBitsFaiblesForts(im):
    '''Création d'une image sur 4 bits forts par utilisation des 4 bits faibles d'une image im'''
    Im_Faibles = np.copy(im)
    Nl,Nc = im.shape[0:2]
    for c in range(Nc):
        for l in range(Nl):
            Px = im[l,c]
            RGB_Faibles = f_RGB_Faibles(Px,4)
            New_Px = f_PxFaiblesForts(RGB_Faibles)
            Im_Faibles[l,c] = New_Px
    return Im_Faibles

def f_ImBitsFaiblesFaibles(im):
    '''Création d'une image sur 4 bits faibles par utilisation des 4 bits faibles d'une image im en bits faibles'''
    Im_Faibles = np.copy(im)
    Nl,Nc = im.shape[0:2]
    for c in range(Nc):
        for l in range(Nl):
            Px = im[l,c]
            RGB_Faibles = f_RGB_Faibles(Px,4)
            Im_Faibles[l,c] = RGB_Faibles
    return Im_Faibles

## Activité 5 – Décodage des images fournies

Im_A_Decoder_1 = plt.imread("Image_A_Decoder_1.bmp")
Im_A_Decoder_1 = Im_A_Decoder_1[:,:,:3]
Im_A_Decoder_2 = plt.imread("Image_A_Decoder_2.bmp")
Im_A_Decoder_2 = Im_A_Decoder_2[:,:,:3]

# Affichage de l'image à décoder

f_Affiche(Im_A_Decoder_1)
f_Affiche(Im_A_Decoder_2)

# Décodage - Création d'une image par bits faibles d'une autre image replacés en bits forts

Im_Decodee_Forts = f_ImBitsFaiblesForts(Im_A_Decoder_1)
plt.imsave("Res_Image_Décodée_Forts.bmp",Im_Decodee_Forts)
f_Affiche(Im_Decodee_Forts) # Affichage de l'image décodée avec uniquement ses Bits forts

Im_Decodee_Faibles = f_ImBitsFaiblesFaibles(Im_A_Decoder_2)
plt.imsave("Res_Image_Décodée_Faibles.bmp",Im_Decodee_Faibles)
f_Affiche(Im_Decodee_Faibles) # Affichage de l'image décodée avec uniquement ses bits faibles

Im_Decodee = Im_Decodee_Forts + Im_Decodee_Faibles
plt.imsave("Res_Image_Décodée.bmp",Im_Decodee)
f_Affiche(Im_Decodee) # Affichage de l'image décodée

## Activité 6 – Insertion par vous-même d’une image secrète dans une autre image

def f_ImBitsFortsFaibles(im):
    '''Création d'une image sur 4 bits faibles par utilisation des 4 bits forts d'une image im en bits faibles'''
    Im_Forts = np.copy(im)
    Nl,Nc = im.shape[0:2]
    for c in range(Nc):
        for l in range(Nl):
            Px = im[l,c]
            RGB_Forts = f_RGB_Forts(Px,4)
            New_Px = f_PxFortsFaibles(RGB_Forts)
            Im_Forts[l,c] = New_Px
    return Im_Forts

def f_ImBitsFortsForts(im):
    '''Création d'une image sur 4 bits forts par utilisation des 4 bits forts d'une image im en bits faibles'''
    Im_Forts = np.copy(im)
    Nl,Nc = im.shape[0:2]
    for c in range(Nc):
        for l in range(Nl):
            Px = im[l,c]
            RGB_Forts = f_RGB_Forts(Px,4)
            Im_Forts[l,c] = RGB_Forts
    return Im_Forts

# Toutes les images doivent avoir strictement la même taille
Eleve_Masque_1 = plt.imread("Eleve_Masque_1.bmp")
Eleve_Masque_1 = Eleve_Masque_1[:,:,:3] # RGBA->RGB
np.save("Eleve_Masque_1",Eleve_Masque_1)
Eleve_Masque_2 = plt.imread("Eleve_Masque_2.bmp")
Eleve_Masque_2 = Eleve_Masque_2[:,:,:3] # RGBA->RGB
np.save("Eleve_Masque_2",Eleve_Masque_2)
Eleve_A_Cacher = plt.imread("Eleve_A_Cacher.bmp")
Eleve_A_Cacher = Eleve_A_Cacher[:,:,:3] # RGBA->RGB
np.save("Eleve_A_Cacher",Eleve_A_Cacher)

Im_Codee_Forts = f_ImBitsFortsForts(Eleve_Masque_1)
Im_Codee_Faibles = f_ImBitsFortsFaibles(Eleve_A_Cacher)
Im_Codee_1 = Im_Codee_Forts + Im_Codee_Faibles
plt.imsave("Eleve_A_Decoder_1.bmp",Im_Codee_1)
np.save("Eleve_A_Decoder_1",Im_Codee_1)
f_Affiche(Im_Codee_1)

Im_Codee_Forts = f_ImBitsFortsForts(Eleve_Masque_2)
Im_Codee_Faibles = f_ImBitsFaiblesFaibles(Eleve_A_Cacher)
Im_Codee_2 = Im_Codee_Forts + Im_Codee_Faibles
plt.imsave("Eleve_A_Decoder_2.bmp",Im_Codee_2)
np.save("Eleve_A_Decoder_2",Im_Codee_2)
f_Affiche(Im_Codee_2)