const ver = navigator.userAgent;
console.log(ver);

const isIE = /trident/i.test(ver);
console.log(isIE);

if(isIE){
  alert("해당 앱은 인터넷 익스플로러에서 지원하지 않습니다.")
}