// Skript pro zainjektování do všech webových stránek

// Copyright (c) 2023 FandiSoft
/* Projekt Injectorjs je šablonou pro injektování kódu javascriptu do všech stránek pro
prohlížeč Google Chrome

Pod licencí MIT

*/
// Zde je volný prostor pro kód javascriptu:
import {StellarVue} from "./modules/stellarvue"

StellarVue.inject("<h1>Hello world!</h1>")
