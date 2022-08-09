// 배너에 사용할 상품용 객체를 정의(거푸집)
class Product{
    constructor(container, src,width,hieght,x,y){
        this.container = container;
        this.img=document.createElement("img");
        this.src=src;//이미지 경로
        this.width=width;
        this.hieght=hieght;
        this.x=x;//현재 left값
        this.y=y;

        this.img.src=this.src;//img DOM에 경로지정
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        //생성된 DOM객체를 원하는 부모요소에 부착
        this.container.appendChild(this.img);
    }

    //물체 이동 메소드,생성된 이후에도 left값을 변경하여 좌표에 적용할 것이므로
    move(){
        this.img.style.left=this.x+"px";
    }

}
