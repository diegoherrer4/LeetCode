// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


function domainName(url) {
    // Remove common keywords: "http://", "https://", "www."
    url = url.replace("http://", "").replace("https://", "").replace("www.", "")
  
    // Split the remaining URL by '.' and take the first part
    let parts = url.split(".");
    let domain = parts[0];
  
    return domain;
  }
  