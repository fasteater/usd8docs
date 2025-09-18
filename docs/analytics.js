//here we manually creates tags and insert the js into the final html.

//for google analytics
var s = document.createElement('script');
s.async = true;
s.src = 'https://www.googletagmanager.com/gtag/js?id=G-L93KXXWJFX';
document.head.appendChild(s);

var s2 = document.createElement('script');
s2.innerHTML = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-L93KXXWJFX');
`;
document.head.appendChild(s2);

//for twitter pixel
var s3 = document.createElement('script');
s3.innerHTML = `!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
twq('config','qhzoq');
`;
document.head.appendChild(s3);