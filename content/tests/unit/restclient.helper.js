$(function () {
  module("restclient.helper.js")
    
  test("Test URL parsing", function () {
    var url =  "http://jblas:password@mycompany.com:8080/mail/inbox?msg=1234&type=unread#msg-content";
    var parts = restclient.helper.parseUrl(url);
    
    ok(parts["scheme"] === "http", "result:" + JSON.stringify(parts));
    ok(parts["hostname"] === "mycompany.com", "result:" + parts["hostname"]);
  })

  test("Test makeUrlAbsolute function", function() {
    var absUrl = restclient.helper.makeUrlAbsolute("file.html", "http://foo.com/a/b/c/test.html");
    ok(absUrl === "http://foo.com/a/b/c/file.html");
    
    absUrl = restclient.helper.makeUrlAbsolute("../../foo/file.html", "http://foo.com/a/b/c/test.html");
    ok(absUrl === "http://foo.com/a/foo/file.html");
    
    absUrl = restclient.helper.makeUrlAbsolute("//foo.com/bar/file.html", "http://foo.com/a/b/c/test.html");
    ok(absUrl === "http://foo.com/bar/file.html");
    
    absUrl = restclient.helper.makeUrlAbsolute("?a=1&b=2", "http://foo.com/a/b/c/test.html");
    ok(absUrl === "http://foo.com/a/b/c/test.html?a=1&b=2");
  })

})