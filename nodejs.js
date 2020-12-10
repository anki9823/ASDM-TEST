var http=require('http');
var fs=require('fs');
var url=require('url');

 var onCreateServer =function(request,response)
 {
     var pathname=url.parse(request.url).pathname;
     fs.readFile(pathname,substring(1),
     function(err,data)
     {
         response.writeHead(200,{'Content-Type':'text/html'});
         response.write(data.toString());
         response.end()
     });
     var server=http.CreateServer(onCreateServer);
     server.listen(8081);
     console.log("Connected with http://localhost:8081");
 }