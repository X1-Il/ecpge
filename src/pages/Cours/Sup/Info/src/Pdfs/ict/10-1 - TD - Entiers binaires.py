'''10 - Représentation des nombres'''

## 10-1 - TD - Entiers binaires

## Exercice 1 - Transcodage simple

# Question 1

def bin2ent(N_Bin): # N_Bin du type '1101'
    Nb = len(N_Bin)
    N_Ent = 0
    Ind_Droite = Nb - 1
    for i in range(Nb):
        Ind = Ind_Droite - i
        Bit = int(N_Bin[Ind])
        N_Ent += Bit * 2**i
    return N_Ent

N_Bin = '1100100'
N_Ent = bin2ent(N_Bin)
N_Ent_Python = eval('0b'+N_Bin)
print(N_Bin,' vaut ',N_Ent_Python,' et la fonction donne ',N_Ent)

# Question 2

def reverse_bits(N_Bin) : # N_Bin du type '1101'
    Nb = len(N_Bin)
    N_Bin_Rev = ""
    Ind_Droite = Nb - 1
    for i in range(Nb):
        Ind = Ind_Droite - i
        Bit = N_Bin[Ind]
        N_Bin_Rev += Bit
    return N_Bin_Rev

N_Bin = '1000101'
N_Bin_Inv = reverse_bits(N_Bin)
print(N_Bin,' devient avec inv: ',N_Bin_Inv)

# Question 3

def ent2bin(N_Ent): # N_Ent entier naturel
    N_Bin = ""
    Quotient = N_Ent
    while Quotient != 0:
        New_Quotient = Quotient // 2
        Reste = Quotient % 2
        Quotient = New_Quotient
        Bit = str(Reste)
        N_Bin += Bit
    N_Bin = reverse_bits(N_Bin)
    return N_Bin

N_Ent = 100
N_Bin = ent2bin(N_Ent)
N_Bin_Python = str(bin(N_Ent))[2:]
print(N_Ent,' vaut ',N_Bin_Python,' et la fonction donne ',N_Bin)

## Exercice 2 - Transcodage par récursivité

# Question 1

def Bin2Ent_1(Ch): # Version gauche à droite
    if len(Ch)==1:
        return int(Ch)
    else:
        Puissance = len(Ch) - 1
        Bit = int(Ch[0])
        Reste_Ch = Ch[1:]
        Res = Bin2Ent_1(Reste_Ch)+Bit*2**Puissance
        return Res

print('Q1: ',Bin2Ent_1('110110'))

# Question 2

def Bin2Ent_2(Ch,Puissance=0): # Version droite à gauche
    if len(Ch)==1:
        Res = int(Ch) * 2**Puissance
        return Res
    else:
        Bit = int(Ch[-1])
        Reste_Ch = Ch[:-1]
        Res = Bin2Ent_2(Reste_Ch,Puissance+1)+Bit*2**Puissance
        return Res

print('Q2: ',Bin2Ent_2('110110'))

def Bin2Ent_2_bis(Ch): # Version gauche droite avec transmission de la puissance - Retourne deux choses :(
    if len(Ch)==1:
        p = 0
        Res = int(Ch) * 2**p
        return Res,p+1
    else:
        Bit = int(Ch[0])
        Reste_Ch = Ch[1:]
        Res_Reste,p = Bin2Ent_2_bis(Reste_Ch)
        Res = Res_Reste+Bit*2**p
        return Res,p+1

print('Q2: ',Bin2Ent_2_bis('110110'))

# Question 3

def Bin2Ent_3(Ch): # Version exploitant la multiplication par 2
    if len(Ch)==1:
        Res = int(Ch)
        return Res
    else:
        Bit = int(Ch[-1])
        Reste_Ch = Ch[:-1]
        Res = Bit + Bin2Ent_3(Reste_Ch)*2
        return Res

print('Q3: ',Bin2Ent_3('110110'))

# Question 4 - Ent2Bin

def Ent2Bin(Ent):
    if Ent < 2:
        return str(Ent)
    else:
        Q = Ent//2
        R = Ent%2
        BinQ = Ent2Bin(Q)
        Bin = BinQ + str(R)
        return Bin

Res = Ent2Bin(54)
print('Q4: ',Res)

# Question 5 - Ent2Binb

def Ent2Binb(Ent,b):
    if Ent < b:
        return str(Ent)
    else:
        Q = Ent//b
        R = Ent%b
        BinQ = Ent2Binb(Q,b)
        Bin = BinQ + str(R)
        return Bin

Res = Ent2Binb(54,2)
print('Q5: ',Res)
Res = Ent2Binb(54,10)
print('Q5: ',Res)