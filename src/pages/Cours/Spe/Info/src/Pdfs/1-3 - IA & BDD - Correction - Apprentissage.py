''' 1 - Bases de données'''

'''1-3 - IA & BDD'''

## 1-3 - IA & BDD

# Création de la BDD

Nom = '3-1 - IA & BDD - Base de données.db'
import sqlite3
BDD = sqlite3.connect(Nom)
cursor = BDD.cursor()
Requete = """CREATE TABLE IF NOT EXISTS Objets(Couleur TEXT,Objet TEXT)"""
cursor.execute(Requete)

# Apprentissage

from random import randint as rand

Couleurs = ['rouge','bleu','vert']
Taille = len(Couleurs)

for i in range(5):
    Ind = rand(0,Taille-1)
    Couleur = Couleurs[Ind]
    Objet = input('Quelque chose de ' + Couleur + ' ? (en minuscules - Taper ENTER pour ne pas répondre) ')
    if Objet != '':
        Requete = """INSERT INTO Objets VALUES (?,?);"""
        cursor.execute(Requete,(Couleur,Objet))

# Vérification

Requete = """SELECT name FROM sqlite_master WHERE type='table';"""
cursor.execute(Requete)
print(cursor.fetchall())

Requete = """PRAGMA table_info(Objets);"""
cursor.execute(Requete)
print(cursor.fetchall())

Requete = """SELECT * FROM Objets ;"""
cursor.execute(Requete)
Resultats = cursor.fetchall()
print(Resultats)

# Fermeture

BDD.commit()
BDD.close()