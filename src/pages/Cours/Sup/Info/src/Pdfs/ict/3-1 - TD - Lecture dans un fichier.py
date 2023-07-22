'''3 - Modules - Bibliothèques'''

## 3-1 - Lecture dans un fichier

## Exercice 1 - Nombres premiers

# Question 1 - Somme des 1000 premiers nombres premiers

Nom_Fichier = '3-1 - TD - Lecture dans un fichier - Premiers 1000.txt'
fichier = open(Nom_Fichier,'r')
Liste_Lignes = fichier.readlines()
fichier.close()

somme = 0
for ligne in Liste_Lignes:
    valeur = int(ligne) # Conversion de str en entier
    somme += valeur

print('la somme des 1000 premiers nombres premiers vaut : {}'.format(somme))
'''la somme des 1000 premiers nombres premiers vaut : 3682913'''

# Question 2 - 684° nombre premier

'''Quand on a créé une liste des lignes, c'est très simple'''
Ind_Recherche = 684
Nombre_Cherche = Liste_Lignes[Ind_Recherche-1]
print('Le 684ème nombre premier est : ',Nombre_Cherche)
'''Le 684ème nombre premier est : 5113'''

'''Soinon avec un nouveau parcours'''

Nom_Fichier = '3-1 - TD - Lecture dans un fichier - Premiers 1000.txt'
fichier = open(Nom_Fichier,'r')

num_ligne = 0  # Numéro de la ligne
for ligne in fichier:
    valeur = int(ligne) # Conversion de str en entier
    num_ligne += 1
    if num_ligne == 684:
        Nombre_Cherche = valeur

fichier.close()

print('Le 684ème nombre premier est : ',Nombre_Cherche)
'''Le 684ème nombre premier est : 5113'''

## Exercice 2 - Joueurs de Tennis

# Question 1 - Nombre de français

Nom_Fichier = '3-1 - TD - Lecture dans un fichier - Tennis homme.txt'
fichier = open(Nom_Fichier,'r')
Liste_Lignes = fichier.readlines()
fichier.close()

Compteur = 0
for ligne in Liste_Lignes:
    rang,NOM_Prenom,Pays,Score = ligne.split(',')
    if Pays=='FRA':
        Compteur+=1

print('Nombre de joueurs français : ',Compteur)
'''nombre de joueurs français : 18'''

# Question 2 - Différents calculs

Nom_Fichier = '3-1 - TD - Lecture dans un fichier - Tennis homme.txt'
fichier = open(Nom_Fichier,'r')
Liste_Lignes = fichier.readlines()
fichier.close()

moyenne_score = 0
nb_joueur = 0
moyenne_score_100 = 0
nb_100 = 0
moyenne_score_fr = 0
nb_fr = 0
moyenne_rang_prenom = 0
nb_prenom = 0
num_ligne = 0

for Ligne in Liste_Lignes:
    if num_ligne >= 1: # ne pas traiter la première ligne différente des autres, sinon erreur à score = float(Score)
        Rang,NOM_Prenom,Pays,Score = Ligne.split(',')
        score = float(Score)
        lettre_prenom = NOM_Prenom[-1]
        Rang = int(Rang)
        moyenne_score += score
        nb_joueur += 1
        if Rang <= 100:
            moyenne_score_100 += score
            nb_100 += 1
        if Pays == 'FRA':
            moyenne_score_fr += score
            nb_fr += 1
        if lettre_prenom == 'r':
            moyenne_rang_prenom += Rang
            nb_prenom += 1
    num_ligne += 1
moyenne_score /= nb_joueur
moyenne_score_100 /= nb_100
moyenne_score_fr /= nb_fr
moyenne_rang_prenom /= nb_prenom
print('moyenne des scores : {}'.format(moyenne_score))
print('moyenne des scores des 100 premiers joueurs : {}'.format(moyenne_score_100))
print('moyenne des scores des joueurs français : {}'.format(moyenne_score_fr))
print('moyenne des rangs des joueurs dont le prénom finit par un r : {}'.format(moyenne_rang_prenom))
fichier.close()

## Exercice 3 - Admissibles

Nom_Fichier = '3-1 - TD - Lecture dans un fichier - Admissibles.txt'
fichier = open(Nom_Fichier,'r',encoding = 'utf-8')
Liste_Lignes = fichier.readlines()
fichier.close()

nb_ligne = 0 # Pour le nombre de candidats
admissible = 0 # Pour le nombre d'admissibles

Res_Serie = [0]*4

for ligne in Liste_Lignes:
    nb_ligne += 1
    ligne = ligne.strip()
    ligne = ligne.split('\t')
    Candidat,Nom_Prenom,Resultat,Serie = ligne
    if Resultat == 'Admissible':
        admissible += 1
        Serie = int(Serie)
        Res_Serie[Serie-1] += 1 # Astuce


Liste = [nb_ligne]+Res_Serie
print(Liste)
# [5398, 417, 417, 410, 474]

