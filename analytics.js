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

