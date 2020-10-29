# react-login
### A react authentication flow demo and learning tutorial

This is my attempt to learn how to do a simple login application in react. 
This is also part of a blog post I'm writing so the commits and tags
are done with that in mind.

Most of the react tutorials about this assume you know how React works inside
and out but I think the most common application to start learning a framework
would be a real one so the best way to start to learn React is with a login 
form that lets you access a secured application with some sort of 
authentication.

This is very basic code so keep in mind that's not ready for any production
use.

### Installation

For the router to work on manual page refreshes is necessary to
configure the web server to redirect all 404 error pages to the
`index.html` file.

If using `Apache` there's an `.htaccess` provided in the public directory.

If using `Nginx` modify the site `.conf`:

```
location / {
  if (!-e $request_filename){
    rewrite ^(.*)$ /index.html break;
  }
}
```

If using `Express`:

``` javascript
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'path/to/your/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
```