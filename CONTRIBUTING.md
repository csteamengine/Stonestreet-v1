##Contributing

Since this site is set up to use subdomains, each folder:

- about/
- contact/
- portfolio/

contains its own index.html as well as it's own css file.

Do all the editing you want, and when you are done, build.

After building, copy the contents of the build directory into
the Production/ directory. After doing that, make sure all links
are absolute links to the home directory of the website if need be.

Test everything out, and push up to git.

Next, synchronize the Production directory with the one on Bluehost
using your choice of FTP, I use CyberDuck.

#IMPORTANT!

Since all the links in the header and footer are absolute, you cannot
navigate the local site using them. They will take you to the live website.
they are set that way because the site is set up to use subdomains and the only way
to get to a subdomain is by using its actual url.

Therefore, to navigate you must to

`$ pub get`

`$ pub serve`

Next, go to 'localhost:8080'

This will take you to the home page.

if you want to visit, for example, the about page, you must type:

'localhost:8080/about/'

Essentially add whatever directory you wish to view onto the end of
localhost:8080.

