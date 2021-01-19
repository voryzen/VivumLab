(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(3),a=n(7),r=(n(0),n(229)),b={id:"piwigo",title:"Piwigo",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"Piwigo",custom_edit_url:"https://github.com/VivumLab/VivumLab/issues/new?template=documentation.md"},o={unversionedId:"software/piwigo",id:"software/piwigo",isDocsHomePage:!1,title:"Piwigo",description:"Piwigo",source:"@site/docs/software/piwigo.md",slug:"/software/piwigo",permalink:"/docs/software/piwigo",editUrl:"https://github.com/VivumLab/VivumLab/issues/new?template=documentation.md",version:"current",sidebar_label:"Piwigo",sidebar:"docs",previous:{title:"Pi-hole",permalink:"/docs/software/pihole"},next:{title:"Pixelfed",permalink:"/docs/software/pixelfed"}},l=[{value:"Information",id:"information",children:[]},{value:"SETUP",id:"setup",children:[{value:"Enabling piwigo",id:"enabling-piwigo",children:[]}]},{value:"FIRST RUN",id:"first-run",children:[{value:"SMTP/ MAIL",id:"smtp-mail",children:[]}]},{value:"ACCESS",id:"access",children:[]},{value:"OPTIONS",id:"options",children:[{value:"HTTPS_ONLY",id:"https_only",children:[]},{value:"AUTH",id:"auth",children:[]},{value:"DOMAIN",id:"domain",children:[]},{value:"SUBDOMAIN",id:"subdomain",children:[]},{value:"VERSION",id:"version",children:[]}]},{value:"Need more help?",id:"need-more-help",children:[]}],c={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"piwigo"},"Piwigo"),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://piwigo.org/"}),"Piwigo")," is a home inventory managament system."),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"https://img.shields.io/badge/untested-amd64-inactive?style=flat",alt:"amd64"}))," ",Object(r.b)("br",null),"\n",Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"https://img.shields.io/badge/untested-arm64-inactive?style=flat",alt:"arm64"}))," ",Object(r.b)("br",null),"\n",Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"https://img.shields.io/badge/untested-armv7-inactive?style=flat",alt:"armv7"}))," ",Object(r.b)("br",null)),Object(r.b)("h2",{id:"information"},"Information"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Docker Image:")," !!! LINK TO DOCKER IMAGE/ DOCKER HUB !!! ",Object(r.b)("br",null),"\n",Object(r.b)("strong",{parentName:"p"},"Current Image Version:")," latest"),Object(r.b)("h2",{id:"setup"},"SETUP"),Object(r.b)("h3",{id:"enabling-piwigo"},"Enabling piwigo"),Object(r.b)("h4",{id:"command"},"Command:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"vlab set piwigo.enable True"))),Object(r.b)("h4",{id:"file-alteration"},"File alteration:"),Object(r.b)("p",null,"set the appropriate service settings in ",Object(r.b)("inlineCode",{parentName:"p"},"settings/config.yml")," to true"),Object(r.b)("p",null,"eg."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"piwigo\n  enable: True\n")),Object(r.b)("h4",{id:"finalising-changes"},"Finalising changes:"),Object(r.b)("p",null,"run: ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"vlab update_one service=piwigo"))),Object(r.b)("h2",{id:"first-run"},"FIRST RUN"),Object(r.b)("p",null,"!!! ",Object(r.b)("strong",{parentName:"p"},"DEVELOPERS"),": make sure that you include any information that the user requires to get started, below. !!! ",Object(r.b)("br",null),"\n!!! Below are some ",Object(r.b)("strong",{parentName:"p"},"examples")," with headings, and with some ",Object(r.b)("strong",{parentName:"p"},"example")," instructions !!!"),Object(r.b)("h4",{id:"administrator-setup"},"ADMINISTRATOR SETUP"),Object(r.b)("p",null,"Navigate to ",Object(r.b)("em",{parentName:"p"},"https://False/admin")),Object(r.b)("p",null,"Create an account with your desired username; as this is the first user, piwigo makes this account the administrator."),Object(r.b)("h3",{id:"smtp-mail"},"SMTP/ MAIL"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"run ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"vlab decrypt"))," to decrypt the ",Object(r.b)("inlineCode",{parentName:"li"},"vault.yml")," file"),Object(r.b)("li",{parentName:"ol"},"make some changes")),Object(r.b)("h4",{id:"smtp-settings"},"SMTP Settings"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"smtp:\n  host:\n  port:\n  user:\n  pass:\n  from_email:\n  from_name:\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"run ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"vlab update_one service=piwigo"))," to complete the changes")),Object(r.b)("h2",{id:"access"},"ACCESS"),Object(r.b)("p",null,"piwigo (HTTPS) link: ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://piwigo.vivumlab.xyz/"}),"https://piwigo.vivumlab.xyz/"),"\npiwigo (HTTP) link: ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"http://piwigo.vivumlab.xyz/"}),"http://piwigo.vivumlab.xyz/")),Object(r.b)("h2",{id:"options"},"OPTIONS"),Object(r.b)("h3",{id:"https_only"},"HTTPS_ONLY"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Default: False")," ",Object(r.b)("br",null),"\n",Object(r.b)("em",{parentName:"p"},"Options: True/False")),Object(r.b)("h4",{id:"command-1"},"Command:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"vlab set piwigo.https_only True"))),Object(r.b)("h4",{id:"file-alteration-1"},"File alteration:"),Object(r.b)("p",null,"set the appropriate service settings in ",Object(r.b)("inlineCode",{parentName:"p"},"settings/config.yml")," to true"),Object(r.b)("p",null,"eg."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"piwigo\n  https_only: True\n")),Object(r.b)("h5",{id:"finalising-changes-1"},"Finalising changes:"),Object(r.b)("p",null,"run: ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"vlab update_one service=piwigo"))),Object(r.b)("h3",{id:"auth"},"AUTH"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Default: False")," ",Object(r.b)("br",null),"\n",Object(r.b)("em",{parentName:"p"},"Options: True/False")),Object(r.b)("h4",{id:"command-2"},"Command:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"vlab set piwigo.auth True"))),Object(r.b)("h4",{id:"file-alteration-2"},"File alteration:"),Object(r.b)("p",null,"set the appropriate service settings in ",Object(r.b)("inlineCode",{parentName:"p"},"settings/config.yml")," to true"),Object(r.b)("p",null,"eg."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"piwigo\n  auth: True\n")),Object(r.b)("h5",{id:"finalising-changes-2"},"Finalising changes:"),Object(r.b)("p",null,"run: ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"vlab update_one service=piwigo"))),Object(r.b)("h3",{id:"domain"},"DOMAIN"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Default: False")," ",Object(r.b)("br",null),"\n",Object(r.b)("em",{parentName:"p"},"NOTE: include the sitename and top level domain suffix. eg. name.com, site.net")),Object(r.b)("h4",{id:"command-3"},"Command:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"vlab set piwigo.domain piwigo.com"))),Object(r.b)("h4",{id:"file-alteration-3"},"File alteration:"),Object(r.b)("p",null,"set the appropriate service settings in ",Object(r.b)("inlineCode",{parentName:"p"},"settings/config.yml")," to true"),Object(r.b)("p",null,"eg."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"piwigo\n  domain: piwigo.com\n")),Object(r.b)("h5",{id:"finalising-changes-3"},"Finalising changes:"),Object(r.b)("p",null,"run: ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"vlab update_one service=piwigo"))),Object(r.b)("h3",{id:"subdomain"},"SUBDOMAIN"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Default: piwigo")," ",Object(r.b)("br",null),"\n",Object(r.b)("em",{parentName:"p"},"NOTE: Periods/ delimiters are not required. eg. 'media' will set the full URL as 'media.vivumlab.xyz'")),Object(r.b)("h4",{id:"command-4"},"Command:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"vlab set piwigo.subdomain media"))),Object(r.b)("h4",{id:"file-alteration-4"},"File alteration:"),Object(r.b)("p",null,"set the appropriate service settings in ",Object(r.b)("inlineCode",{parentName:"p"},"settings/config.yml")," to true"),Object(r.b)("p",null,"eg."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"piwigo\n  subdomain: media\n")),Object(r.b)("h5",{id:"finalising-changes-4"},"Finalising changes:"),Object(r.b)("p",null,"run: ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"vlab update_one service=piwigo"))),Object(r.b)("h3",{id:"version"},"VERSION"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Default: latest")," ",Object(r.b)("br",null),"\n",Object(r.b)("em",{parentName:"p"},"NOTE: Ensure that the version exists")),Object(r.b)("h4",{id:"command-5"},"Command:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"vlab set piwigo.version 2.7"))),Object(r.b)("h4",{id:"file-alteration-5"},"File alteration:"),Object(r.b)("p",null,"set the appropriate service settings in ",Object(r.b)("inlineCode",{parentName:"p"},"settings/config.yml")," to true"),Object(r.b)("p",null,"eg."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"piwigo\n  version: 2.7\n")),Object(r.b)("h5",{id:"finalising-changes-5"},"Finalising changes:"),Object(r.b)("p",null,"run: ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"vlab update_one service=piwigo"))),Object(r.b)("h2",{id:"need-more-help"},"Need more help?"),Object(r.b)("p",null,"Further information regarding services can be found. ",Object(r.b)("br",null),"\nGeneral Information can be found in the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://vivumlab.com/docs"}),"documentation"),". ",Object(r.b)("br",null),"\nAdditional assistance can be found on our ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://vivumlab.com/docs/contact"}),"Contact Us")," page."))}p.isMDXComponent=!0},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,b=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=i,O=s["".concat(b,".").concat(u)]||s[u]||m[u]||r;return n?a.a.createElement(O,o(o({ref:t},c),{},{components:n})):a.a.createElement(O,o({ref:t},c))}));function O(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,b=new Array(r);b[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,b[1]=o;for(var c=2;c<r;c++)b[c]=n[c];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);