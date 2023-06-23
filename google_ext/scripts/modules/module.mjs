export function show_default_message() {
    console.log("Úspěšně injektováno do prohlížeče!")
}


export function show_popup_message() {
    alert("Úspěšně injektováno do prohlížeče")
}


export function showImage(url) {
    document.write("<img src="+url+"/>")
}