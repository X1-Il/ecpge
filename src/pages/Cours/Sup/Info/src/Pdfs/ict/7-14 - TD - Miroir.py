''' 7 - Matrices de pixels et images'''

'''https://www.dropbox.com/sh/85wediwv3i27ln9/AAAHBVBU4weiY--VCOafxRD8a?dl=0'''

## 7-14 - Miroir

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

Image = plt.imread(Chemin + "Image.bmp")
Image = Image[:,:,:3]
Affiche(1,Image)

# Question 2 - Miroir

def Miroir(im):
    Nl,Nc,_ = im.shape
    im_res = im.copy()
    for l in range(Nl):
        for c in range(Nc):
            Pix = im[l,c]
            ll = Nl - l - 1
            cc = Nc - c - 1
            im_res[ll,c] = Pix
    return im_res

# Question 3 - Application

Image_Miroir = Miroir(Image)
Affiche(2,Image_Miroir)
plt.imsave("Image_Miroir.bmp",Image_Miroir)

# Question 4 - fusion

def Fusion(im1,im2):
    Nl,Nc,_ = im1.shape
    Nl_New = 2*Nl-1
    im = np.zeros((Nl_New,Nc,3),dtype='uint8')
    for l in range(Nl_New):
        for c in range(Nc):
            if l < Nl-1:
                im[l,c] = im1[l,c]
            else:
                ll = l - (Nl-1)
                im[l,c] = im2[ll,c]
    return im

# Question 5 - Application

Image_Fusion = Fusion(Image,Image_Miroir)
Affiche(3,Image_Fusion)
plt.imsave("Image_Fusion.bmp",Image_Fusion)