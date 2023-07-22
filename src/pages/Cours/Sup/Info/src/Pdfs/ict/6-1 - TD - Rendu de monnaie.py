'''6 - Algorithmes glouton'''

## 6-1 - Rendu de monnaie

# Question 1 - Piece_Billet

def Piece_Billet(Reste): # Parcours à l'envers avec for
    N = len(Systeme)
    for i in range(N-1,-1,-1):
        Rendu = Systeme[i]
        if Rendu <= Reste:
            return Rendu
'''Attention, renvoie NONE si elle ne trouve pas de pièce/billet - Possible si on ne traite pas les erreurs d'arrondis dans Monnaie'''

def Piece_Billet(Reste): # Parcours à l'endroit avec for
    N = len(Systeme)
    for i in range(N):
        PB = Systeme[i]
        if PB > Reste:
            return Systeme[i-1]
    return Systeme[-1]
'''Attention, renvoie 500 si elle ne trouve pas de pièce/billet Piece_Billet(0)=500 - Possible si on ne traite pas les erreurs d'arrondis dans Monnaie et donc, Reste plus petit que la première pièce'''

def Piece_Billet(Reste): # Parcours à l'endroit avec while
    N = len(Systeme)
    i = 0
    while i <= N-1 and Systeme[i] <= Reste: # ordre important
        i += 1
    return Systeme[i-1]
'''Attention, renvoie 500 si elle ne trouve pas de pièce/billet Piece_Billet(0)=500 - Possible si on ne traite pas les erreurs d'arrondis dans Monnaie et donc, Reste plus petit que la première pièce'''

def Piece_Billet(Reste): # Parcours à l'envers avec while
    N = len(Systeme)
    i = N-1
    while i >= 1 and Systeme[i] > Reste: # ordre important
        i -= 1
    return Systeme[i]
'''Attention, renvoie 0.01 si elle ne trouve pas de pièce/billet Piece_Billet(0)=0.01 - Possible si on ne traite pas les erreurs d'arrondis dans Monnaie et donc, Reste plus petit que la première pièce'''

# Question 2 - Monnaie

def Monnaie(Somme):
    Res = []
    Reste = Somme
    Val_Min = Systeme[0]
    while Reste > 0:
        Val = Piece_Billet(Reste)
        Reste -= Val # Crée des erreurs d'arrondis
        Reste = round(Reste,2) # Annule leurs effets
        Res.append(Val)
    return Res

# Question 3 - Application

Systeme = [0.01,0.02,0.05,0.1,0.2,0.5,1,2,5,10,20,50,100,200,500]
Somme = 77.22
A_rendre = Monnaie(Somme)
print("Rendu de",Somme,":",A_rendre)

# Question 4 - Amélioration

'''
Certains élèves ont un bug "None type"
Il est nécessaire d'arrondir le reste au centime près, sinon, lorsque le reste vaut 0.0199, le prochain rendu est 0.01 (au lieu de 0.02), puis il reste 0.009, la fonction Piece_Billet ne trouve rien et renvoie NONE
Sur d'autres exemples, le dernier reste pourrait valoir de l'ordre de 1e-15 ce qui conduirait au même problème

D'autres ont un résultat faux: [50, 20, 5, 2, 0.2, 0.01], soit 72€21 au lieu de 72€22. Comme précédemment, le reste de 0.0199 donne 0.01 et il reste 0.009, puis au lieu de tester Reste vis à vis de 0, on teste reste vis à vis de 0.01 (premier élément de Systeme). Comme 0.009<0.01, l'algorithme s'arrête

Avec les versions while de Piece_Billet, toujours les mêmes soucis

On ajoute donc un round(Reste,2) pour arrondir le reste au centime près, l'erreur d'arrondi étant de l'ordre de 1e-15
'''

# Question 5 - Rendu non optimal

Systeme = [1,3,4]
Somme = 6
A_rendre = Monnaie(Somme)
print('Algorithme non optimal pour le système:',Systeme)
print("Rendu de",Somme,":",A_rendre)
print("La solution optimale aurait été [3,3]")

# Question 6 - Monnaie_Rec à deux arguments

def Monnaie_Rec(Somme,Rendu):
    if Somme ==0:
        return Rendu
    else:
        Val = Piece_Billet(Somme)
        Somme -= Val # Crée des erreurs d'arrondis
        Somme = round(Somme,2) # Annule leurs effets
        Rendu.append(Val)
        return Monnaie_Rec(Somme,Rendu)

Systeme = [0.01,0.02,0.05,0.1,0.2,0.5,1,2,5,10,20,50,100,200,500]
Somme = 77.22
A_rendre_Rec = Monnaie_Rec(Somme,[])
print("Rendu de",Somme,":",A_rendre_Rec)

# Question 6 - Monnaie_Rec à un argument + fonction rec

def Monnaie_Rec(Somme):
    def rec(Somme,Rendu):
        if Somme ==0:
            return Rendu
        else:
            Val = Piece_Billet(Somme)
            Somme -= Val # Crée des erreurs d'arrondis
            Somme = round(Somme,2) # Annule leurs effets
            Rendu.append(Val)
            return rec(Somme,Rendu)
    return rec(Somme,[])

Systeme = [0.01,0.02,0.05,0.1,0.2,0.5,1,2,5,10,20,50,100,200,500]
Somme = 77.22
A_rendre_Rec = Monnaie_Rec(Somme,)
print("Rendu de",Somme,":",A_rendre_Rec)

# Question 7 - Bilan avec dictionnaire

def Bilan(Somme):
    A_rendre = Monnaie(Somme)
    Dico = {}
    for Elem in A_rendre:
        Elem_str = str(Elem)
        if Elem_str in Dico.keys():
            Dico[Elem_str] += 1
        else:
            Dico[Elem_str] = 1
    return Dico

Somme = 999.99
Res = Bilan(Somme)
print(Somme,' donne ',Res)
