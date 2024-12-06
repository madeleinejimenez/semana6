class NodoAVL:
    def __init__(self, clave, altura=1):
        self.clave = clave
        self.altura = altura
        self.izquierda = None
        self.derecha = None

class ArbolAVL:
    def obtener_altura(self, nodo):
        return nodo.altura if nodo else 0

    def obtener_balance(self, nodo):
        if not nodo:
            return 0
        return self.obtener_altura(nodo.izquierda) - self.obtener_altura(nodo.derecha)

    def rotar_derecha(self, nodo):
        nueva_raiz = nodo.izquierda
        nodo.izquierda = nueva_raiz.derecha
        nueva_raiz.derecha = nodo
        nodo.altura = 1 + max(self.obtener_altura(nodo.izquierda), self.obtener_altura(nodo.derecha))
        nueva_raiz.altura = 1 + max(self.obtener_altura(nueva_raiz.izquierda), self.obtener_altura(nueva_raiz.derecha))
        return nueva_raiz

    def rotar_izquierda(self, nodo):
        nueva_raiz = nodo.derecha
        nodo.derecha = nueva_raiz.izquierda
        nueva_raiz.izquierda = nodo
        nodo.altura = 1 + max(self.obtener_altura(nodo.izquierda), self.obtener_altura(nodo.derecha))
        nueva_raiz.altura = 1 + max(self.obtener_altura(nueva_raiz.izquierda), self.obtener_altura(nueva_raiz.derecha))
        return nueva_raiz

    def insertar(self, nodo, clave):
        if not nodo:
            return NodoAVL(clave)
        if clave < nodo.clave:
            nodo.izquierda = self.insertar(nodo.izquierda, clave)
        else:
            nodo.derecha = self.insertar(nodo.derecha, clave)

        nodo.altura = 1 + max(self.obtener_altura(nodo.izquierda), self.obtener_altura(nodo.derecha))
        balance = self.obtener_balance(nodo)

        if balance > 1 and clave < nodo.izquierda.clave:
            return self.rotar_derecha(nodo)
        if balance < -1 and clave > nodo.derecha.clave:
            return self.rotar_izquierda(nodo)
        if balance > 1 and clave > nodo.izquierda.clave:
            nodo.izquierda = self.rotar_izquierda(nodo.izquierda)
            return self.rotar_derecha(nodo)
        if balance < -1 and clave < nodo.derecha.clave:
            nodo.derecha = self.rotar_derecha(nodo.derecha)
            return self.rotar_izquierda(nodo)

        return nodo

# Ejemplo de uso:
arbol = ArbolAVL()
raiz = None
for clave in [10, 20, 30, 40, 50, 25]:
    raiz = arbol.insertar(raiz, clave)
