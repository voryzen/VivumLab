(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),c=(n(0),n(229)),r={id:"system-cockpit",title:"Cockpit",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"Cockpit",custom_edit_url:"https://github.com/VivumLab/VivumLab/issues/new?template=documentation.md"},b={unversionedId:"software/system-cockpit",id:"software/system-cockpit",isDocsHomePage:!1,title:"Cockpit",description:"Cockpit",source:"@site/docs/software/system-cockpit.md",slug:"/software/system-cockpit",permalink:"/docs/software/system-cockpit",editUrl:"https://github.com/VivumLab/VivumLab/issues/new?template=documentation.md",version:"current",sidebar_label:"Cockpit",sidebar:"docs",previous:{title:"Synchthing",permalink:"/docs/software/syncthing"},next:{title:"Taisun",permalink:"/docs/software/taisun"}},o=[{value:"Information",id:"information",children:[]},{value:"SETUP",id:"setup",children:[{value:"Enabling cockpit",id:"enabling-cockpit",children:[]}]},{value:"FIRST RUN",id:"first-run",children:[{value:"SMTP/ MAIL",id:"smtp-mail",children:[]}]},{value:"ACCESS",id:"access",children:[]},{value:"OPTIONS",id:"options",children:[{value:"HTTPS_ONLY",id:"https_only",children:[]},{value:"AUTH",id:"auth",children:[]},{value:"DOMAIN",id:"domain",children:[]},{value:"SUBDOMAIN",id:"subdomain",children:[]},{value:"VERSION",id:"version",children:[]}]},{value:"Need more help?",id:"need-more-help",children:[]}],l={rightToc:o};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"cockpit"},"Cockpit"),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://cockpit-project.org"}),"Cockpit")," Cockpit admin interface package for configuring and troubleshooting a system"),Object(c.b)("h2",{id:"information"},"Information"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Docker Image:")," !!! LINK TO DOCKER IMAGE/ DOCKER HUB !!! ",Object(c.b)("br",null),"\n",Object(c.b)("strong",{parentName:"p"},"Current Image Version:")," None"),Object(c.b)("h2",{id:"setup"},"SETUP"),Object(c.b)("h3",{id:"enabling-cockpit"},"Enabling cockpit"),Object(c.b)("h4",{id:"command"},"Command:"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"vlab set cockpit.enable True"))),Object(c.b)("h4",{id:"file-alteration"},"File alteration:"),Object(c.b)("p",null,"set the appropriate service settings in ",Object(c.b)("inlineCode",{parentName:"p"},"settings/config.yml")," to true"),Object(c.b)("p",null,"eg."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"cockpit\n  enable: True\n")),Object(c.b)("h4",{id:"finalising-changes"},"Finalising changes:"),Object(c.b)("p",null,"run: ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"vlab update_one service=cockpit"))),Object(c.b)("h2",{id:"first-run"},"FIRST RUN"),Object(c.b)("p",null,"!!! ",Object(c.b)("strong",{parentName:"p"},"DEVELOPERS"),": make sure that you include any information that the user requires to get started, below. !!! ",Object(c.b)("br",null),"\n!!! Below are some ",Object(c.b)("strong",{parentName:"p"},"examples")," with headings, and with some ",Object(c.b)("strong",{parentName:"p"},"example")," instructions !!!"),Object(c.b)("h4",{id:"administrator-setup"},"ADMINISTRATOR SETUP"),Object(c.b)("p",null,"Navigate to ",Object(c.b)("em",{parentName:"p"},"https://False/admin")),Object(c.b)("p",null,"Create an account with your desired username; as this is the first user, cockpit makes this account the administrator."),Object(c.b)("h3",{id:"smtp-mail"},"SMTP/ MAIL"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"run ",Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"vlab decrypt"))," to decrypt the ",Object(c.b)("inlineCode",{parentName:"li"},"vault.yml")," file"),Object(c.b)("li",{parentName:"ol"},"make some changes")),Object(c.b)("h4",{id:"smtp-settings"},"SMTP Settings"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"smtp:\n  host:\n  port:\n  user:\n  pass:\n  from_email:\n  from_name:\n")),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},"run ",Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"vlab update_one service=cockpit"))," to complete the changes")),Object(c.b)("h2",{id:"access"},"ACCESS"),Object(c.b)("p",null,"cockpit (HTTPS) link: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://cockpit.vivumlab.xyz/"}),"https://cockpit.vivumlab.xyz/"),"\ncockpit (HTTP) link: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://cockpit.vivumlab.xyz/"}),"http://cockpit.vivumlab.xyz/")),Object(c.b)("h2",{id:"options"},"OPTIONS"),Object(c.b)("h3",{id:"https_only"},"HTTPS_ONLY"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Default: False")," ",Object(c.b)("br",null),"\n",Object(c.b)("em",{parentName:"p"},"Options: True/False")),Object(c.b)("h4",{id:"command-1"},"Command:"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"vlab set cockpit.https_only True"))),Object(c.b)("h4",{id:"file-alteration-1"},"File alteration:"),Object(c.b)("p",null,"set the appropriate service settings in ",Object(c.b)("inlineCode",{parentName:"p"},"settings/config.yml")," to true"),Object(c.b)("p",null,"eg."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"cockpit\n  https_only: True\n")),Object(c.b)("h5",{id:"finalising-changes-1"},"Finalising changes:"),Object(c.b)("p",null,"run: ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"vlab update_one service=cockpit"))),Object(c.b)("h3",{id:"auth"},"AUTH"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Default: False")," ",Object(c.b)("br",null),"\n",Object(c.b)("em",{parentName:"p"},"Options: True/False")),Object(c.b)("h4",{id:"command-2"},"Command:"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"vlab set cockpit.auth True"))),Object(c.b)("h4",{id:"file-alteration-2"},"File alteration:"),Object(c.b)("p",null,"set the appropriate service settings in ",Object(c.b)("inlineCode",{parentName:"p"},"settings/config.yml")," to true"),Object(c.b)("p",null,"eg."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"cockpit\n  auth: True\n")),Object(c.b)("h5",{id:"finalising-changes-2"},"Finalising changes:"),Object(c.b)("p",null,"run: ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"vlab update_one service=cockpit"))),Object(c.b)("h3",{id:"domain"},"DOMAIN"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Default: False")," ",Object(c.b)("br",null),"\n",Object(c.b)("em",{parentName:"p"},"NOTE: include the sitename and top level domain suffix. eg. name.com, site.net")),Object(c.b)("h4",{id:"command-3"},"Command:"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"vlab set cockpit.domain cockpit.com"))),Object(c.b)("h4",{id:"file-alteration-3"},"File alteration:"),Object(c.b)("p",null,"set the appropriate service settings in ",Object(c.b)("inlineCode",{parentName:"p"},"settings/config.yml")," to true"),Object(c.b)("p",null,"eg."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"cockpit\n  domain: cockpit.com\n")),Object(c.b)("h5",{id:"finalising-changes-3"},"Finalising changes:"),Object(c.b)("p",null,"run: ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"vlab update_one service=cockpit"))),Object(c.b)("h3",{id:"subdomain"},"SUBDOMAIN"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Default: cockpit")," ",Object(c.b)("br",null),"\n",Object(c.b)("em",{parentName:"p"},"NOTE: Periods/ delimiters are not required. eg. 'media' will set the full URL as 'media.vivumlab.xyz'")),Object(c.b)("h4",{id:"command-4"},"Command:"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"vlab set cockpit.subdomain media"))),Object(c.b)("h4",{id:"file-alteration-4"},"File alteration:"),Object(c.b)("p",null,"set the appropriate service settings in ",Object(c.b)("inlineCode",{parentName:"p"},"settings/config.yml")," to true"),Object(c.b)("p",null,"eg."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"cockpit\n  subdomain: media\n")),Object(c.b)("h5",{id:"finalising-changes-4"},"Finalising changes:"),Object(c.b)("p",null,"run: ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"vlab update_one service=cockpit"))),Object(c.b)("h3",{id:"version"},"VERSION"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Default: None"),"\n",Object(c.b)("em",{parentName:"p"},"NOTE: Ensure that the version exists")),Object(c.b)("h4",{id:"command-5"},"Command:"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"vlab set cockpit.version 2.7"))),Object(c.b)("h4",{id:"file-alteration-5"},"File alteration:"),Object(c.b)("p",null,"set the appropriate service settings in ",Object(c.b)("inlineCode",{parentName:"p"},"settings/config.yml")," to true"),Object(c.b)("p",null,"eg."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"cockpit\n  version: 2.7\n")),Object(c.b)("h5",{id:"finalising-changes-5"},"Finalising changes:"),Object(c.b)("p",null,"run: ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"vlab update_one service=cockpit"))),Object(c.b)("h2",{id:"need-more-help"},"Need more help?"),Object(c.b)("p",null,"Further information regarding services can be found. ",Object(c.b)("br",null),"\nGeneral Information can be found in the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://vivumlab.com/docs"}),"documentation"),". ",Object(c.b)("br",null),"\nAdditional assistance can be found on our ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://vivumlab.com/docs/contact"}),"Contact Us")," page."))}p.isMDXComponent=!0},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),i=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,O=s["".concat(r,".").concat(u)]||s[u]||m[u]||c;return n?i.a.createElement(O,b(b({ref:t},l),{},{components:n})):i.a.createElement(O,b({ref:t},l))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,r=new Array(c);r[0]=u;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,r[1]=b;for(var l=2;l<c;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);