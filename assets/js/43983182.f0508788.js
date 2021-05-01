(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{77:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return u}));var n=t(3),a=t(7),i=(t(0),t(86)),o={title:"Vsftpd Ubuntu 20.04"},s={unversionedId:"Servidores/FTP/vsftpd_ubuntu20",id:"Servidores/FTP/vsftpd_ubuntu20",isDocsHomePage:!1,title:"Vsftpd Ubuntu 20.04",description:"Instalaci\xf3n",source:"@site/docs/Servidores/FTP/vsftpd_ubuntu20.md",sourceDirName:"Servidores/FTP",slug:"/Servidores/FTP/vsftpd_ubuntu20",permalink:"/documentation/Servidores/FTP/vsftpd_ubuntu20",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Servidores/FTP/vsftpd_ubuntu20.md",version:"current",frontMatter:{title:"Vsftpd Ubuntu 20.04"},sidebar:"tutorialSidebar",previous:{title:"Referencia",permalink:"/documentation/Microservicios/Docker/0referencia"}},c=[{value:"Instalaci\xf3n",id:"instalaci\xf3n",children:[]},{value:"Iniciar y parar",id:"iniciar-y-parar",children:[]},{value:"Configuraci\xf3n /etc/vsftpd.conf",id:"configuraci\xf3n-etcvsftpdconf",children:[{value:"Par\xe1metros m\xe1s importantes",id:"par\xe1metros-m\xe1s-importantes",children:[]}]},{value:"Agregar un usuario",id:"agregar-un-usuario",children:[]},{value:"Otras configuraciones",id:"otras-configuraciones",children:[{value:"Habilitar FTPS",id:"habilitar-ftps",children:[]},{value:"Otras directivas para SSL/TLS",id:"otras-directivas-para-ssltls",children:[]}]},{value:"Puertos PASV (conexi\xf3n de control)",id:"puertos-pasv-conexi\xf3n-de-control",children:[]},{value:"Propietario y permisos",id:"propietario-y-permisos",children:[]},{value:"Ejemplo para el directorio /var/www/html",id:"ejemplo-para-el-directorio-varwwwhtml",children:[]}],l={toc:c};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"instalaci\xf3n"},"Instalaci\xf3n"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"sudo apt install vsftpd")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"iniciar-y-parar"},"Iniciar y parar"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"sudo service vsftpd stop\nsudo service vsftpd reload\nsudo service vsftpd restart\nsudo service vsftpd status\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"configuraci\xf3n-etcvsftpdconf"},"Configuraci\xf3n /etc/vsftpd.conf"),Object(i.b)("h3",{id:"par\xe1metros-m\xe1s-importantes"},"Par\xe1metros m\xe1s importantes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"write_enable=YES"),". Habilitar la escritura"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"local_umask=022"),". Nuevos permisos para los datos copiados al servidor. Por defecto es 077"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ftpd_banner"),". Habilitar un banner de inicio de sesi\xf3n"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"chroot_list_enable=YES"),". Los usuarios solo acceden dentro de su directorio /home/usuario"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"chroot_list_file=/etc/vsftpd.chroot_list"),". Lista de usuarios con sus rutas predeterminadas (poner un nombre de usuario por l\xednea)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"anonymousenable=NO"),". Deshabilita usuarios an\xf3nimos"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"anon_upload_enable=YES"),". Habilitar/Deshabilitar subida de archivos por usuarios an\xf3nimos")),Object(i.b)("h2",{id:"agregar-un-usuario"},"Agregar un usuario"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"sudo adduser rubenfgr")),Object(i.b)("p",null,"En este momento ya se puede acceder al servidor con el usuario y contrase\xf1a creado"),Object(i.b)("h2",{id:"otras-configuraciones"},"Otras configuraciones"),Object(i.b)("h3",{id:"habilitar-ftps"},"Habilitar FTPS"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ssl_enable=YES")),Object(i.b)("p",null,"En este momento ya se puede acceder por SSL/TLS ya que en la instalaci\xf3n de vsftps, por defecto, genera los certificados RSA necesarios."),Object(i.b)("h3",{id:"otras-directivas-para-ssltls"},"Otras directivas para SSL/TLS"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"llow_anon_ssl=NO\nforce_local_data_ssl=YES\nforce_local_logins_ssl=YES\nssl_tlsv1_1=NO\nssl_tlsv1_2=YES\nssl_tlsv1_3=YES\nssl_tlsv1=NO\nssl_sslv2=NO\nssl_sslv3=NO\nrequire_ssl_reuse=YES\nssl_ciphers=HIGH\n")),Object(i.b)("h2",{id:"puertos-pasv-conexi\xf3n-de-control"},"Puertos PASV (conexi\xf3n de control)"),Object(i.b)("p",null,"Importante si se quieren habilitar los puertos en el cortafuegos"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"pasv_max_port=10000\npasv_min_port=9000\n")),Object(i.b)("h2",{id:"propietario-y-permisos"},"Propietario y permisos"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"# Cambiar el propietario\nsudo chown user:user directorio|fichero\nsudo chown -R user:user directorio # recursivo\n# Permisos\nsudo chmod 777 directorio|fichero\nsudo chmod 777 -R directorio # recursivo\n")),Object(i.b)("h2",{id:"ejemplo-para-el-directorio-varwwwhtml"},"Ejemplo para el directorio /var/www/html"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"# Ajustamos propietario y grupo (habitualmente ser\xe1 www-data)\nchown -R www-data:www-data /var/www/html/\n# Ajustamos permisos en ficheros y directorios\nfind /var/www/html/ -type d -exec chmod 0755 {} \\;   # rwxr-xr-x\nfind /var/www/html/ -type f -exec chmod 0644 {} \\;   # rw-r--r--\n")))}u.isMDXComponent=!0},86:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=u(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),b=n,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return t?a.a.createElement(m,s(s({ref:r},l),{},{components:t})):a.a.createElement(m,s({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=b;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);