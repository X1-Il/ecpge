
def Maximum_naturel(L):
    """Etant donnée une liste de nombres, renvoie son maximum en utilisant la    méthode naturelle : comparaison de chaque élément avec tous les autres"""
    N = len(L)
    if N = 0:
        print(la liste est vide)
        return None
    for i in range(N):
        v1 = L(i)
        est_plus_grand = True
        for j in range(N+1):
            v2 = L[j]
            if i < j:
                est_plus_grand = False
        if est_plus_grand:
            maximum = i
    return maximum
