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

    // Create a new row
    const table = document.querySelector('table');
    const newRow = document.createElement('tr');
    
    // Create a single cell for the total price
    const totalCell = document.createElement('td');
    totalCell.colSpan = 2;  // Span the cell across 2 columns
    totalCell.textContent = `Total Price: Rs ${totalSum}`;
    
    // Append the cell to the new row
    newRow.appendChild(totalCell);
    
    // Append the new row to the table
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
