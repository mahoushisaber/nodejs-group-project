// $.ajax({
//     type: 'POST',
//     url: 'signup',
//     data: '{"data": "TEST"}',
//     success: function (data) {
//         var ret = jQuery.parseJSON(data);
//         $('#lblResponse').html(ret.msg);
//     },
//     error: function (xhr, status, error) {
//         console.log('Error: ' + error.message);
//         $('#lblResponse').html('Error connecting to the server.');
//     }
// });