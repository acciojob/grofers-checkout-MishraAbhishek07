const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Get all elements with the class "price"
    const priceElements = document.querySelectorAll('.price');
    
    // Initialize total sum
    let totalSum = 0;
    
    // Iterate over price elements and calculate the total sum
    priceElements.forEach(priceElement => {
        totalSum += parseFloat(priceElement.textContent);
    });

    // Check if the total row already exists
    let totalRow = document.getElementById('ans');
    if (totalRow) {
        totalRow.textContent = `Total Price: Rs ${totalSum}`;
    } else {
        // Create a new row
        const table = document.querySelector('table');
        totalRow = document.createElement('tr');
        
        // Create a single cell for the total price
        const totalCell = document.createElement('td');
        totalCell.colSpan = 2;  // Span the cell across 2 columns
        totalCell.textContent = `Total Price: Rs ${totalSum}`;
        totalCell.id = 'ans';   // Set the ID to 'ans'
        
        // Append the cell to the new row
        totalRow.appendChild(totalCell);
        
        // Append the new row to the table
        table.appendChild(totalRow);
    }
};

getSumBtn.addEventListener("click", getSum);
