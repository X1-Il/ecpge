''' 7 - Matrices de pixels et images'''

'''https://www.dropbox.com/sh/izfy3pxd549sdhg/AAA_9ct5sX4HMMFKBIsT3LCVa?dl=0'''

## 7-13 - Agent secret

# Question 1 - Code élèves

import matplotlib.pyplot as plt
plt.close('all')
import numpy as np

def Affiche(fig,image):
    plt.figure(fig)
    plt.imshow(image)
    plt.axis('off')
    plt.show()
    plt.pause(0.00001)

Chemin = ""

Image = np.load(Chemin + "Image.npy")
#Image = plt.imread(Chemin + "Image.bmp")
Image = Image[:,:,:3]
Affiche(1,Image)

Image_C1 = np.load(Chemin + "Image_C1.npy")
#Image_C1 = plt.imread(Chemin + "Image_C1.bmp")
Image_C1 = Image_C1[:,:,:3]
Affiche(2,Image_C1)

Image_C2 = np.load(Chemin + "Image_C2.npy")
#Image_C2 = plt.imread(Chemin + "Image_C2.bmp")
Image_C2 = Image_C2[:,:,:3]
Affiche(3,Image_C2)

## Cryptage

# Question 2 - Cryptage

from random import randint as rd
def Cryptage(im):
    Nl,Nc,_ = im.shape
    im1 = im.copy()
    im2 = im.copy()
    for l in range(Nl):
        for c in range(Nc):
            Pix = im[l,c]
            V1 = [rd(0,255),rd(0,255),rd(0,255)]
            V2 = [Pix[k]-V1[k] for k in range(3)]
            im1[l,c] = V1
            im2[l,c] = V2
    return im1,im2

# Question 3 - Essai

Image_1,Image_2 = Cryptage(Image)
Affiche(4,Image_1)
Affiche(5,Image_2)

## Décryptage

# Question 4 - Decryptage

def Decryptage_S(im1,im2):
    return im1+im2

def Decryptage(im1,im2):
    Nl,Nc,_ = im1.shape
    im_res = im1.copy()
    for l in range(Nl):
        for c in range(Nc):
            im_res[l,c] = im1[l,c] + im2[l,c]
    return im_res

# Question 5 - Affichage

Somme = Decryptage_S(Image_1,Image_2)
Affiche(6,Somme)
Image_3 = Decryptage(Image_1,Image_2)
Affiche(7,Image_3)

## Décryptage du message

# Question 6 - Décryptage

Image_C1 = plt.imread("Image_C1.bmp")
Image_C1 = Image_C1[:,:,:3]
Image_C2 = plt.imread("Image_C2.bmp")
Image_C2 = Image_C2[:,:,:3]
Message = Decryptage(Image_C1,Image_C2)
Affiche(7,Message)