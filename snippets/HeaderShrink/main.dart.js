(function(){var supportsDirectProtoAccess=function(){var z=function(){}
z.prototype={p:{}}
var y=new z()
return y.__proto__&&y.__proto__.p===z.prototype.p}()
function map(a){a=Object.create(null)
a.x=0
delete a.x
return a}var A=map()
var B=map()
var C=map()
var D=map()
var E=map()
var F=map()
var G=map()
var H=map()
var J=map()
var K=map()
var L=map()
var M=map()
var N=map()
var O=map()
var P=map()
var Q=map()
var R=map()
var S=map()
var T=map()
var U=map()
var V=map()
var W=map()
var X=map()
var Y=map()
var Z=map()
function I(){}init()
function setupProgram(a,b){"use strict"
function generateAccessor(a9,b0,b1){var g=a9.split("-")
var f=g[0]
var e=f.length
var d=f.charCodeAt(e-1)
var c
if(g.length>1)c=true
else c=false
d=d>=60&&d<=64?d-59:d>=123&&d<=126?d-117:d>=37&&d<=43?d-27:0
if(d){var a0=d&3
var a1=d>>2
var a2=f=f.substring(0,e-1)
var a3=f.indexOf(":")
if(a3>0){a2=f.substring(0,a3)
f=f.substring(a3+1)}if(a0){var a4=a0&2?"r":""
var a5=a0&1?"this":"r"
var a6="return "+a5+"."+f
var a7=b1+".prototype.g"+a2+"="
var a8="function("+a4+"){"+a6+"}"
if(c)b0.push(a7+"$reflectable("+a8+");\n")
else b0.push(a7+a8+";\n")}if(a1){var a4=a1&2?"r,v":"v"
var a5=a1&1?"this":"r"
var a6=a5+"."+f+"=v"
var a7=b1+".prototype.s"+a2+"="
var a8="function("+a4+"){"+a6+"}"
if(c)b0.push(a7+"$reflectable("+a8+");\n")
else b0.push(a7+a8+";\n")}}return f}function defineClass(a2,a3){var g=[]
var f="function "+a2+"("
var e=""
var d=""
for(var c=0;c<a3.length;c++){if(c!=0)f+=", "
var a0=generateAccessor(a3[c],g,a2)
d+="'"+a0+"',"
var a1="p_"+a0
f+=a1
e+="this."+a0+" = "+a1+";\n"}if(supportsDirectProtoAccess)e+="this."+"$deferredAction"+"();"
f+=") {\n"+e+"}\n"
f+=a2+".builtin$cls=\""+a2+"\";\n"
f+="$desc=$collectedClasses."+a2+"[1];\n"
f+=a2+".prototype = $desc;\n"
if(typeof defineClass.name!="string")f+=a2+".name=\""+a2+"\";\n"
f+=a2+"."+"$__fields__"+"=["+d+"];\n"
f+=g.join("")
return f}init.createNewIsolate=function(){return new I()}
init.classIdExtractor=function(c){return c.constructor.name}
init.classFieldsExtractor=function(c){var g=c.constructor.$__fields__
if(!g)return[]
var f=[]
f.length=g.length
for(var e=0;e<g.length;e++)f[e]=c[g[e]]
return f}
init.instanceFromClassId=function(c){return new init.allClasses[c]()}
init.initializeEmptyInstance=function(c,d,e){init.allClasses[c].apply(d,e)
return d}
var z=supportsDirectProtoAccess?function(c,d){var g=c.prototype
g.__proto__=d.prototype
g.constructor=c
g["$is"+c.name]=c
return convertToFastObject(g)}:function(){function tmp(){}return function(a0,a1){tmp.prototype=a1.prototype
var g=new tmp()
convertToSlowObject(g)
var f=a0.prototype
var e=Object.keys(f)
for(var d=0;d<e.length;d++){var c=e[d]
g[c]=f[c]}g["$is"+a0.name]=a0
g.constructor=a0
a0.prototype=g
return g}}()
function finishClasses(a4){var g=init.allClasses
a4.combinedConstructorFunction+="return [\n"+a4.constructorsList.join(",\n  ")+"\n]"
var f=new Function("$collectedClasses",a4.combinedConstructorFunction)(a4.collected)
a4.combinedConstructorFunction=null
for(var e=0;e<f.length;e++){var d=f[e]
var c=d.name
var a0=a4.collected[c]
var a1=a0[0]
a0=a0[1]
g[c]=d
a1[c]=d}f=null
var a2=init.finishedClasses
function finishClass(c1){if(a2[c1])return
a2[c1]=true
var a5=a4.pending[c1]
if(a5&&a5.indexOf("+")>0){var a6=a5.split("+")
a5=a6[0]
var a7=a6[1]
finishClass(a7)
var a8=g[a7]
var a9=a8.prototype
var b0=g[c1].prototype
var b1=Object.keys(a9)
for(var b2=0;b2<b1.length;b2++){var b3=b1[b2]
if(!u.call(b0,b3))b0[b3]=a9[b3]}}if(!a5||typeof a5!="string"){var b4=g[c1]
var b5=b4.prototype
b5.constructor=b4
b5.$isb=b4
b5.$deferredAction=function(){}
return}finishClass(a5)
var b6=g[a5]
if(!b6)b6=existingIsolateProperties[a5]
var b4=g[c1]
var b5=z(b4,b6)
if(a9)b5.$deferredAction=mixinDeferredActionHelper(a9,b5)
if(Object.prototype.hasOwnProperty.call(b5,"%")){var b7=b5["%"].split(";")
if(b7[0]){var b8=b7[0].split("|")
for(var b2=0;b2<b8.length;b2++){init.interceptorsByTag[b8[b2]]=b4
init.leafTags[b8[b2]]=true}}if(b7[1]){b8=b7[1].split("|")
if(b7[2]){var b9=b7[2].split("|")
for(var b2=0;b2<b9.length;b2++){var c0=g[b9[b2]]
c0.$nativeSuperclassTag=b8[0]}}for(b2=0;b2<b8.length;b2++){init.interceptorsByTag[b8[b2]]=b4
init.leafTags[b8[b2]]=false}}b5.$deferredAction()}if(b5.$isc)b5.$deferredAction()}var a3=Object.keys(a4.pending)
for(var e=0;e<a3.length;e++)finishClass(a3[e])}function finishAddStubsHelper(){var g=this
while(!g.hasOwnProperty("$deferredAction"))g=g.__proto__
delete g.$deferredAction
var f=Object.keys(g)
for(var e=0;e<f.length;e++){var d=f[e]
var c=d.charCodeAt(0)
var a0
if(d!=="^"&&d!=="$reflectable"&&c!==43&&c!==42&&(a0=g[d])!=null&&a0.constructor===Array&&d!=="<>")addStubs(g,a0,d,false,[])}convertToFastObject(g)
g=g.__proto__
g.$deferredAction()}function mixinDeferredActionHelper(c,d){var g
if(d.hasOwnProperty("$deferredAction"))g=d.$deferredAction
return function foo(){var f=this
while(!f.hasOwnProperty("$deferredAction"))f=f.__proto__
if(g)f.$deferredAction=g
else{delete f.$deferredAction
convertToFastObject(f)}c.$deferredAction()
f.$deferredAction()}}function processClassData(b1,b2,b3){b2=convertToSlowObject(b2)
var g
var f=Object.keys(b2)
var e=false
var d=supportsDirectProtoAccess&&b1!="b"
for(var c=0;c<f.length;c++){var a0=f[c]
var a1=a0.charCodeAt(0)
if(a0==="l"){processStatics(init.statics[b1]=b2.l,b3)
delete b2.l}else if(a1===43){w[g]=a0.substring(1)
var a2=b2[a0]
if(a2>0)b2[g].$reflectable=a2}else if(a1===42){b2[g].$defaultValues=b2[a0]
var a3=b2.$methodsWithOptionalArguments
if(!a3)b2.$methodsWithOptionalArguments=a3={}
a3[a0]=g}else{var a4=b2[a0]
if(a0!=="^"&&a4!=null&&a4.constructor===Array&&a0!=="<>")if(d)e=true
else addStubs(b2,a4,a0,false,[])
else g=a0}}if(e)b2.$deferredAction=finishAddStubsHelper
var a5=b2["^"],a6,a7,a8=a5
var a9=a8.split(";")
a8=a9[1]?a9[1].split(","):[]
a7=a9[0]
a6=a7.split(":")
if(a6.length==2){a7=a6[0]
var b0=a6[1]
if(b0)b2.$signature=function(b4){return function(){return init.types[b4]}}(b0)}if(a7)b3.pending[b1]=a7
b3.combinedConstructorFunction+=defineClass(b1,a8)
b3.constructorsList.push(b1)
b3.collected[b1]=[m,b2]
i.push(b1)}function processStatics(a3,a4){var g=Object.keys(a3)
for(var f=0;f<g.length;f++){var e=g[f]
if(e==="^")continue
var d=a3[e]
var c=e.charCodeAt(0)
var a0
if(c===43){v[a0]=e.substring(1)
var a1=a3[e]
if(a1>0)a3[a0].$reflectable=a1
if(d&&d.length)init.typeInformation[a0]=d}else if(c===42){m[a0].$defaultValues=d
var a2=a3.$methodsWithOptionalArguments
if(!a2)a3.$methodsWithOptionalArguments=a2={}
a2[e]=a0}else if(typeof d==="function"){m[a0=e]=d
h.push(e)
init.globalFunctions[e]=d}else if(d.constructor===Array)addStubs(m,d,e,true,h)
else{a0=e
processClassData(e,d,a4)}}}function addStubs(b2,b3,b4,b5,b6){var g=0,f=b3[g],e
if(typeof f=="string")e=b3[++g]
else{e=f
f=b4}var d=[b2[b4]=b2[f]=e]
e.$stubName=b4
b6.push(b4)
for(g++;g<b3.length;g++){e=b3[g]
if(typeof e!="function")break
if(!b5)e.$stubName=b3[++g]
d.push(e)
if(e.$stubName){b2[e.$stubName]=e
b6.push(e.$stubName)}}for(var c=0;c<d.length;g++,c++)d[c].$callName=b3[g]
var a0=b3[g]
b3=b3.slice(++g)
var a1=b3[0]
var a2=a1>>1
var a3=(a1&1)===1
var a4=a1===3
var a5=a1===1
var a6=b3[1]
var a7=a6>>1
var a8=(a6&1)===1
var a9=a2+a7!=d[0].length
var b0=b3[2]
if(typeof b0=="number")b3[2]=b0+b
var b1=2*a7+a2+3
if(a0){e=tearOff(d,b3,b5,b4,a9)
b2[b4].$getter=e
e.$getterStub=true
if(b5){init.globalFunctions[b4]=e
b6.push(a0)}b2[a0]=e
d.push(e)
e.$stubName=a0
e.$callName=null}}function tearOffGetter(c,d,e,f){return f?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+e+y+++"(x) {"+"if (c === null) c = "+"H.be"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(c,d,e,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+e+y+++"() {"+"if (c === null) c = "+"H.be"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(c,d,e,H,null)}function tearOff(c,d,e,f,a0){var g
return e?function(){if(g===void 0)g=H.be(this,c,d,true,[],f).prototype
return g}:tearOffGetter(c,d,f,a0)}var y=0
if(!init.libraries)init.libraries=[]
if(!init.mangledNames)init.mangledNames=map()
if(!init.mangledGlobalNames)init.mangledGlobalNames=map()
if(!init.statics)init.statics=map()
if(!init.typeInformation)init.typeInformation=map()
if(!init.globalFunctions)init.globalFunctions=map()
var x=init.libraries
var w=init.mangledNames
var v=init.mangledGlobalNames
var u=Object.prototype.hasOwnProperty
var t=a.length
var s=map()
s.collected=map()
s.pending=map()
s.constructorsList=[]
s.combinedConstructorFunction="function $reflectable(fn){fn.$reflectable=1;return fn};\n"+"var $desc;\n"
for(var r=0;r<t;r++){var q=a[r]
var p=q[0]
var o=q[1]
var n=q[2]
var m=q[3]
var l=q[4]
var k=!!q[5]
var j=l&&l["^"]
if(j instanceof Array)j=j[0]
var i=[]
var h=[]
processStatics(l,s)
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.aF=function(){}
var dart=[["","",,H,{"^":"",h3:{"^":"b;a"}}],["","",,J,{"^":"",
l:function(a){return void 0},
aK:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
aI:function(a){var z,y,x,w
z=a[init.dispatchPropertyName]
if(z==null)if($.bi==null){H.fa()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(new P.cd("Return interceptor for "+H.a(y(a,z))))}w=H.fj(a)
if(w==null){if(typeof a=="function")return C.u
y=Object.getPrototypeOf(a)
if(y==null||y===Object.prototype)return C.v
else return C.w}return w},
c:{"^":"b;",
m:function(a,b){return a===b},
gp:function(a){return H.I(a)},
i:["bL",function(a){return H.av(a)}],
"%":"Blob|DOMError|File|FileError|MediaError|MediaKeyError|NavigatorUserMediaError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedString"},
dk:{"^":"c;",
i:function(a){return String(a)},
gp:function(a){return a?519018:218159},
$isf0:1},
dm:{"^":"c;",
m:function(a,b){return null==b},
i:function(a){return"null"},
gp:function(a){return 0}},
aT:{"^":"c;",
gp:function(a){return 0},
i:["bM",function(a){return String(a)}],
$isdn:1},
dD:{"^":"aT;"},
ah:{"^":"aT;"},
af:{"^":"aT;",
i:function(a){var z=a[$.$get$bv()]
return z==null?this.bM(a):J.N(z)}},
ac:{"^":"c;",
bh:function(a,b){if(!!a.immutable$list)throw H.d(new P.B(b))},
ck:function(a,b){if(!!a.fixed$length)throw H.d(new P.B(b))},
v:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.d(new P.w(a))}},
N:function(a,b){return H.i(new H.aZ(a,b),[null,null])},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
gcr:function(a){if(a.length>0)return a[0]
throw H.d(H.bF())},
aP:function(a,b,c,d,e){var z,y,x
this.bh(a,"set range")
P.bW(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
if(e+z>d.length)throw H.d(H.di())
if(e<b)for(y=z-1;y>=0;--y){x=e+y
if(x>=d.length)return H.f(d,x)
a[b+y]=d[x]}else for(y=0;y<z;++y){x=e+y
if(x>=d.length)return H.f(d,x)
a[b+y]=d[x]}},
i:function(a){return P.ar(a,"[","]")},
gq:function(a){return new J.cP(a,a.length,0,null)},
gp:function(a){return H.I(a)},
gj:function(a){return a.length},
sj:function(a,b){this.ck(a,"set length")
if(b<0)throw H.d(P.aw(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.o(a,b))
if(b>=a.length||b<0)throw H.d(H.o(a,b))
return a[b]},
t:function(a,b,c){this.bh(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.o(a,b))
if(b>=a.length||b<0)throw H.d(H.o(a,b))
a[b]=c},
$isas:1,
$ish:1,
$ash:null,
$ism:1},
h2:{"^":"ac;"},
cP:{"^":"b;a,b,c,d",
gn:function(){return this.d},
k:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.bm(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
ad:{"^":"c;",
aH:function(a,b){return a%b},
cL:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(new P.B(""+a))},
bs:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(new P.B(""+a))},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gp:function(a){return a&0x1FFFFFFF},
U:function(a,b){if(typeof b!=="number")throw H.d(H.Y(b))
return a+b},
X:function(a,b){return(a|0)===a?a/b|0:this.cL(a/b)},
bc:function(a,b){var z
if(a>0)z=b>31?0:a>>>b
else{z=b>31?31:b
z=a>>z>>>0}return z},
ac:function(a,b){if(typeof b!=="number")throw H.d(H.Y(b))
return a<b},
$isan:1},
bG:{"^":"ad;",$isan:1,$isn:1},
dl:{"^":"ad;",$isan:1},
ae:{"^":"c;",
Y:function(a,b){if(b<0)throw H.d(H.o(a,b))
if(b>=a.length)throw H.d(H.o(a,b))
return a.charCodeAt(b)},
U:function(a,b){if(typeof b!=="string")throw H.d(P.aO(b,null,null))
return a+b},
aQ:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.Y(c))
if(b<0)throw H.d(P.ax(b,null,null))
if(typeof c!=="number")return H.a_(c)
if(b>c)throw H.d(P.ax(b,null,null))
if(c>a.length)throw H.d(P.ax(c,null,null))
return a.substring(b,c)},
bK:function(a,b){return this.aQ(a,b,null)},
cM:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.Y(z,0)===133){x=J.dp(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.Y(z,w)===133?J.dq(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
i:function(a){return a},
gp:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10>>>0)
y^=y>>6}y=536870911&y+((67108863&y)<<3>>>0)
y^=y>>11
return 536870911&y+((16383&y)<<15>>>0)},
gj:function(a){return a.length},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.o(a,b))
if(b>=a.length||b<0)throw H.d(H.o(a,b))
return a[b]},
$isas:1,
$isF:1,
l:{
bH:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 6158:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
dp:function(a,b){var z,y
for(z=a.length;b<z;){y=C.d.Y(a,b)
if(y!==32&&y!==13&&!J.bH(y))break;++b}return b},
dq:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.d.Y(a,z)
if(y!==32&&y!==13&&!J.bH(y))break}return b}}}}],["","",,H,{"^":"",
ak:function(a,b){var z=a.a1(b)
if(!init.globalState.d.cy)init.globalState.f.a4()
return z},
cF:function(a,b){var z,y,x,w,v,u
z={}
z.a=b
if(b==null){b=[]
z.a=b
y=b}else y=b
if(!J.l(y).$ish)throw H.d(P.bp("Arguments to main must be a List: "+H.a(y)))
init.globalState=new H.eA(0,0,1,null,null,null,null,null,null,null,null,null,a)
y=init.globalState
x=self.window==null
w=self.Worker
v=x&&!!self.postMessage
y.x=v
v=!v
if(v)w=w!=null&&$.$get$bD()!=null
else w=!0
y.y=w
y.r=x&&v
y.f=new H.eg(P.aX(null,H.ai),0)
y.z=H.i(new H.R(0,null,null,null,null,null,0),[P.n,H.b8])
y.ch=H.i(new H.R(0,null,null,null,null,null,0),[P.n,null])
if(y.x===!0){x=new H.ez()
y.Q=x
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.db,x)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.eB)}if(init.globalState.x===!0)return
y=init.globalState.a++
x=H.i(new H.R(0,null,null,null,null,null,0),[P.n,H.ay])
w=P.G(null,null,null,P.n)
v=new H.ay(0,null,!1)
u=new H.b8(y,x,w,init.createNewIsolate(),v,new H.P(H.aL()),new H.P(H.aL()),!1,!1,[],P.G(null,null,null,null),null,null,!1,!0,P.G(null,null,null,null))
w.u(0,0)
u.aV(0,v)
init.globalState.e=u
init.globalState.d=u
y=H.am()
x=H.Z(y,[y]).J(a)
if(x)u.a1(new H.fq(z,a))
else{y=H.Z(y,[y,y]).J(a)
if(y)u.a1(new H.fr(z,a))
else u.a1(a)}init.globalState.f.a4()},
df:function(){var z=init.currentScript
if(z!=null)return String(z.src)
if(init.globalState.x===!0)return H.dg()
return},
dg:function(){var z,y
z=new Error().stack
if(z==null){z=function(){try{throw new Error()}catch(x){return x.stack}}()
if(z==null)throw H.d(new P.B("No stack trace"))}y=z.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(y!=null)return y[1]
y=z.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(y!=null)return y[1]
throw H.d(new P.B('Cannot extract URI from "'+H.a(z)+'"'))},
db:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=new H.aB(!0,[]).K(b.data)
y=J.C(z)
switch(y.h(z,"command")){case"start":init.globalState.b=y.h(z,"id")
x=y.h(z,"functionName")
w=x==null?init.globalState.cx:init.globalFunctions[x]()
v=y.h(z,"args")
u=new H.aB(!0,[]).K(y.h(z,"msg"))
t=y.h(z,"isSpawnUri")
s=y.h(z,"startPaused")
r=new H.aB(!0,[]).K(y.h(z,"replyTo"))
y=init.globalState.a++
q=H.i(new H.R(0,null,null,null,null,null,0),[P.n,H.ay])
p=P.G(null,null,null,P.n)
o=new H.ay(0,null,!1)
n=new H.b8(y,q,p,init.createNewIsolate(),o,new H.P(H.aL()),new H.P(H.aL()),!1,!1,[],P.G(null,null,null,null),null,null,!1,!0,P.G(null,null,null,null))
p.u(0,0)
n.aV(0,o)
init.globalState.f.a.E(new H.ai(n,new H.dc(w,v,u,t,s,r),"worker-start"))
init.globalState.d=n
init.globalState.f.a4()
break
case"spawn-worker":break
case"message":if(y.h(z,"port")!=null)y.h(z,"port").H(y.h(z,"msg"))
init.globalState.f.a4()
break
case"close":init.globalState.ch.D(0,$.$get$bE().h(0,a))
a.terminate()
init.globalState.f.a4()
break
case"log":H.da(y.h(z,"msg"))
break
case"print":if(init.globalState.x===!0){y=init.globalState.Q
q=P.a1(["command","print","msg",z])
q=new H.V(!0,P.a3(null,P.n)).w(q)
y.toString
self.postMessage(q)}else P.bk(y.h(z,"msg"))
break
case"error":throw H.d(y.h(z,"msg"))}},
da:function(a){var z,y,x,w
if(init.globalState.x===!0){y=init.globalState.Q
x=P.a1(["command","log","msg",a])
x=new H.V(!0,P.a3(null,P.n)).w(x)
y.toString
self.postMessage(x)}else try{self.console.log(a)}catch(w){H.u(w)
z=H.r(w)
throw H.d(P.aq(z))}},
dd:function(a,b,c,d,e,f){var z,y,x,w
z=init.globalState.d
y=z.a
$.bR=$.bR+("_"+y)
$.bS=$.bS+("_"+y)
y=z.e
x=init.globalState.d.a
w=z.f
f.H(["spawned",new H.aC(y,x),w,z.r])
x=new H.de(a,b,c,d,z)
if(e===!0){z.bf(w,w)
init.globalState.f.a.E(new H.ai(z,x,"start isolate"))}else x.$0()},
eQ:function(a){return new H.aB(!0,[]).K(new H.V(!1,P.a3(null,P.n)).w(a))},
fq:{"^":"e:0;a,b",
$0:function(){this.b.$1(this.a.a)}},
fr:{"^":"e:0;a,b",
$0:function(){this.b.$2(this.a.a,null)}},
eA:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx",l:{
eB:function(a){var z=P.a1(["command","print","msg",a])
return new H.V(!0,P.a3(null,P.n)).w(z)}}},
b8:{"^":"b;a,b,c,cC:d<,cl:e<,f,r,x,y,z,Q,ch,cx,cy,db,dx",
bf:function(a,b){if(!this.f.m(0,a))return
if(this.Q.u(0,b)&&!this.y)this.y=!0
this.ax()},
cH:function(a){var z,y,x,w,v,u
if(!this.y)return
z=this.Q
z.D(0,a)
if(z.a===0){for(z=this.z;y=z.length,y!==0;){if(0>=y)return H.f(z,-1)
x=z.pop()
y=init.globalState.f.a
w=y.b
v=y.a
u=v.length
w=(w-1&u-1)>>>0
y.b=w
if(w<0||w>=u)return H.f(v,w)
v[w]=x
if(w===y.c)y.aY();++y.d}this.y=!1}this.ax()},
ci:function(a,b){var z,y,x
if(this.ch==null)this.ch=[]
for(z=J.l(a),y=0;x=this.ch,y<x.length;y+=2)if(z.m(a,x[y])){z=this.ch
x=y+1
if(x>=z.length)return H.f(z,x)
z[x]=b
return}x.push(a)
this.ch.push(b)},
cG:function(a){var z,y,x
if(this.ch==null)return
for(z=J.l(a),y=0;x=this.ch,y<x.length;y+=2)if(z.m(a,x[y])){z=this.ch
x=y+2
z.toString
if(typeof z!=="object"||z===null||!!z.fixed$length)H.p(new P.B("removeRange"))
P.bW(y,x,z.length,null,null,null)
z.splice(y,x-y)
return}},
bI:function(a,b){if(!this.r.m(0,a))return
this.db=b},
ct:function(a,b,c){var z=J.l(b)
if(!z.m(b,0))z=z.m(b,1)&&!this.cy
else z=!0
if(z){a.H(c)
return}z=this.cx
if(z==null){z=P.aX(null,null)
this.cx=z}z.E(new H.ev(a,c))},
cs:function(a,b){var z
if(!this.r.m(0,a))return
z=J.l(b)
if(!z.m(b,0))z=z.m(b,1)&&!this.cy
else z=!0
if(z){this.aC()
return}z=this.cx
if(z==null){z=P.aX(null,null)
this.cx=z}z.E(this.gcD())},
cu:function(a,b){var z,y,x
z=this.dx
if(z.a===0){if(this.db===!0&&this===init.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.bk(a)
if(b!=null)P.bk(b)}return}y=new Array(2)
y.fixed$length=Array
y[0]=J.N(a)
y[1]=b==null?null:J.N(b)
for(x=new P.aj(z,z.r,null,null),x.c=z.e;x.k();)x.d.H(y)},
a1:function(a){var z,y,x,w,v,u,t
z=init.globalState.d
init.globalState.d=this
$=this.d
y=null
x=this.cy
this.cy=!0
try{y=a.$0()}catch(u){t=H.u(u)
w=t
v=H.r(u)
this.cu(w,v)
if(this.db===!0){this.aC()
if(this===init.globalState.e)throw u}}finally{this.cy=x
init.globalState.d=z
if(z!=null)$=z.gcC()
if(this.cx!=null)for(;t=this.cx,!t.gG(t);)this.cx.bq().$0()}return y},
aE:function(a){return this.b.h(0,a)},
aV:function(a,b){var z=this.b
if(z.bj(a))throw H.d(P.aq("Registry: ports must be registered only once."))
z.t(0,a,b)},
ax:function(){var z=this.b
if(z.gj(z)-this.c.a>0||this.y||!this.x)init.globalState.z.t(0,this.a,this)
else this.aC()},
aC:[function(){var z,y,x,w,v
z=this.cx
if(z!=null)z.R(0)
for(z=this.b,y=z.gby(z),y=y.gq(y);y.k();)y.gn().bX()
z.R(0)
this.c.R(0)
init.globalState.z.D(0,this.a)
this.dx.R(0)
if(this.ch!=null){for(x=0;z=this.ch,y=z.length,x<y;x+=2){w=z[x]
v=x+1
if(v>=y)return H.f(z,v)
w.H(z[v])}this.ch=null}},"$0","gcD",0,0,1]},
ev:{"^":"e:1;a,b",
$0:function(){this.a.H(this.b)}},
eg:{"^":"b;a,b",
cm:function(){var z=this.a
if(z.b===z.c)return
return z.bq()},
bv:function(){var z,y,x
z=this.cm()
if(z==null){if(init.globalState.e!=null)if(init.globalState.z.bj(init.globalState.e.a))if(init.globalState.r===!0){y=init.globalState.e.b
y=y.gG(y)}else y=!1
else y=!1
else y=!1
if(y)H.p(P.aq("Program exited with open ReceivePorts."))
y=init.globalState
if(y.x===!0){x=y.z
x=x.gG(x)&&y.f.b===0}else x=!1
if(x){y=y.Q
x=P.a1(["command","close"])
x=new H.V(!0,H.i(new P.cm(0,null,null,null,null,null,0),[null,P.n])).w(x)
y.toString
self.postMessage(x)}return!1}z.cF()
return!0},
b8:function(){if(self.window!=null)new H.eh(this).$0()
else for(;this.bv(););},
a4:function(){var z,y,x,w,v
if(init.globalState.x!==!0)this.b8()
else try{this.b8()}catch(x){w=H.u(x)
z=w
y=H.r(x)
w=init.globalState.Q
v=P.a1(["command","error","msg",H.a(z)+"\n"+H.a(y)])
v=new H.V(!0,P.a3(null,P.n)).w(v)
w.toString
self.postMessage(v)}}},
eh:{"^":"e:1;a",
$0:function(){if(!this.a.bv())return
P.e_(C.h,this)}},
ai:{"^":"b;a,b,c",
cF:function(){var z=this.a
if(z.y){z.z.push(this)
return}z.a1(this.b)}},
ez:{"^":"b;"},
dc:{"^":"e:0;a,b,c,d,e,f",
$0:function(){H.dd(this.a,this.b,this.c,this.d,this.e,this.f)}},
de:{"^":"e:1;a,b,c,d,e",
$0:function(){var z,y,x,w
z=this.e
z.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{y=this.a
x=H.am()
w=H.Z(x,[x,x]).J(y)
if(w)y.$2(this.b,this.c)
else{x=H.Z(x,[x]).J(y)
if(x)y.$1(this.b)
else y.$0()}}z.ax()}},
cf:{"^":"b;"},
aC:{"^":"cf;b,a",
H:function(a){var z,y,x,w
z=init.globalState.z.h(0,this.a)
if(z==null)return
y=this.b
if(y.gb0())return
x=H.eQ(a)
if(z.gcl()===y){y=J.C(x)
switch(y.h(x,0)){case"pause":z.bf(y.h(x,1),y.h(x,2))
break
case"resume":z.cH(y.h(x,1))
break
case"add-ondone":z.ci(y.h(x,1),y.h(x,2))
break
case"remove-ondone":z.cG(y.h(x,1))
break
case"set-errors-fatal":z.bI(y.h(x,1),y.h(x,2))
break
case"ping":z.ct(y.h(x,1),y.h(x,2),y.h(x,3))
break
case"kill":z.cs(y.h(x,1),y.h(x,2))
break
case"getErrors":y=y.h(x,1)
z.dx.u(0,y)
break
case"stopErrors":y=y.h(x,1)
z.dx.D(0,y)
break}return}y=init.globalState.f
w="receive "+H.a(a)
y.a.E(new H.ai(z,new H.eD(this,x),w))},
m:function(a,b){if(b==null)return!1
return b instanceof H.aC&&J.M(this.b,b.b)},
gp:function(a){return this.b.gar()}},
eD:{"^":"e:0;a,b",
$0:function(){var z=this.a.b
if(!z.gb0())z.bT(this.b)}},
ba:{"^":"cf;b,c,a",
H:function(a){var z,y,x
z=P.a1(["command","message","port",this,"msg",a])
y=new H.V(!0,P.a3(null,P.n)).w(z)
if(init.globalState.x===!0){init.globalState.Q.toString
self.postMessage(y)}else{x=init.globalState.ch.h(0,this.b)
if(x!=null)x.postMessage(y)}},
m:function(a,b){if(b==null)return!1
return b instanceof H.ba&&J.M(this.b,b.b)&&J.M(this.a,b.a)&&J.M(this.c,b.c)},
gp:function(a){var z,y,x
z=this.b
if(typeof z!=="number")return z.bJ()
y=this.a
if(typeof y!=="number")return y.bJ()
x=this.c
if(typeof x!=="number")return H.a_(x)
return(z<<16^y<<8^x)>>>0}},
ay:{"^":"b;ar:a<,b,b0:c<",
bX:function(){this.c=!0
this.b=null},
bT:function(a){if(this.c)return
this.c6(a)},
c6:function(a){return this.b.$1(a)},
$isdE:1},
dW:{"^":"b;a,b,c",
bQ:function(a,b){var z,y
if(a===0)z=self.setTimeout==null||init.globalState.x===!0
else z=!1
if(z){this.c=1
z=init.globalState.f
y=init.globalState.d
z.a.E(new H.ai(y,new H.dY(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++init.globalState.f.b
this.c=self.setTimeout(H.a7(new H.dZ(this,b),0),a)}else throw H.d(new P.B("Timer greater than 0."))},
l:{
dX:function(a,b){var z=new H.dW(!0,!1,null)
z.bQ(a,b)
return z}}},
dY:{"^":"e:1;a,b",
$0:function(){this.a.c=null
this.b.$0()}},
dZ:{"^":"e:1;a,b",
$0:function(){this.a.c=null;--init.globalState.f.b
this.b.$0()}},
P:{"^":"b;ar:a<",
gp:function(a){var z=this.a
if(typeof z!=="number")return z.cN()
z=C.e.bc(z,0)^C.e.X(z,4294967296)
z=(~z>>>0)+(z<<15>>>0)&4294967295
z=((z^z>>>12)>>>0)*5&4294967295
z=((z^z>>>4)>>>0)*2057&4294967295
return(z^z>>>16)>>>0},
m:function(a,b){var z,y
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.P){z=this.a
y=b.a
return z==null?y==null:z===y}return!1}},
V:{"^":"b;a,b",
w:[function(a){var z,y,x,w,v
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
z=this.b
y=z.h(0,a)
if(y!=null)return["ref",y]
z.t(0,a,z.gj(z))
z=J.l(a)
if(!!z.$isbK)return["buffer",a]
if(!!z.$isb1)return["typed",a]
if(!!z.$isas)return this.bE(a)
if(!!z.$isd9){x=this.gbB()
w=a.gbn()
w=H.au(w,x,H.y(w,"x",0),null)
w=P.aY(w,!0,H.y(w,"x",0))
z=z.gby(a)
z=H.au(z,x,H.y(z,"x",0),null)
return["map",w,P.aY(z,!0,H.y(z,"x",0))]}if(!!z.$isdn)return this.bF(a)
if(!!z.$isc)this.bx(a)
if(!!z.$isdE)this.a5(a,"RawReceivePorts can't be transmitted:")
if(!!z.$isaC)return this.bG(a)
if(!!z.$isba)return this.bH(a)
if(!!z.$ise){v=a.$static_name
if(v==null)this.a5(a,"Closures can't be transmitted:")
return["function",v]}if(!!z.$isP)return["capability",a.a]
if(!(a instanceof P.b))this.bx(a)
return["dart",init.classIdExtractor(a),this.bD(init.classFieldsExtractor(a))]},"$1","gbB",2,0,2],
a5:function(a,b){throw H.d(new P.B(H.a(b==null?"Can't transmit:":b)+" "+H.a(a)))},
bx:function(a){return this.a5(a,null)},
bE:function(a){var z=this.bC(a)
if(!!a.fixed$length)return["fixed",z]
if(!a.fixed$length)return["extendable",z]
if(!a.immutable$list)return["mutable",z]
if(a.constructor===Array)return["const",z]
this.a5(a,"Can't serialize indexable: ")},
bC:function(a){var z,y,x
z=[]
C.c.sj(z,a.length)
for(y=0;y<a.length;++y){x=this.w(a[y])
if(y>=z.length)return H.f(z,y)
z[y]=x}return z},
bD:function(a){var z
for(z=0;z<a.length;++z)C.c.t(a,z,this.w(a[z]))
return a},
bF:function(a){var z,y,x,w
if(!!a.constructor&&a.constructor!==Object)this.a5(a,"Only plain JS Objects are supported:")
z=Object.keys(a)
y=[]
C.c.sj(y,z.length)
for(x=0;x<z.length;++x){w=this.w(a[z[x]])
if(x>=y.length)return H.f(y,x)
y[x]=w}return["js-object",z,y]},
bH:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
bG:function(a){if(this.a)return["sendport",init.globalState.b,a.a,a.b.gar()]
return["raw sendport",a]}},
aB:{"^":"b;a,b",
K:[function(a){var z,y,x,w,v,u
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.d(P.bp("Bad serialized message: "+H.a(a)))
switch(C.c.gcr(a)){case"ref":if(1>=a.length)return H.f(a,1)
z=a[1]
y=this.b
if(z>>>0!==z||z>=y.length)return H.f(y,z)
return y[z]
case"buffer":if(1>=a.length)return H.f(a,1)
x=a[1]
this.b.push(x)
return x
case"typed":if(1>=a.length)return H.f(a,1)
x=a[1]
this.b.push(x)
return x
case"fixed":if(1>=a.length)return H.f(a,1)
x=a[1]
this.b.push(x)
y=H.i(this.a_(x),[null])
y.fixed$length=Array
return y
case"extendable":if(1>=a.length)return H.f(a,1)
x=a[1]
this.b.push(x)
return H.i(this.a_(x),[null])
case"mutable":if(1>=a.length)return H.f(a,1)
x=a[1]
this.b.push(x)
return this.a_(x)
case"const":if(1>=a.length)return H.f(a,1)
x=a[1]
this.b.push(x)
y=H.i(this.a_(x),[null])
y.fixed$length=Array
return y
case"map":return this.cp(a)
case"sendport":return this.cq(a)
case"raw sendport":if(1>=a.length)return H.f(a,1)
x=a[1]
this.b.push(x)
return x
case"js-object":return this.co(a)
case"function":if(1>=a.length)return H.f(a,1)
x=init.globalFunctions[a[1]]()
this.b.push(x)
return x
case"capability":if(1>=a.length)return H.f(a,1)
return new H.P(a[1])
case"dart":y=a.length
if(1>=y)return H.f(a,1)
w=a[1]
if(2>=y)return H.f(a,2)
v=a[2]
u=init.instanceFromClassId(w)
this.b.push(u)
this.a_(v)
return init.initializeEmptyInstance(w,u,v)
default:throw H.d("couldn't deserialize: "+H.a(a))}},"$1","gcn",2,0,2],
a_:function(a){var z,y,x
z=J.C(a)
y=0
while(!0){x=z.gj(a)
if(typeof x!=="number")return H.a_(x)
if(!(y<x))break
z.t(a,y,this.K(z.h(a,y)));++y}return a},
cp:function(a){var z,y,x,w,v,u
z=a.length
if(1>=z)return H.f(a,1)
y=a[1]
if(2>=z)return H.f(a,2)
x=a[2]
w=P.dy()
this.b.push(w)
y=J.cO(y,this.gcn()).aK(0)
for(z=J.C(y),v=J.C(x),u=0;u<z.gj(y);++u){if(u>=y.length)return H.f(y,u)
w.t(0,y[u],this.K(v.h(x,u)))}return w},
cq:function(a){var z,y,x,w,v,u,t
z=a.length
if(1>=z)return H.f(a,1)
y=a[1]
if(2>=z)return H.f(a,2)
x=a[2]
if(3>=z)return H.f(a,3)
w=a[3]
if(J.M(y,init.globalState.b)){v=init.globalState.z.h(0,x)
if(v==null)return
u=v.aE(w)
if(u==null)return
t=new H.aC(u,x)}else t=new H.ba(y,w,x)
this.b.push(t)
return t},
co:function(a){var z,y,x,w,v,u,t
z=a.length
if(1>=z)return H.f(a,1)
y=a[1]
if(2>=z)return H.f(a,2)
x=a[2]
w={}
this.b.push(w)
z=J.C(y)
v=J.C(x)
u=0
while(!0){t=z.gj(y)
if(typeof t!=="number")return H.a_(t)
if(!(u<t))break
w[z.h(y,u)]=this.K(v.h(x,u));++u}return w}}}],["","",,H,{"^":"",
f5:function(a){return init.types[a]},
fi:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.l(a).$isat},
a:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.N(a)
if(typeof z!=="string")throw H.d(H.Y(a))
return z},
I:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
bT:function(a){var z,y,x,w,v,u,t,s
z=J.l(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.m||!!J.l(a).$isah){v=C.i(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.d.Y(w,0)===36)w=C.d.bK(w,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+H.cA(H.bg(a),0,null),init.mangledGlobalNames)},
av:function(a){return"Instance of '"+H.bT(a)+"'"},
b2:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.d(H.Y(a))
return a[b]},
bU:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.d(H.Y(a))
a[b]=c},
a_:function(a){throw H.d(H.Y(a))},
f:function(a,b){if(a==null)J.a9(a)
throw H.d(H.o(a,b))},
o:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.O(!0,b,"index",null)
z=J.a9(a)
if(!(b<0)){if(typeof z!=="number")return H.a_(z)
y=b>=z}else y=!0
if(y)return P.aS(b,a,"index",null,z)
return P.ax(b,"index",null)},
Y:function(a){return new P.O(!0,a,null,null)},
cw:function(a){return a},
d:function(a){var z
if(a==null)a=new P.bQ()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.cH})
z.name=""}else z.toString=H.cH
return z},
cH:function(){return J.N(this.dartException)},
p:function(a){throw H.d(a)},
bm:function(a){throw H.d(new P.w(a))},
u:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.ft(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bc(x,16)&8191)===10)switch(w){case 438:return z.$1(H.aU(H.a(y)+" (Error "+w+")",null))
case 445:case 5007:v=H.a(y)+" (Error "+w+")"
return z.$1(new H.bP(v,null))}}if(a instanceof TypeError){u=$.$get$c2()
t=$.$get$c3()
s=$.$get$c4()
r=$.$get$c5()
q=$.$get$c9()
p=$.$get$ca()
o=$.$get$c7()
$.$get$c6()
n=$.$get$cc()
m=$.$get$cb()
l=u.A(y)
if(l!=null)return z.$1(H.aU(y,l))
else{l=t.A(y)
if(l!=null){l.method="call"
return z.$1(H.aU(y,l))}else{l=s.A(y)
if(l==null){l=r.A(y)
if(l==null){l=q.A(y)
if(l==null){l=p.A(y)
if(l==null){l=o.A(y)
if(l==null){l=r.A(y)
if(l==null){l=n.A(y)
if(l==null){l=m.A(y)
v=l!=null}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0
if(v)return z.$1(new H.bP(y,l==null?null:l.method))}}return z.$1(new H.e1(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.bZ()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.O(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.bZ()
return a},
r:function(a){var z
if(a==null)return new H.cn(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.cn(a,null)},
fo:function(a){if(a==null||typeof a!='object')return J.v(a)
else return H.I(a)},
f1:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.t(0,a[y],a[x])}return b},
fc:function(a,b,c,d,e,f,g){switch(c){case 0:return H.ak(b,new H.fd(a))
case 1:return H.ak(b,new H.fe(a,d))
case 2:return H.ak(b,new H.ff(a,d,e))
case 3:return H.ak(b,new H.fg(a,d,e,f))
case 4:return H.ak(b,new H.fh(a,d,e,f,g))}throw H.d(P.aq("Unsupported number of arguments for wrapped closure"))},
a7:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,init.globalState.d,H.fc)
a.$identity=z
return z},
cU:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.l(c).$ish){z.$reflectionInfo=c
x=H.dG(z).r}else x=c
w=d?Object.create(new H.dL().constructor.prototype):Object.create(new H.aP(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.z
$.z=J.a8(u,1)
u=new Function("a,b,c,d","this.$initialize(a,b,c,d);"+u)
v=u}w.constructor=v
v.prototype=w
u=!d
if(u){t=e.length==1&&!0
s=H.bs(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.f5,x)
else if(u&&typeof x=="function"){q=t?H.br:H.aQ
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.d("Error in reflectionInfo.")
w.$signature=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.bs(a,o,t)
w[n]=m}}w["call*"]=s
w.$requiredArgCount=z.$requiredArgCount
w.$defaultValues=z.$defaultValues
return v},
cR:function(a,b,c,d){var z=H.aQ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
bs:function(a,b,c){var z,y,x,w,v,u
if(c)return H.cT(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.cR(y,!w,z,b)
if(y===0){w=$.a0
if(w==null){w=H.ao("self")
$.a0=w}w="return function(){return this."+H.a(w)+"."+H.a(z)+"();"
v=$.z
$.z=J.a8(v,1)
return new Function(w+H.a(v)+"}")()}u="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w="return function("+u+"){return this."
v=$.a0
if(v==null){v=H.ao("self")
$.a0=v}v=w+H.a(v)+"."+H.a(z)+"("+u+");"
w=$.z
$.z=J.a8(w,1)
return new Function(v+H.a(w)+"}")()},
cS:function(a,b,c,d){var z,y
z=H.aQ
y=H.br
switch(b?-1:a){case 0:throw H.d(new H.dH("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
cT:function(a,b){var z,y,x,w,v,u,t,s
z=H.cQ()
y=$.bq
if(y==null){y=H.ao("receiver")
$.bq=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.cS(w,!u,x,b)
if(w===1){y="return function(){return this."+H.a(z)+"."+H.a(x)+"(this."+H.a(y)+");"
u=$.z
$.z=J.a8(u,1)
return new Function(y+H.a(u)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
y="return function("+s+"){return this."+H.a(z)+"."+H.a(x)+"(this."+H.a(y)+", "+s+");"
u=$.z
$.z=J.a8(u,1)
return new Function(y+H.a(u)+"}")()},
be:function(a,b,c,d,e,f){var z
b.fixed$length=Array
if(!!J.l(c).$ish){c.fixed$length=Array
z=c}else z=c
return H.cU(a,b,z,!!d,e,f)},
fs:function(a){throw H.d(new P.cX("Cyclic initialization for static "+H.a(a)))},
Z:function(a,b,c){return new H.dI(a,b,c,null)},
am:function(){return C.k},
aL:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
i:function(a,b){a.$builtinTypeInfo=b
return a},
bg:function(a){if(a==null)return
return a.$builtinTypeInfo},
cy:function(a,b){return H.cG(a["$as"+H.a(b)],H.bg(a))},
y:function(a,b,c){var z=H.cy(a,b)
return z==null?null:z[c]},
L:function(a,b){var z=H.bg(a)
return z==null?null:z[b]},
bl:function(a,b){if(a==null)return"dynamic"
else if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.cA(a,1,b)
else if(typeof a=="function")return a.builtin$cls
else if(typeof a==="number"&&Math.floor(a)===a)return C.b.i(a)
else return},
cA:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.az("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.a(H.bl(u,c))}return w?"":"<"+H.a(z)+">"},
cG:function(a,b){if(typeof a=="function"){a=a.apply(null,b)
if(a==null)return a
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)}return b},
eX:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.t(a[y],b[y]))return!1
return!0},
bf:function(a,b,c){return a.apply(b,H.cy(b,c))},
t:function(a,b){var z,y,x,w,v
if(a===b)return!0
if(a==null||b==null)return!0
if('func' in b)return H.cz(a,b)
if('func' in a)return b.builtin$cls==="h_"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){if(!('$is'+H.bl(w,null) in y.prototype))return!1
v=y.prototype["$as"+H.a(H.bl(w,null))]}else v=null
if(!z&&v==null||!x)return!0
z=z?a.slice(1):null
x=x?b.slice(1):null
return H.eX(H.cG(v,z),x)},
cu:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.t(z,v)||H.t(v,z)))return!1}return!0},
eW:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=Object.getOwnPropertyNames(b)
z.fixed$length=Array
y=z
for(z=y.length,x=0;x<z;++x){w=y[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.t(v,u)||H.t(u,v)))return!1}return!0},
cz:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.t(z,y)||H.t(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.cu(x,w,!1))return!1
if(!H.cu(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.t(o,n)||H.t(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.t(o,n)||H.t(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.t(o,n)||H.t(n,o)))return!1}}return H.eW(a.named,b.named)},
hK:function(a){var z=$.bh
return"Instance of "+(z==null?"<Unknown>":z.$1(a))},
hI:function(a){return H.I(a)},
hH:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
fj:function(a){var z,y,x,w,v,u
z=$.bh.$1(a)
y=$.aE[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.aJ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.ct.$2(a,z)
if(z!=null){y=$.aE[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.aJ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bj(x)
$.aE[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.aJ[z]=x
return x}if(v==="-"){u=H.bj(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.cC(a,x)
if(v==="*")throw H.d(new P.cd(z))
if(init.leafTags[z]===true){u=H.bj(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.cC(a,x)},
cC:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.aK(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bj:function(a){return J.aK(a,!1,null,!!a.$isat)},
fn:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return J.aK(z,!1,null,!!z.$isat)
else return J.aK(z,c,null,null)},
fa:function(){if(!0===$.bi)return
$.bi=!0
H.fb()},
fb:function(){var z,y,x,w,v,u,t,s
$.aE=Object.create(null)
$.aJ=Object.create(null)
H.f6()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.cD.$1(v)
if(u!=null){t=H.fn(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
f6:function(){var z,y,x,w,v,u,t
z=C.q()
z=H.X(C.n,H.X(C.t,H.X(C.j,H.X(C.j,H.X(C.r,H.X(C.o,H.X(C.p(C.i),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.bh=new H.f7(v)
$.ct=new H.f8(u)
$.cD=new H.f9(t)},
X:function(a,b){return a(b)||b},
dF:{"^":"b;a,b,c,d,e,f,r,x",l:{
dG:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z.fixed$length=Array
z=z
y=z[0]
x=z[1]
return new H.dF(a,z,(y&1)===1,y>>1,x>>1,(x&1)===1,z[2],null)}}},
e0:{"^":"b;a,b,c,d,e,f",
A:function(a){var z,y,x
z=new RegExp(this.a).exec(a)
if(z==null)return
y=Object.create(null)
x=this.b
if(x!==-1)y.arguments=z[x+1]
x=this.c
if(x!==-1)y.argumentsExpr=z[x+1]
x=this.d
if(x!==-1)y.expr=z[x+1]
x=this.e
if(x!==-1)y.method=z[x+1]
x=this.f
if(x!==-1)y.receiver=z[x+1]
return y},
l:{
A:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.e0(a.replace('\\$arguments\\$','((?:x|[^x])*)').replace('\\$argumentsExpr\\$','((?:x|[^x])*)').replace('\\$expr\\$','((?:x|[^x])*)').replace('\\$method\\$','((?:x|[^x])*)').replace('\\$receiver\\$','((?:x|[^x])*)'),y,x,w,v,u)},
aA:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
c8:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
bP:{"^":"q;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.a(this.a)
return"NullError: method not found: '"+H.a(z)+"' on null"}},
du:{"^":"q;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.a(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+H.a(z)+"' ("+H.a(this.a)+")"
return"NoSuchMethodError: method not found: '"+H.a(z)+"' on '"+H.a(y)+"' ("+H.a(this.a)+")"},
l:{
aU:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.du(a,y,z?null:b.receiver)}}},
e1:{"^":"q;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
ft:{"^":"e:2;a",
$1:function(a){if(!!J.l(a).$isq)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
cn:{"^":"b;a,b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z}},
fd:{"^":"e:0;a",
$0:function(){return this.a.$0()}},
fe:{"^":"e:0;a,b",
$0:function(){return this.a.$1(this.b)}},
ff:{"^":"e:0;a,b,c",
$0:function(){return this.a.$2(this.b,this.c)}},
fg:{"^":"e:0;a,b,c,d",
$0:function(){return this.a.$3(this.b,this.c,this.d)}},
fh:{"^":"e:0;a,b,c,d,e",
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)}},
e:{"^":"b;",
i:function(a){return"Closure '"+H.bT(this)+"'"},
gbz:function(){return this},
gbz:function(){return this}},
c0:{"^":"e;"},
dL:{"^":"c0;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
aP:{"^":"c0;a,b,c,d",
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.aP))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gp:function(a){var z,y
z=this.c
if(z==null)y=H.I(this.a)
else y=typeof z!=="object"?J.v(z):H.I(z)
z=H.I(this.b)
if(typeof y!=="number")return y.cO()
return(y^z)>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.a(this.d)+"' of "+H.av(z)},
l:{
aQ:function(a){return a.a},
br:function(a){return a.c},
cQ:function(){var z=$.a0
if(z==null){z=H.ao("self")
$.a0=z}return z},
ao:function(a){var z,y,x,w,v
z=new H.aP("self","target","receiver","name")
y=Object.getOwnPropertyNames(z)
y.fixed$length=Array
x=y
for(y=x.length,w=0;w<y;++w){v=x[w]
if(z[v]===a)return v}}}},
dH:{"^":"q;a",
i:function(a){return"RuntimeError: "+this.a}},
bY:{"^":"b;"},
dI:{"^":"bY;a,b,c,d",
J:function(a){var z=this.c2(a)
return z==null?!1:H.cz(z,this.T())},
c2:function(a){var z=J.l(a)
return"$signature" in z?z.$signature():null},
T:function(){var z,y,x,w,v,u,t
z={func:"dynafunc"}
y=this.a
x=J.l(y)
if(!!x.$ishr)z.v=true
else if(!x.$isbw)z.ret=y.T()
y=this.b
if(y!=null&&y.length!==0)z.args=H.bX(y)
y=this.c
if(y!=null&&y.length!==0)z.opt=H.bX(y)
y=this.d
if(y!=null){w=Object.create(null)
v=H.cx(y)
for(x=v.length,u=0;u<x;++u){t=v[u]
w[t]=y[t].T()}z.named=w}return z},
i:function(a){var z,y,x,w,v,u,t,s
z=this.b
if(z!=null)for(y=z.length,x="(",w=!1,v=0;v<y;++v,w=!0){u=z[v]
if(w)x+=", "
x+=H.a(u)}else{x="("
w=!1}z=this.c
if(z!=null&&z.length!==0){x=(w?x+", ":x)+"["
for(y=z.length,w=!1,v=0;v<y;++v,w=!0){u=z[v]
if(w)x+=", "
x+=H.a(u)}x+="]"}else{z=this.d
if(z!=null){x=(w?x+", ":x)+"{"
t=H.cx(z)
for(y=t.length,w=!1,v=0;v<y;++v,w=!0){s=t[v]
if(w)x+=", "
x+=H.a(z[s].T())+" "+s}x+="}"}}return x+(") -> "+H.a(this.a))},
l:{
bX:function(a){var z,y,x
a=a
z=[]
for(y=a.length,x=0;x<y;++x)z.push(a[x].T())
return z}}},
bw:{"^":"bY;",
i:function(a){return"dynamic"},
T:function(){return}},
R:{"^":"b;a,b,c,d,e,f,r",
gj:function(a){return this.a},
gG:function(a){return this.a===0},
gbn:function(){return H.i(new H.dw(this),[H.L(this,0)])},
gby:function(a){return H.au(this.gbn(),new H.dt(this),H.L(this,0),H.L(this,1))},
bj:function(a){var z
if((a&0x3ffffff)===a){z=this.c
if(z==null)return!1
return this.c_(z,a)}else return this.cz(a)},
cz:function(a){var z=this.d
if(z==null)return!1
return this.a3(this.B(z,this.a2(a)),a)>=0},
h:function(a,b){var z,y,x
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.B(z,b)
return y==null?null:y.gL()}else if(typeof b==="number"&&(b&0x3ffffff)===b){x=this.c
if(x==null)return
y=this.B(x,b)
return y==null?null:y.gL()}else return this.cA(b)},
cA:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.B(z,this.a2(a))
x=this.a3(y,a)
if(x<0)return
return y[x].gL()},
t:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.at()
this.b=z}this.aR(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.at()
this.c=y}this.aR(y,b,c)}else{x=this.d
if(x==null){x=this.at()
this.d=x}w=this.a2(b)
v=this.B(x,w)
if(v==null)this.aw(x,w,[this.af(b,c)])
else{u=this.a3(v,b)
if(u>=0)v[u].sL(c)
else v.push(this.af(b,c))}}},
D:function(a,b){if(typeof b==="string")return this.aS(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.aS(this.c,b)
else return this.cB(b)},
cB:function(a){var z,y,x,w
z=this.d
if(z==null)return
y=this.B(z,this.a2(a))
x=this.a3(y,a)
if(x<0)return
w=y.splice(x,1)[0]
this.aT(w)
return w.gL()},
R:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
v:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(new P.w(this))
z=z.c}},
aR:function(a,b,c){var z=this.B(a,b)
if(z==null)this.aw(a,b,this.af(b,c))
else z.sL(c)},
aS:function(a,b){var z
if(a==null)return
z=this.B(a,b)
if(z==null)return
this.aT(z)
this.aW(a,b)
return z.gL()},
af:function(a,b){var z,y
z=new H.dv(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
aT:function(a){var z,y
z=a.gbU()
y=a.c
if(z==null)this.e=y
else z.c=y
if(y==null)this.f=z
else y.d=z;--this.a
this.r=this.r+1&67108863},
a2:function(a){return J.v(a)&0x3ffffff},
a3:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].gbm(),b))return y
return-1},
i:function(a){return P.dB(this)},
B:function(a,b){return a[b]},
aw:function(a,b,c){a[b]=c},
aW:function(a,b){delete a[b]},
c_:function(a,b){return this.B(a,b)!=null},
at:function(){var z=Object.create(null)
this.aw(z,"<non-identifier-key>",z)
this.aW(z,"<non-identifier-key>")
return z},
$isd9:1},
dt:{"^":"e:2;a",
$1:function(a){return this.a.h(0,a)}},
dv:{"^":"b;bm:a<,L:b@,c,bU:d<"},
dw:{"^":"x;a",
gj:function(a){return this.a.a},
gq:function(a){var z,y
z=this.a
y=new H.dx(z,z.r,null,null)
y.c=z.e
return y},
v:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.d(new P.w(z))
y=y.c}},
$ism:1},
dx:{"^":"b;a,b,c,d",
gn:function(){return this.d},
k:function(){var z=this.a
if(this.b!==z.r)throw H.d(new P.w(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
f7:{"^":"e:2;a",
$1:function(a){return this.a(a)}},
f8:{"^":"e:5;a",
$2:function(a,b){return this.a(a,b)}},
f9:{"^":"e:6;a",
$1:function(a){return this.a(a)}},
dr:{"^":"b;a,b,c,d",
i:function(a){return"RegExp/"+this.a+"/"},
l:{
ds:function(a,b,c,d){var z,y,x,w
H.cw(a)
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.d(new P.d3("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
bF:function(){return new P.b3("No element")},
di:function(){return new P.b3("Too few elements")},
aV:{"^":"x;",
gq:function(a){return new H.bI(this,this.gj(this),0,null)},
v:function(a,b){var z,y
z=this.gj(this)
for(y=0;y<z;++y){b.$1(this.F(0,y))
if(z!==this.gj(this))throw H.d(new P.w(this))}},
N:function(a,b){return H.i(new H.aZ(this,b),[null,null])},
aL:function(a,b){var z,y,x
z=H.i([],[H.y(this,"aV",0)])
C.c.sj(z,this.gj(this))
for(y=0;y<this.gj(this);++y){x=this.F(0,y)
if(y>=z.length)return H.f(z,y)
z[y]=x}return z},
aK:function(a){return this.aL(a,!0)},
$ism:1},
bI:{"^":"b;a,b,c,d",
gn:function(){return this.d},
k:function(){var z,y,x,w
z=this.a
y=J.C(z)
x=y.gj(z)
if(this.b!==x)throw H.d(new P.w(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.F(z,w);++this.c
return!0}},
bJ:{"^":"x;a,b",
gq:function(a){var z=new H.dA(null,J.aN(this.a),this.b)
z.$builtinTypeInfo=this.$builtinTypeInfo
return z},
gj:function(a){return J.a9(this.a)},
$asx:function(a,b){return[b]},
l:{
au:function(a,b,c,d){if(!!J.l(a).$ism)return H.i(new H.aR(a,b),[c,d])
return H.i(new H.bJ(a,b),[c,d])}}},
aR:{"^":"bJ;a,b",$ism:1},
dA:{"^":"dj;a,b,c",
k:function(){var z=this.b
if(z.k()){this.a=this.aq(z.gn())
return!0}this.a=null
return!1},
gn:function(){return this.a},
aq:function(a){return this.c.$1(a)}},
aZ:{"^":"aV;a,b",
gj:function(a){return J.a9(this.a)},
F:function(a,b){return this.aq(J.cM(this.a,b))},
aq:function(a){return this.b.$1(a)},
$asaV:function(a,b){return[b]},
$asx:function(a,b){return[b]},
$ism:1},
bC:{"^":"b;"}}],["","",,H,{"^":"",
cx:function(a){var z=H.i(a?Object.keys(a):[],[null])
z.fixed$length=Array
return z}}],["","",,P,{"^":"",
e3:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.eY()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.a7(new P.e5(z),1)).observe(y,{childList:true})
return new P.e4(z,y,x)}else if(self.setImmediate!=null)return P.eZ()
return P.f_()},
hs:[function(a){++init.globalState.f.b
self.scheduleImmediate(H.a7(new P.e6(a),0))},"$1","eY",2,0,3],
ht:[function(a){++init.globalState.f.b
self.setImmediate(H.a7(new P.e7(a),0))},"$1","eZ",2,0,3],
hu:[function(a){P.b4(C.h,a)},"$1","f_",2,0,3],
co:function(a,b){var z=H.am()
z=H.Z(z,[z,z]).J(a)
if(z){b.toString
return a}else{b.toString
return a}},
eS:function(){var z,y
for(;z=$.W,z!=null;){$.a5=null
y=z.b
$.W=y
if(y==null)$.a4=null
z.a.$0()}},
hG:[function(){$.bb=!0
try{P.eS()}finally{$.a5=null
$.bb=!1
if($.W!=null)$.$get$b5().$1(P.cv())}},"$0","cv",0,0,1],
cs:function(a){var z=new P.ce(a,null)
if($.W==null){$.a4=z
$.W=z
if(!$.bb)$.$get$b5().$1(P.cv())}else{$.a4.b=z
$.a4=z}},
eV:function(a){var z,y,x
z=$.W
if(z==null){P.cs(a)
$.a5=$.a4
return}y=new P.ce(a,null)
x=$.a5
if(x==null){y.b=z
$.a5=y
$.W=y}else{y.b=x.b
x.b=y
$.a5=y
if(y.b==null)$.a4=y}},
cE:function(a){var z=$.k
if(C.a===z){P.aD(null,null,C.a,a)
return}z.toString
P.aD(null,null,z,z.az(a,!0))},
eU:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){t=H.u(u)
z=t
y=H.r(u)
$.k.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.D(x)
w=t
v=x.gI()
c.$2(w,v)}}},
eM:function(a,b,c,d){var z=a.aA()
if(!!J.l(z).$isQ)z.aN(new P.eP(b,c,d))
else b.V(c,d)},
eN:function(a,b){return new P.eO(a,b)},
e_:function(a,b){var z=$.k
if(z===C.a){z.toString
return P.b4(a,b)}return P.b4(a,z.az(b,!0))},
b4:function(a,b){var z=C.b.X(a.a,1000)
return H.dX(z<0?0:z,b)},
al:function(a,b,c,d,e){var z={}
z.a=d
P.eV(new P.eT(z,e))},
cp:function(a,b,c,d){var z,y
y=$.k
if(y===c)return d.$0()
$.k=c
z=y
try{y=d.$0()
return y}finally{$.k=z}},
cr:function(a,b,c,d,e){var z,y
y=$.k
if(y===c)return d.$1(e)
$.k=c
z=y
try{y=d.$1(e)
return y}finally{$.k=z}},
cq:function(a,b,c,d,e,f){var z,y
y=$.k
if(y===c)return d.$2(e,f)
$.k=c
z=y
try{y=d.$2(e,f)
return y}finally{$.k=z}},
aD:function(a,b,c,d){var z=C.a!==c
if(z)d=c.az(d,!(!z||!1))
P.cs(d)},
e5:{"^":"e:2;a",
$1:function(a){var z,y;--init.globalState.f.b
z=this.a
y=z.a
z.a=null
y.$0()}},
e4:{"^":"e:7;a,b,c",
$1:function(a){var z,y;++init.globalState.f.b
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
e6:{"^":"e:0;a",
$0:function(){--init.globalState.f.b
this.a.$0()}},
e7:{"^":"e:0;a",
$0:function(){--init.globalState.f.b
this.a.$0()}},
Q:{"^":"b;"},
cj:{"^":"b;av:a<,b,c,d,e",
gcg:function(){return this.b.b},
gbl:function(){return(this.c&1)!==0},
gcv:function(){return(this.c&2)!==0},
gcw:function(){return this.c===6},
gbk:function(){return this.c===8},
gc9:function(){return this.d},
gcf:function(){return this.d}},
T:{"^":"b;W:a@,b,cd:c<",
gc7:function(){return this.a===2},
gas:function(){return this.a>=4},
bw:function(a,b){var z,y
z=$.k
if(z!==C.a){z.toString
if(b!=null)b=P.co(b,z)}y=H.i(new P.T(0,z,null),[null])
this.ah(new P.cj(null,y,b==null?1:3,a,b))
return y},
cK:function(a){return this.bw(a,null)},
aN:function(a){var z,y
z=$.k
y=new P.T(0,z,null)
y.$builtinTypeInfo=this.$builtinTypeInfo
if(z!==C.a)z.toString
this.ah(new P.cj(null,y,8,a,null))
return y},
ah:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gas()){y.ah(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.aD(null,null,z,new P.ek(this,a))}},
b6:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gav()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gas()){v.b6(a)
return}this.a=v.a
this.c=v.c}z.a=this.a9(a)
y=this.b
y.toString
P.aD(null,null,y,new P.ep(z,this))}},
a8:function(){var z=this.c
this.c=null
return this.a9(z)},
a9:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gav()
z.a=y}return y},
am:function(a){var z
if(!!J.l(a).$isQ)P.ck(a,this)
else{z=this.a8()
this.a=4
this.c=a
P.U(this,z)}},
bY:function(a){var z=this.a8()
this.a=4
this.c=a
P.U(this,z)},
V:[function(a,b){var z=this.a8()
this.a=8
this.c=new P.aa(a,b)
P.U(this,z)},function(a){return this.V(a,null)},"cP","$2","$1","gan",2,2,8,0],
$isQ:1,
l:{
el:function(a,b){var z,y,x,w
b.sW(1)
try{a.bw(new P.em(b),new P.en(b))}catch(x){w=H.u(x)
z=w
y=H.r(x)
P.cE(new P.eo(b,z,y))}},
ck:function(a,b){var z,y,x
for(;a.gc7();)a=a.c
z=a.gas()
y=b.c
if(z){b.c=null
x=b.a9(y)
b.a=a.a
b.c=a.c
P.U(b,x)}else{b.a=2
b.c=a
a.b6(y)}},
U:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
z=y.b
y=J.D(v)
x=v.gI()
z.toString
P.al(null,null,z,y,x)}return}for(;b.gav()!=null;b=u){u=b.a
b.a=null
P.U(z.a,b)}t=z.a.c
x.a=w
x.b=t
y=!w
if(!y||b.gbl()||b.gbk()){s=b.gcg()
if(w){r=z.a.b
r.toString
r=r==null?s==null:r===s
if(!r)s.toString
else r=!0
r=!r}else r=!1
if(r){y=z.a
v=y.c
y=y.b
x=J.D(v)
r=v.gI()
y.toString
P.al(null,null,y,x,r)
return}q=$.k
if(q==null?s!=null:q!==s)$.k=s
else q=null
if(b.gbk())new P.es(z,x,w,b,s).$0()
else if(y){if(b.gbl())new P.er(x,w,b,t,s).$0()}else if(b.gcv())new P.eq(z,x,b,s).$0()
if(q!=null)$.k=q
y=x.b
r=J.l(y)
if(!!r.$isQ){p=b.b
if(!!r.$isT)if(y.a>=4){o=p.c
p.c=null
b=p.a9(o)
p.a=y.a
p.c=y.c
z.a=y
continue}else P.ck(y,p)
else P.el(y,p)
return}}p=b.b
b=p.a8()
y=x.a
x=x.b
if(!y){p.a=4
p.c=x}else{p.a=8
p.c=x}z.a=p
y=p}}}},
ek:{"^":"e:0;a,b",
$0:function(){P.U(this.a,this.b)}},
ep:{"^":"e:0;a,b",
$0:function(){P.U(this.b,this.a.a)}},
em:{"^":"e:2;a",
$1:function(a){this.a.bY(a)}},
en:{"^":"e:9;a",
$2:function(a,b){this.a.V(a,b)},
$1:function(a){return this.$2(a,null)}},
eo:{"^":"e:0;a,b,c",
$0:function(){this.a.V(this.b,this.c)}},
er:{"^":"e:1;a,b,c,d,e",
$0:function(){var z,y,x,w
try{x=this.a
x.b=this.e.aI(this.c.gc9(),this.d)
x.a=!1}catch(w){x=H.u(w)
z=x
y=H.r(w)
x=this.a
x.b=new P.aa(z,y)
x.a=!0}}},
eq:{"^":"e:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.a.a.c
y=!0
r=this.c
if(r.gcw()){x=r.d
try{y=this.d.aI(x,J.D(z))}catch(q){r=H.u(q)
w=r
v=H.r(q)
r=J.D(z)
p=w
o=(r==null?p==null:r===p)?z:new P.aa(w,v)
r=this.b
r.b=o
r.a=!0
return}}u=r.e
if(y===!0&&u!=null)try{r=u
p=H.am()
p=H.Z(p,[p,p]).J(r)
n=this.d
m=this.b
if(p)m.b=n.cI(u,J.D(z),z.gI())
else m.b=n.aI(u,J.D(z))
m.a=!1}catch(q){r=H.u(q)
t=r
s=H.r(q)
r=J.D(z)
p=t
o=(r==null?p==null:r===p)?z:new P.aa(t,s)
r=this.b
r.b=o
r.a=!0}}},
es:{"^":"e:1;a,b,c,d,e",
$0:function(){var z,y,x,w,v,u
z=null
try{z=this.e.bt(this.d.gcf())}catch(w){v=H.u(w)
y=v
x=H.r(w)
if(this.c){v=J.D(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.aa(y,x)
u.a=!0
return}if(!!J.l(z).$isQ){if(z instanceof P.T&&z.gW()>=4){if(z.gW()===8){v=this.b
v.b=z.gcd()
v.a=!0}return}v=this.b
v.b=z.cK(new P.et(this.a.a))
v.a=!1}}},
et:{"^":"e:2;a",
$1:function(a){return this.a}},
ce:{"^":"b;a,b"},
J:{"^":"b;",
N:function(a,b){return H.i(new P.eC(b,this),[H.y(this,"J",0),null])},
v:function(a,b){var z,y
z={}
y=H.i(new P.T(0,$.k,null),[null])
z.a=null
z.a=this.S(new P.dP(z,this,b,y),!0,new P.dQ(y),y.gan())
return y},
gj:function(a){var z,y
z={}
y=H.i(new P.T(0,$.k,null),[P.n])
z.a=0
this.S(new P.dR(z),!0,new P.dS(z,y),y.gan())
return y},
aK:function(a){var z,y
z=H.i([],[H.y(this,"J",0)])
y=H.i(new P.T(0,$.k,null),[[P.h,H.y(this,"J",0)]])
this.S(new P.dT(this,z),!0,new P.dU(z,y),y.gan())
return y}},
dP:{"^":"e;a,b,c,d",
$1:function(a){P.eU(new P.dN(this.c,a),new P.dO(),P.eN(this.a.a,this.d))},
$signature:function(){return H.bf(function(a){return{func:1,args:[a]}},this.b,"J")}},
dN:{"^":"e:0;a,b",
$0:function(){return this.a.$1(this.b)}},
dO:{"^":"e:2;",
$1:function(a){}},
dQ:{"^":"e:0;a",
$0:function(){this.a.am(null)}},
dR:{"^":"e:2;a",
$1:function(a){++this.a.a}},
dS:{"^":"e:0;a,b",
$0:function(){this.b.am(this.a.a)}},
dT:{"^":"e;a,b",
$1:function(a){this.b.push(a)},
$signature:function(){return H.bf(function(a){return{func:1,args:[a]}},this.a,"J")}},
dU:{"^":"e:0;a,b",
$0:function(){this.b.am(this.a)}},
dM:{"^":"b;"},
hy:{"^":"b;"},
e9:{"^":"b;W:e@",
aF:function(a,b){var z=this.e
if((z&8)!==0)return
this.e=(z+128|4)>>>0
if(z<128&&this.r!=null)this.r.bg()
if((z&4)===0&&(this.e&32)===0)this.aZ(this.gb2())},
bp:function(a){return this.aF(a,null)},
br:function(){var z=this.e
if((z&8)!==0)return
if(z>=128){z-=128
this.e=z
if(z<128){if((z&64)!==0){z=this.r
z=!z.gG(z)}else z=!1
if(z)this.r.ad(this)
else{z=(this.e&4294967291)>>>0
this.e=z
if((z&32)===0)this.aZ(this.gb4())}}}},
aA:function(){var z=(this.e&4294967279)>>>0
this.e=z
if((z&8)!==0)return this.f
this.ak()
return this.f},
ak:function(){var z=(this.e|8)>>>0
this.e=z
if((z&64)!==0)this.r.bg()
if((this.e&32)===0)this.r=null
this.f=this.b1()},
aj:["bN",function(a){var z=this.e
if((z&8)!==0)return
if(z<32)this.b9(a)
else this.ai(new P.ec(a,null))}],
ag:["bO",function(a,b){var z=this.e
if((z&8)!==0)return
if(z<32)this.bb(a,b)
else this.ai(new P.ee(a,b,null))}],
bW:function(){var z=this.e
if((z&8)!==0)return
z=(z|2)>>>0
this.e=z
if(z<32)this.ba()
else this.ai(C.l)},
b3:[function(){},"$0","gb2",0,0,1],
b5:[function(){},"$0","gb4",0,0,1],
b1:function(){return},
ai:function(a){var z,y
z=this.r
if(z==null){z=new P.eK(null,null,0)
this.r=z}z.u(0,a)
y=this.e
if((y&64)===0){y=(y|64)>>>0
this.e=y
if(y<128)this.r.ad(this)}},
b9:function(a){var z=this.e
this.e=(z|32)>>>0
this.d.aJ(this.a,a)
this.e=(this.e&4294967263)>>>0
this.al((z&4)!==0)},
bb:function(a,b){var z,y
z=this.e
y=new P.eb(this,a,b)
if((z&1)!==0){this.e=(z|16)>>>0
this.ak()
z=this.f
if(!!J.l(z).$isQ)z.aN(y)
else y.$0()}else{y.$0()
this.al((z&4)!==0)}},
ba:function(){var z,y
z=new P.ea(this)
this.ak()
this.e=(this.e|16)>>>0
y=this.f
if(!!J.l(y).$isQ)y.aN(z)
else z.$0()},
aZ:function(a){var z=this.e
this.e=(z|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.al((z&4)!==0)},
al:function(a){var z,y
if((this.e&64)!==0){z=this.r
z=z.gG(z)}else z=!1
if(z){z=(this.e&4294967231)>>>0
this.e=z
if((z&4)!==0)if(z<128){z=this.r
z=z==null||z.gG(z)}else z=!1
else z=!1
if(z)this.e=(this.e&4294967291)>>>0}for(;!0;a=y){z=this.e
if((z&8)!==0){this.r=null
return}y=(z&4)!==0
if(a===y)break
this.e=(z^32)>>>0
if(y)this.b3()
else this.b5()
this.e=(this.e&4294967263)>>>0}z=this.e
if((z&64)!==0&&z<128)this.r.ad(this)},
bR:function(a,b,c,d){var z=this.d
z.toString
this.a=a
this.b=P.co(b,z)
this.c=c}},
eb:{"^":"e:1;a,b,c",
$0:function(){var z,y,x,w,v,u
z=this.a
y=z.e
if((y&8)!==0&&(y&16)===0)return
z.e=(y|32)>>>0
y=z.b
x=H.am()
x=H.Z(x,[x,x]).J(y)
w=z.d
v=this.b
u=z.b
if(x)w.cJ(u,v,this.c)
else w.aJ(u,v)
z.e=(z.e&4294967263)>>>0}},
ea:{"^":"e:1;a",
$0:function(){var z,y
z=this.a
y=z.e
if((y&16)===0)return
z.e=(y|42)>>>0
z.d.bu(z.c)
z.e=(z.e&4294967263)>>>0}},
cg:{"^":"b;ab:a@"},
ec:{"^":"cg;b,a",
aG:function(a){a.b9(this.b)}},
ee:{"^":"cg;a0:b>,I:c<,a",
aG:function(a){a.bb(this.b,this.c)}},
ed:{"^":"b;",
aG:function(a){a.ba()},
gab:function(){return},
sab:function(a){throw H.d(new P.b3("No events after a done."))}},
eE:{"^":"b;W:a@",
ad:function(a){var z=this.a
if(z===1)return
if(z>=1){this.a=1
return}P.cE(new P.eF(this,a))
this.a=1},
bg:function(){if(this.a===1)this.a=3}},
eF:{"^":"e:0;a,b",
$0:function(){var z,y,x,w
z=this.a
y=z.a
z.a=0
if(y===3)return
x=z.b
w=x.gab()
z.b=w
if(w==null)z.c=null
x.aG(this.b)}},
eK:{"^":"eE;b,c,a",
gG:function(a){return this.c==null},
u:function(a,b){var z=this.c
if(z==null){this.c=b
this.b=b}else{z.sab(b)
this.c=b}}},
eP:{"^":"e:0;a,b,c",
$0:function(){return this.a.V(this.b,this.c)}},
eO:{"^":"e:10;a,b",
$2:function(a,b){return P.eM(this.a,this.b,a,b)}},
b7:{"^":"J;",
S:function(a,b,c,d){return this.c0(a,d,c,!0===b)},
bo:function(a,b,c){return this.S(a,null,b,c)},
c0:function(a,b,c,d){return P.ej(this,a,b,c,d,H.y(this,"b7",0),H.y(this,"b7",1))},
b_:function(a,b){b.aj(a)},
$asJ:function(a,b){return[b]}},
ci:{"^":"e9;x,y,a,b,c,d,e,f,r",
aj:function(a){if((this.e&2)!==0)return
this.bN(a)},
ag:function(a,b){if((this.e&2)!==0)return
this.bO(a,b)},
b3:[function(){var z=this.y
if(z==null)return
z.bp(0)},"$0","gb2",0,0,1],
b5:[function(){var z=this.y
if(z==null)return
z.br()},"$0","gb4",0,0,1],
b1:function(){var z=this.y
if(z!=null){this.y=null
return z.aA()}return},
cQ:[function(a){this.x.b_(a,this)},"$1","gc3",2,0,function(){return H.bf(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"ci")}],
cS:[function(a,b){this.ag(a,b)},"$2","gc5",4,0,11],
cR:[function(){this.bW()},"$0","gc4",0,0,1],
bS:function(a,b,c,d,e,f,g){var z,y
z=this.gc3()
y=this.gc5()
this.y=this.x.a.bo(z,this.gc4(),y)},
l:{
ej:function(a,b,c,d,e,f,g){var z=$.k
z=H.i(new P.ci(a,null,null,null,null,z,e?1:0,null,null),[f,g])
z.bR(b,c,d,e)
z.bS(a,b,c,d,e,f,g)
return z}}},
eC:{"^":"b7;b,a",
b_:function(a,b){var z,y,x,w,v
z=null
try{z=this.ce(a)}catch(w){v=H.u(w)
y=v
x=H.r(w)
$.k.toString
b.ag(y,x)
return}b.aj(z)},
ce:function(a){return this.b.$1(a)}},
aa:{"^":"b;a0:a>,I:b<",
i:function(a){return H.a(this.a)},
$isq:1},
eL:{"^":"b;"},
eT:{"^":"e:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bQ()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=J.N(y)
throw x}},
eG:{"^":"eL;",
bu:function(a){var z,y,x,w
try{if(C.a===$.k){x=a.$0()
return x}x=P.cp(null,null,this,a)
return x}catch(w){x=H.u(w)
z=x
y=H.r(w)
return P.al(null,null,this,z,y)}},
aJ:function(a,b){var z,y,x,w
try{if(C.a===$.k){x=a.$1(b)
return x}x=P.cr(null,null,this,a,b)
return x}catch(w){x=H.u(w)
z=x
y=H.r(w)
return P.al(null,null,this,z,y)}},
cJ:function(a,b,c){var z,y,x,w
try{if(C.a===$.k){x=a.$2(b,c)
return x}x=P.cq(null,null,this,a,b,c)
return x}catch(w){x=H.u(w)
z=x
y=H.r(w)
return P.al(null,null,this,z,y)}},
az:function(a,b){if(b)return new P.eH(this,a)
else return new P.eI(this,a)},
cj:function(a,b){return new P.eJ(this,a)},
h:function(a,b){return},
bt:function(a){if($.k===C.a)return a.$0()
return P.cp(null,null,this,a)},
aI:function(a,b){if($.k===C.a)return a.$1(b)
return P.cr(null,null,this,a,b)},
cI:function(a,b,c){if($.k===C.a)return a.$2(b,c)
return P.cq(null,null,this,a,b,c)}},
eH:{"^":"e:0;a,b",
$0:function(){return this.a.bu(this.b)}},
eI:{"^":"e:0;a,b",
$0:function(){return this.a.bt(this.b)}},
eJ:{"^":"e:2;a,b",
$1:function(a){return this.a.aJ(this.b,a)}}}],["","",,P,{"^":"",
dy:function(){return H.i(new H.R(0,null,null,null,null,null,0),[null,null])},
a1:function(a){return H.f1(a,H.i(new H.R(0,null,null,null,null,null,0),[null,null]))},
dh:function(a,b,c){var z,y
if(P.bc(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$a6()
y.push(a)
try{P.eR(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.c_(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
ar:function(a,b,c){var z,y,x
if(P.bc(a))return b+"..."+c
z=new P.az(b)
y=$.$get$a6()
y.push(a)
try{x=z
x.a=P.c_(x.gP(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gP()+c
y=z.gP()
return y.charCodeAt(0)==0?y:y},
bc:function(a){var z,y
for(z=0;y=$.$get$a6(),z<y.length;++z)if(a===y[z])return!0
return!1},
eR:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gq(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.k())return
w=H.a(z.gn())
b.push(w)
y+=w.length+2;++x}if(!z.k()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gn();++x
if(!z.k()){if(x<=4){b.push(H.a(t))
return}v=H.a(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gn();++x
for(;z.k();t=s,s=r){r=z.gn();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.a(t)
v=H.a(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)},
G:function(a,b,c,d){return H.i(new P.ew(0,null,null,null,null,null,0),[d])},
dB:function(a){var z,y,x
z={}
if(P.bc(a))return"{...}"
y=new P.az("")
try{$.$get$a6().push(a)
x=y
x.a=x.gP()+"{"
z.a=!0
J.cN(a,new P.dC(z,y))
z=y
z.a=z.gP()+"}"}finally{z=$.$get$a6()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gP()
return z.charCodeAt(0)==0?z:z},
cm:{"^":"R;a,b,c,d,e,f,r",
a2:function(a){return H.fo(a)&0x3ffffff},
a3:function(a,b){var z,y,x
if(a==null)return-1
z=a.length
for(y=0;y<z;++y){x=a[y].gbm()
if(x==null?b==null:x===b)return y}return-1},
l:{
a3:function(a,b){return H.i(new P.cm(0,null,null,null,null,null,0),[a,b])}}},
ew:{"^":"eu;a,b,c,d,e,f,r",
gq:function(a){var z=new P.aj(this,this.r,null,null)
z.c=this.e
return z},
gj:function(a){return this.a},
Z:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.bZ(b)},
bZ:function(a){var z=this.d
if(z==null)return!1
return this.a7(z[this.a6(a)],a)>=0},
aE:function(a){var z
if(!(typeof a==="string"&&a!=="__proto__"))z=typeof a==="number"&&(a&0x3ffffff)===a
else z=!0
if(z)return this.Z(0,a)?a:null
else return this.c8(a)},
c8:function(a){var z,y,x
z=this.d
if(z==null)return
y=z[this.a6(a)]
x=this.a7(y,a)
if(x<0)return
return J.cJ(y,x).gaX()},
v:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.d(new P.w(this))
z=z.b}},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.b9()
this.b=z}return this.aU(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.b9()
this.c=y}return this.aU(y,b)}else return this.E(b)},
E:function(a){var z,y,x
z=this.d
if(z==null){z=P.b9()
this.d=z}y=this.a6(a)
x=z[y]
if(x==null)z[y]=[this.au(a)]
else{if(this.a7(x,a)>=0)return!1
x.push(this.au(a))}return!0},
D:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.b7(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.b7(this.c,b)
else return this.cb(b)},
cb:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.a6(a)]
x=this.a7(y,a)
if(x<0)return!1
this.bd(y.splice(x,1)[0])
return!0},
R:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
aU:function(a,b){if(a[b]!=null)return!1
a[b]=this.au(b)
return!0},
b7:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bd(z)
delete a[b]
return!0},
au:function(a){var z,y
z=new P.ex(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
bd:function(a){var z,y
z=a.gca()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.r=this.r+1&67108863},
a6:function(a){return J.v(a)&0x3ffffff},
a7:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].gaX(),b))return y
return-1},
$ism:1,
l:{
b9:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
ex:{"^":"b;aX:a<,b,ca:c<"},
aj:{"^":"b;a,b,c,d",
gn:function(){return this.d},
k:function(){var z=this.a
if(this.b!==z.r)throw H.d(new P.w(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
eu:{"^":"dJ;"},
aW:{"^":"b;",
gq:function(a){return new H.bI(a,this.gj(a),0,null)},
F:function(a,b){return this.h(a,b)},
v:function(a,b){var z,y
z=this.gj(a)
for(y=0;y<z;++y){if(y>=a.length)return H.f(a,y)
b.$1(a[y])
if(z!==a.length)throw H.d(new P.w(a))}},
N:function(a,b){return H.i(new H.aZ(a,b),[null,null])},
i:function(a){return P.ar(a,"[","]")},
$ish:1,
$ash:null,
$ism:1},
dC:{"^":"e:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.a(a)
z.a=y+": "
z.a+=H.a(b)}},
dz:{"^":"x;a,b,c,d",
gq:function(a){return new P.ey(this,this.c,this.d,this.b,null)},
v:function(a,b){var z,y,x
z=this.d
for(y=this.b;y!==this.c;y=(y+1&this.a.length-1)>>>0){x=this.a
if(y<0||y>=x.length)return H.f(x,y)
b.$1(x[y])
if(z!==this.d)H.p(new P.w(this))}},
gG:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
R:function(a){var z,y,x,w,v
z=this.b
y=this.c
if(z!==y){for(x=this.a,w=x.length,v=w-1;z!==y;z=(z+1&v)>>>0){if(z<0||z>=w)return H.f(x,z)
x[z]=null}this.c=0
this.b=0;++this.d}},
i:function(a){return P.ar(this,"{","}")},
bq:function(){var z,y,x,w
z=this.b
if(z===this.c)throw H.d(H.bF());++this.d
y=this.a
x=y.length
if(z>=x)return H.f(y,z)
w=y[z]
y[z]=null
this.b=(z+1&x-1)>>>0
return w},
E:function(a){var z,y,x
z=this.a
y=this.c
x=z.length
if(y>=x)return H.f(z,y)
z[y]=a
x=(y+1&x-1)>>>0
this.c=x
if(this.b===x)this.aY();++this.d},
aY:function(){var z,y,x,w
z=new Array(this.a.length*2)
z.fixed$length=Array
y=H.i(z,[H.L(this,0)])
z=this.a
x=this.b
w=z.length-x
C.c.aP(y,0,w,z,x)
C.c.aP(y,w,w+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=y},
bP:function(a,b){var z=new Array(8)
z.fixed$length=Array
this.a=H.i(z,[b])},
$ism:1,
l:{
aX:function(a,b){var z=H.i(new P.dz(null,0,0,0),[b])
z.bP(a,b)
return z}}},
ey:{"^":"b;a,b,c,d,e",
gn:function(){return this.e},
k:function(){var z,y,x
z=this.a
if(this.c!==z.d)H.p(new P.w(z))
y=this.d
if(y===this.b){this.e=null
return!1}z=z.a
x=z.length
if(y>=x)return H.f(z,y)
this.e=z[y]
this.d=(y+1&x-1)>>>0
return!0}},
dK:{"^":"b;",
N:function(a,b){return H.i(new H.aR(this,b),[H.L(this,0),null])},
i:function(a){return P.ar(this,"{","}")},
v:function(a,b){var z
for(z=new P.aj(this,this.r,null,null),z.c=this.e;z.k();)b.$1(z.d)},
aB:function(a,b){var z,y,x
z=new P.aj(this,this.r,null,null)
z.c=this.e
if(!z.k())return""
y=new P.az("")
if(b===""){do y.a+=H.a(z.d)
while(z.k())}else{y.a=H.a(z.d)
for(;z.k();){y.a+=b
y.a+=H.a(z.d)}}x=y.a
return x.charCodeAt(0)==0?x:x},
$ism:1},
dJ:{"^":"dK;"}}],["","",,P,{"^":"",
by:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.N(a)
if(typeof a==="string")return JSON.stringify(a)
return P.d0(a)},
d0:function(a){var z=J.l(a)
if(!!z.$ise)return z.i(a)
return H.av(a)},
aq:function(a){return new P.ei(a)},
aY:function(a,b,c){var z,y
z=H.i([],[c])
for(y=J.aN(a);y.k();)z.push(y.gn())
return z},
bk:function(a){var z=H.a(a)
H.fp(z)},
f0:{"^":"b;"},
"+bool":0,
fD:{"^":"b;"},
aM:{"^":"an;"},
"+double":0,
ap:{"^":"b;a",
U:function(a,b){return new P.ap(C.b.U(this.a,b.gc1()))},
ac:function(a,b){return C.b.ac(this.a,b.gc1())},
m:function(a,b){if(b==null)return!1
if(!(b instanceof P.ap))return!1
return this.a===b.a},
gp:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.d_()
y=this.a
if(y<0)return"-"+new P.ap(-y).i(0)
x=z.$1(C.b.aH(C.b.X(y,6e7),60))
w=z.$1(C.b.aH(C.b.X(y,1e6),60))
v=new P.cZ().$1(C.b.aH(y,1e6))
return""+C.b.X(y,36e8)+":"+H.a(x)+":"+H.a(w)+"."+H.a(v)}},
cZ:{"^":"e:4;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
d_:{"^":"e:4;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
q:{"^":"b;",
gI:function(){return H.r(this.$thrownJsError)}},
bQ:{"^":"q;",
i:function(a){return"Throw of null."}},
O:{"^":"q;a,b,c,d",
gap:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gao:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+H.a(z)+")":""
z=this.d
x=z==null?"":": "+H.a(z)
w=this.gap()+y+x
if(!this.a)return w
v=this.gao()
u=P.by(this.b)
return w+v+": "+H.a(u)},
l:{
bp:function(a){return new P.O(!1,null,null,a)},
aO:function(a,b,c){return new P.O(!0,a,b,c)}}},
bV:{"^":"O;e,f,a,b,c,d",
gap:function(){return"RangeError"},
gao:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.a(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.a(z)
else{if(typeof x!=="number")return x.bA()
if(typeof z!=="number")return H.a_(z)
if(x>z)y=": Not in range "+z+".."+x+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+z}}return y},
l:{
ax:function(a,b,c){return new P.bV(null,null,!0,a,b,"Value not in range")},
aw:function(a,b,c,d,e){return new P.bV(b,c,!0,a,d,"Invalid value")},
bW:function(a,b,c,d,e,f){if(0>a||a>c)throw H.d(P.aw(a,0,c,"start",f))
if(a>b||b>c)throw H.d(P.aw(b,a,c,"end",f))
return b}}},
d5:{"^":"O;e,j:f>,a,b,c,d",
gap:function(){return"RangeError"},
gao:function(){if(J.cI(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.a(z)},
l:{
aS:function(a,b,c,d,e){var z=e!=null?e:J.a9(b)
return new P.d5(b,z,!0,a,c,"Index out of range")}}},
B:{"^":"q;a",
i:function(a){return"Unsupported operation: "+this.a}},
cd:{"^":"q;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.a(z):"UnimplementedError"}},
b3:{"^":"q;a",
i:function(a){return"Bad state: "+this.a}},
w:{"^":"q;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.a(P.by(z))+"."}},
bZ:{"^":"b;",
i:function(a){return"Stack Overflow"},
gI:function(){return},
$isq:1},
cX:{"^":"q;a",
i:function(a){return"Reading static variable '"+this.a+"' during its initialization"}},
ei:{"^":"b;a",
i:function(a){var z=this.a
if(z==null)return"Exception"
return"Exception: "+H.a(z)}},
d3:{"^":"b;a,b,c",
i:function(a){var z,y
z=""!==this.a?"FormatException: "+this.a:"FormatException"
y=this.b
if(y.length>78)y=C.d.aQ(y,0,75)+"..."
return z+"\n"+y}},
d1:{"^":"b;a,b",
i:function(a){return"Expando:"+H.a(this.a)},
h:function(a,b){var z,y
z=this.b
if(typeof z!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.p(P.aO(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return z.get(b)}y=H.b2(b,"expando$values")
return y==null?null:H.b2(y,z)},
t:function(a,b,c){var z,y
z=this.b
if(typeof z!=="string")z.set(b,c)
else{y=H.b2(b,"expando$values")
if(y==null){y=new P.b()
H.bU(b,"expando$values",y)}H.bU(y,z,c)}}},
n:{"^":"an;"},
"+int":0,
x:{"^":"b;",
N:function(a,b){return H.au(this,b,H.y(this,"x",0),null)},
v:function(a,b){var z
for(z=this.gq(this);z.k();)b.$1(z.gn())},
aL:function(a,b){return P.aY(this,!0,H.y(this,"x",0))},
aK:function(a){return this.aL(a,!0)},
gj:function(a){var z,y
z=this.gq(this)
for(y=0;z.k();)++y
return y},
F:function(a,b){var z,y,x
if(b<0)H.p(P.aw(b,0,null,"index",null))
for(z=this.gq(this),y=0;z.k();){x=z.gn()
if(b===y)return x;++y}throw H.d(P.aS(b,this,"index",null,y))},
i:function(a){return P.dh(this,"(",")")}},
dj:{"^":"b;"},
h:{"^":"b;",$ash:null,$ism:1},
"+List":0,
hh:{"^":"b;",
i:function(a){return"null"}},
"+Null":0,
an:{"^":"b;"},
"+num":0,
b:{"^":";",
m:function(a,b){return this===b},
gp:function(a){return H.I(this)},
i:function(a){return H.av(this)},
toString:function(){return this.i(this)}},
a2:{"^":"b;"},
F:{"^":"b;"},
"+String":0,
az:{"^":"b;P:a<",
gj:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
l:{
c_:function(a,b,c){var z=J.aN(b)
if(!z.k())return a
if(c.length===0){do a+=H.a(z.gn())
while(z.k())}else{a+=H.a(z.gn())
for(;z.k();)a=a+c+H.a(z.gn())}return a}}}}],["","",,W,{"^":"",
K:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10>>>0)
return a^a>>>6},
cl:function(a){a=536870911&a+((67108863&a)<<3>>>0)
a^=a>>>11
return 536870911&a+((16383&a)<<15>>>0)},
bd:function(a){var z=$.k
if(z===C.a)return a
return z.cj(a,!0)},
E:{"^":"bx;",$isE:1,$isb:1,"%":"HTMLAppletElement|HTMLBRElement|HTMLBaseElement|HTMLButtonElement|HTMLCanvasElement|HTMLContentElement|HTMLDListElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLKeygenElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMenuItemElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|PluginPlaceholderElement;HTMLElement"},
fw:{"^":"E;",
i:function(a){return String(a)},
$isc:1,
"%":"HTMLAnchorElement"},
fy:{"^":"E;",
i:function(a){return String(a)},
$isc:1,
"%":"HTMLAreaElement"},
fz:{"^":"E;",$isc:1,"%":"HTMLBodyElement"},
fB:{"^":"S;j:length=",$isc:1,"%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fC:{"^":"d6;j:length=","%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
d6:{"^":"c+cW;"},
cW:{"^":"b;"},
fE:{"^":"S;",$isc:1,"%":"DocumentFragment|ShadowRoot"},
fF:{"^":"c;",
i:function(a){return String(a)},
"%":"DOMException"},
cY:{"^":"c;M:height=,aD:left=,aM:top=,O:width=",
i:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(this.gO(a))+" x "+H.a(this.gM(a))},
m:function(a,b){var z,y,x
if(b==null)return!1
z=J.l(b)
if(!z.$isag)return!1
y=a.left
x=z.gaD(b)
if(y==null?x==null:y===x){y=a.top
x=z.gaM(b)
if(y==null?x==null:y===x){y=this.gO(a)
x=z.gO(b)
if(y==null?x==null:y===x){y=this.gM(a)
z=z.gM(b)
z=y==null?z==null:y===z}else z=!1}else z=!1}else z=!1
return z},
gp:function(a){var z,y,x,w
z=J.v(a.left)
y=J.v(a.top)
x=J.v(this.gO(a))
w=J.v(this.gM(a))
return W.cl(W.K(W.K(W.K(W.K(0,z),y),x),w))},
$isag:1,
$asag:I.aF,
"%":";DOMRectReadOnly"},
fG:{"^":"c;j:length=","%":"DOMSettableTokenList|DOMTokenList"},
bx:{"^":"S;",
gbi:function(a){return new W.ef(a)},
i:function(a){return a.localName},
$isc:1,
"%":";Element"},
fH:{"^":"bz;a0:error=","%":"ErrorEvent"},
bz:{"^":"c;","%":"AnimationPlayerEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|AutocompleteErrorEvent|BeforeUnloadEvent|CloseEvent|CompositionEvent|CustomEvent|DeviceLightEvent|DeviceMotionEvent|DeviceOrientationEvent|DragEvent|ExtendableEvent|FetchEvent|FocusEvent|FontFaceSetLoadEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|KeyboardEvent|MIDIConnectionEvent|MIDIMessageEvent|MSPointerEvent|MediaKeyEvent|MediaKeyMessageEvent|MediaKeyNeededEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MouseEvent|MutationEvent|OfflineAudioCompletionEvent|OverflowEvent|PageTransitionEvent|PointerEvent|PopStateEvent|ProgressEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCIceCandidateEvent|RTCPeerConnectionIceEvent|RelatedEvent|ResourceProgressEvent|SVGZoomEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|TextEvent|TouchEvent|TrackEvent|TransitionEvent|UIEvent|WebGLContextEvent|WebKitAnimationEvent|WebKitTransitionEvent|WheelEvent|XMLHttpRequestProgressEvent;ClipboardEvent|Event|InputEvent"},
bA:{"^":"c;",
bV:function(a,b,c,d){return a.addEventListener(b,H.a7(c,1),!1)},
cc:function(a,b,c,d){return a.removeEventListener(b,H.a7(c,1),!1)},
"%":"MediaStream;EventTarget"},
fZ:{"^":"E;j:length=","%":"HTMLFormElement"},
h1:{"^":"E;",$isc:1,"%":"HTMLInputElement"},
h6:{"^":"E;a0:error=","%":"HTMLAudioElement|HTMLMediaElement|HTMLVideoElement"},
hg:{"^":"c;",$isc:1,"%":"Navigator"},
S:{"^":"bA;",
i:function(a){var z=a.nodeValue
return z==null?this.bL(a):z},
$isb:1,
"%":"Attr|Document|HTMLDocument|XMLDocument;Node"},
hk:{"^":"E;j:length=","%":"HTMLSelectElement"},
hl:{"^":"bz;a0:error=","%":"SpeechRecognitionError"},
e2:{"^":"bA;",
gae:function(a){return"scrollY" in a?C.e.bs(a.scrollY):C.e.bs(a.document.documentElement.scrollTop)},
$isc:1,
"%":"DOMWindow|Window"},
hv:{"^":"c;M:height=,aD:left=,aM:top=,O:width=",
i:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(a.width)+" x "+H.a(a.height)},
m:function(a,b){var z,y,x
if(b==null)return!1
z=J.l(b)
if(!z.$isag)return!1
y=a.left
x=z.gaD(b)
if(y==null?x==null:y===x){y=a.top
x=z.gaM(b)
if(y==null?x==null:y===x){y=a.width
x=z.gO(b)
if(y==null?x==null:y===x){y=a.height
z=z.gM(b)
z=y==null?z==null:y===z}else z=!1}else z=!1}else z=!1
return z},
gp:function(a){var z,y,x,w
z=J.v(a.left)
y=J.v(a.top)
x=J.v(a.width)
w=J.v(a.height)
return W.cl(W.K(W.K(W.K(W.K(0,z),y),x),w))},
$isag:1,
$asag:I.aF,
"%":"ClientRect"},
hw:{"^":"S;",$isc:1,"%":"DocumentType"},
hx:{"^":"cY;",
gM:function(a){return a.height},
gO:function(a){return a.width},
"%":"DOMRect"},
hA:{"^":"E;",$isc:1,"%":"HTMLFrameSetElement"},
hB:{"^":"d8;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.aS(b,a,null,null,null))
return a[b]},
t:function(a,b,c){throw H.d(new P.B("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ish:1,
$ash:function(){return[W.S]},
$ism:1,
$isat:1,
$isas:1,
"%":"MozNamedAttrMap|NamedNodeMap"},
d7:{"^":"c+aW;",$ish:1,
$ash:function(){return[W.S]},
$ism:1},
d8:{"^":"d7+d4;",$ish:1,
$ash:function(){return[W.S]},
$ism:1},
ef:{"^":"bt;a",
C:function(){var z,y,x,w,v
z=P.G(null,null,null,P.F)
for(y=this.a.className.split(" "),x=y.length,w=0;w<y.length;y.length===x||(0,H.bm)(y),++w){v=J.bo(y[w])
if(v.length!==0)z.u(0,v)}return z},
aO:function(a){this.a.className=a.aB(0," ")},
gj:function(a){return this.a.classList.length},
Z:function(a,b){return typeof b==="string"&&this.a.classList.contains(b)},
u:function(a,b){var z,y
z=this.a.classList
y=z.contains(b)
z.add(b)
return!y},
D:function(a,b){var z,y,x
z=this.a.classList
y=z.contains(b)
z.remove(b)
x=y
return x}},
ch:{"^":"J;a,b,c",
S:function(a,b,c,d){var z=new W.b6(0,this.a,this.b,W.bd(a),!1)
z.$builtinTypeInfo=this.$builtinTypeInfo
z.aa()
return z},
bo:function(a,b,c){return this.S(a,null,b,c)}},
b6:{"^":"dM;a,b,c,d,e",
aA:function(){if(this.b==null)return
this.be()
this.b=null
this.d=null
return},
aF:function(a,b){if(this.b==null)return;++this.a
this.be()},
bp:function(a){return this.aF(a,null)},
br:function(){if(this.b==null||this.a<=0)return;--this.a
this.aa()},
aa:function(){var z,y,x
z=this.d
y=z!=null
if(y&&this.a<=0){x=this.b
x.toString
if(y)J.cK(x,this.c,z,!1)}},
be:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.cL(x,this.c,z,!1)}}},
d4:{"^":"b;",
gq:function(a){return new W.d2(a,a.length,-1,null)},
$ish:1,
$ash:null,
$ism:1},
d2:{"^":"b;a,b,c,d",
k:function(){var z,y
z=this.c+1
y=this.b
if(z<y){y=this.a
if(z<0||z>=y.length)return H.f(y,z)
this.d=y[z]
this.c=z
return!0}this.d=null
this.c=y
return!1},
gn:function(){return this.d}}}],["","",,P,{"^":""}],["","",,P,{"^":"",fu:{"^":"ab;",$isc:1,"%":"SVGAElement"},fv:{"^":"dV;",$isc:1,"%":"SVGAltGlyphElement"},fx:{"^":"j;",$isc:1,"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGSetElement"},fI:{"^":"j;",$isc:1,"%":"SVGFEBlendElement"},fJ:{"^":"j;",$isc:1,"%":"SVGFEColorMatrixElement"},fK:{"^":"j;",$isc:1,"%":"SVGFEComponentTransferElement"},fL:{"^":"j;",$isc:1,"%":"SVGFECompositeElement"},fM:{"^":"j;",$isc:1,"%":"SVGFEConvolveMatrixElement"},fN:{"^":"j;",$isc:1,"%":"SVGFEDiffuseLightingElement"},fO:{"^":"j;",$isc:1,"%":"SVGFEDisplacementMapElement"},fP:{"^":"j;",$isc:1,"%":"SVGFEFloodElement"},fQ:{"^":"j;",$isc:1,"%":"SVGFEGaussianBlurElement"},fR:{"^":"j;",$isc:1,"%":"SVGFEImageElement"},fS:{"^":"j;",$isc:1,"%":"SVGFEMergeElement"},fT:{"^":"j;",$isc:1,"%":"SVGFEMorphologyElement"},fU:{"^":"j;",$isc:1,"%":"SVGFEOffsetElement"},fV:{"^":"j;",$isc:1,"%":"SVGFESpecularLightingElement"},fW:{"^":"j;",$isc:1,"%":"SVGFETileElement"},fX:{"^":"j;",$isc:1,"%":"SVGFETurbulenceElement"},fY:{"^":"j;",$isc:1,"%":"SVGFilterElement"},ab:{"^":"j;",$isc:1,"%":"SVGCircleElement|SVGClipPathElement|SVGDefsElement|SVGEllipseElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement|SVGRectElement|SVGSwitchElement;SVGGraphicsElement"},h0:{"^":"ab;",$isc:1,"%":"SVGImageElement"},h4:{"^":"j;",$isc:1,"%":"SVGMarkerElement"},h5:{"^":"j;",$isc:1,"%":"SVGMaskElement"},hi:{"^":"j;",$isc:1,"%":"SVGPatternElement"},hj:{"^":"j;",$isc:1,"%":"SVGScriptElement"},e8:{"^":"bt;a",
C:function(){var z,y,x,w,v,u
z=this.a.getAttribute("class")
y=P.G(null,null,null,P.F)
if(z==null)return y
for(x=z.split(" "),w=x.length,v=0;v<x.length;x.length===w||(0,H.bm)(x),++v){u=J.bo(x[v])
if(u.length!==0)y.u(0,u)}return y},
aO:function(a){this.a.setAttribute("class",a.aB(0," "))}},j:{"^":"bx;",
gbi:function(a){return new P.e8(a)},
$isc:1,
"%":"SVGAltGlyphDefElement|SVGAltGlyphItemElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGFontElement|SVGFontFaceElement|SVGFontFaceFormatElement|SVGFontFaceNameElement|SVGFontFaceSrcElement|SVGFontFaceUriElement|SVGGlyphElement|SVGHKernElement|SVGMetadataElement|SVGMissingGlyphElement|SVGStopElement|SVGStyleElement|SVGTitleElement|SVGVKernElement;SVGElement"},hm:{"^":"ab;",$isc:1,"%":"SVGSVGElement"},hn:{"^":"j;",$isc:1,"%":"SVGSymbolElement"},c1:{"^":"ab;","%":";SVGTextContentElement"},ho:{"^":"c1;",$isc:1,"%":"SVGTextPathElement"},dV:{"^":"c1;","%":"SVGTSpanElement|SVGTextElement;SVGTextPositioningElement"},hp:{"^":"ab;",$isc:1,"%":"SVGUseElement"},hq:{"^":"j;",$isc:1,"%":"SVGViewElement"},hz:{"^":"j;",$isc:1,"%":"SVGGradientElement|SVGLinearGradientElement|SVGRadialGradientElement"},hC:{"^":"j;",$isc:1,"%":"SVGCursorElement"},hD:{"^":"j;",$isc:1,"%":"SVGFEDropShadowElement"},hE:{"^":"j;",$isc:1,"%":"SVGGlyphRefElement"},hF:{"^":"j;",$isc:1,"%":"SVGMPathElement"}}],["","",,P,{"^":""}],["","",,P,{"^":""}],["","",,P,{"^":""}],["","",,P,{"^":"",fA:{"^":"b;"}}],["","",,H,{"^":"",bK:{"^":"c;",$isbK:1,"%":"ArrayBuffer"},b1:{"^":"c;",$isb1:1,"%":"DataView;ArrayBufferView;b_|bL|bN|b0|bM|bO|H"},b_:{"^":"b1;",
gj:function(a){return a.length},
$isat:1,
$isas:1},b0:{"^":"bN;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.p(H.o(a,b))
return a[b]},
t:function(a,b,c){if(b>>>0!==b||b>=a.length)H.p(H.o(a,b))
a[b]=c}},bL:{"^":"b_+aW;",$ish:1,
$ash:function(){return[P.aM]},
$ism:1},bN:{"^":"bL+bC;"},H:{"^":"bO;",
t:function(a,b,c){if(b>>>0!==b||b>=a.length)H.p(H.o(a,b))
a[b]=c},
$ish:1,
$ash:function(){return[P.n]},
$ism:1},bM:{"^":"b_+aW;",$ish:1,
$ash:function(){return[P.n]},
$ism:1},bO:{"^":"bM+bC;"},h7:{"^":"b0;",$ish:1,
$ash:function(){return[P.aM]},
$ism:1,
"%":"Float32Array"},h8:{"^":"b0;",$ish:1,
$ash:function(){return[P.aM]},
$ism:1,
"%":"Float64Array"},h9:{"^":"H;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.p(H.o(a,b))
return a[b]},
$ish:1,
$ash:function(){return[P.n]},
$ism:1,
"%":"Int16Array"},ha:{"^":"H;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.p(H.o(a,b))
return a[b]},
$ish:1,
$ash:function(){return[P.n]},
$ism:1,
"%":"Int32Array"},hb:{"^":"H;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.p(H.o(a,b))
return a[b]},
$ish:1,
$ash:function(){return[P.n]},
$ism:1,
"%":"Int8Array"},hc:{"^":"H;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.p(H.o(a,b))
return a[b]},
$ish:1,
$ash:function(){return[P.n]},
$ism:1,
"%":"Uint16Array"},hd:{"^":"H;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.p(H.o(a,b))
return a[b]},
$ish:1,
$ash:function(){return[P.n]},
$ism:1,
"%":"Uint32Array"},he:{"^":"H;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.p(H.o(a,b))
return a[b]},
$ish:1,
$ash:function(){return[P.n]},
$ism:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},hf:{"^":"H;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.p(H.o(a,b))
return a[b]},
$ish:1,
$ash:function(){return[P.n]},
$ism:1,
"%":";Uint8Array"}}],["","",,H,{"^":"",
fp:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,P,{"^":"",bt:{"^":"b;",
ay:function(a){if($.$get$bu().b.test(H.cw(a)))return a
throw H.d(P.aO(a,"value","Not a valid class token"))},
i:function(a){return this.C().aB(0," ")},
gq:function(a){var z,y
z=this.C()
y=new P.aj(z,z.r,null,null)
y.c=z.e
return y},
v:function(a,b){this.C().v(0,b)},
N:function(a,b){var z=this.C()
return H.i(new H.aR(z,b),[H.L(z,0),null])},
gj:function(a){return this.C().a},
Z:function(a,b){if(typeof b!=="string")return!1
this.ay(b)
return this.C().Z(0,b)},
aE:function(a){return this.Z(0,a)?a:null},
u:function(a,b){this.ay(b)
return this.cE(new P.cV(b))},
D:function(a,b){var z,y
this.ay(b)
z=this.C()
y=z.D(0,b)
this.aO(z)
return y},
cE:function(a){var z,y
z=this.C()
y=a.$1(z)
this.aO(z)
return y},
$ism:1},cV:{"^":"e:2;a",
$1:function(a){return a.u(0,this.a)}}}],["","",,F,{"^":"",
hJ:[function(){var z,y,x,w
z={}
y=document.querySelector("header")
z.a=null
z.b=null
x=document.querySelector("#headerImg")
z.b=0
z=new F.fm(z,y,x)
w=H.i(new W.ch(window,"scroll",!1),[null])
H.i(new W.b6(0,w.a,w.b,W.bd(new F.fk(z)),!1),[H.L(w,0)]).aa()
w=H.i(new W.ch(window,"resize",!1),[null])
H.i(new W.b6(0,w.a,w.b,W.bd(new F.fl(z)),!1),[H.L(w,0)]).aa()},"$0","cB",0,0,1],
fm:{"^":"e:13;a,b,c",
$1:function(a){var z,y,x,w
z=C.f.gae(window)
y=this.a
y.a=z
x=y.b
if(typeof x!=="number")return H.a_(x)
if(z>x&&C.f.gae(window)>50){x=this.b.style
x.height="150px"
y.b=y.a
J.bn(this.c).u(0,"small")}else{x=y.b
w=y.a
if(typeof w!=="number")return w.U()
if(typeof x!=="number")return x.bA()
if(x>w+25&&C.f.gae(window)<300){x=this.b.style
x.height="300px"
y.b=y.a
J.bn(this.c).D(0,"small")}}},
$0:function(){return this.$1(null)}},
fk:{"^":"e:2;a",
$1:function(a){return this.a.$0()}},
fl:{"^":"e:2;a",
$1:function(a){return this.a.$0()}}},1]]
setupProgram(dart,0)
J.l=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bG.prototype
return J.dl.prototype}if(typeof a=="string")return J.ae.prototype
if(a==null)return J.dm.prototype
if(typeof a=="boolean")return J.dk.prototype
if(a.constructor==Array)return J.ac.prototype
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.b)return a
return J.aI(a)}
J.C=function(a){if(typeof a=="string")return J.ae.prototype
if(a==null)return a
if(a.constructor==Array)return J.ac.prototype
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.b)return a
return J.aI(a)}
J.aG=function(a){if(a==null)return a
if(a.constructor==Array)return J.ac.prototype
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.b)return a
return J.aI(a)}
J.f2=function(a){if(typeof a=="number")return J.ad.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ah.prototype
return a}
J.f3=function(a){if(typeof a=="number")return J.ad.prototype
if(typeof a=="string")return J.ae.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ah.prototype
return a}
J.f4=function(a){if(typeof a=="string")return J.ae.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ah.prototype
return a}
J.aH=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.b)return a
return J.aI(a)}
J.a8=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.f3(a).U(a,b)}
J.M=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.l(a).m(a,b)}
J.cI=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.f2(a).ac(a,b)}
J.cJ=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fi(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.C(a).h(a,b)}
J.cK=function(a,b,c,d){return J.aH(a).bV(a,b,c,d)}
J.cL=function(a,b,c,d){return J.aH(a).cc(a,b,c,d)}
J.cM=function(a,b){return J.aG(a).F(a,b)}
J.cN=function(a,b){return J.aG(a).v(a,b)}
J.bn=function(a){return J.aH(a).gbi(a)}
J.D=function(a){return J.aH(a).ga0(a)}
J.v=function(a){return J.l(a).gp(a)}
J.aN=function(a){return J.aG(a).gq(a)}
J.a9=function(a){return J.C(a).gj(a)}
J.cO=function(a,b){return J.aG(a).N(a,b)}
J.N=function(a){return J.l(a).i(a)}
J.bo=function(a){return J.f4(a).cM(a)}
var $=I.p
C.m=J.c.prototype
C.c=J.ac.prototype
C.b=J.bG.prototype
C.e=J.ad.prototype
C.d=J.ae.prototype
C.u=J.af.prototype
C.v=J.dD.prototype
C.w=J.ah.prototype
C.f=W.e2.prototype
C.k=new H.bw()
C.l=new P.ed()
C.a=new P.eG()
C.h=new P.ap(0)
C.n=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.o=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.i=function getTagFallback(o) {
  var constructor = o.constructor;
  if (typeof constructor == "function") {
    var name = constructor.name;
    if (typeof name == "string" &&
        name.length > 2 &&
        name !== "Object" &&
        name !== "Function.prototype") {
      return name;
    }
  }
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.j=function(hooks) { return hooks; }

C.p=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.r=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.q=function() {
  function typeNameInChrome(o) {
    var constructor = o.constructor;
    if (constructor) {
      var name = constructor.name;
      if (name) return name;
    }
    var s = Object.prototype.toString.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = Object.prototype.toString.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: typeNameInChrome,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.t=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
$.bR="$cachedFunction"
$.bS="$cachedInvocation"
$.z=0
$.a0=null
$.bq=null
$.bh=null
$.ct=null
$.cD=null
$.aE=null
$.aJ=null
$.bi=null
$.W=null
$.a4=null
$.a5=null
$.bb=!1
$.k=C.a
$.bB=0
$=null
init.isHunkLoaded=function(a){return!!$dart_deferred_initializers$[a]}
init.deferredInitialized=new Object(null)
init.isHunkInitialized=function(a){return init.deferredInitialized[a]}
init.initializeLoadedHunk=function(a){$dart_deferred_initializers$[a]($globals$,$)
init.deferredInitialized[a]=true}
init.deferredLibraryUris={}
init.deferredLibraryHashes={};(function(a){for(var z=0;z<a.length;){var y=a[z++]
var x=a[z++]
var w=a[z++]
I.$lazy(y,x,w)}})(["bv","$get$bv",function(){return init.getIsolateTag("_$dart_dartClosure")},"bD","$get$bD",function(){return H.df()},"bE","$get$bE",function(){if(typeof WeakMap=="function")var z=new WeakMap()
else{z=$.bB
$.bB=z+1
z="expando$key$"+z}return new P.d1(null,z)},"c2","$get$c2",function(){return H.A(H.aA({
toString:function(){return"$receiver$"}}))},"c3","$get$c3",function(){return H.A(H.aA({$method$:null,
toString:function(){return"$receiver$"}}))},"c4","$get$c4",function(){return H.A(H.aA(null))},"c5","$get$c5",function(){return H.A(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"c9","$get$c9",function(){return H.A(H.aA(void 0))},"ca","$get$ca",function(){return H.A(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"c7","$get$c7",function(){return H.A(H.c8(null))},"c6","$get$c6",function(){return H.A(function(){try{null.$method$}catch(z){return z.message}}())},"cc","$get$cc",function(){return H.A(H.c8(void 0))},"cb","$get$cb",function(){return H.A(function(){try{(void 0).$method$}catch(z){return z.message}}())},"b5","$get$b5",function(){return P.e3()},"a6","$get$a6",function(){return[]},"bu","$get$bu",function(){return new H.dr("^\\S+$",H.ds("^\\S+$",!1,!0,!1),null,null)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[null]
init.types=[{func:1},{func:1,v:true},{func:1,args:[,]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.F,args:[P.n]},{func:1,args:[,P.F]},{func:1,args:[P.F]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[,],opt:[P.a2]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.a2]},{func:1,v:true,args:[,P.a2]},{func:1,args:[,,]},{func:1,opt:[,]}]
function convertToFastObject(a){function MyClass(){}MyClass.prototype=a
new MyClass()
return a}function convertToSlowObject(a){a.__MAGIC_SLOW_PROPERTY=1
delete a.__MAGIC_SLOW_PROPERTY
return a}A=convertToFastObject(A)
B=convertToFastObject(B)
C=convertToFastObject(C)
D=convertToFastObject(D)
E=convertToFastObject(E)
F=convertToFastObject(F)
G=convertToFastObject(G)
H=convertToFastObject(H)
J=convertToFastObject(J)
K=convertToFastObject(K)
L=convertToFastObject(L)
M=convertToFastObject(M)
N=convertToFastObject(N)
O=convertToFastObject(O)
P=convertToFastObject(P)
Q=convertToFastObject(Q)
R=convertToFastObject(R)
S=convertToFastObject(S)
T=convertToFastObject(T)
U=convertToFastObject(U)
V=convertToFastObject(V)
W=convertToFastObject(W)
X=convertToFastObject(X)
Y=convertToFastObject(Y)
Z=convertToFastObject(Z)
function init(){I.p=Object.create(null)
init.allClasses=map()
init.getTypeFromName=function(a){return init.allClasses[a]}
init.interceptorsByTag=map()
init.leafTags=map()
init.finishedClasses=map()
I.$lazy=function(a,b,c,d,e){if(!init.lazies)init.lazies=Object.create(null)
init.lazies[a]=b
e=e||I.p
var z={}
var y={}
e[a]=z
e[b]=function(){var x=this[a]
try{if(x===z){this[a]=y
try{x=this[a]=c()}finally{if(x===z)this[a]=null}}else if(x===y)H.fs(d||a)
return x}finally{this[b]=function(){return this[a]}}}}
I.$finishIsolateConstructor=function(a){var z=a.p
function Isolate(){var y=Object.keys(z)
for(var x=0;x<y.length;x++){var w=y[x]
this[w]=z[w]}var v=init.lazies
var u=v?Object.keys(v):[]
for(var x=0;x<u.length;x++)this[v[u[x]]]=null
function ForceEfficientMap(){}ForceEfficientMap.prototype=this
new ForceEfficientMap()
for(var x=0;x<u.length;x++){var t=v[u[x]]
this[t]=z[t]}}Isolate.prototype=a.prototype
Isolate.prototype.constructor=Isolate
Isolate.p=z
Isolate.aF=a.aF
return Isolate}}!function(){var z=function(a){var t={}
t[a]=1
return Object.keys(convertToFastObject(t))[0]}
init.getIsolateTag=function(a){return z("___dart_"+a+init.isolateTag)}
var y="___dart_isolate_tags_"
var x=Object[y]||(Object[y]=Object.create(null))
var w="_ZxYxX"
for(var v=0;;v++){var u=z(w+"_"+v+"_")
if(!(u in x)){x[u]=1
init.isolateTag=u
break}}init.dispatchPropertyName=init.getIsolateTag("dispatch_record")}();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var z=document.scripts
function onLoad(b){for(var x=0;x<z.length;++x)z[x].removeEventListener("load",onLoad,false)
a(b.target)}for(var y=0;y<z.length;++y)z[y].addEventListener("load",onLoad,false)})(function(a){init.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.cF(F.cB(),b)},[])
else (function(b){H.cF(F.cB(),b)})([])})})()