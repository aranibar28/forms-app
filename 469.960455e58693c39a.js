"use strict";(self.webpackChunkforms_app=self.webpackChunkforms_app||[]).push([[469],{8469:(S,c,a)=>{a.r(c),a.d(c,{AuthModule:()=>w});var i=a(9808),l=a(2382),v=a(8698),e=a(1223);let g=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],decls:2,vars:0,template:function(t,r){1&t&&(e.TgZ(0,"p"),e._uU(1,"login works!"),e.qZA())},encapsulation:2}),o})(),f=(()=>{class o{constructor(){this.namePattern="([a-zA-Z]+) ([a-zA-Z]+)",this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"}noPuedeSerStrider(t){var r;return"strider"===(null===(r=t.value)||void 0===r?void 0:r.trim().toLowerCase())?{noStrider:!0}:null}camposIguales(t,r){return s=>{var m,u,d,p;return(null===(m=s.get(t))||void 0===m?void 0:m.value)!==(null===(u=s.get(r))||void 0===u?void 0:u.value)?(null===(d=s.get(r))||void 0===d||d.setErrors({noIguales:!0}),{noIguales:!0}):(null===(p=s.get(r))||void 0===p||p.setErrors(null),null)}}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var Z=a(4004),h=a(520);let A=(()=>{class o{constructor(t){this.http=t}validate(t){return this.http.get(` http://localhost:3000/usuarios?q=${t.value}`).pipe((0,Z.U)(s=>0===s.length?null:{emailTomado:!0}))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(h.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function y(o,n){1&o&&(e.TgZ(0,"small",13),e._uU(1," Debe ser en formato de nombre y apellido. "),e.qZA())}function T(o,n){if(1&o&&(e.TgZ(0,"small",13),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.hij(" ",t.emailMSG," ")}}function U(o,n){1&o&&(e.TgZ(0,"small",13),e._uU(1," El username no puede ser strider "),e.qZA())}function _(o,n){1&o&&(e.TgZ(0,"small",13),e._uU(1," La contrase\xf1a debe ser mayor de 6 car\xe1cteres "),e.qZA())}function b(o,n){1&o&&(e.TgZ(0,"small",13),e._uU(1," Las contrase\xf1as deben ser iguales "),e.qZA())}const F=[{path:"",children:[{path:"login",component:g},{path:"register",component:(()=>{class o{constructor(t,r,s){this.fb=t,this.vs=r,this.ev=s,this.myForm=this.fb.group({nombre:[,[l.kI.required,l.kI.pattern(this.vs.namePattern)]],email:[,[l.kI.required,l.kI.pattern(this.vs.emailPattern)],[this.ev]],username:[,[l.kI.required,this.vs.noPuedeSerStrider]],password1:[,[l.kI.required,l.kI.minLength(6)]],password2:[,[l.kI.required]]},{validators:[this.vs.camposIguales("password1","password2")]})}ngOnInit(){this.myForm.reset({nombre:"Gerson Aranibar",email:"test1@test.com",username:"aranibar28",password1:"123456",password2:"123456"})}get emailMSG(){var t;const r=null===(t=this.myForm.get("email"))||void 0===t?void 0:t.errors;return(null==r?void 0:r.required)?"El correo debe ser obligatorio":(null==r?void 0:r.pattern)?"El correo debe tener un formato v\xe1lido":(null==r?void 0:r.emailTomado)?"El correo ya fue tomado":""}fieldsValid(t){var r,s;return(null===(r=this.myForm.get(t))||void 0===r?void 0:r.invalid)&&(null===(s=this.myForm.get(t))||void 0===s?void 0:s.touched)}submitForm(){this.myForm.invalid?this.myForm.markAllAsTouched():(console.log(this.myForm.value),this.myForm.reset())}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l.qu),e.Y36(f),e.Y36(A))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-register"]],decls:64,vars:22,consts:[[1,"row"],[1,"col"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"row","mb-3"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","placeholder","Nombre","formControlName","nombre",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","email","placeholder","Email","formControlName","email",1,"form-control"],["type","text","placeholder","Username","formControlName","username",1,"form-control"],["type","password","placeholder","Password del Usuario","formControlName","password1",1,"form-control"],["type","password","placeholder","Password del Usuario","formControlName","password2",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end",3,"disabled"],[1,"form-text","text-danger"]],template:function(t,r){1&t&&(e.TgZ(0,"h3"),e._uU(1,"Valiaciones Reactivas"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"form",2),e.NdJ("ngSubmit",function(){return r.submitForm()}),e.TgZ(6,"div",3)(7,"label",4),e._uU(8,"Nombre"),e.qZA(),e.TgZ(9,"div",5),e._UZ(10,"input",6),e.YNc(11,y,2,0,"small",7),e.qZA()(),e.TgZ(12,"div",3)(13,"label",4),e._uU(14,"Email"),e.qZA(),e.TgZ(15,"div",5),e._UZ(16,"input",8),e.YNc(17,T,2,1,"small",7),e.qZA()(),e.TgZ(18,"div",3)(19,"label",4),e._uU(20,"Username"),e.qZA(),e.TgZ(21,"div",5),e._UZ(22,"input",9),e.YNc(23,U,2,0,"small",7),e.qZA()(),e.TgZ(24,"div",3)(25,"label",4),e._uU(26,"Password"),e.qZA(),e.TgZ(27,"div",5),e._UZ(28,"input",10),e.YNc(29,_,2,0,"small",7),e.qZA()(),e.TgZ(30,"div",3)(31,"label",4),e._uU(32,"Confirmar Password"),e.qZA(),e.TgZ(33,"div",5),e._UZ(34,"input",11),e.YNc(35,b,2,0,"small",7),e.qZA()(),e.TgZ(36,"div",0)(37,"div",1)(38,"button",12),e._uU(39," Guardar "),e.qZA()()()()()(),e.TgZ(40,"div",0)(41,"div",1)(42,"span"),e._uU(43,"Value"),e.qZA(),e.TgZ(44,"pre"),e._uU(45),e.ALo(46,"json"),e.qZA()(),e.TgZ(47,"div",1)(48,"div"),e._uU(49),e.qZA(),e.TgZ(50,"div"),e._uU(51),e.qZA(),e.TgZ(52,"div"),e._uU(53),e.qZA(),e._UZ(54,"br"),e.TgZ(55,"div"),e._uU(56),e.ALo(57,"json"),e.qZA(),e.TgZ(58,"div"),e._uU(59),e.ALo(60,"json"),e.qZA(),e.TgZ(61,"div"),e._uU(62),e.ALo(63,"json"),e.qZA()()()),2&t&&(e.xp6(5),e.Q6J("formGroup",r.myForm),e.xp6(6),e.Q6J("ngIf",r.fieldsValid("nombre")),e.xp6(6),e.Q6J("ngIf",r.fieldsValid("email")),e.xp6(6),e.Q6J("ngIf",r.fieldsValid("username")),e.xp6(6),e.Q6J("ngIf",r.fieldsValid("password1")),e.xp6(6),e.Q6J("ngIf",r.fieldsValid("password2")),e.xp6(3),e.Q6J("disabled",r.myForm.pending),e.xp6(7),e.Oqu(e.lcZ(46,14,r.myForm.value)),e.xp6(4),e.hij("Status: ",r.myForm.status,""),e.xp6(2),e.hij("Valid: ",r.myForm.valid,""),e.xp6(2),e.hij("Touched: ",r.myForm.touched,""),e.xp6(3),e.hij("Email: ",e.lcZ(57,16,null==r.myForm.controls.email?null:r.myForm.controls.email.errors),""),e.xp6(3),e.hij("Password 1: ",e.lcZ(60,18,null==r.myForm.controls.password1?null:r.myForm.controls.password1.errors),""),e.xp6(3),e.hij("Password 2: ",e.lcZ(63,20,null==r.myForm.controls.password2?null:r.myForm.controls.password2.errors),""))},directives:[l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u,i.O5],pipes:[i.Ts],encapsulation:2}),o})()},{path:"**",redirectTo:"login"}]}];let q=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[v.Bz.forChild(F)],v.Bz]}),o})(),w=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[i.ez,q,l.UX]]}),o})()}}]);