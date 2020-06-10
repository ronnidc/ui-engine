export function gallery() {
    alert('Hello at The Gallery');
    console.log('Thank you very much for clicking on the Gallery alert box ok button');
}

export function testtesttest() {
    alert(testingtesting);
}
// Make it global: 
window.gallery = gallery;
window.testtesttest = testtesttest;