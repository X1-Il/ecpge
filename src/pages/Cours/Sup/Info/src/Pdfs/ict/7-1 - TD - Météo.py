''' 7 - Matrices de pixels et images'''

'''Dossier partagé images: https://www.dropbox.com/sh/6hd4ke2tdyfusz4/AAANYamOymhnHQF3n_sHe5GNa?dl=0'''

## 7-1 - Météo

# Question 1 - Ouverture et affichage

import matplotlib.pyplot as plt
plt.close('all')
import numpy as np

def f_Affiche(image):
    plt.figure()
    plt.imshow(image)
    plt.axis('off')
    plt.show()

Image_Filmee = plt.imread("Image_Filmee.bmp")
Image_Filmee = Image_Filmee[:,:,:3]
Image_Meteo = plt.imread("Image_Meteo.bmp")
Image_Meteo = Image_Meteo[:,:,:3]
np.save('Image_Filmee',Image_Filmee)
np.save('Image_Meteo',Image_Meteo)
f_Affiche(Image_Filmee)
f_Affiche(Image_Meteo)

# Question 2 - f_fusion

def f_fusion(Im_fond,Im_film):
    '''Version qui ajoute la météo sur l'image du présentateur avec fond bleu - Tout le bleu doit être remplacé'''
    Nl,Nc,Ras = np.shape(Im_fond)
    Im_Fusion = np.copy(Im_film)
    for c in range(Nc):
        for l in range(Nl):
            R,G,B = Im_film[l,c]
            Est_Bleu = R < 100 and G < 100 and B > 100
            if R < 100 and G < 100 and B > 100: # Est bleu # R == 64 and G == 64 and B == 128: ou R < 100 and G < 100 and B > 100:
                Im_Fusion[l,c] = Im_fond[l,c]
    return Im_Fusion

def f_fusion(Im_fond,Im_film):
    ''' Version qui ajoute le présentateur à l'image météo - Moins d'affectations car seule la zone du présentateur est remplacée'''
    Nl,Nc,Ras = np.shape(Im_fond)
    Im_Fusion = np.copy(Im_fond)
    for c in range(Nc):
        for l in range(Nl):
            R,G,B = Im_film[l,c]
            Est_Bleu = R < 100 and G < 100 and B > 100
            if not(Est_Bleu): # Lire remarque
                Im_Fusion[l,c] = Im_film[l,c]
    return Im_Fusion

'''Remarque: Attention not(Est_Bleu) est différent de R > 100 and G > 100 and B < 100 '''

Image_Fusionnee = f_fusion(Image_Meteo,Image_Filmee)
f_Affiche(Image_Fusionnee)
plt.imsave("Image_Fusionnee.bmp",Image_Fusionnee)
np.save('Image_Fusionnee',Image_Fusionnee)


# Question 3 - Complexité

'''
O(Nl*Nc)
'''

# Question 4 - Améliorations

'''
Déjà, il vaut mieux utiliser la fonction qui ajoute le présentateur à la météo, il y a moins d'affectations mais autant de tests
Puis, avec cette version, identifier une bande verticale à traiter car on traite trop de zone bleue inutile. Pour cela, on pourrait étudier une unique ligne à hauteur plus basse que sa tête
'''