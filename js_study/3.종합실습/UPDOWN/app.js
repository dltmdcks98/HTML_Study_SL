//=========== 전역변수, 함수 영역================

//게임 데이터 객체 
//실제 정답, 사용자가 선택한 정답, 최소값, 최대값
// x이상 y이하 랜덤 정수 생성 공식
// Math.floor(Math.random() * (y-x+1)) + x
const gameDatas = {
    secret: Math.floor(Math.random() * 100) +1,//1~100까지 
    answer: null, 
    min:1 ,
    max:100
};

function makeIcons() {
    
    const $numbers = document.getElementById('numbers');

// 실제로 렌더링 되지는 않지만, 가상으로 존재하는 태그를 생성 
    const $middle = document.createDocumentFragment();

    for(let n =1; n<=100; n++){
        const $div = document.createElement('div');
        $div.classList.add('icon');

        // textContext에 상관없이 값을 받기 위해 dataset을 이용하면 좋다. 
        $div.dataset.number = n;
        
        $div.textContent=n;
        // 활성화된 DOM을 가상 DOM100개를 반복해서 넣는 것은 메모리 측면에서 좋지 않다.
        // $numbers.appendChild($div);
        $middle.appendChild($div);
    }
    $numbers.appendChild($middle);

}
// 아이콘 삭제 함수 
function clearIcons($target, isUp) {
    const $numbers = document.getElementById('numbers');


    let $delTarget = $target;
    while($delTarget !== null){
        let $next = isUp ? $delTarget.previousElementSibling : $delTarget.nextElementSibling;
        $numbers.removeChild($delTarget);
        $delTarget = $next;
    }
}
// up, down 렌더링 처리
function processUpDownCase($target , isUp) {

    const ANI_CLASS_NAME = 'selected';

    const [$up, $down] = [...document.querySelector('aside.result').children];
    if(isUp){ // UP인 경우  
        $down.classList.remove(ANI_CLASS_NAME);
        $up.classList.add(ANI_CLASS_NAME);
        gameDatas.min = gameDatas.answer + 1;
        document.getElementById('begin').textContent =gameDatas.min;
    }else{// Down 인 경우 
        $up.classList.remove(ANI_CLASS_NAME);
        $down.classList.add(ANI_CLASS_NAME);
        gameDatas.max = gameDatas.answer - 1;
        document.getElementById('end').textContent =gameDatas.max;
    }

    // 아이콘 삭제 처리 
    clearIcons($target,isUp);
}
// 정답을 검증하는 함수 정의 
function checkAnswer($target) {

    // gameDatas.secret 을 secret 로 사용하기 위해 (ES6 이상)  
    const {secret,answer} = gameDatas;


    if(gameDatas.secret===gameDatas.answer){ //정답인 경우
        
    }else if (secret >answer) { //up인경우
        processUpDownCase($target,true);
    }else { //down인 경우
        processUpDownCase($target,false);
    }
}

// ===========main 실행 코드
(function () {
    
    makeIcons();

    const $numbers = document.getElementById('numbers');
    $numbers.onclick= e =>{
    
        if(!e.target.matches('#numbers .icon'))return;
        console.log('아이콘 클릭');

    //    사용자가 선택한 숫자를 객체에 answer 프로퍼티에 저장
    //    String 앞에 +를 붙이면 숫자로 바뀜
       gameDatas.answer= +e.target.textContent;

       console.log(gameDatas);

    //   정답 검증
        checkAnswer(e.target);
    };
}) ();