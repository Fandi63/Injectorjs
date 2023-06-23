export var StellarVue;

import { showImage } from "./module";
import { show_default_message } from "./module";
import { show_popup_message } from "./module";


export function print(value) {
    console.log(value)
}


export function inject(element) {
    document.write(element)
}

StellarVue = inject, print, showImage, show_default_message, show_popup_message
