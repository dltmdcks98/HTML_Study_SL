/*
현실의 사진 및 부가정보를 가진 단위를 객체화 시켜보자
객체화 시키면, 이비지 경로뿐만 아니라 ,훨씬 더 많은 정보를 담아낼 수 있다. 
참고)2015년도 자바스크립트(ECMAScript)에서는 클래스를 지원*/
class Photo{
	constructor(src,title,addr,content){
		//멤버변수 영역
		this.img=document.createElement("img"); //img dom
		this.src=src;//경로
		this.title=title;//제목
		this.addr=addr;//주소
		this.content=content;//설명

		this.img=this.src;//경로지정
		document.body.appenChild(this.img);
	}

}