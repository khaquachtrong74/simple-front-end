window.onload = function(){
    let flg = true;
    let docBody = document.body;
    let btn_change_view = document.querySelector('span#c_view');
    let div_two_items = document.getElementById('two_items');
    let h1_two_items = document.querySelector('h1');
    let a_two_items = document.querySelector('a');
    btn_change_view.addEventListener('click',() => {
        if(flg){
            docBody.setAttribute("style","color:white; background-color: black !important; transition: background-color .8s ease");
            div_two_items.setAttribute('style','background-color:black;transition: background-color .8s ease');
            h1_two_items.style.color = 'white';
            
            btn_change_view.textContent = '🌚';
            flg = false;
        }
        else{
            docBody.setAttribute("style","color:black; background-color: white !important; transition: none");
            btn_change_view.textContent = '🌞';
            div_two_items.setAttribute('style','background-color:white; background-color none');
            h1_two_items.style.color = 'black';
            
            flg = true; 
        }
    });
    document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    });
    });

}