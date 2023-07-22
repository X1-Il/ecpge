''' 7 - Matrices de pixels et images'''

'''Dossier partagé images: '''

## 7-10 - Avant Après

# Affichage des images

import matplotlib.pyplot as plt
plt.close('all')

def f_Affiche(fig,image):
    plt.figure(fig)
    plt.clf()
    plt.imshow(image)
    plt.axis('off')
    plt.show()
    plt.pause(0.00001)

# Images sources

Image_Av = plt.imread("Avant.bmp")
Image_Av = Image_Av[:,:,:3]
f_Affiche(1,Image_Av)
Image_Ap = plt.imread("Après.bmp")
Image_Ap = Image_Ap[:,:,:3]
f_Affiche(2,Image_Ap)

## Réalisation du montage

import numpy as np

def f_Traitement(Im_Av,Im_Ap,Pct): # Pct en %
    Nl,Nc,_ = np.shape(Im_Av)
    c_med = int(Nc*Pct/100)
    Res = 255*np.ones([Nl,Nc,3],dtype='uint8')
    for l in range(Nl):
        for c in range(Nc):
            if c < c_med:
                Res[l,c] = Im_Ap[l,c]
            else:
                Res[l,c] = Im_Av[l,c]
    return Res

# Images sources

Image_Av = plt.imread("Avant.bmp")
Image_Av = Image_Av[:,:,:3]
np.save('Avant',Image_Av)
f_Affiche(1,Image_Av)
Image_Ap = plt.imread("Après.bmp")
Image_Ap = Image_Ap[:,:,:3]
np.save('Après',Image_Ap)
f_Affiche(2,Image_Ap)

# Une image

Pct = 50
Image_Traitee = f_Traitement(Image_Av,Image_Ap,Pct)
f_Affiche(3,Image_Traitee)

## Version avec Slices non attendue mais plus rapide

def f_Traitement_Slices(Im_Av,Im_Ap,Pct): # Pct en %
    Nl,Nc,_ = np.shape(Im_Av)
    c_med = int(Nc*Pct/100)
    Res = 255*np.ones([Nl,Nc,3],dtype='uint8')
    Res[:,:c_med] = Im_Ap[:,:c_med]
    Res[:,c_med:] = Im_Av[:,c_med:]
    return Res

Pct = 50
Image_Traitee_Slices = f_Traitement_Slices(Image_Av,Image_Ap,Pct)
f_Affiche(4,Image_Traitee_Slices)

## Utilisation d’un curseur interactif

plt.close('all')

from tkinter import *
master = Tk()
valeur = StringVar()
def miseAJourCurseur(event):
    resultat = curseur.get()
    valeur.set(resultat)
    Image_Traitee = f_Traitement_Slices(Image_Av,Image_Ap,resultat) ###
    f_Affiche(5,Image_Traitee) ###

master.wm_title("Fenetre")
master.geometry("300x100")
curseur = Scale(master,from_=0,to=100,orient=HORIZONTAL, command=miseAJourCurseur)
curseur.pack()
texte = Label(master, textvariable=valeur)
texte.pack()
mainloop()

## Pour aller plus loin

def f_Affiche_Save(fig,image,Pct):
    plt.figure(fig)
    plt.clf()
    plt.imshow(image)
    plt.axis('off')
    plt.savefig(str(Pct)+".png")

for Pct in range(101):
    print(Pct)
    Image_Traitee = f_Traitement_Slices(Image_Av,Image_Ap,Pct)
    f_Affiche_Save(6,Image_Traitee,Pct)
