// from data.js
var tableData = data;

// YOUR CODE HERE!

const tbody = d3.select("tbody");

// function to build table
function buildTable(ldata){
    // clear previous table
    tbody.html("");
    ldata.forEach((dataRow) => {
        //add an empty row to the table
        const row=tbody.append("tr");

        //add cells and values inside in the empty row
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}
 // call the function
buildTable(tableData);


function clickButton() {
    d3.event.preventDefault();
    const enterdate = d3.select("#datetime").property("value");
    let filterDateTime = tableData
    if(enterdate){
        filterDateTime = tableData.filter(row => row.datetime === enterdate);
    }
    buildTable(filterDateTime);
}

d3.selectAll("#filter-btn").on("click", clickButton);
