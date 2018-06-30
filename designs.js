// Select size input
// Select color input

// When size is submitted by the user, call makeGrid()

/* The function makeGrid() is used to create a grid for the pixel art */
function makeGrid () {
    $("table tr").remove(); //This clears the previously created grid before a new one is created.

    const rows = $("#inputHeight").val(); // The number of rows equals the grid height.
    const columns = $("#inputWidth").val(); // The number of columns equals the grid width.

    /* A for loop is used to create a row and for each row,a for loop is again used to create 
     a number of columns*/
    for (let x=1;x<=rows;x++) {
        $("table").append("<tr></tr>");
        for (let y=1;y<=columns;y++) {
             $("tr:last").append("<td></td>");//This makes sure that cell is appended to the last row.
             $("td").attr("class","clickedPixel");// The class "clickedPixel" is added to the cell.
        };
    };
}

/* The form submit default action is "hijacked" to prevent it from refreshing the page,and used to 
 make a grid */
$("#sizePicker").submit(function (event) {
    event.preventDefault(); //Prevent default action.
    makeGrid();
});

/* The table's cell with the id "clickedPixel" is listened for a "click" event which will change the 
background colour of the cell*/
$("#pixelCanvas").on("click",".clickedPixel",function() {
    let paint = $('#colorPicker').val(); //paint equals the colour chosen.
    $(this).css('background-color', paint);//The background colour of the cell is changed to the value of paint
});

/* This added functionality enables a mistake in clicking the wrong cell to be corrected by attaching the 
 event listener "dblclick" (double click) to the table's cell, the color of the cell is reverted back to 
 the default color of the table*/
$("#pixelCanvas").on("dblclick",".clickedPixel",function() {
    $(this).css('background-color', "white");
});

/* As soon as the DOM becomes fully loaded, a grid of unit height and unit width is created*/
$(makeGrid());
