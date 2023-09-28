let gridSize = 16

container = document.createElement('div')
container.classList.add('grid-container')
document.body.appendChild(container)

container.style.cssText = 'border:solid black 1px; height:800px; width:800px; display:grid'

for (i = 0; i < gridSize; i++) {
    let cellRow = document.createElement('div')
    container.appendChild(cellRow)
    container.style.cssText = `display:grid; grid-template-columns: repeat(${gridSize}, 50px);`
    cellRow.style.cssText = 'border: solid 1px black; width:50px; height:50px'
    cellRow.classList.add('cells')
    for (j = 0; j < (gridSize-1); j++) {
        let cellColumn = document.createElement('div')
        container.appendChild(cellColumn)
        container.style.cssText = `display:grid; grid-template-columns: repeat(${gridSize}, 50px);`
        cellColumn.style.cssText = 'border: solid 1px black; width:50px; height:50px'
        cellColumn.classList.add('cells')
    }
}

const gridItem = document.querySelectorAll('.cells')

gridItem.forEach(item => {
    item.addEventListener('mouseover', (e) => {
        e.target.style.cssText = 'background-color:black'
    })
});