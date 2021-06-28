(this.webpackJsonpsaavibooks=this.webpackJsonpsaavibooks||[]).push([[0],{24:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s.n(c),n=s(17),i=s.n(n),o=(s(24),s(8)),r=s(3),l=s.p+"static/media/logo-01.6bb0e74b.png",j=s(19),b=s(1),h=function(){return Object(b.jsx)("div",{className:"nav-container",children:Object(b.jsxs)("nav",{className:"navbar",children:[Object(b.jsx)(o.b,{to:"/",style:{textDecoration:"none"},children:Object(b.jsx)("div",{id:"logo-wrapper",children:Object(b.jsx)("span",{className:"logo",children:Object(b.jsx)("img",{src:l})})})}),Object(b.jsxs)("span",{children:[Object(b.jsx)("input",{className:"search-bar",type:"text",placeholder:"Search.."}),Object(b.jsx)("span",{className:"search-icon",children:Object(b.jsx)(j.a,{})})]}),Object(b.jsx)(o.b,{to:"/home",style:{textDecoration:"none"},children:Object(b.jsx)("li",{children:"Home"})}),Object(b.jsx)(o.b,{to:"/books",style:{textDecoration:"none"},children:Object(b.jsx)("li",{children:"Books"})}),Object(b.jsx)(o.b,{to:"/about",style:{textDecoration:"none"},children:Object(b.jsx)("li",{children:"About"})})]})})},d=s(16),x=s.p+"static/media/main-img.fd76c343.png";var O=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),s=t[0],n=t[1],i=Object(c.useState)(""),o=Object(d.a)(i,2),r=o[0],l=o[1];return Object(c.useEffect)((function(){fetch("http://api.quotable.io/random").then((function(e){return e.json()})).then((function(e){n(e.content),l(e.author)}))}),[]),Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsxs)("div",{className:"landing-wrapper",children:[Object(b.jsxs)("span",{className:"quote-container",children:[Object(b.jsx)("h3",{children:"Quote of the Day:"}),Object(b.jsx)("p",{className:"quote",children:s}),Object(b.jsx)("p",{className:"author",children:r})]}),Object(b.jsx)("span",{children:Object(b.jsx)("img",{src:x})})]}),Object(b.jsx)("div",{className:"arrow-down",children:Object(b.jsx)("p",{children:"ARROW DOWN"})})]})},m=function(){return Object(b.jsx)(a.a.Fragment,{children:Object(b.jsxs)("div",{className:"book-details-container",children:[Object(b.jsx)("div",{className:"book-cover-img-container",children:Object(b.jsx)("a",{href:"/book-cover-link",target:"_blank",children:Object(b.jsx)("img",{className:"book-cover-img",alt:"book title's book cover picture"})})}),Object(b.jsxs)("div",{className:"book-info-container",children:[Object(b.jsx)("a",{href:"/book-title-link",target:"_blank",children:Object(b.jsx)("h2",{className:"book-title",children:"Book Title"})}),Object(b.jsx)("a",{href:"/book-author-link",target:"_blank",children:Object(b.jsx)("h3",{className:"book-author",children:"by author name"})}),Object(b.jsxs)("div",{className:"book-ratings-container",children:[Object(b.jsx)("span",{children:"Google rating: rating"}),Object(b.jsx)("span",{children:"Community rating: rating"}),Object(b.jsx)("span",{children:"Community ratings: number of ratings"})]}),Object(b.jsxs)("div",{className:"book-small-details-container",children:[Object(b.jsx)("div",{className:"book-year-pub",children:"published: year published"}),Object(b.jsx)("div",{className:"book-series",children:"Books series with number"}),Object(b.jsx)("div",{className:"book-lang",children:"Edition Language: language"}),Object(b.jsx)("div",{className:"book-orig-lang",children:"Original Language: orig. language"})]})]}),Object(b.jsx)("div",{className:"book-description",children:"Book description"})]})})},g=function(){return Object(b.jsx)(a.a.Fragment,{children:Object(b.jsxs)("div",{className:"book-reviews-container",children:[Object(b.jsxs)("div",{className:"user-book-review-container",children:[Object(b.jsx)("div",{className:"user-rating",children:"rating input of user"}),Object(b.jsx)("textarea",{className:"user-review-input",placeholder:"Write a review for this book"})]}),Object(b.jsxs)("div",{className:"other-users-book-review-container",children:[Object(b.jsxs)("div",{className:"other-user-details-container",children:[Object(b.jsx)("div",{className:"other-user-profile-img-container",children:Object(b.jsx)("a",{href:"/other-user-link",children:Object(b.jsx)("img",{className:"other-user-profile-img",alt:"other user's profile picture"})})}),Object(b.jsxs)("div",{className:"oher-user-name-date-container",children:[Object(b.jsx)("p",{className:"other-user-name",children:"Other user username"}),Object(b.jsx)("p",{className:"other-user-post-date",children:"date of review"})]}),Object(b.jsx)("div",{className:"other-user-rating",children:"other user's rating"})]}),Object(b.jsx)("div",{className:"other-users-book-review",children:"other user's book review text"})]})]})})},u=function(){return Object(b.jsx)(a.a.Fragment,{children:Object(b.jsxs)("div",{className:"book-container",children:[Object(b.jsx)(m,{}),Object(b.jsx)(g,{})]})})},p=function(){return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsxs)("div",{className:"books-wrapper",children:[Object(b.jsx)("h2",{className:"page-headings",children:"Books"}),Object(b.jsx)("h3",{children:"Coming soon"})]}),Object(b.jsx)(u,{})]})},k=s(11),v=function(){return Object(b.jsx)(a.a.Fragment,{children:Object(b.jsxs)("div",{className:"about-wrapper",children:[Object(b.jsx)("h2",{className:"page-headings",children:"About SAAVIBOOKS"}),Object(b.jsxs)("p",{class:"about-text",children:["We are all web development students at\xa0",Object(b.jsx)("a",{class:"dci",href:"https://digitalcareerinstitute.org/",children:"DCI (Digital Career Institute)"}),"in Berlin."]}),Object(b.jsx)("p",{children:"SAAVIBOOKS is an App using Google Books APIs to discover new books and get information about them. Our application can perform full-text searches and retrieve book information, viewability and eBook availability. So you can also manage your personal bookshelves."}),Object(b.jsx)("h3",{children:"Team Members"}),Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("a",{href:"https://github.com/svenWacker",target:"_blank",children:Object(b.jsx)(k.a,{className:"social"})}),"Sven"]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("a",{href:"https://github.com/Amopho",target:"_blank",children:Object(b.jsx)(k.a,{className:"social"})}),"Alina"]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("a",{href:"https://github.com/albaranlex",target:"_blank",children:Object(b.jsx)(k.a,{className:"social"})}),"Alex"]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("a",{href:"https://github.com/VivianeBusch-Wallace",target:"_blank",children:Object(b.jsx)(k.a,{className:"social"})}),"Vivi"]})]}),Object(b.jsx)("h3",{children:"Technologies"}),Object(b.jsxs)("div",{class:"technologies-container",children:[Object(b.jsx)("img",{src:"".concat("/SAAViBooks","/technologies/css.png"),alt:"css"}),Object(b.jsx)("img",{src:"".concat("/SAAViBooks","/technologies/github.png"),alt:"github"}),Object(b.jsx)("img",{src:"".concat("/SAAViBooks","/technologies/html-5.png"),alt:"html-5"}),Object(b.jsx)("img",{src:"".concat("/SAAViBooks","/technologies/java-script.png"),alt:"java-script"}),Object(b.jsx)("img",{src:"".concat("/SAAViBooks","/technologies/nodemon.svg"),alt:"nodemon"}),Object(b.jsx)("img",{src:"".concat("/SAAViBooks","/technologies/slack.png"),alt:"slack"}),Object(b.jsx)("img",{src:"".concat("/SAAViBooks","/technologies/vsc.png"),alt:"vsc"}),Object(b.jsx)("img",{src:"".concat("/SAAViBooks","/technologies/zoom.png"),alt:"zoom"}),Object(b.jsx)("img",{src:"".concat("/SAAViBooks","/technologies/trello.png"),alt:"trello"})]})]})})},N=function(){return Object(b.jsx)("h2",{children:"Coming Soon"})},f=function(){return Object(b.jsxs)(o.a,{children:[Object(b.jsx)(h,{}),Object(b.jsx)("div",{className:"app",children:Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{path:"/",exact:!0,component:O}),Object(b.jsx)(r.a,{path:"/home",exact:!0,component:O}),Object(b.jsx)(r.a,{path:"/SAAViBooks/",exact:!0,component:O}),Object(b.jsx)(r.a,{path:"/books",exact:!0,component:p}),Object(b.jsx)(r.a,{path:"/about",exact:!0,component:v}),Object(b.jsx)(r.a,{path:function(){return"/main"},children:Object(b.jsx)(N,{})})]})})]})};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.5afefe38.chunk.js.map