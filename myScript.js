/*
GUI Assignment: hw3
David Sun, UMass Lowell Computer Science, david_sun@student.uml.edu 
Copyright (c) 2023 by David Sun. All rights reserved. May be freely copied 
or excerpted for educational purposes with credit to the author. 
updated by DS on November 14, 2023 at 11:36 PM 
*/
/*
notes:
When a web page is loaded, the browser creates a Document Object Model (DOM) of the page.
With the HTML DOM, JavaScript can access and change all the elements of an HTML document.
The HTML DOM model is constructed as a tree of Objects.
With the object model, JavaScript gets all the power it needs to create dynamic HTML.
*/
document.addEventListener("DOMContentLoaded", function() {
    // Find the form element by its ID
    var form = document.querySelector("form");

    // Attach a submit event listener to the form
    form.addEventListener("submit", function (event) {
        // Prevent the default form submission, as we'll handle it with JavaScript
        event.preventDefault();


        var minColValEle = document.getElementById("minColVal").value;
        var maxColValEle = document.getElementById("maxColVal").value;
        var minRowValEle = document.getElementById("minRowVal").value;
        var maxRowValEle = document.getElementById("maxRowVal").value;
        
        // Checking inputs recieved:
        console.log("Smallest Column Value: ", minColValEle);
        console.log("Biggest Column Value: ", maxColValEle);
        console.log("Smallest Row Value: ", minRowValEle);
        console.log("Biggest Row Value: ", maxRowValEle);

        // Error handling without popup:
        var error1 = document.getElementById("error1")
        var error2 = document.getElementById("error2")
        var error3 = document.getElementById("error3")
        var error4 = document.getElementById("error4")
        // Resetting error messages
        error1.innerHTML = "";
        error2.innerHTML = "";
        error3.innerHTML = "";
        error4.innerHTML = "";
        

        var flag = 0;       // flag for representing error occurence
        // Creating a hash table for the error messages that are embedded below each input
        var hash = {};
        hash[minColValEle] = error1;
        hash[maxColValEle] = error2;
        hash[minRowValEle] = error3;
        hash[maxRowValEle] = error4;

        // Checking for errors
        for (var ele in hash) {
            console.log("ele= ", ele);
            if (isNaN(ele) || ele == "" || ele < -50 || ele > 50) {
                console.log("error at ", ele);
                hash[ele].innerHTML = "Please enter an integer number between -50 to 50.";
                flag = 1;
            } else {
                hash[ele].innerHTML = "";
            }
        }
        // Checking for more errors
        if (maxColValEle <= minColValEle) {
            console.log("here1");
            flag = 1;
            error1.innerHTML = "Please make sure this number is smaller than the Biggest Column Value.";
            error2.innerHTML = "Please make sure this number is bigger than the Smallest Column Value.";
        } 
        if (maxRowValEle <= minRowValEle) {
            console.log("here2");
            flag = 1;
            error3.innerHTML = "Please make sure this number is smaller than the Biggest Row Value.";
            error4.innerHTML = "Please make sure this number is bigger than the Smallest Row Value.";
        } 
        if (flag) {
            return false;
        } else {    // Make sure the error messages don't pop up if there are no errors
            error1.innerHTML = "";
            error2.innerHTML = "";
            error3.innerHTML = "";
            error4.innerHTML = "";
        }
        

        // Clear any previous table content by removing all the HTML content within ( <div id="tableContainer"></div> )
        tableContainer.innerHTML = "";

        // Create a new HTML table element and assign it to ( var table )
        var table = document.createElement("table");
        // Place the table inside div id="tableContainer" element in the DOM
        // tableContainer.appendChild(table);
        

        // Create the header row of the table where the leftmost cell is null
        var headerRow = document.createElement("tr");
        var nullCell = document.createElement("th");
        headerRow.appendChild(nullCell);
        for (var col = minColValEle; col <= maxColValEle; col++) {
            var cell = document.createElement("th");
            cell.textContent = col;
            headerRow.appendChild(cell);
        }
        table.appendChild(headerRow);
        

        // Generate the cells of the rest of the table
        for (var row = minRowValEle; row <= maxRowValEle; row++) {
            var tableRow = document.createElement("tr");
            var headerCell = document.createElement("td");
            headerCell.textContent = row;
            tableRow.appendChild(headerCell);
            for (var col = minColValEle; col <= maxColValEle; col++) {
                var val = col * row;
                var cell = document.createElement("td");
                cell.textContent = val;
                tableRow.appendChild(cell);
            }
            table.appendChild(tableRow);
        }
        tableContainer.appendChild(table);
    });
});



