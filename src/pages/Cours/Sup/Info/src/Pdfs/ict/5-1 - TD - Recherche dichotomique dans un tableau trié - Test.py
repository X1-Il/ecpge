def test(f):
    Res = []

    # 1: L est vide
    L = []
    x = 1
    Res.append(f(x,L)==False)

    # 2: len(L) pair - x dans L - 1° terme
    L = [1,2,3,4]
    x = 1
    Res.append(f(x,L)==True)
    # 3: len(L) pair - x dans L - Dernier terme
    L = [1,2,3,4]
    x = 4
    Res.append(f(x,L)==True)
    # 4: len(L) pair - x dans L - Dedans
    L = [1,2,3,4]
    x = 2
    Res.append(f(x,L)==True)

    # 5: len(L) impair - x dans L - 1° terme
    L = [1,2,4]
    x = 1
    Res.append(f(x,L)==True)
    # 6: len(L) impair - x dans L - Dernier terme
    L = [1,2,4]
    x = 4
    Res.append(f(x,L)==True)
    # 7: len(L) impair - x dans L - Dedans
    L = [1,2,4]
    x = 2
    Res.append(f(x,L)==True)

    # 8: len(L) pair - x n'est pas dans L - Avant
    L = [1,2,3,4]
    x = -1
    Res.append(f(x,L)==False)
    # 9: len(L) pair - x n'est pas dans L - Après
    L = [1,2,3,4]
    x = 5
    Res.append(f(x,L)==False)
    # 10: len(L) pair - x n'est pas dans L - Dedans
    L = [1,2,3,4]
    x = 2.5
    Res.append(f(x,L)==False)

    # 11: len(L) impair - x n'est pas dans L - Avant
    L = [1,2,4]
    x = -1
    Res.append(f(x,L)==False)
    # 12: len(L) impair - x n'est pas dans L - Après
    L = [1,2,4]
    x = 5
    Res.append(f(x,L)==False)
    # 13: len(L) impair - x n'est pas dans L - Dedans
    L = [1,2,4]
    x = 2.5
    Res.append(f(x,L)==False)

    print(Res) # Permet d'identifier le lieu du bug
    return Res == [True]*13

Res = test(recherche_dicho_rec)
print('La fonction est correcte ?',Res)