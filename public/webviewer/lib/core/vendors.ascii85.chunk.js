/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[17],{531:function(wa,sa,n){(function(pa){function na(b){this.ah=b=b||{};if(Array.isArray(b.table)){var h=[];b.table.forEach(function(r,w){h[r.charCodeAt(0)]=w});b.nla=b.table;b.lia=h}}var oa=pa.from||function(){switch(arguments.length){case 1:return new pa(arguments[0]);case 2:return new pa(arguments[0],arguments[1]);case 3:return new pa(arguments[0],arguments[1],arguments[2]);default:throw new Exception("unexpected call.");}},ja=
pa.allocUnsafe||function(b){return new pa(b)},ia=function(){return"undefined"===typeof Uint8Array?function(b){return Array(b)}:function(b){return new Uint8Array(b)}}(),fa=String.fromCharCode(0),y=fa+fa+fa+fa,x=oa("<~").HB(0),e=oa("~>").HB(0),f=function(){var b=Array(85),h;for(h=0;85>h;h++)b[h]=String.fromCharCode(33+h);return b}(),a=function(){var b=Array(256),h;for(h=0;85>h;h++)b[33+h]=h;return b}();fa=wa.exports=new na;na.prototype.encode=function(b,h){var r=ia(5),w=b,z=this.ah,aa,ha;"string"===
typeof w?w=oa(w,"binary"):w instanceof pa||(w=oa(w));h=h||{};if(Array.isArray(h)){b=h;var ba=z.EF||!1;var ca=z.nP||!1}else b=h.table||z.nla||f,ba=void 0===h.EF?z.EF||!1:!!h.EF,ca=void 0===h.nP?z.nP||!1:!!h.nP;z=0;var ea=Math.ceil(5*w.length/4)+4+(ba?4:0);h=ja(ea);ba&&(z+=h.write("<~",z));var ma=aa=ha=0;for(ea=w.length;ma<ea;ma++){var la=w.FR(ma);ha*=256;ha+=la;aa++;if(!(aa%4)){if(ca&&538976288===ha)z+=h.write("y",z);else if(ha){for(aa=4;0<=aa;aa--)la=ha%85,r[aa]=la,ha=(ha-la)/85;for(aa=0;5>aa;aa++)z+=
h.write(b[r[aa]],z)}else z+=h.write("z",z);aa=ha=0}}if(aa)if(ha){w=4-aa;for(ma=4-aa;0<ma;ma--)ha*=256;for(aa=4;0<=aa;aa--)la=ha%85,r[aa]=la,ha=(ha-la)/85;for(aa=0;5>aa;aa++)z+=h.write(b[r[aa]],z);z-=w}else for(ma=0;ma<aa+1;ma++)z+=h.write(b[0],z);ba&&(z+=h.write("~>",z));return h.slice(0,z)};na.prototype.decode=function(b,h){var r=this.ah,w=!0,z=!0,aa,ha,ba;h=h||r.lia||a;if(!Array.isArray(h)&&(h=h.table||h,!Array.isArray(h))){var ca=[];Object.keys(h).forEach(function(ka){ca[ka.charCodeAt(0)]=h[ka]});
h=ca}w=!h[122];z=!h[121];b instanceof pa||(b=oa(b));ca=0;if(w||z){var ea=0;for(ba=b.length;ea<ba;ea++){var ma=b.FR(ea);w&&122===ma&&ca++;z&&121===ma&&ca++}}var la=0;ba=Math.ceil(4*b.length/5)+4*ca+5;r=ja(ba);if(4<=b.length&&b.HB(0)===x){for(ea=b.length-2;2<ea&&b.HB(ea)!==e;ea--);if(2>=ea)throw Error("Invalid ascii85 string delimiter pair.");b=b.slice(2,ea)}ea=aa=ha=0;for(ba=b.length;ea<ba;ea++)ma=b.FR(ea),w&&122===ma?la+=r.write(y,la):z&&121===ma?la+=r.write("    ",la):void 0!==h[ma]&&(ha*=85,ha+=
h[ma],aa++,aa%5||(la=r.aCa(ha,la),aa=ha=0));if(aa){b=5-aa;for(ea=0;ea<b;ea++)ha*=85,ha+=84;ea=3;for(ba=b-1;ea>ba;ea--)la=r.bCa(ha>>>8*ea&255,la)}return r.slice(0,la)};fa.eDa=new na({table:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#".split("")});fa.ACa=new na({EF:!0});fa.p$=na}).call(this,n(440).Buffer)}}]);}).call(this || window)