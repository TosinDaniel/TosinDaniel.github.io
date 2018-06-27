//Select the Grid Height and Grid Width, then submit.
$('#sizePicker').submit( function(event) {
    event.preventDefault();
    let row = $('#inputHeight').val();
    let column= $('#inputWidth').val();
    //The makeGrid function is called after GridHeight and Grid Width selection is submitted
    makeGrid(row,column);
});
// Function to create the dynamic table based on the Grid Height and Grid Width Selection
function makeGrid(row,column) {
    const newRow = ('<tr></tr>');
    const newColumn = ('<td></td>');
    $('tr').remove();
    for (let x=1; x<=row; x++) {
        $('#pixelCanvas').append(newRow);
        for (let y=1; y<=column; y++){
            $('tr:last').append(newColumn);
        }
    } 

    // Color the cell when it is clicked. The cell is to be colored with the color selected from the colorpicker
    $('td').click(function (event) {
        let cellColor = $('#colorPicker').val();
       $(event.target).css('background-color', cellColor);
    });
};

