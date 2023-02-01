---
name: Styl pisania kodu
sidebar_position: 1
---

# Styl pisania kodu
## Nazywanie plików
- Nazwa sceny powinna być zgodna z **PascalCase**
- Nazwa skryptu powinna być zgodna z **PascalCase**
- Jeśli skrypt jest przypięty do **root node** to powinien nazywać się jak scena której dotyczy
- Jeśli skrypt jest przypięty do **wielu nodeów** to powinien nazywać się tak aby jak najdokładniej opisywać grupę do jakiej jest przypięty
- Jeśli skrypt jest przypięty do **jednego nodea** to powinien mieć nazwę taką samą jak node którego dotyczy
- Jeśli skrypt **nie jest przypięty** (jest abstrakcyjny => dziedziczą po nim inne skrypty) to jego nazwa powinna być taka sama jak klasy, którą zawiera

## Lokalizacja plików
- Scena powinna znajdować się w folderze `scenes`, a ścieżka podkatalogów powinna opisywać czego dotyczy scena
- Skrypt powinien znajdować się w folderze w jakim znajduje się scena której dotyczy
- Skrypty abstrakcyjne powinny znajdować się w folderze `scripts`

## Nazwy w kodzie
- Nazwy klas powinny być zgodne z **PascalCase**
- Nazwy exportów powinny być zgodne z **snake_case** (rozpoczynając od małej litery)
- Nazwy funkcji powinny być zgodne z **snake_case** (rozpoczynając od małej litery)
- Nazwy funkcji prywatnych powinny być zgodne z **snake_case** (rozpoczynając od znaku `_`)
- Nazwy stałych powinny być zgodne z **UPPER_CASE**
- Nazwy zmiennych globalnych powinny być zgodne z **camelCase**
- Nazwy zmiennych prywatnych powinny być zgodne z **camelCase** (rozpoczynając od znaku `_`)
- Nazwy zmiennych lokalnych powinny być zgodne z **nocase** lub korzystać z dowolnej formy, ale w sposób taki, który nie będzie wprowadzał w błąd

## Wytyczne dotyczące typowania
Każda funkcja oraz zmienna globalna musi mieć podany typ, z wyjątkiem sytuacji gdy typ jest trudny lub niemożliwy do zdefiniowania
