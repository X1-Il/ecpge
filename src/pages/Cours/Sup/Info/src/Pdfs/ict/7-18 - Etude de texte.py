''' 7 - Matrices de pixels et images'''

'''Dossier partagé images: https://www.dropbox.com/sh/cyenq8khnxh0p4t/AAAzJzX_XbdSToX4Iv0R7BMma?dl=0'''

## 7-18 - Recadrage bilinéaire

## Affichage de l’image

# Question 1 - Ouverture et affichage de l'image du sujet

import numpy as np
import matplotlib.pyplot as plt
plt.close('all')
def Affiche(fig,im):
    plt.figure(fig)
    plt.imshow(im)
    plt.axis('off')
    plt.show()
    plt.pause(0.01)

Image = plt.imread("Image.bmp")
Image = Image[:,:,:3]
Affiche(1,Image)
np.save("Image",Image)

## Noir et blanc

# Question 2 - NB

def NB(im):
    Nl,Nc = im.shape[0:2]
    imnb = np.copy(im)
    for c in range(Nc):
        for l in range(Nl):
            R,G,B = im[l,c]
            Val = R/3+G/3+B/3
            if Val < 127:
                Pix = [0,0,0]
            else:
                Pix = [255,255,255]
            imnb[l,c] = Pix
    return imnb

# Question 3 - Application

Image_NB = NB(Image)
Affiche(2,Image_NB)

## Rotation

# Question 4 - Prod_MV

def Prod_MV(M,V):
    Res = []
    for l in range(len(M)):
        Comp = 0
        Ligne = M[l]
        for c in range(len(Ligne)):
            Comp += Ligne[c]*V[c]
        Res.append(Comp)
    return Res

''' Vérifications
M = [[1,2],[3,4]]
V = [5,6]
print(Prod_MV(M,V))
'''

# Question 5 - Rotation_V

from math import cos,sin,pi
def Rotation_V(V,Alpha_d):
    Alpha_r = Alpha_d*pi/180
    M = [[cos(Alpha_r),-sin(Alpha_r)],[sin(Alpha_r),cos(Alpha_r)]]
    Res = Prod_MV(M,V)
    return Res

''' Vérifications
V = [1,1]
Alpha_d = 45
print(Rotation_V(V,Alpha_d))
'''

# Question 6 - Rotation

