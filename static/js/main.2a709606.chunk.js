(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{33:function(t,n,e){},34:function(t,n,e){},35:function(t,n,e){t.exports={layout:"Layout_layout__vObxM"}},68:function(t,n,e){},69:function(t,n,e){},70:function(t,n,e){},91:function(t,n,e){},92:function(t,n,e){},93:function(t,n,e){},94:function(t,n,e){},95:function(t,n,e){},96:function(t,n,e){"use strict";e.r(n);var c,a=e(1),o=e(0),s=e.n(o),i=e(11),r=e.n(i),u=e(35),l=e.n(u),b=function(t){var n=t.children;return Object(a.jsx)("div",{className:l.a.layout,children:n})},j=e(12),O=e(13),d=e(16),f=e(15),m=e(9),h=e(5),p=e(3),x=e(18),g=function(t){return t.contact.contacts},C=function(t){return t.contact.filter},v={getLoading:function(t){return t.contact.loading},getContacts:g,getFilter:C,getvisibleContacts:Object(x.a)([g,C],(function(t,n){return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},N=e(19),y=e.n(N),S=e(4),k=Object(S.b)("contacts/addContactsRequest"),E=Object(S.b)("contacts/addContactsSuccess"),M=Object(S.b)("contacts/addContactsError"),F=Object(S.b)("contacts/getContactsRequest"),w=Object(S.b)("contacts/getContactsSuccess"),D=Object(S.b)("contacts/getContactsError"),L=Object(S.b)("contacts/deleteContactsRequest"),A=Object(S.b)("contacts/deleteContactsSuccess"),H=Object(S.b)("contacts/deleteContactsError"),q=Object(S.b)("contacts/filterContacts"),I={addContacts:function(t){return function(n){n(k()),y.a.post("http://localhost:2000/contacts",t).then((function(t){n(E(t.data))})).catch((function(t){return n(M())}))}},getContacts:function(){return function(t){t(F()),y.a.get("http://localhost:2000/contacts").then((function(n){t(w(n.data))})).catch((function(n){return t(D())}))}},deleteContacts:function(t){return function(n){n(L()),y.a.delete("http://localhost:2000/contacts/".concat(t)).then((function(){n(A(t))})).catch((function(t){return n(H())}))}}},R=(e(68),function(t){Object(d.a)(e,t);var n=Object(f.a)(e);function e(){var t;Object(j.a)(this,e);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=n.call.apply(n,[this].concat(a))).state={name:"",number:""},t.onHendleChange=function(n){var e=n.target,c=e.name,a=e.value;t.setState(Object(p.a)({},c,a))},t.onHendleSubmite=function(n){if(n.preventDefault(),t.props.contacts.some((function(n){return n.name===t.state.name})))return t.props.openModal(),t.setState({name:"",number:""});t.props.onAddContacts(Object(h.a)({},t.state)),t.setState({name:"",number:""})},t}return Object(O.a)(e,[{key:"render",value:function(){var t=this.state,n=t.name,e=t.number;return Object(a.jsxs)("form",{className:"form-styles",onSubmit:this.onHendleSubmite,children:[Object(a.jsxs)("label",{className:"label-form",children:["Name",Object(a.jsx)("input",{className:"input-form",type:"text",name:"name",value:n,onChange:this.onHendleChange})]}),Object(a.jsxs)("label",{className:"label-form",children:["Number",Object(a.jsx)("input",{className:"input-form",type:"text",name:"number",value:e,onChange:this.onHendleChange})]}),Object(a.jsx)("button",{className:"button-form",type:"submit",children:"Add contacts"})]})}}]),e}(o.Component)),_={onAddContacts:I.addContacts},B=Object(m.b)((function(t){return{contacts:v.getContacts(t)}}),_)(R),G=(e(33),Object(m.b)(null,(function(t,n){return{onDelete:function(){return t(I.deleteContacts(n.contact.id))}}}))((function(t){var n=t.contact,e=t.onDelete;return Object(a.jsx)("li",{className:"contacts-list-item",children:Object(a.jsxs)("div",{className:"contacts-list-info",children:[Object(a.jsxs)("p",{className:"contacts-list-name",children:[n.name,Object(a.jsx)("span",{className:"contacts-list-number",children:n.number})]}),Object(a.jsx)("button",{className:"contacts-list-button",id:n.id,onClick:e,children:"Delete"})]})},n.id)}))),J=e(98),T=e(97),V=(e(34),Object(m.b)((function(t){return{contacts:v.getvisibleContacts(t)}}))((function(t){var n=t.contacts;return Object(a.jsx)(J.a,{component:"ul",className:"contacts-list",children:n.map((function(t){return Object(a.jsx)(T.a,{timeout:250,classNames:"contacts-list-transition",unmountOnExit:!0,children:Object(a.jsx)(G,{contact:t},t.id)},t.id)}))})}))),P=(e(69),Object(m.b)((function(t){return{filter:v.getFilter(t)}}),(function(t){return{searchFilterValue:function(n){t(q(n))}}}))((function(t){var n=t.filter,e=t.searchFilterValue;return Object(a.jsx)("div",{className:"conteiner-filter",children:Object(a.jsx)("label",{className:"label-filter",children:Object(a.jsx)("input",{className:"input-filter",type:"text",onChange:function(t){e(t.target.value)},value:n})})})}))),z=(e(70),function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("p",{className:"Notification",children:"Contact already exists!"})})}),K=e(37),Q=e.n(K),U=(e(90),function(t){Object(d.a)(e,t);var n=Object(f.a)(e);function e(){return Object(j.a)(this,e),n.apply(this,arguments)}return Object(O.a)(e,[{key:"render",value:function(){return Object(a.jsx)(Q.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80})}}]),e}(s.a.Component)),W=(e(91),e(92),e(93),e(94),e(95),function(t){Object(d.a)(e,t);var n=Object(f.a)(e);function e(){var t;Object(j.a)(this,e);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=n.call.apply(n,[this].concat(a))).state={isOpenModal:!1},t.hendleIsOpenModal=function(){t.setState({isOpenModal:!0}),setTimeout((function(){t.setState({isOpenModal:!1})}),3e3)},t}return Object(O.a)(e,[{key:"componentDidMount",value:function(){this.props.onGetContacts()}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(T.a,{in:!0,appear:!0,timeout:500,classNames:"title-transition",unmountOnExit:!0,children:Object(a.jsx)("h1",{className:"contacts-title",children:"Phonebook"})}),Object(a.jsx)(T.a,{in:this.state.isOpenModal,timeout:500,classNames:"notification-transition",unmountOnExit:!0,children:Object(a.jsx)(z,{})}),Object(a.jsx)(T.a,{in:!0,appear:!0,timeout:500,classNames:"contacts-form",unmountOnExit:!0,children:Object(a.jsx)(B,{openModal:this.hendleIsOpenModal})}),this.props.isLoading&&Object(a.jsx)(U,{}),Object(a.jsx)(T.a,{in:this.props.contacts.length>1,timeout:250,classNames:"transition-filter",unmountOnExit:!0,children:Object(a.jsx)(P,{})}),Object(a.jsx)(T.a,{in:this.props.contacts.length>0,timeout:250,classNames:"contacts-list-transition",unmountOnExit:!0,children:Object(a.jsx)(V,{})})]})}}]),e}(o.Component)),X={onGetContacts:I.getContacts},Y=Object(m.b)((function(t){return{contacts:v.getContacts(t),isLoading:v.getLoading(t)}}),X)(W),Z=function(){return Object(a.jsx)(b,{children:Object(a.jsx)(Y,{})})},$=e(24),tt=function(t,n){return Object(h.a)(Object(h.a)({},t),{},{contacts:[].concat(Object($.a)(t.contacts),[n.payload]),loading:!1})},nt=function(t){t.loading=!0},et=function(t,n){return Object(h.a)(Object(h.a)({},t),{},{contacts:n.payload,loading:!1})},ct=Object(S.c)(Object(h.a)({},{contacts:[],filter:"",loading:!1}),(c={},Object(p.a)(c,E,tt),Object(p.a)(c,A,(function(t,n){return Object(h.a)(Object(h.a)({},t),{},{contacts:Object($.a)(t.contacts.filter((function(t){return t.id!==n.payload}))),loading:!1})})),Object(p.a)(c,q,(function(t,n){return Object(h.a)(Object(h.a)({},t),{},{filter:n.payload})})),Object(p.a)(c,k,nt),Object(p.a)(c,M,tt),Object(p.a)(c,w,(function(t,n){return Object(h.a)(Object(h.a)({},t),{},{contacts:n.payload})})),Object(p.a)(c,F,nt),Object(p.a)(c,w,et),Object(p.a)(c,D,et),Object(p.a)(c,L,nt),Object(p.a)(c,H,et),Object(p.a)(c,H,et),c)),at=Object(S.a)({reducer:{contact:ct}});r.a.render(Object(a.jsx)(m.a,{store:at,children:Object(a.jsx)(Z,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.2a709606.chunk.js.map