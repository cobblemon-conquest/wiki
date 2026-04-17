---
title: Comandos de conquest-mod-server
description: Referencia de comandos administrativos para gestion de participantes de torneo.
head:
  - tag: meta
    attrs:
      name: robots
      content: noindex, nofollow
---

Esta pagina documenta los comandos administrativos disponibles para registrar, verificar y gestionar participantes de torneo.

## Lista de comandos

### 1) Registrar participante

`/tournament participant register <username>`

- Registra a un jugador conectado como participante.
- Guarda una snapshot de su equipo competitivo actual.
- Si el jugador no esta conectado, falla.
- Si ya existe ese participante, falla.
- Si el jugador ya esta asociado a otro participante, falla.

### 2) Eliminar participante

`/tournament participant remove <username>`

- Elimina un participante registrado.
- Si no existe, falla.

### 3) Verificar participante

`/tournament participant check <username> [required]`

- Compara el equipo actual del jugador conectado contra el equipo guardado al registrarlo.
- Sin `required`, exige coincidencia completa (mismo comportamiento de siempre).
- Con `required`, exige que coincidan al menos esa cantidad de Pokemon registrados (por ejemplo, `4`).
- `required` acepta valores entre `1` y `6`.
- Si `required` es mayor que los Pokemon registrados del participante, falla.
- Si coincide, responde exito e indica cuantas coincidencias hubo y el minimo requerido.
- Si no coincide, devuelve la lista de diferencias detectadas.
- Si el jugador no esta conectado, falla.
- Si el jugador no tiene participante registrado, falla.

### 4) Ver detalle de participante

`/tournament participant view <username>`

- Muestra un resumen del participante registrado.
- Incluye slots ocupados/vacios y datos detallados por Pokemon:
  - Especie
  - Forma
  - Nivel
  - Habilidad
  - Naturaleza
  - Objeto
  - Genero
  - Movimientos
  - IVs
  - EVs
- Si no existe el participante, falla.

### 5) Limpiar torneo

`/tournament clear`

- Borra todos los participantes del torneo.
- Devuelve cuantos participantes se eliminaron.

## Notas de funcionamiento

- El registro se guarda en el mundo del servidor en `conquest_mod/tournament_participants.json`.
- Los nombres de participante se normalizan en minusculas para comparacion interna.
- La verificacion compara:
  - Cantidad de Pokemon ocupando slots (cuando no se usa `required` o se exige coincidencia completa).
  - Especie, forma, nivel, habilidad, naturaleza, objeto y genero.
  - IVs y EVs.
  - Movimientos (comparados tras ordenar para evitar diferencias solo por orden).

## Ejemplos de uso

- `/tournament participant register albercl`
- `/tournament participant view albercl`
- `/tournament participant check albercl`
- `/tournament participant check albercl 4`
- `/tournament participant remove albercl`
- `/tournament clear`