def Rotation(im,Alpha_d):
    Nl,Nc = im.shape[0:2]
    C = [Nl//2,Nc//2]
    lc,cc = C
    Nl,Nc,Ras = np.shape(im)
    imrot = 255*np.ones([Nl,Nc,3],dtype='uint8') # Pixel blanc si pas dans l'image source
    for lp in range(Nl):
        for cp in range(Nc):
            CPp = [lp-lc,cp-cc]
            a,b = Rotation_V(CPp,-Alpha_d)
            l = lc + int(round(a,0)) # Arrondi à l'entier le plus proche avec round
            c = cc + int(round(b,0)) # Arrondi à l'entier le plus proche avec round
            Cond_L = (0 <= l <= Nl-1)
            Cond_C = (0 <= c <= Nc-1)
            if Cond_L and Cond_C:
                imrot[lp,cp] = im[l,c]
    return imrot

Alpha = 30
Image_NB_Rot = Rotation(Image_NB,Alpha)
Affiche(3,Image_NB_Rot)

## Rotation automatique

# Question 7 - Etude_L

def Etude_L(imnb):
    Nl,Nc = imnb.shape[0:2]
    Res = []
    for l in range(Nl):
        N = 0
        for c in range(Nc):
            Val = int(1 - imnb[l,c,0]/255)
            N +=  Val
        Res.append(N)
    return Res

Et_L = Etude_L(Image_NB)

'''
Etude_L(Image_NB)[:20]
'''

# Question 8 - Courbe

def Courbe(fig,Lx,Ly,type):
    plt.figure(fig)
    plt.plot(Lx,Ly,type,markersize=1)
    plt.show()
    plt.pause(0.01)

# Question 9 - Tracé

Nl = Image.shape[0]
Ll = range(Nl)
Courbe(4,Ll,Et_L,'')

# Question 10 - Nb0

def Nb0(L):
    Res = 0
    for t in L:
        if t==0:
            Res += 1
    return Res

''' Vérification
Nb0(Et_L)
'''

# Question 11 - f

def f(im,x):
    R = Rotation(im,x)
    L = Etude_L(R)
    N = Nb0(L)
    return [R,N]

# Question 12 - Rotation_auto

def Rotation_auto(imnb,a,b,eps):
    Lx,LN = [],[]
    Ra,Na = f(imnb,a)
    Rb,Nb = f(imnb,b)
    c = (a+b)/2
    Rc,Nc = f(imnb,c)
    Lx+=[a,b,c]
    LN+=[Na,Nb,Nc]
    while abs(b-a)>eps:
        print("eps:"+str(abs(b-a))+">"+str(eps))
        ac = (a+c)/2
        cb = (c+b)/2
        Rac,Nac = f(imnb,ac)
        Rcb,Ncb = f(imnb,cb)
        Lx+=[ac,cb]
        LN+=[Nac,Ncb]
        if Nac >= Na and Nac >= Nc:
            b,c = c,ac
            Rb,Rc = Rc,Rac
            Nb,Nc = Nc,Nac
        elif Nc >= Nac and Nc >= Ncb:
            a,b = ac,cb # c inchangé
            Ra,Rb = Rac,Rcb
            Na,Nb = Nac,Ncb
        elif Ncb >= Nc and Ncb >= Nb:
            a,c = c,cb
            Ra,Rc = Rc,Rcb
            Na,Nc = Nc,Ncb
        else:
            erreur
    Courbe(5,Lx,LN,'o')
    print("Rotation trouvée:",a)
    return Ra

''' Remarque
Bien mettre des conditions "ou égal" pour le pettit plateau supérieur
Sur des fonctions non strictement monotones, ce choix poserait des problèmes
'''

# Question 13 - Application

a,b,eps = -90,90,0.1
Image_NB_Rot = Rotation_auto(Image_NB,a,b,eps)

Affiche(6,Image_NB_Rot)
plt.savefig("Résultat.png")

Et_L = Etude_L(Image_NB_Rot)
Courbe(7,Ll,Et_L,'-')

## Extraction des lignes

# Question 14 - Decoupage

def Decoupage(L):
    n = len(L)
    Res = []
    Couple = []
    for i in range(1,n):
        if L[i-1]==0 and L[i]!=0:
            Couple.append(i) # Noir ligne i incluse
        if L[i-1]!=0 and L[i]==0:
            Couple.append(i-1) # Noir ligne i-1 incluse
            Res.append(Couple)
            Couple = []
    return Res

# Question 15 - Application

Dec_L = Decoupage(Et_L)
print(Dec_L)

# Question 16 - Extraction_L

def Extraction_L(imnbr,L):
    Res = []
    for i,j in L:
        iml = imnbr[i:j+1,:,:]
        Res.append(iml)
    return Res

Liste_Im_Lignes = Extraction_L(Image_NB_Rot,Dec_L)

for i in range(5):
    iml = Liste_Im_Lignes[i]
    Affiche(100+i,iml)
    plt.savefig("l"+str(i)+".png")

## Extraction des caractères

# Question 17 - Etude_C

def Etude_C(iml):
    Nl,Nc = iml.shape[0:2]
    Res = []
    for c in range(Nc):
        N = 0
        for l in range(Nl):
            Val = 1 - iml[l,c,0]/255
            N +=  Val
        Res.append(N)
    return Res

# Question 18 - Caracteres_L

def Caracteres_L(iml,D):
    Res = []
    for i,j in D:
        imc = iml[:,i:j+1,:]
        Res.append(imc)
    return Res

# Question 19 - Caracteres

def Caracteres(L_iml):
    Res = []
    n = len(L_iml)
    for i in range(n):
        iml = L_iml[i]
        Et_C = Etude_C(iml)
        Dec_C = Decoupage(Et_C)
        Ext = Caracteres_L(iml,Dec_C)
        Res += Ext
    return Res

L_Car = Caracteres(Liste_Im_Lignes)

for i in range(10):
    Car = L_Car[i]
    Affiche(200+i,Car)
    plt.savefig("c"+str(i)+".png")
