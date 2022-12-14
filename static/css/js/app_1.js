// import the data from data.js
const tableData=data;
//  Reference the HTML tabel using d3
var tbody =d3.select("tbody");

function buildTable(data){
}
// First, clear out any exisiting data
tbody.html("");

// Next, loop through each object in the data
// and a[[end a row and cells for each value in the row
data.forEach((dataRow) => {
// Append a row to the table body    
    let row = tbody.append("tr");
// Loop through each field in the dataRow and add 
// each value as a table cell (td)    
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);  
    });
});

// Set up new function Handle Click
function handleClick() {
// Grab the datetime value from the filter    
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
 // Check to see if a date was entered and filter the
// data useing the data    
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
// Rebuild the table using the filtered data
// @note: if no data was entered, then fileredData will
// just be the originial tableData
 buildTable(filteredData); 
};

 // Attached an even to listen for the form button
 d3.selectAll("#filter-btn").on("click", handleClick);

 // Build the table when the page loads
 buildTable(tableData);
 

