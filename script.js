var tanggal = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
    var formattedDate = tanggal.toLocaleDateString('en-US', options);
  
    document.write("<p>" + formattedDate + "</p>");


    