for k in range(4):
    print('serie {}, {} candidats'.format(k+1, Res_Serie[k] ))

## Exercice 4 - Comptage par dictionnaire - Hamlet

Nom_Fichier = '3-1 - TD - Lecture dans un fichier - Hamlet français.txt'
fichier = open(Nom_Fichier,'r')
Liste_Lignes = fichier.readlines()
fichier.close()

dico = {}
for ligne in Liste_Lignes:
    ligne = ligne.split(' ')
    if len(ligne) >= 2 and '-' in ligne:
        Personnage = ligne[0]
        if Personnage[-1] in [',','.']:
            Nom = Personnage[:-1]
            if Nom in dico:
                dico[Nom] += 1
            else:
                dico[Nom] = 1

print(dico)
'''
{'PREMIER_PAYSAN': 62, 'DEUXIEME_PAYSAN': 24, 'HAMLET': 417, 'HORATIO': 104, 'LAERTES': 82, 'PREMIER_PRETRE': 4, 'LA_REINE': 74, 'LE_ROI': 111, 'OSRIC': 50, 'FORTINBRAS': 10, 'OPHÉLIA': 54, 'POLONIUS': 84, 'MARCELLUS': 13, 'REYNALDO': 13, 'ROSENCRANTZ': 42, 'GUILDENSTERN': 29, 'VOLTIMAND': 1, 'TOUS': 1, 'VOIX': 1, 'LE_GENTILHOMME': 1, 'LES_DANOIS': 3, 'PREMIER_AMBASSADEUR': 1}
'''

# Question 2 - Réponse à 4 questions

# Interventions de HAMLET

print(dico['HAMLET'])

# Interventions de LA_REINE

print(dico['LA_REINE'])

# Nombre de personnages

print(len(dico))

# Nombre d'interventions

total = 0
for cle,valeur in dico.items():
    total += valeur
print("nombre total d'interventions : {}".format(total))
'''nombre total d'interventions : 1181'''

## Exercice 5 - Comptage par dictionnaire - ADN

# Question 1 - Fichier_to_str

def Fichier_to_str(nom_fichier):
    '''Lit un fichier et construit une seule chaine de caractère en ignorant la 1ère ligne du fichier'''
    fichier = open(nom_fichier)
    chaine = ''
    fichier.readline()
    for x in fichier.readlines():
        chaine += x.strip()
    fichier.close()
    return chaine

# Question 2 - Compte_mots_2_lettres

def Compte_mots_2_lettres(texte):
    '''Etant donnée une chaine de caractère texte, renvoie un dictionnaire de tous les mots de 2 lettres avec leurs nombres d'apparitions'''
    dico = {}
    for i in range(len(texte)-1):
        mot = texte[i:i+2]
        if mot in dico:
            dico[mot] += 1
        else:
            dico[mot] = 1
    return dico

# Question 3 - Levure

NC_001133 = '3-1 - TD - Lecture dans un fichier - NC_001133.fna'
sequence_adn_boulanger = Fichier_to_str(NC_001133)
dico_levure_2 = Compte_mots_2_lettres(sequence_adn_boulanger)
nb_GC = dico_levure_2['GC']
print(nb_GC)
'''8919'''

# Question 4 - Compte_mots_k_lettres

def Compte_mots_k_lettres(texte,k):
    '''Etant donnée une chaine de caractère texte et un entier k, renvoie un dictionnaire de tous les mots de k lettres avec leurs nombres d'apparitions'''
    dico = {}
    for i in range(len(texte)-k+1):
        mot = texte[i:i+k]
        if mot in dico:
            dico[mot] += 1
        else:
            dico[mot] = 1
    return dico

# Question 5 - Bactérie

NC_000913 = '3-1 - TD - Lecture dans un fichier - NC_000913.fna'
sequence_adn_escherichia_coli = Fichier_to_str(NC_000913)
dico_bacterie_3 = Compte_mots_k_lettres(sequence_adn_escherichia_coli, 3)
nb_CCC = dico_bacterie_3['CCC']
print(nb_CCC)
'''47775'''

# Question 6 - Maxi_dico

def Maxi_dico(dico):
    '''Etant donné un dictionnaire, renvoie les clés qui ont la plus grande valeurs'''
    maxi = 0
    for x in dico:
        if dico[x] > maxi:
            maxi = dico[x]
    list_cle_maxi = []
    for x in dico:
        if dico[x] == maxi:
            list_cle_maxi.append(x)
    return list_cle_maxi

test = Maxi_dico({'t1' : 32, 't2' : 2, 't3' : 50, 't4' : 23, 't5' : 50})
print(test)

# Question 7 - Maximum pour la bactérie Escherichia coli

cle_max = Maxi_dico(dico_bacterie_3)
print(cle_max, dico_bacterie_3[cle_max[0]])
'''['CGC'] 115695'''
