
const boundary = document.querySelector(".boundary");

for(let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.className = "grid";
    boundary.appendChild(div);
}

function execute() {
    const grid_count = document.querySelector("#count");
    let x = grid_count.value;

    if(x > 100 || x < 1) {
        alert("Incorrect value entered.");
        return;
    }
    
    if(x >= 1 && x <= 100) {

        var grid = document.getElementsByClassName('grid');

        while(grid[0]) {
            grid[0].parentNode.removeChild(grid[0]);
        }

        for(let j = 0; j < x**(2); j++) {
            const div = document.createElement('div');
            div.className = "grid";
            boundary.appendChild(div);
        }
        

        boundary.style.setProperty('grid-template-columns', 'repeat(' + x + ', 1fr)');
        boundary.style.setProperty('grid-template-rows', 'repeat(' + x + ', 1fr)');

        const grid1= document.querySelectorAll('.grid');

        grid1.forEach((g) => {

            g.addEventListener('mouseover', () => {
    
                g.setAttribute('style', 'background-color: black;')

            });
        });
        
    }
}

const grid1= document.querySelectorAll('.grid');

grid1.forEach((g) => {

    g.addEventListener('mouseover', () => {
    
        g.setAttribute('style', 'background-color: black;')

    });
});