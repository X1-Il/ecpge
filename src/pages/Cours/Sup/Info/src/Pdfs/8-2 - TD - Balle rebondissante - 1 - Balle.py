'''8 - for if while'''

# Balle rebondissante

## Import des librairies

import matplotlib.pyplot as plt
plt.close('all')

## Définition des fonctions

def f_init_schema(Pouces,Lim,e):
    X_Lim = Lim[0]
    Y_Lim = Lim[1]
    fig = plt.figure(1,figsize=(Pouces,Pouces)) # Définition d'une fenêtre de taille 20' X 20' dans laquelle sera animé le schéma cinématique
    plt.xlim(X_Lim[0]-2*e,X_Lim[1]+2*e)
    plt.ylim(Y_Lim[0]-2*e,Y_Lim[1]+2*e)
    return fig

def f_balle(X,Y,R,C): # Ajout de la balle dans l'objet fig
    Circle = plt.Circle((X,Y),R,color=C)
    fig.gca().add_artist(Circle)

def f_bordures(Lim,e): # Création des bordures
    X_Lim = Lim[0]
    Y_Lim = Lim[1]
    de = e/2
    plt.plot([X_Lim[0]-de,X_Lim[0]-de],[Y_Lim[0]-de,Y_Lim[1]+de],color= 'b', linewidth = e )
    plt.plot([X_Lim[1]+de,X_Lim[1]+de],[Y_Lim[0]-de,Y_Lim[1]+de],color= 'b', linewidth = e )
    plt.plot([X_Lim[0]-de,X_Lim[1]+de],[Y_Lim[0]-de,Y_Lim[0]-de],color= 'b', linewidth = e )
    plt.plot([X_Lim[0]-de,X_Lim[1]+de],[Y_Lim[1]+de,Y_Lim[1]+de],color= 'b', linewidth = e )

def f_affiche_schema(Delai):
    fig.show() # Affichage du schéma cinématique
    plt.gca().set_aspect('equal', adjustable='box') # L'option Adjustable permet d'éviter des redimensionnements intempestifs lors de l'évolution de la géométrie
    plt.pause(Delai)

def f_clear_schema(Lim,e):
    X_Lim = Lim[0]
    Y_Lim = Lim[1]
    plt.clf() # Effacement de la figure en vue de la prochaine
    plt.xlim(X_Lim[0]-2*e,X_Lim[1]+2*e)
    plt.ylim(Y_Lim[0]-2*e,Y_Lim[1]+2*e)

## Zone de code

# Création de la zone de mouvement

X_Min = -200
X_Max = 200
X_Lim = [X_Min,X_Max]
Y_Min = -200
Y_Max = 200
Y_Lim = [Y_Min,Y_Max]
Lim = [X_Lim,Y_Lim]
E_bordures = 10
Taille = 5
fig = f_init_schema(Taille,Lim,E_bordures)
Delai = 0.00000001

# Mouvement de la balle

X = 50
Y = 0
dx = 1
dy = 1
R = 10
C = 'b'

while True:
    if X <= X_Min + R:
        dx = 1
    elif X >= X_Max - R:
        dx = -1
    if Y <= Y_Min + R:
        dy = 1
    elif Y >= Y_Max - R:
        dy = -1
    X += dx
    Y += dy
    f_clear_schema(Lim,E_bordures)
    f_bordures(Lim,E_bordures)
    f_balle(X,Y,R,C)
    f_affiche_schema(Delai)