''' 7 - Matrices de pixels et images'''

'''Dossier partagé images: https://www.dropbox.com/sh/cyenq8khnxh0p4t/AAAzJzX_XbdSToX4Iv0R7BMma?dl=0'''

## 7-17 - Recadrage bilinéaire

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

# Question 2 - LC_Proj

from numpy.linalg import solve
from numpy import dot
def LC_Proj(l,c,LP,LPp):
    A,B,C,D = LP
    Ap,Bp,Cp,Dp = LPp
    lA,cA = A
    lB,cB = B
    lC,cC = C
    lD,cD = D
    lAp,cAp = Ap
    lBp,cBp = Bp
    lCp,cCp = Cp
    lDp,cDp = Dp
    K = [[cA,cB,cC],[lA,lB,lC],[1,1,1]]
    V = [cD,lD,1]
    k1,k2,k3 = solve(K,V)
    Kp = [[cAp,cBp,cCp],[lAp,lBp,lCp],[1,1,1]]
    Vp = [cDp,lDp,1]
    k1p,k2p,k3p = solve(Kp,Vp)
    R1 = k1p/k1
    R2 = k2p/k2
    R3 = k3p/k3
    M = [[cA,lA,1],[cB,lB,1],[cC,lC,1]]
    V1 = [R1*cAp,R2*cBp,R3*cCp]
    a11,a12,a13 = solve(M,V1)
    V2 = [R1*lAp,R2*lBp,R3*lCp]
    a21,a22,a23 = solve(M,V2)
    V3 = [R1,R2,R3]
    a31,a32,a33 = solve(M,V3)
    Ma = [[a11,a12,a13],[a21,a22,a23],[a31,a32,a33]]
    U = [c,l,1]
    a,b,c = dot(Ma,U)
    C = a/c
    L = b/c
    C = int(round(C,0))
    L = int(round(L,0))
    return [L,C]

# Question 3 - Vérification

A,B,C,D = [10,15],[15,70],[60,65],[70,10]
LP = [A,B,C,D]
Ap,Bp,Cp,Dp = [0,0],[0,100],[1000,100],[1000,0],
LPp = [Ap,Bp,Cp,Dp]

l,c = A
test = LC_Proj(l,c,LP,LPp)
print(test)
l,c = B
test = LC_Proj(l,c,LP,LPp)
print(test)
l,c = C
test = LC_Proj(l,c,LP,LPp)
print(test)
l,c = D
test = LC_Proj(l,c,LP,LPp)
print(test)

'''
[0, 0]
[0, 100]
[1000, 100]
[1000, 0]
'''

# Question 4 - Recadrage

def Recadrage(im,LA,LB,Nl,Nc):
    Im_Rec = 255*np.ones([Nl,Nc,3],dtype='uint8')
    NL,NC = im.shape[:2]
    for l in range(Nl):
        for c in range(Nc):
            L,C = LC_Proj(l,c,LB,LA) # Changer B et A :)
            if L>=0 and L<NL and C>=0 and C<NC:
                Im_Rec[l,c] = im[L,C]
    return Im_Rec

# Question 5 - LA et LB

A1,A2,A3,A4 = [1529,2043],[1515,2241],[3121,1464],[3052,1087]
LA = [A1,A2,A3,A4]

Nl = Nc = 500
B1,B2,B3,B4 = [0,0],[0,Nc-1],[Nl-1,Nc-1],[Nl-1,0]
LB = [B1,B2,B3,B4]

# Question 6 - Recadrage carré

Image_Recadree = Recadrage(Image,LA,LB,Nl,Nc)
Affiche(2,Image_Recadree)
plt.savefig("Essai.png")

# Question 7 - Longueur

from math import sqrt
def Longueur(Pi,Pj):
    li,ci = Pi
    lj,cj = Pj
    dl = lj - li
    dc = cj - ci
    l = sqrt(dl**2+dc**2)
    return l

# Question 8 - Prop

def Prop(LP):
    A,B,C,D = LP
    lAB = Longueur(A,B)
    lBC = Longueur(B,C)
    lCD = Longueur(C,D)
    lDA = Longueur(D,A)
    h = (lAB+lCD)/2
    v = (lBC+lDA)/2
    k = h/v
    return k

# Question 9 - Application

A1,A2,A3,A4 = [1529,2043],[1515,2241],[3121,1464],[3052,1087]
LA = [A1,A2,A3,A4]

Nl = 1500
k = Prop(LA)
Nc = int(round(k*Nl,0))
B1,B2,B3,B4 = [0,0],[0,Nc-1],[Nl-1,Nc-1],[Nl-1,0]
LB = [B1,B2,B3,B4]

Image_Recadree = Recadrage(Image,LA,LB,Nl,Nc)
Affiche(3,Image_Recadree)
plt.savefig("Résultat.png")

# Question 10 - Nouveau point de vue

'''
J'écarte les deux points A et B, ce qui devrait faire apparaître la piste comme vue de face en finale
J'adapte les dimensions Nl Nc
'''

d = 300
A1,A2,A3,A4 = [1529,2043-d],[1515,2241+d],[3121,1464],[3052,1087]
LA = [A1,A2,A3,A4]

Nl,Nc = 1000,600
B1,B2,B3,B4 = [0,0],[0,Nc-1],[Nl-1,Nc-1],[Nl-1,0]
LB = [B1,B2,B3,B4]

Image_Essai = Recadrage(Image,LA,LB,Nl,Nc)
Affiche(4,Image_Essai)
