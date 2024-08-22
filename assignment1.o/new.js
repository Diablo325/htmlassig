const button = document.getElementById("btn");

button.addEventListener("click", event =>{
    const rownum = parseInt(document.getElementById("row").value);
    const colnum = parseInt(document.getElementById("col").value);
    const table = document.getElementById("table");
    table.innerHTML = ""; 
    //row
    const rowhead = document.createElement("tr"); 
    table.appendChild(rowhead);

    const emptycell = document.createElement("th");
    emptycell.style.border = "none";
    rowhead.appendChild(emptycell);

    for (let i = 0; i < colnum; i++) {
        const heading = document.createElement("th");
        //heading
        const headingContent = document.createElement("div");
        headingContent.textContent = "Heading " + (i + 1);
        headingContent.classList.add("head_div");
        heading.classList.add("heading");
        headingContent.setAttribute("contenteditable", "true");
        //delete button
        const heading_delete = document.createElement("button");
        heading_delete.textContent = "X";
        heading_delete.classList.add("delete-btn");
        
        heading_delete.addEventListener("click", () => {
            const columnIndex = Array.from(rowhead.children).indexOf(heading);
            rowhead.removeChild(heading);
            
            const rows = table.getElementsByTagName("tr");
            for (let j = 1; j < rows.length; j++) {
                rows[j].removeChild(rows[j].children[columnIndex]);
            }
        });
       
        heading.appendChild(heading_delete);
        heading.append(headingContent);
        rowhead.appendChild(heading);
    }


    for(let i = 0; i < rownum; i++) {

        const row = document.createElement("tr");
        //delete button
        const delete_button = document.createElement("button");
        delete_button.textContent = "X";
        delete_button.classList.add("delete-btn");
        delete_button.addEventListener("click", event =>{
             row.remove();
        });

        const deleteCell = document.createElement("td");
        deleteCell.style.border = "none";
        deleteCell.appendChild(delete_button);
        row.appendChild(deleteCell);
        //table data
        for(let j = 0; j < colnum; j++) {
            const col = document.createElement("td");
            col.textContent = `Column ${j + 1}`;
            col.setAttribute("contenteditable","true");
            row.appendChild(col);
        }
        table.appendChild(row);
   
        
    }
});