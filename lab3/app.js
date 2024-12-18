
document.getElementById("message1").innerHTML = "hello world"


    let a = 5;
    var b= "hello"
    const x =10;

    console.log(b);
    add(5,10);

    //ฟังก์ชัน
    function add(aa,bb){
        let cc = aa+bb;
        console.log(cc);
        return cc;

    }

    let result = add(5,10);

    let add2 = function(aa,bb){
        let cc= aa+bb ;
        console.log(cc);
    }

    let add3 = (aa,bb) =>{ 
        let cc= aa+bb ;
        console.log(cc) ;
    
    }
    //array
    let arr = [1,2,3,4,5];
    const car = [];
    car[0]= "toyota";
    car[1]= "honda";
    const fruit = new Array("apple","banana","cherry");
    
    console.log(car[1]);
    let colors = [[1,2,3],"green","blue"];
    console.log(colors[0][2]);

    //array method
    fruit.push("Orange");
    console.log(fruit);

    arr.map((item)=>{
        console.log(item);
    });
        //object
    let person = {
        fname : "dan",
        lname : "burn",
        age: 99,
        child: ["สมพง","สมศรี"],
        fullname : function(){
            return this.fname+ " "+this.lname ;

        }
    };
    person.address = {
        street : "123",
        city: "buriram",
    };
    console.log(person.fullname());

    //spread operator
    const arrCombine = [...car,...fruit];
    const arrCombine2 = [car,fruit];
    console.log(arrCombine);
    console.log(arrCombine2);


    if(x==10){
        let c = "test";
        console.log("a is equal to b");
    }
    //short term
    let e= x==10 ? "yes" : "no" ;
