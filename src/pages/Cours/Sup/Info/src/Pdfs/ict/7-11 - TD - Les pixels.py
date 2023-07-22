## Imports

from matplotlib import pyplot as plt
plt.close('all')

## Fourni aux élèves

def Affiche(fig,image):
    plt.figure(fig)
    plt.imshow(image)
    plt.axis('off')
    plt.show()
    plt.pause(0.00001)

Image_1 = plt.imread("Image 1.bmp")
Image_1 = Image_1[:,:,:3]
Affiche(1,Image_1)

## Travail

def Extraction(im):
    L_Pix = []
    Nl,Nc = im.shape[0:2]
    for c in range(Nc):
        for l in range(Nl):
            R,G,B = im[l,c]
            L_Pix.append([R,G,B])
    return L_Pix

L1 = Extraction(Image_1)

def Affiche_3D(fig,L):
    plt.figure(fig)
    plt.axes(projection="3d")
    for Pix in L:
        X,Y,Z = Pix
        Col = [c/255 for c in Pix]
        plt.plot(X,Y,Z,'o',color=Col,markersize=2)
    plt.show()
    plt.pause(0.0001)

Affiche_3D(2,L1)

## Traitement de l'image 2

Image_2 = plt.imread("Image 2.bmp")
Image_2 = Image_2[:,:,:3]
Affiche(10,Image_2)
L2 = Extraction(Image_2)
Affiche_3D(11,L2)
